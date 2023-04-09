import React, { useEffect, useState } from "react";
import {
  InputComponents,
  InputDescription,
  InputWithData,
} from "../../Components/Inputs/input";
import "./CreatePage.css";
import DashboardNavabar from "../../Components/DashboardNavabar/dashboardnavabr";
import { useNavigate } from "react-router-dom";
import CreateProfileMobile from "../../Components/CreateProfileMobile/createProfileMobile";
import { useDispatch, useSelector } from "react-redux";
import {
  createPageAction
} from "../../redux/action/page.action";
import ErrorMessage from "../../Components/ErrorMessage/errorMessage";
import InputErrorMessage from "../../Components/InputErrorMessage/inputErrorMessage";

const CreatePage = () => {
  const [url, setUrl] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [imageUri, setImageUri] = useState("");
  const dispatch = useDispatch();
  const check = useSelector((state) => state.pages);
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showValidation, setValidation] = useState(false);

  useEffect(() => {
    if (submit && check.action && !check.error && check.errorMessage === "") {
      setSubmit(false);
      navigate(`/select-page/${check.pages[0].page_url}`, {
        state: {
          created: true,
          newPage: check.pages[0],
          new: true,
        },
      });
    }
    if (submit && !check.action && check.error && check.errorMessage !== "") {
      setSubmit(false);
      setShowErrorMessage(true);
      console.log("Error while createing page", check.errorMessage);
    }
  }, [check, submit]);

  const handleProfileImage = (e) => {
    e.preventDefault();
    setImageUri(URL.createObjectURL(e.target.files[0]));
    setProfilePhoto(e.target.files[0]);
    return (e.target.value = "");
  };

  const createPage = (e) => {
    e.preventDefault();

    if (url === "" || profileName === "") {
      return setValidation(true);
    }

    const form = new FormData();


    form.append("page_profile_photo", profilePhoto);
    form.append("page_url", url);
    form.append("page_profile_name", profileName);
    form.append("page_profile_description", profileDescription);
    console.log("from",...form)
    setSubmit(true);
    dispatch(createPageAction(form));
  };

  const removeImage = (e) => {
    e.preventDefault();
    setImageUri("");
    return setProfilePhoto("");
  };

  return (
    <>
      <div>
        <DashboardNavabar />
      </div>

      <div className="main-container-create-profile">
        <div>
          <CreateProfileMobile
            profileName={profileName}
            profileDescription={profileDescription}
            imageUri={imageUri}
          />
        </div>
        <div style={{ overflowY: "scroll", padding: "1em 1em 5em 1em" }}>
          {/* Calling ErrorMessage Component here */}
          {showErrorMessage ? (
            <ErrorMessage message={check.errorMessage} />
          ) : null}
          <div className="sub-container-page">
            <div className="sub-container-for-creat-page-input-in-it">
              <br />
              <p className="page-create-first-heder-section-in-style">
                Page info
              </p>
              <br />

              <div className="sub-div">

                <InputComponents
                  placeholder={"Profile page url"}
                  type="text"
                  label={"Profile page URL"}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  error={showValidation && url === ""}
                />
                {showValidation && url === "" ? (
                  <InputErrorMessage
                    errorMessage={"Profile page URL is required"}
                  />
                ) : null}
              </div>
              <br />
              <label className="label-for-user-profile-label-only">
                Profile photo
              </label>
              <input
                type="file"
                id="file"
                name="img"
                accept="image/*"
                onChange={handleProfileImage}
                style={{ display: "none" }}
              />

              {profilePhoto !== "" ? (
                <div className="selected-image-and-remove-button">
                  <img
                    src={imageUri}
                    alt=""
                    srcset=""
                    style={{ height: "40px", width: "45px" }}
                  />

                  <button
                    type="submit"
                    className="open-file-btn-in-create-page"
                    onClick={removeImage}
                  >
                    {" "}
                    <b> Remove Photo</b>
                  </button>
                </div>
              ) : (
                <label for="file">
                  <div className="open-file-btn-in-create-page">
                    Upload image
                  </div>
                </label>
              )}

              <br />
              <br />
              <div className="sub-div-profile-name">
                <InputComponents
                  type="text"
                  label={"Profile name"}
                  placeholder="0/30"
                  maxLength="30"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  required
                  error={showValidation && profileName === ""}
                  showTextLength={profileName.length + "/30"}
                />
                {showValidation && profileName === "" ? (
                  <InputErrorMessage
                    errorMessage={"Profile name is required"}
                  />
                ) : null}
              </div>
              <br />
              <div className="sub-div-profile-description">
                <InputDescription
                  type="text"
                  label={"Profile description"}
                  placeholder="0/150"
                  maxLength="150"
                  value={profileDescription}
                  onChange={(e) => setProfileDescription(e.target.value)}
                  showTextLength={profileDescription.length + "/150"}
                />
              </div>
              <br />
            </div>
          </div>
          <div className="button-create-profile">
            {submit ? (
              <button class="button-loader-spin">

                <div className="loader-in-button"></div>
              </button>
            ) : (
              <button
                class="button-create-profile1"
                type="submit"
                value="Create profile"
                onClick={createPage}
              >
                Create Profile
              </button>
            )}



            <br />
            <br />
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default CreatePage;

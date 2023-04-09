import React from "react";
import {
  InputComponents,
  InputDescription,
  InputWithData,
} from "../Inputs/input";
import "./bio.css";

import inputError from "../../Assets/Images/input_error.png";
import InputErrorMessage from "../InputErrorMessage/inputErrorMessage";

const Bio = (props) => {
  const handleProfileImage = (e) => {
    e.preventDefault();
    console.log("Clicked", e);

    const fsize = e.target.files[0].size;

    // if (fsize > 2e6) {
    //   return null;
    // } else {
    props.setImageUri(URL.createObjectURL(e.target.files[0]));

    props.setProfilePhoto(e.target.files[0]);
    return (e.target.value = "");
    // }
  };

  return (
    <div>
      <div>
        <div className="sub-container-page">
          <div
            className="sub-container-for-creat-page-input-in-it"
            style={{ marginTop: "1em" }}
          >
            <br />
            <p className="page-create-first-heder-section-in-style">
              Page info
            </p>
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

            {props?.imageUri && props.imageUri !== "" ? (
              <div className="selected-image-and-remove-button">
                <img
                  src={props.imageUri}
                  alt=""
                  srcset=""
                  className="image-addded-in-shoi-boi-for-profile-pic"
                />

                <button
                  className="open-file-btn-in-create-page"
                  onClick={() => {
                    props.setImageUri("");
                    props.setProfilePhoto("");
                  }}
                >
                  {" "}
                  <b> Remove Photo</b>
                </button>
              </div>
            ) : (
              <label for="file">
                <div className="open-file-btn-in-create-page">Upload image</div>
              </label>
            )}

            <br />
            <br />
            <div className="sub-div-profile-name">
              <InputComponents
                label={"  Profile name"}
                required
                placeholder="0/30"
                type="text"
                maxLength="30"
                value={props.profileName}
                onChange={props.setProfileName}
                error={props.showValidation && props.profileName === ""}
                showTextLength={props.profileName.length + "/30"}
              />
              <div style={{ color: "red", fontSize: "14px" }}>
                {props.showValidation && props.profileName === "" ? (
                  <InputErrorMessage
                    errorMessage={"Profile name is required"}
                  />
                ) : null}
              </div>
            </div>
            <br />
            <div className="sub-div-profile-description">
              <InputDescription
                type="text"
                label={" Profile description"}
                placeholder="0/150"
                maxLength="150"
                value={props.profileDescription}
                onChange={props.setProfileDescription}
                showTextLength={props.profileDescription.length + "/150"}
              />
            </div>
            <br />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Bio;

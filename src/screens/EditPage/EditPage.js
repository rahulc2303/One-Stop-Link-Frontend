import React, { useEffect } from "react";
import "./EditPage.css"
import { useState } from "react";
import Tablist from "../../Components/Tablist/Tablist";
import DashboardNavabar from "../../Components/DashboardNavabar/dashboardnavabr";
import DesignComponent from "./../../Components/DesignComponent/DesignComponent";
import Bio from "../../Components/Bio/bio";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardMobile from "../../Components/DashboardMobile/dashboardMobile";
import AddLinkPopup from "../../Components/Modals/AddLinkPopup/addLinkPopup";
import AddEmbedPopup from "../../Components/Modals/AddEmbedPopup/addEmbedPopup";
import SocalsPopup from "../../Components/Modals/SocalsPopup/socalsPopup";
import LinkTab from "../../Components/LinkTab/linkTab";
import DeletePopup from "../../Components/Modals/DeleteModal/DeletePopup";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePageByIDAction
} from "../../redux/action/page.action";
import ShareModal from "../../Components/Modals/Sharemodal/ShareModal";
import ErrorMessage from "../../Components/ErrorMessage/errorMessage";
import SuccessModal from "../../Components/Modals/SuccesModal/succesModal";
import { getImageFromBackend } from "../../helpers/getImageFromBackend";

const EditPage = ({ route }) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const navgiate = useNavigate();



  const check = useSelector((state) => state.pages);
  const [editLinkDetails, setEditLinkDetails] = useState("");
  const [editLink, setEditLink] = useState(false);
  const [editLinkIndex, setEditLinkIndex] = useState("");
  const [show, setShow] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const [showAddSocial, setShowAddSocial] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [submitBioPage, setSubmitBioPage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [backGroundType, setBackGroundType] = useState("color");

  const [activeTab, setActiveTab] = useState("Link");

  const [pageDetails, setPageDetails] = useState("");

  const [profileName, setProfileName] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [backGroundPhoto, setBackGroundPhoto] = useState("");
  const [backGroundImageUri, setBackGroundImageUri] = useState("");
  console.log(backGroundImageUri)
  const [links, setLinks] = useState([]);
  const [cardShape, setCardShape] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [linkColor, setLinkColor] = useState("");
  const [backGroundColor, setBackGroundColor] = useState("");
  const [textFont, setTextFont] = useState("");
  const [textColor, setTextColor] = useState("");

  const [facebookUrl, setFacebookUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [snapChatUrl, setSnapChatUrl] = useState("");
  const [linkedInUrl, setLinkedInUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [pinterestUrl, setPinterestUrl] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showEditSuccessModal, setEditShowSuccessModal] = useState(false);
  const [showNoSuchPage, setShowNoSuchPage] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // hide sucess modal after 1.5 sec
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowSuccessModal(false);
      setEditShowSuccessModal(false);
    }, 1500);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  //show-craeted-sucess-modal
  useEffect(() => {
    if (location?.state?.new) {
      setShowSuccessModal(true);
    }
  }, [location?.state?.new]);

  //show-no-such-page-component-if page not exixts
  useEffect(() => {
    if (!location?.state?.created) {
      console.log("oa")
      setShowNoSuchPage(true);
    }
  }, []);



  //storing values  of selected page
  useEffect(() => {
    if (location?.state?.newPage) {
      setPageDetails(location.state.newPage);
      setProfileName(location.state.newPage?.page_profile_name ?? "");
      setProfileDescription(
        location.state.newPage?.page_profile_description ?? ""
      );
      setTextFont(location.state.newPage?.page_text_font ?? "Inherit");
      setTextColor(location.state.newPage?.page_text_font_color ?? "");
      setCardColor(location.state.newPage?.page_link_card_color ?? "");
      setLinkColor(location.state.newPage?.page_link_text_color ?? "");
      setCardShape(
        location.state.newPage?.page_link_card_shape ?? "rectangle"
      );
      setLinks(location.state.newPage?.page_link ?? "");
      setBackGroundColor(
        location.state.newPage?.page_profile_background_color ?? ""
      );
      setInstagramUrl(
        location.state.newPage?.page_social_media_instagram_url ?? ""
      );
      setFacebookUrl(
        location.state.newPage?.page_social_media_facebook_url ?? ""
      );
      setYoutubeUrl(
        location.state.newPage?.page_social_media_youtube_url ?? ""
      );
      setLinkedInUrl(
        location.state.newPage?.page_social_media_linkedin_url ?? ""
      );
      setSnapChatUrl(
        location.state.newPage?.page_social_media_snapchat_url ?? ""
      );
      setTwitterUrl(
        location.state.newPage?.page_social_media_twitter_url ?? ""
      );
      setGithubUrl(
        location.state.newPage?.page_social_media_github_url ?? ""
      );
      setPinterestUrl(
        location.state.newPage?.page_social_media_pinterest_url ?? ""
      );

      // setImageUri(location.state.newPage?.page_profile_photo?.img ?? "");
      setImageUri(location.state.newPage?.page_profile_photo?.img ? getImageFromBackend(location.state.newPage?.page_profile_photo?.img) : "");

      setBackGroundType(
        location.state.newPage?.page_background_type ?? "color"
      );

      // setBackGroundImageUri(
      //   location.state.newPage?.page_background_photo?.img ?? ""
      // );

      
      setBackGroundImageUri(
        location.state.newPage?.page_background_photo?.img ? getImageFromBackend(location.state.newPage?.page_background_photo?.img) : "")
    }
  }, [location?.state?.created]);



  //after submiting bio-page
  useEffect(() => {
    if (
      submitBioPage &&
      check.action &&
      !check.error &&
      check.errorMessage === ""
    ) {
      setEditShowSuccessModal(true);
      setSubmitBioPage(false);
    }

    if (
      submitBioPage &&
      !check.action &&
      check.error &&
      check.errorMessage !== ""
    ) {
      setSubmitBioPage(false);
      setShowErrorMessage(true);
    }
  }, [check, submitBioPage]);

  //hide edit sucess modal after 1.5 sec
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowSuccessModal(false);
      setEditShowSuccessModal(false);
    }, 1500);

    return () => {
      clearTimeout(timeId);
    };
  }, [showEditSuccessModal]);



  //saving the link
  const saveTheLink = (val) => {
    setLinks([...links, val]);
    setShow(false);
  };

  //updated the links by its index no
  const updateLinkDetails = (val) => {
    const linkObjIndex = links.findIndex(
      (obj, index) => index === editLinkIndex
    );
    if (linkObjIndex === -1) {
      setEditLink(false);
      setEditLinkDetails("");
      setShow(false);
      return null;
    }
    links[linkObjIndex].title = val.title;
    links[linkObjIndex].url = val.url;
    setEditLink(false);
    setEditLinkDetails("");
    return setShow(false);
  };

  //delete the links by its index no
  const deleteLink = () => {
    const newLinks = links.filter((link, index) => index !== editLinkIndex);
    setLinks(newLinks);
    setEditLink(false);
    setEditLinkDetails("");
    return setShow(false);
  };

  //saving the embed-link
  const saveEmbedLink = (val) => {
    setLinks([...links, val]);
    return setShowEmbed(false);
  };

  //update the embed-link by its index no.
  const updateEmbedLinkDetails = (val) => {
    const linkObjIndex = links.findIndex(
      (obj, index) => index == editLinkIndex
    );
    if (linkObjIndex === -1) {
      setEditLink(false);
      setEditLinkDetails("");
      setShowEmbed(false);
      return null;
    }
    links[linkObjIndex].title = val.title;
    links[linkObjIndex].url = val.url;
    setEditLink(false);
    setEditLinkDetails("");
    return setShowEmbed(false);
  };

  //delete the embed-link by its index no.
  const deleteEmbedLink = (id) => {
    const newLinks = links.filter((link, index) => index !== editLinkIndex);
    setLinks(newLinks);
    setEditLink(false);
    setEditLinkDetails("");
    return setShowEmbed(false);
  };

  //show edit link modal
  const showEditLinkDetailsModal = (link, index) => {
    setEditLinkIndex(index);
    setEditLinkDetails(link);
    setEditLink(true);
    if (link.link_type === "youtube") {
      setShowEmbed(true);
    } else if (link.link_type === "link") {
      setShow(true);
    } else {
      return null;
    }
  };

  // pusblishing the bio page
  const publish = (e) => {
    e.preventDefault();
    setShowErrorMessage(false);

    if (!pageDetails._id) {
      return null;
    }

    if (profileName === "") {
      setActiveTab("Bio");
      return setShowValidation(true);
    }

    setSubmitBioPage(true);
    // if (profilePhoto !== "" || backGroundPhoto !== "") {
    const form = new FormData();

    form.append("_id", pageDetails._id);
    profilePhoto !== "" &&
      form.append("page_profile_photo", profilePhoto);
    backGroundType === "image" &&
      backGroundPhoto !== "" &&
      form.append("page_background_photo", backGroundPhoto);
    form.append("page_profile_name", profileName);
    form.append("page_profile_description", profileDescription);
    form.append("page_text_font", textFont);
    form.append("page_text_font_color", textColor);
    form.append("page_link_card_color", cardColor);
    form.append("page_link_text_color", linkColor);
    form.append("page_link_card_shape", cardShape);
    form.append("page_link", JSON.stringify(links));
    form.append("page_profile_background_color", backGroundColor);
    form.append("page_social_media_instagram_url", instagramUrl);
    form.append("page_social_media_facebook_url", facebookUrl);
    form.append("page_social_media_youtube_url", youtubeUrl);
    form.append("page_social_media_linkedin_url", linkedInUrl);
    form.append("page_social_media_snapchat_url", snapChatUrl);
    form.append("page_social_media_twitter_url", twitterUrl);
    form.append("page_social_media_github_url", githubUrl);
    form.append("page_social_media_pinterest_url", pinterestUrl);
    form.append("page_background_type", backGroundType);
    form.append(
      "pervious_page_profile_photo",
      pageDetails?.page_profile_photo?.img && imageUri !== ""
        ? pageDetails.page_profile_photo.img
        : ""
    );
    form.append(
      "pervious_page_background_photo",
      pageDetails?.page_background_photo?.img &&
        backGroundImageUri !== ""
        ? pageDetails.page_background_photo.img
        : ""
    );
    console.log("asd", ...form, pageDetails)
    dispatch(updatePageByIDAction(form));
  };

  // no such page.
  const renderNoSuchPage = () => {
    return (
      <>
        Page not found The page you are looking for does not exist, switch pages
        or create a new page.
        <button
          onClick={() => {
            navgiate("/select-page", {
              replace: true,
            });
          }}
        >
          Switch Page
        </button>
      </>
    );
  };

  //render tab list
  const renderTabDetails = () => {
    if (activeTab === "Link") {
      return (
        <>
          <LinkTab
            addLink={() => {
              setEditLink(false);
              setShow(true);
            }}
            addEmbed={() => {
              setEditLink(false);
              setShowEmbed(true);
            }}
            addSocial={() => {
              setShowAddSocial(true);
            }}
            editLink={showEditLinkDetailsModal}
            links={links}
            instagramUrl={instagramUrl !== "" ? true : false}
            facebookUrl={facebookUrl !== "" ? true : false}
            twitterUrl={twitterUrl !== "" ? true : false}
            youtubeUrl={youtubeUrl !== "" ? true : false}
            linkedInUrl={linkedInUrl !== "" ? true : false}
            snapChatUrl={snapChatUrl !== "" ? true : false}
            githubUrl={githubUrl !== "" ? true : false}
            pinterestUrl={pinterestUrl !== "" ? true : false}
          />
        </>
      );
    } else if (activeTab === "Design") {
      return (
        <>
          <div>
            <DesignComponent
              cardShape={cardShape}
              setCardShape={(val) => setCardShape(val)}
              cardColor={cardColor}
              setCardColor={(e) => {
                setCardColor(e.target.value);
              }}
              linkColor={linkColor}
              setLinkColor={(e) => {
                setLinkColor(e.target.value);
              }}
              backGroundColor={backGroundColor}
              setBackGroundColor={(e) => {
                setBackGroundColor(e.target.value);
              }}
              textFont={textFont}
              setTextFont={(e) => setTextFont(e.target.value)}
              textColor={textColor}
              setTextColor={(e) => {
                setTextColor(e.target.value);
              }}
              setBackGroundType={(val) => setBackGroundType(val)}
              backGroundType={backGroundType}
              backGroundImageUri={backGroundImageUri}
              setBackGroundImageUri={(val) => setBackGroundImageUri(val)}
              backGroundPhoto={backGroundPhoto}
              setBackGroundPhoto={(val) => setBackGroundPhoto(val)}
            />
          </div>
        </>
      );
    } else if (activeTab === "Bio") {
      return (
        <>
          <div>
            <Bio
              url={pageDetails.page_url}
              profileName={profileName}
              profileDescription={profileDescription}
              setProfileName={(e) => setProfileName(e.target.value)}
              setProfileDescription={(e) =>
                setProfileDescription(e.target.value)
              }
              showValidation={showValidation}
              imageUri={imageUri}
              setImageUri={(val) => setImageUri(val)}
              setProfilePhoto={(val) => setProfilePhoto(val)}
            />
          </div>
        </>
      );
    } else {
      return <>{renderNoSuchPage()}</>;
    }
  };

  const onClickOnContent = (e) => {
    e.preventDefault();
    if (showModal) {
      return setShowModal(false);
    }
  };

  return (
    <>
      {!showNoSuchPage ? (
        <div>
          {/* Tablist for links Design and stats */}
          <div>
            <DashboardNavabar
              share
              shareBioPage={() => setShowShareModal(true)}
              showModal={showModal}
              setShowModal={(val) => setShowModal(val)}
            />
          </div>
          {/* Code for the smartphone section of left side of the screen for UserDetails */}

          <div
            className="Flex-dashboard-with-phone-in-dashboard"
            onClick={(e) => {
              showModal && onClickOnContent(e);
            }}
          >
            <div>
              <div
                className="for-fixing-smartphone-fixed-position"
              >
                <DashboardMobile
                  profileName={profileName}
                  profileDescription={profileDescription}
                  imageUri={imageUri}
                  links={links}
                  cardShape={cardShape}
                  cardColor={cardColor}
                  linkColor={linkColor}
                  backGroundColor={backGroundColor}
                  textFont={textFont}
                  textColor={textColor}
                  instagramUrl={instagramUrl !== "" ? true : false}
                  facebookUrl={facebookUrl !== "" ? true : false}
                  twitterUrl={twitterUrl !== "" ? true : false}
                  youtubeUrl={youtubeUrl !== "" ? true : false}
                  linkedInUrl={linkedInUrl !== "" ? true : false}
                  snapChatUrl={snapChatUrl !== "" ? true : false}
                  githubUrl={githubUrl !== "" ? true : false}
                  pinterestUrl={pinterestUrl !== "" ? true : false}
                  backGroundType={backGroundType}
                  backGroundImageUri={backGroundImageUri}
                />
              </div>
            </div>

            {/* For rendering tablist items */}

            <div>
              <div>
                <div>
                  {showErrorMessage ? (
                    <ErrorMessage message={check.errorMessage} />
                  ) : null}
                </div>{" "}
                <div className="flex-at-nav-bar fab-in-first-nav">
                  <h2 className="user-name-of-shobio-inside-ajcd">
                    {pageDetails?.page_profile_name ?? "Page"}
                  </h2>
                  <div className="flex-at-nav-bar gap-for-sc">
                    {/* <button className="Copy-link-btn-at-first-nav"
                        onClick={copyLink}
                      >
                        Copy Link
                      </button> */}
                    <button
                      className="Swithch-page-at-first-nav"
                      onClick={() => {
                        navgiate("/select-page");
                      }}
                    >
                      Switch Page
                    </button>
                  </div>
                </div>
                <div className="sdvgbn">
                  <Tablist
                    activeTab={activeTab}
                    setActiveTab={(e) => {
                      setActiveTab(e);
                    }}
                    publish={publish}
                    setShowDeleteModal={() => setShowDeleteModal(true)}
                    showDeleteModal={showDeleteModal}
                  />
                </div>{" "}
              </div>
              <div className="row-links">{renderTabDetails()}</div>
            </div>
          </div>
        </div>
      ) : (
        renderNoSuchPage()
      )}

      {/* Pop-up for add link button */}

      <AddLinkPopup
        show={show}
        onClose={() => {
          setShow(false);
        }}
        save={saveTheLink}
        editLink={editLink}
        editLinkDetails={editLinkDetails}
        edit={updateLinkDetails}
        deleteLink={deleteLink}
      />

      {/* Pop-up for add emded button */}

      <AddEmbedPopup
        show={showEmbed}
        onClose={() => {
          setShowEmbed(false);
        }}
        save={saveEmbedLink}
        editLink={editLink}
        editLinkDetails={editLinkDetails}
        edit={updateEmbedLinkDetails}
        deleteLink={deleteEmbedLink}
      />

      {/* Pop-up for Add social button  */}

      <SocalsPopup
        show={showAddSocial}
        onClose={() => {
          setShowAddSocial(false);
        }}
        instagramUrl={instagramUrl}
        facebookUrl={facebookUrl}
        twitterUrl={twitterUrl}
        youtubeUrl={youtubeUrl}
        linkedInUrl={linkedInUrl}
        snapChatUrl={snapChatUrl}
        githubUrl={githubUrl}
        pinterestUrl={pinterestUrl}
        setInstagramUrl={(val) => setInstagramUrl(val)}
        setFacebookUrl={(val) => setFacebookUrl(val)}
        setTwitterUrl={(val) => setTwitterUrl(val)}
        setYoutubeUrl={(val) => setYoutubeUrl(val)}
        setLinkedInUrl={(val) => setLinkedInUrl(val)}
        setSnapChatUrl={(val) => setSnapChatUrl(val)}
        setGithubUrl={(val) => setGithubUrl(val)}
        setPinterestUrl={(val) => setPinterestUrl(val)}
      />

      <DeletePopup
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        profileName={profileName}
        pageId={pageDetails._id}
      />

      <ShareModal
        show={showShareModal}
        onClose={() => {
          setShowShareModal(false);
        }}
        url={pageDetails?.page_url ?? ""}
        title="My Page"
      />

      <SuccessModal
        show={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
        }}
        msg={"Page published"}
      />
      <SuccessModal
        show={showEditSuccessModal}
        onClose={() => {
          setEditShowSuccessModal(false);
        }}
        msg={"Page updated"}
      />
    </>
  );
};

export default EditPage;

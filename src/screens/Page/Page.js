import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPageByUrlAction,
} from "../../redux/action/page.action";
import "./Page.css";
import FacebookSvg from "../../Assets/Svg/facebookSvg";
import InstagramSvg from "../../Assets/Svg/instagramSvg";
import TwitterSvg from "../../Assets/Svg/twitterSvg";
import YoutubeSvg from "../../Assets/Svg/youtubeSvg";
import LinkedinSvg from "../../Assets/Svg/linkedinSvg";
import SnapChatSvg from "../../Assets/Svg/snapChatSvg";
import PinterestSvg from "../../Assets/Svg/pinterestSvg";
import GithubSvg from "../../Assets/Svg/githubSvg";
import ReactPlayer from "react-player";
import User from "../../Assets/Images/user.png";
import Shobio from "../../Assets/Images/shoboilogo.png";
import { getImageFromBackend } from "../../helpers/getImageFromBackend";

const Page = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageProfile = useSelector((state) => state.pageProfile);

  useEffect(() => {
    const payload = {
      params: {
        pageUrl: params.pageUrl,
      },
    };
    dispatch(getPageByUrlAction(payload));
  }, []);



  const onSocailLinkClick = (url) => {
    return (window.location.href = url);
  };

  const getMobileBackGroundColor = (bio) => {
    const backGroundColor =
      bio?.page_profile_background_color &&
        bio.page_profile_background_color !== ""
        ? bio.page_profile_background_color
        : null;
    return { backgroundColor: backGroundColor };
  };

  const getMobileBackGroundImage = (imageUrl) => {
    return {
      backgroundImage: `url(${imageUrl}`,
      backgroundRepeat: "no-repeat",
    };

    // console.log(`url(${getImageFromBackend(imageUrl)}`,)
    // return {

    //   backgroundImage: `url(${getImageFromBackend(imageUrl)}`,
    //   backgroundRepeat: "no-repeat",
    // };
  };

  const getTextColorAndFont = (bio) => {
    const color =
      bio?.page_text_font_color && bio.page_text_font_color !== ""
        ? bio.page_text_font_color
        : null;
    const textFont =
      bio?.page_text_font && bio.page_text_font !== ""
        ? bio.page_text_font
        : null;
    return { color: color, fontFamily: textFont };
  };

  const getStyleForLink = (bio) => {
    if (bio?.page_link_card_shape === "rectangle") {
      return "bio-dashboard-admin-rectangle-style";
    } else if (bio?.page_link_card_shape === "reactangle-border") {
      return "bio-dashboard-admin-rectangle-style-with-border-radius";
    } else if (bio?.page_link_card_shape === "oval") {
      return "bio-dashboard-admin-oval-shape";
    } else {
      return "bio-dashboard-admin-rectangle-style";
    }
  };

  const getStyleForYoutubeVideo = (bio) => {
    if (bio?.page_link_card_shape === "rectangle") {
      return "bio-dasboard-admin-video-shape";
    } else if (bio?.page_link_card_shape === "reactangle-border") {
      return "bio-dasboard-admin-video-shape-with-border-radius";
    } else if (bio?.page_link_card_shape === "oval") {
      return "bio-dasboard-admin-video-oval-shape";
    } else {
      return "bio-dasboard-admin-video-shape";
    }
  };

  const getLinkTextColor = (bio) => {
    const color =
      bio?.page_link_text_color && bio.page_link_text_color !== ""
        ? bio.page_link_text_color
        : null;
    const background =
      bio?.page_link_card_color && bio.page_link_card_color !== ""
        ? bio.page_link_card_color
        : null;
    const textFont =
      bio?.page_text_font && bio.page_text_font !== ""
        ? bio.page_text_font
        : null;
    return {
      color: color,
      backgroundColor: background,
      fontFamily: textFont,
      cursor:"pointer"
    };
  };

  const renderLinkDetails = (link, bio) => {
    return (
      <>
        <div
          className={getStyleForLink(bio)}
          style={getLinkTextColor(bio)}
          onClick={() =>
            onSocailLinkClick(
              link.url.substring(0, 5) === "https"
                ? link.url
                : "https://" + link.url,
              bio
            )
          }
        >
          {link.title}
        </div>
      </>
    );
  };

  const renderYoutubeVideo = (link, bio) => {
    return (
      <>
        <div
          // className="main-container-biolink-socials-output"
          // style={getMobileBackGroundColor(bio)}
          style={
            bio?.page_background_type === "color"
              ? getMobileBackGroundColor(bio)
              : bio?.page_background_type === "image" &&
                bio?.page_background_photo?.img !== ""
                ? getMobileBackGroundImage(getImageFromBackend(bio.page_background_photo.img))
                : {}
          }
        >
          <div
            className={getStyleForYoutubeVideo(bio)}
            style={getLinkTextColor(bio)}
          >
            <div
              className="title-for-video-shobio-inside-asd"
              style={getLinkTextColor(bio)}
            >
              {link.title}
            </div>
            <ReactPlayer width="100%" height="90%" url={link.url} />
          </div>
        </div>
      </>
    );
  };

  const renderLinks = (bio) => {
    return bio.page_link.map((link, index) => (
      <div
        // className="main-container-biolink-socials-output"
        // style={getMobileBackGroundColor(bio)}
        style={
          bio?.page_background_type === "color"
            ? getMobileBackGroundColor(bio)
            : bio?.page_background_type === "image" &&
              bio?.page_background_photo?.img !== ""
              ? getMobileBackGroundImage(getImageFromBackend(bio.page_background_photo.img))
              : {}
        }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "2em",
          }}
          key={index}
        >
          {link.link_type === "link" ? renderLinkDetails(link, bio) : null}
          {link.link_type === "youtube" ? renderYoutubeVideo(link, bio) : null}
        </div>
      </div>
    ));
  };

  const renderSocailLinks = (bio) => {
    return (
      <div className="flex-options-in-socails-incon-ikjdsmn">
        {bio?.page_social_media_facebook_url &&
          bio.page_social_media_facebook_url !== "" ? (
          <>
            <div
              style={{ cursor: "pointer" }}
              onClick={() =>
                onSocailLinkClick(
                  "https://www.facebook.com/" +
                  bio.page_social_media_facebook_url,
                  bio
                )
              }
            >
              <FacebookSvg
                bioPage
                color={
                  bio?.page_text_font_color && bio.page_text_font_color !== ""
                    ? bio.page_text_font_color
                    : "#000000"
                }
              />
            </div>
          </>
        ) : null}
        {bio?.page_social_media_instagram_url &&
          bio.page_social_media_instagram_url !== "" ? (
          <>
            <div
              style={{ height: "30px", cursor: "pointer" }}
              onClick={() =>
                onSocailLinkClick(
                  "https://www.instagram.com/" +
                  bio.page_social_media_instagram_url,
                  bio
                )
              }
            >
              <InstagramSvg
                bioPage
                color={
                  bio?.page_text_font_color && bio.page_text_font_color !== ""
                    ? bio.page_text_font_color
                    : "#000000"
                }
              />
            </div>
          </>
        ) : null}

        {bio?.page_social_media_twitter_url &&
          bio.page_social_media_twitter_url !== "" ? (
          <>
            <div
              style={{ height: "30px", cursor: "pointer" }}
              onClick={() =>
                onSocailLinkClick(
                  "https://twitter.com/" + bio.page_social_media_twitter_url,
                  bio
                )
              }
            >
              <TwitterSvg
                bioPage
                color={
                  bio?.page_text_font_color && bio.page_text_font_color !== ""
                    ? bio.page_text_font_color
                    : "#000000"
                }
              />
            </div>
          </>
        ) : null}
        {bio?.page_social_media_youtube_url &&
          bio.page_social_media_youtube_url !== "" ? (
          <>
            <div
              style={{ height: "30px", cursor: "pointer" }}
              onClick={() =>
                onSocailLinkClick(
                  "https://www.youtube.com/" +
                  bio.page_social_media_youtube_url,
                  bio
                )
              }
            >
              <YoutubeSvg
                bioPage
                color={
                  bio?.page_text_font_color && bio.page_text_font_color !== ""
                    ? bio.page_text_font_color
                    : "#000000"
                }
              />
            </div>
          </>
        ) : null}

        {bio?.page_social_media_linkedin_url &&
          bio.page_social_media_linkedin_url !== "" ? (
          <>
            <div
              style={{ height: "30px", cursor: "pointer" }}
              onClick={() =>
                onSocailLinkClick(
                  "https://www.linkedin.com/in/" +
                  bio.page_social_media_linkedin_url,
                  bio
                )
              }
            >
              <LinkedinSvg
                bioPage
                color={
                  bio?.page_text_font_color && bio.page_text_font_color !== ""
                    ? bio.page_text_font_color
                    : "#000000"
                }
              />
            </div>
          </>
        ) : null}
        {bio?.page_social_media_snapchat_url &&
          bio.page_social_media_snapchat_url !== "" ? (
          <>
            <div
              style={{ height: "30px", cursor: "pointer" }}
              onClick={() =>
                onSocailLinkClick(
                  "https://www.snapchat.com/add/" +
                  bio.page_social_media_snapchat_url,
                  bio
                )
              }
            >
              <SnapChatSvg
                bioPage
                color={
                  bio?.page_text_font_color && bio.page_text_font_color !== ""
                    ? bio.page_text_font_color
                    : "#000000"
                }
              />
            </div>
          </>
        ) : null}
        {bio?.page_social_media_pinterest_url &&
          bio.page_social_media_pinterest_url !== "" ? (
          <>
            <div
              style={{ height: "30px", cursor: "pointer" }}
              onClick={() =>
                onSocailLinkClick(
                  "https://in.pinterest.com/" +
                  bio.page_social_media_pinterest_url,
                  bio
                )
              }
            >
              <PinterestSvg
                bioPage
                color={
                  bio?.page_text_font_color && bio.page_text_font_color !== ""
                    ? bio.page_text_font_color
                    : "#000000"
                }
              />
            </div>
          </>
        ) : null}
        {bio?.page_social_media_github_url &&
          bio.page_social_media_github_url !== "" ? (
          <>
            <div
              style={{ height: "30px", cursor: "pointer" }}
              onClick={() =>
                onSocailLinkClick(
                  "https://github.com/" + bio.page_social_media_github_url,
                  bio
                )
              }
            >
              <GithubSvg
                bioPage
                color={
                  bio?.page_text_font_color && bio.page_text_font_color !== ""
                    ? bio.page_text_font_color
                    : "#000000"
                }
              />
            </div>
          </>
        ) : null}
      </div>
    );
  };

  const renderPageDetails = (bio) => {
    return (
      <>
        <div
          className="main-container-biolink-socials-output"
          style={
            bio?.page_background_type === "color"
              ? getMobileBackGroundColor(bio)
              : bio?.page_background_type === "image" &&
                bio?.page_background_photo?.img !== ""
                ? getMobileBackGroundImage(getImageFromBackend(bio.page_background_photo.img))
                : {}
          }
        >
          {/* Icon for the uploaded Image */}
          <div className="upload-img-top">
            {/* given img for the  */}
            {bio?.page_profile_photo &&
              bio.page_profile_photo.img &&
              bio.page_profile_photo.img !== "" ? (
              <img
                className="photo-logo-smartphone-screen"
                // src={bio.page_profile_photo.img}
                src={getImageFromBackend(bio.page_profile_photo.img)}
                alt=""
                srcset=""
              />
            ) : (
              <img
                className="photo-logo-smartphone-screen"
                src={User}
                alt=""
                srcset=""
              />
            )}
          </div>
          {/* Uploaded username */}
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3
                style={getTextColorAndFont(bio)}
                className="font-size-for-name-in-user-side"
              >
                {bio?.page_profile_name ?? ""}
              </h3>
            </div>
          </div>

          {/* Profile Description */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {bio?.page_profile_description &&
              bio.page_profile_description !== "" ? (
              <div
                style={getTextColorAndFont(bio)}
                className="proilfe-description-ajn"
              >
                {bio.page_profile_description}
              </div>
            ) : null}
          </div>
          {/* Socail Links */}
          {renderSocailLinks(bio)}

          {/* Links */}

          {bio.page_link && bio.page_link.length > 0 ? renderLinks(bio) : null}
          {/* <div
            style={
              bio?.page_background_type === "color"
                ? getMobileBackGroundColor(bio)
                : bio?.page_background_type === "image" &&
                  bio?.page_background_photo?.img !== ""
                  ? getMobileBackGroundImage(getImageFromBackend(bio.page_background_photo.img))
                  : {}
            }
          >
          </div> */}
        </div>
      </>
    );
  };



  const renderErrorPage = () => {
    return (
      <>
        <div className="error-page-styling">
          <div style={{ width: "25em " }}>
            <div className="error-message">
              <p className="error-msg-first-heading">
                {" "}
                The page you're looking for <br /> couldn't be found
              </p>{" "}
              <br />
              <p className="error-msg-para-text">
                Check the web address and try again, or try navigating to the
                page from home.
              </p>
            </div>

            <button
              onClick={() => {
                navigate("/", {
                  replace: true,
                });
              }}
              className="error-page-button"
            >
              Go to home
            </button>
          </div>
        </div>
      </>
    );
  };

  const renderPage = () => {
    if (pageProfile.action && pageProfile.pageProfile) {
      return renderPageDetails(pageProfile.pageProfile);
    } else if (pageProfile.error && pageProfile.errorMessage !== "") {
      return renderErrorPage();
    } else {
      return null;
      // renderLoding();
    }
  };

  return (
    <>
      <div>{renderPage()}</div>
    </>
  );
};

export default Page;


import React from "react";
import ReactPlayer from "react-player";
import "./dashboardMobile.css";
import FacebookSvg from "../../Assets/Svg/facebookSvg";
import InstagramSvg from "../../Assets/Svg/instagramSvg";
import TwitterSvg from "../../Assets/Svg/twitterSvg";
import YoutubeSvg from "../../Assets/Svg/youtubeSvg";
import LinkedinSvg from "../../Assets/Svg/linkedinSvg";
import SnapChatSvg from "../../Assets/Svg/snapChatSvg";
import PinterestSvg from "../../Assets/Svg/pinterestSvg";
import GithubSvg from "../../Assets/Svg/githubSvg";
import UserIn from "../../Assets/Images/user.png";

const DashboardMobile = (props) => {
  const getStyleForLink = () => {
    if (props.cardShape === "rectangle") {
      return "dashboard-admin-rectangle-style";
    } else if (props.cardShape === "reactangle-border") {
      return "dashboard-admin-rectangle-style-with-border-radius";
    } else if (props.cardShape === "oval") {
      return "dashboard-admin-oval-shape";
    } else {
      return "dashboard-admin-rectangle-style";
    }
  };

  const getStyleForYoutubeVideo = () => {
    if (props.cardShape === "rectangle") {
      return "dasboard-admin-video-shape";
    } else if (props.cardShape === "reactangle-border") {
      return "dasboard-admin-video-shape-with-border-radius";
    } else if (props.cardShape === "oval") {
      return "dasboard-admin-video-oval-shape";
    } else {
      return "dasboard-admin-video-shape";
    }
  };

  const getLinkTextColor = () => {
    const color = props.linkColor !== "" ? props.linkColor : null;
    const background = props.cardColor !== "" ? props.cardColor : null;
    return {
      color: color,
      backgroundColor: background,
      fontFamily: props.textFont,
    };
  };

  const getMobileBackGroundColor = () => {
    const backGroundColor =
      props.backGroundColor !== "" ? props.backGroundColor : null;
    return { backgroundColor: backGroundColor };
  };

  const getMobileBackGroundImage = (imageUrl) => {

    // style={{backgroundImage: }}
    return {
      backgroundImage: `url(${imageUrl}`,
      backgroundRepeat: "no-repeat",
    };
  };

  const renderLinkDetail = (link) => {
    return (
      <>
        <div className={getStyleForLink()} style={getLinkTextColor()}>
          {link.title}
        </div>
      </>
    );
  };

  const renderYoutubeVideo = (link) => {
    return (
      <>
        <div className={getStyleForYoutubeVideo()} style={getLinkTextColor()}>
          <div
            className="title-for-video-for-dashboard-in"
            style={getLinkTextColor()}
          >
            {link.title}
          </div>
          <ReactPlayer width="100%" height="100%" url={link.url} />
        </div>
      </>
    );
  };

  const renderLinksList = () => {
    return props.links.map((link, index) => (
      <>
        <div style={{ margin: "1em 1em" }}>
          {link.link_type === "link" ? renderLinkDetail(link) : null}
          {link.link_type === "youtube" ? renderYoutubeVideo(link) : null}
        </div>
      </>
    ));
  };

  const getTextColorAndFont = () => {
    const color = props.textColor !== "" ? props.textColor : null;
    return { color: color, fontFamily: props.textFont };
  };

  return (
    <>
      <div className="mobile-container-in-left--section-of-main-div">
        {/* getMobileBackGroundColor() */}
        <div
          className="cpm-smartphone"
          style={
            props.backGroundType === "color"
              ? getMobileBackGroundColor()
              : props.backGroundType === "image" &&
                props.backGroundImageUri !== ""
              ? getMobileBackGroundImage(props.backGroundImageUri)
              : {}
          }
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            {props.imageUri !== "" ? (
              <img
                className="cpm-photo-logo-smartphone"
                src={props.imageUri}
                alt="pic"
                srcset=""
              />
            ) : (
              <img
                className="cpm-photo-logo-smartphone"
                src={UserIn}
                alt="pic"
                srcset=""
              />
            )}
          </div>
          <div
            className="user-name-in-phone-view-sho-bio"
            style={getTextColorAndFont()}
          >
            {props.profileName !== "" ? props.profileName : "Profile name"}
          </div>

          <div
            className="user-description-in-one-phone-view-sect"
            style={getTextColorAndFont()}
          >
            {props.profileDescription !== ""
              ? props.profileDescription
              : "Profile description"}
          </div>
          <div className="flex-options-in-socails-incon-ikjdsmn">
            {props.facebookUrl ? (
              <>
                <div style={{ height: "30px", cursor: "pointer" }}>
                  <FacebookSvg
                    color={props.textColor !== "" ? props.textColor : "#000000"}
                  />
                </div>
              </>
            ) : null}
            {props.instagramUrl ? (
              <>
                <div style={{ height: "30px", cursor: "pointer" }}>
                  <InstagramSvg
                    color={props.textColor !== "" ? props.textColor : "#000000"}
                  />
                </div>
              </>
            ) : null}

            {props.twitterUrl ? (
              <>
                <div style={{ height: "30px", cursor: "pointer" }}>
                  <TwitterSvg
                    color={props.textColor !== "" ? props.textColor : "#000000"}
                  />
                </div>
              </>
            ) : null}
            {props.youtubeUrl ? (
              <>
                <div style={{ height: "30px", cursor: "pointer" }}>
                  <YoutubeSvg
                    color={props.textColor !== "" ? props.textColor : "#000000"}
                  />
                </div>
              </>
            ) : null}
          </div>
          {/* ------------------------- */}
          <div className="flex-options-in-socails-incon-ikjdsmn">
            {props.linkedInUrl ? (
              <>
                <div style={{ height: "30px", cursor: "pointer" }}>
                  <LinkedinSvg
                    color={props.textColor !== "" ? props.textColor : "#000000"}
                  />
                </div>
              </>
            ) : null}
            {props.snapChatUrl ? (
              <>
                <div style={{ height: "30px", cursor: "pointer" }}>
                  <SnapChatSvg
                    color={props.textColor !== "" ? props.textColor : "#000000"}
                  />
                </div>
              </>
            ) : null}
            {props.pinterestUrl ? (
              <>
                <div style={{ height: "30px", cursor: "pointer" }}>
                  <PinterestSvg
                    color={props.textColor !== "" ? props.textColor : "#000000"}
                  />
                </div>
              </>
            ) : null}
            {props.githubUrl ? (
              <>
                <div style={{ height: "30px", cursor: "pointer" }}>
                  <GithubSvg
                    color={props.textColor !== "" ? props.textColor : "#000000"}
                  />
                </div>
              </>
            ) : null}
          </div>
          {props.links && props.links.length > 0 ? renderLinksList() : null}
        </div>

        {/* <IconsForSocial icon={Discord} />
          <IconsForSocial icon={Github} />
          <IconsForSocial icon={Pinterest} /> */}
      </div>
    </>
  );
};

export default DashboardMobile;

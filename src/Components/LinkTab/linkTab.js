import React from "react";
import "./LinkTab.css";
import Youtube from "../../Assets/Images/youtube.png";
import DiscordSvg from "../../Assets/Svg/discordSvg";
import FacebookSvg from "../../Assets/Svg/facebookSvg";
import InstagramSvg from "../../Assets/Svg/instagramSvg";
import TwitterSvg from "../../Assets/Svg/twitterSvg";
import YoutubeSvg from "../../Assets/Svg/youtubeSvg";
import LinkedinSvg from "../../Assets/Svg/linkedinSvg";
import SnapChatSvg from "../../Assets/Svg/snapChatSvg";
import PinterestSvg from "../../Assets/Svg/pinterestSvg";
import GithubSvg from "../../Assets/Svg/githubSvg";

const LinkTab = (props) => {
  const { links } = props;

  const renderLinks = () => {
    return links.map((link, index) => (
      <div key={index}>
        {link.link_type === "link" ? (
          <div className="addlink-linkshow">
            <div
              className="box-with-no-flex-img-in-it"
              style={{ padding: "20px" }}
            >
              <div className="name-of-tilte-in-shaep-links">{link.title}</div>
              <div className="linkTab-link-url">{link.url}</div>
            </div>
            <div
              className="edit-btn-for-ink-added-at-dashboard"
              onClick={() => props.editLink(link, index)}
            >
              <span className="three-dots-edit">
                <b>&#8942;</b>
              </span>
              <span className="three-dots-edit">
                <b>&#8942;</b>
              </span>
            </div>
          </div>
        ) : null}

        {link.link_type === "youtube" ? (
          <div style={{}} className="addlink-linkshow">
            <div className="box-of-links-inside-dashboard">
              <img
                src={Youtube}
                className="youtube-png-at-links-in-bjcx"
                alt=""
              />
              {/* <div className="name-of-tilte-in-shaep-links">{link.title}</div>
            <div style={{ width: "90%" }} className="linkTab-link-url">
              {link.url}
            </div> */}
              <div className="box-with-no-flex-img-in-it">
                <div className="name-of-tilte-in-shaep-links">{link.title}</div>

                <div className="linkTab-link-url">{link.url}</div>
              </div>
            </div>
            <div
              onClick={() => props.editLink(link, index)}
              className="edit-btn-for-ink-added-at-dashboard"
            >
              <span className="three-dots-edit">
                <b>&#8942;</b>
              </span>
              <span className="three-dots-edit">
                <b>&#8942;</b>
              </span>
            </div>
          </div>
        ) : null}
      </div>
    ));
  };
  const IconsForSocial = (props) => {
    return (
      <>
        <img
          src={props.icon}
          style={{ height: "30px", cursor: "pointer" }}
          alt=""
        />
      </>
    );
  };

  return (
    <>
      <div>
        {" "}
        {/* Card for Add links and also the add embed for media */}
        <div className="cards-for-add">
          <div className="buttons-link-embed">
            <h2 className="social-links-text">
              Add your website and Youtube Videos
            </h2>
            <div className="flex-two-btn-in-links-for-website-and-youtube">
              <button
                className="Add-link-button"
                type="submit"
                onClick={props.addLink}
              >
                <b>+</b> ADD LINK
              </button>
              <button
                className="Add-embed-button"
                type="submit"
                onClick={props.addEmbed}
              >
                <strong>
                  <b>+</b> ADD EMBED
                </strong>
              </button>
            </div>
          </div>
          <div className="buttons-link-embed">
            <h2 className="social-links-text">Add your Socail Link</h2>
            <div>
              <div className="social-insta-logo-button">
                {props.facebookUrl ? (
                  <>
                    <div>
                      <FacebookSvg color={"#000000"} />
                    </div>
                  </>
                ) : null}
                {props.instagramUrl ? (
                  <>
                    <div>
                      <InstagramSvg color={"#000000"} />
                    </div>
                  </>
                ) : null}

                {props.twitterUrl ? (
                  <>
                    <div>
                      <TwitterSvg color={"#000000"} />
                    </div>
                  </>
                ) : null}
                {props.youtubeUrl ? (
                  <>
                    <div>
                      <YoutubeSvg color={"#000000"} />
                    </div>
                  </>
                ) : null}

                {props.linkedInUrl ? (
                  <>
                    <div>
                      <LinkedinSvg color={"#000000"} />
                    </div>
                  </>
                ) : null}
                {props.snapChatUrl ? (
                  <>
                    <div>
                      <SnapChatSvg color={"#000000"} />
                    </div>
                  </>
                ) : null}
                {props.pinterestUrl ? (
                  <>
                    <div>
                      <PinterestSvg color={"#000000"} />
                    </div>
                  </>
                ) : null}
                {props.githubUrl ? (
                  <>
                    <div>
                      <GithubSvg color={"#000000"} />
                    </div>
                  </>
                ) : null}
              </div>
              <div className="add-link-social-icons-jcksa-ajk-jks">
                <h2
                  className="Add-social-niebe-ojn-add-social-link-add-btn"
                  onClick={props.addSocial}
                >
                  {" "}
                  + Add Social Link
                </h2>
              </div>
            </div>

            <div>{links && links.length > 0 ? renderLinks() : null}</div>
            {/* /////////// For Website Link Box  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkTab;

import React, { useEffect, useState } from "react";
import { InputComponents, InputWithData } from "../../Inputs/input";
import SocialModal from "../SocialPopup/SocialPopup";
import "./socialpopup.css";

const SocalsPopup = (props) => {
  const { show, onClose } = props;

  return (
    <>
      <SocialModal visible={show} onClose={onClose}>
        <div style={{ marginTop: "3em", padding: "0em 1em" }}>
          <form className="forms-in-social-inpopss">
            {/* Input Title */}
            <h2>Social media handles (optional)</h2>

            {/* <div className="paddtinf-top-for-social-links-in-pop-up">
              <InputWithData
                inputplaceholder="Shopisthan.com/"
                type="text"
                label={"Shopisthan store"}
                placeholder={""}
              />
            </div> */}

            <div className="paddtinf-top-for-social-links-in-pop-up">
              <InputWithData
                inputplaceholder="facebook.com/"
                type="text"
                label={"Facebook"}
                placeholder={""}
                value={props.facebookUrl}
                onChange={(e) =>
                  props.setFacebookUrl(e.target.value.replace(/\s/g, ""))
                }
              />
            </div>
            <div className="paddtinf-top-for-social-links-in-pop-up">
              <InputWithData
                inputplaceholder="instagram.com/"
                type="text"
                label={"Instagram"}
                placeholder={""}
                value={props.instagramUrl}
                onChange={(e) =>
                  props.setInstagramUrl(e.target.value.replace(/\s/g, ""))
                }
              />
            </div>
            <div className="paddtinf-top-for-social-links-in-pop-up">
              <InputWithData
                inputplaceholder="twitter.com/"
                type="text"
                label={"Twitter"}
                placeholder={""}
                value={props.twitterUrl}
                onChange={(e) =>
                  props.setTwitterUrl(e.target.value.replace(/\s/g, ""))
                }
              />
            </div>
            <div className="paddtinf-top-for-social-links-in-pop-up">
              <InputWithData
                inputplaceholder="youtube.com/"
                type="text"
                label={"Youtube"}
                placeholder={""}
                value={props.youtubeUrl}
                onChange={(e) =>
                  props.setYoutubeUrl(e.target.value.replace(/\s/g, ""))
                }
              />
            </div>
            <div className="paddtinf-top-for-social-links-in-pop-up">
              <InputWithData
                inputplaceholder="snapchat.com/"
                type="text"
                label={"Snapchat"}
                placeholder={""}
                value={props.snapChatUrl}
                onChange={(e) =>
                  props.setSnapChatUrl(e.target.value.replace(/\s/g, ""))
                }
              />
            </div>
            <div className="paddtinf-top-for-social-links-in-pop-up">
              <InputWithData
                inputplaceholder="linkedIn.com/"
                type="text"
                label={"LinkedIn"}
                placeholder={""}
                value={props.linkedInUrl}
                onChange={(e) =>
                  props.setLinkedInUrl(e.target.value.replace(/\s/g, ""))
                }
              />
            </div>
            <div className="paddtinf-top-for-social-links-in-pop-up">
              <InputWithData
                inputplaceholder="pinterest.com/"
                type="text"
                label={"Pinterest"}
                placeholder={""}
                value={props.pinterestUrl}
                onChange={(e) =>
                  props.setPinterestUrl(e.target.value.replace(/\s/g, ""))
                }
              />
            </div>
            <div className="paddtinf-top-for-social-links-in-pop-up">
              <InputWithData
                inputplaceholder="github.com/"
                type="text"
                label={"Github"}
                placeholder={""}
                value={props.githubUrl}
                onChange={(e) =>
                  props.setGithubUrl(e.target.value.replace(/\s/g, ""))
                }
              />
            </div>

            <button
              className="save-link-button"
              style={{ margin: "1em 0em" }}
              // type="submit"
              onClick={onClose}
            >
              <strong>Save</strong>
            </button>
          </form>
        </div>
      </SocialModal>
    </>
  );
};

export default SocalsPopup;

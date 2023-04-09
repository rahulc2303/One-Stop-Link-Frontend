import React, { useRef, useState } from "react";
import "./shareModal.css";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { REACT_APP_SHARE_URL } from "../../../config/keys";

const ShareModal = (props) => {
  const { url, title } = props;
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  }

  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className="Background-full-for-sahre-modal-in-share-links-x">
        <div className="modal-for-share-pop-ups-in-new-modal">
          <div className="flex-d-for-header-and-close-btn">
            <h2>Share</h2>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/1828/1828778.png"}
              alt=""
              style={{ height: "15px", width: "15px", cursor: "pointer" }}
              onClick={props.onClose}
            />
          </div>
          <div>
            <p className="uyio-awocld-ascxz">
              Share your Page on your social platform
            </p>
          </div>
          <div className="input-of-link-and-scopy-link-btn-at-bottom">
            <input
              className="input-of-link-tobe-share-in-sahre-pop-up"
              ref={textAreaRef}
              value={`${REACT_APP_SHARE_URL}${url}`}
            />

            <button
              className="Btn-for-copy-link-in-right-section"
              onClick={copyToClipboard}
            >
              Copy Link
            </button>
          </div>
          <div>
            <p className="uyio-awocld-ascxz">Go directly to your socials</p>
          </div>
          <div className="all-social-channels-links-in-one">
            <FacebookShareButton url={REACT_APP_SHARE_URL + url} quote={title}>
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            <WhatsappShareButton
              url={REACT_APP_SHARE_URL + url}
              title={title}
              separator=":: "
            >
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>

            <TwitterShareButton url={REACT_APP_SHARE_URL + url}>
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>

            <TelegramShareButton url={REACT_APP_SHARE_URL + url}>
              <TelegramIcon size={40} round={true} />
            </TelegramShareButton>

            <EmailShareButton url={REACT_APP_SHARE_URL + url}>
              <EmailIcon size={40} round={true} />
            </EmailShareButton>

            <LinkedinShareButton url={REACT_APP_SHARE_URL + url}>
              <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>

            <PinterestShareButton url={REACT_APP_SHARE_URL + url}>
              <PinterestIcon size={40} round={true} />
            </PinterestShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;

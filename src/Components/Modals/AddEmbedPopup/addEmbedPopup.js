import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { InputComponents } from "../../Inputs/input";
import SocialModal from "../SocialPopup/SocialPopup";
import "./addEmbedPopup.css";

const AddEmbedPopup = (props) => {
  const { show, onClose, save, editLink, editLinkDetails, edit, deleteLink } =
    props;

  const [title, setTitle] = useState(
    editLink && editLinkDetails ? editLinkDetails.title : ""
  );
  const [url, setUrl] = useState(
    editLink && editLinkDetails ? editLinkDetails.url : ""
  );
  const [showValidation, setShowValidation] = useState(false);
  const [validation, setValidation] = useState("");

  useEffect(() => {
    setTitle(editLink && editLinkDetails ? editLinkDetails.title : "");
    setUrl(editLink && editLinkDetails ? editLinkDetails.url : "");
  }, [edit]);

  const saveLink = (url, title) => {
    const obj = {
      title: title,
      url: url,
      thumbnail: "",
      link_type: "youtube",
    };
    save(obj);
    setUrl("");
    setValidation("");
    setShowValidation(false);
    return setTitle("");
  };

  const matchYoutubeUrl = (url) => {
    var p =
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(p)) {
      return true;
    }
    return false;
  };

  const addLink = (e) => {
    e.preventDefault();

    if (url === "" || title === "") {
      return setShowValidation(true);
    }

    if (matchYoutubeUrl(url)) {
      return saveLink(url, title);
    } else {
      setShowValidation(true);
      return setValidation("Url");
    }
  };

  const onDeleteLink = (e) => {
    e.preventDefault();
    return deleteLink();
  };

  const saveUpdatedLink = (url, title) => {
    const obj = {
      title: title,
      url: url,
      thumbnail: "",
      link_type: "link",
    };

    edit(obj);
    setUrl("");
    setValidation("");
    setShowValidation(false);
    return setTitle("");
  };

  const updateLink = (e) => {
    e.preventDefault();

    if (url === "" || title === "") {
      return setShowValidation(true);
    }

    if (matchYoutubeUrl(url)) {
      return saveUpdatedLink(url, title);
    } else {
      setShowValidation(true);
      return setValidation("Url");
    }
  };

  const showErrorMessage = (msg) => {
    return (
      <>
        <div
          style={{ color: "red" }}
          className="error-messages-for-input-fields-title-url-embeded"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/4457/4457164.png"
            alt=""
            srcset=""
            style={{ height: "15px", width: "15px" }}
          />
          {msg}
        </div>
      </>
    );
  };

  return (
    <>
      <SocialModal visible={show} onClose={onClose}>
        <div style={{ marginTop: "3em", padding: "0em 1em" }}>
          <form className="forms-in-social-inpopss">
            {/* Input Title */}
            <h2>Add your YouTube videos</h2>
            <div className="paddtinf-top-for-social-links-in-pop-up">
              <InputComponents
                type="text"
                label={" Title:"}
                placeholder={"Title"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={showValidation && title === "" ? true : false}
              />
            </div>

            {showValidation && title === ""
              ? showErrorMessage("Title is required")
              : null}

            {/* Input Url */}

            <InputComponents
              type="text"
              label={"URL:"}
              placeholder={"URL"}
              value={url}
              onChange={(e) => setUrl(e.target.value.replace(/\s/g, ""))}
              error={showValidation && url === "" ? true : false}
            />
            {showValidation && url === ""
              ? showErrorMessage("URL is required")
              : null}
            {showValidation &&
            validation === "Url" &&
            url !== "" &&
            !matchYoutubeUrl(url)
              ? showErrorMessage("Invalid URL")
              : null}

            {editLink ? (
              <>
                <button
                  className="save-link-button"
                  type="submit"
                  onClick={updateLink}
                >
                  Edit
                </button>
                <button
                  className="save-link-button"
                  type="submit"
                  onClick={onDeleteLink}
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <button
                  className="save-link-button"
                  type="submit"
                  onClick={addLink}
                >
                  <strong>Save</strong>
                </button>
              </>
            )}
            <div className="desgthyukiloitersfd">
              {url !== "" && matchYoutubeUrl(url) ? (
                <ReactPlayer url={url} width={"100%"} height={350} />
              ) : null}
            </div>
          </form>
        </div>
      </SocialModal>
    </>
  );
};

export default AddEmbedPopup;

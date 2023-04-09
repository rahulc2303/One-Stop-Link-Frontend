import React, { useEffect, useState } from "react";
import { InputComponents } from "../../Inputs/input";
import SocialModal from "../SocialPopup/SocialPopup";
import "./addLinkPopup.css";

const AddLinkPopup = (props) => {
  const { show, onClose, save, editLink, editLinkDetails, edit, deleteLink } =
    props;

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [showValidation, setShowValidation] = useState(false);
  const [validation, setValidation] = useState("");

  useEffect(() => {
    setTitle(editLink && editLinkDetails ? editLinkDetails.title : "");
    setUrl(editLink && editLinkDetails ? editLinkDetails.url : "");
  }, [edit]);

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const saveLink = (url, title) => {
    const obj = {
      title: title,
      url: url,
      thumbnail: "",
      link_type: "link",
    };
    save(obj);
    setUrl("");
    setValidation("");
    setShowValidation(false);
    return setTitle("");
  };

  const addLink = (e) => {
    e.preventDefault();
    if (url === "" || title === "") {
      return setShowValidation(true);
    }

    if (validURL(url)) {
      if (url.substring(0, 5) === "https") {
        return saveLink(url, title);
      } else {
        setUrl("https://" + url);
        return saveLink(url, title);
      }
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

    if (validURL(url)) {
      if (url.substring(0, 5) === "https") {
        return saveUpdatedLink(url, title);
      } else {
        setUrl("https://" + url);
        return saveUpdatedLink(url, title);
      }
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
          className="error-messages-for-input-fields-title-url"
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
          <form className="form-set-show-link">
            {/* Input Title */}
            <h2 style={{ paddingBottom: "1em" }}>
              {" "}
              {editLink
                ? "Edit Link of your website"
                : "Add Link of your website"}
            </h2>
            {/* <hr /> */}
            <InputComponents
              type="text"
              label={" Title:"}
              placeholder={"Title"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={showValidation && title === "" ? true : false}
            />
            <br />
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
            !validURL(url)
              ? showErrorMessage("Invalid URL")
              : null}

            {editLink ? (
              <>
                <button
                  className="save-link-button"
                  type="submit"
                  onClick={updateLink}
                >
                  <strong>Edit</strong>
                </button>
                <button
                  className="save-link-button"
                  type="submit"
                  onClick={onDeleteLink}
                >
                  <strong>Delete</strong>
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
          </form>
        </div>
      </SocialModal>
    </>
  );
};

export default AddLinkPopup;

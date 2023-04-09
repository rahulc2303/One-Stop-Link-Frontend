import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePageByIdAction } from "../../../redux/action/page.action";
import "./deletepopup.css";

const DeletePopup = (props) => {
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const check = useSelector((state) => state.pages);
  const navigate = useNavigate();

  useEffect(() => {
    if (submit && !check.error && check.action && check.errorMessage === "") {
      setSubmit(false);
      navigate(`/select-page`, {
        replace: true,
        state: {
          deleted: true,
        },
      });
    }

    if (submit && check.error && !check.action && check.errorMessage !== "") {
      setSubmit(false);
      props.onClose();
    }
  }, [submit, check]);

  if (!props.show) {
    return null;
  }

  const deleteBioPage = (e) => {
    e.preventDefault();
    if (!props.pageId) {
      return null;
    }
    const payload = {
      pageId: props.pageId,
    };

    setSubmit(true);
    dispatch(deletePageByIdAction(payload));
  };

  return (
    <>
      <div className="Background-and-full-screen-for-dlete-modal-sd">
        <div className="mo-dal-ofr-height-in-sjsskxc">
          <div className="flex-d-for-header-and-close-btn">
            <h2>Delete</h2>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/1828/1828778.png"}
              alt=""
              style={{ height: "15px", width: "15px", cursor: "pointer" }}
              onClick={props.onClose}
            />
          </div>
          <div>
            <p className="uyio-awocld-ascxz">
              Are you sure you want to delete the link{" "}
              <strong>
                {props.profileName !== "" ? props.profileName : "Page"}
              </strong>{" "}
              This can’t be undone.
            </p>
          </div>

          <div className="flex-cancel-and-delete-btn-at-bottom">
            <button
              className="cancel-btn-at-delete-btn-in-modal-section"
              onClick={() => {
                props.onClose();
                setSubmit(false);
              }}
            >
              Cancel
            </button>{" "}
            {submit ? (
              <button className="delete-btn-at-delete-modal-section">
                <div className="loader-in-button-for-delete-popup"></div>
              </button>
            ) : (
              <button
                className="delete-btn-at-delete-modal-section"
                onClick={deleteBioPage}
              >
                Delete Link
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePopup;

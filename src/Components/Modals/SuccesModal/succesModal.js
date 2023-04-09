import React from "react";
import "./succesModal.css";

const SuccessModal = (props) => {

  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className="Background-and-full-screen-for-pop-up-of-dlete">
        <div className="flex-center-box-for-modal-of-success-in-shobio">
          <div className="text-of-succes-in-pop-of-succes">
            <h2> {props.msg && props.msg !== "" ? props.msg : "Success"}</h2>
            <h2 style={{ color: "#fff", cursor: "pointer" }} onClick={props.onClose}>X</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;

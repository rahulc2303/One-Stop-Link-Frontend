import React from "react";
import inputError from "../../Assets/Images/input_error.png";

const InputErrorMessage = (props) => {
  return (
    <>
      <div style={{ color: "red", fontSize: "14px" }}>
        <div
          style={{
            display: "flex",
            padding: "10px 0px",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img
            alt="Error"
            src={inputError}
            style={{ width: "18px", height: "18px" }}
          />{" "}
          {props?.errorMessage ?? "required"}
        </div>
      </div>
    </>
  );
};

export default InputErrorMessage;

import React from "react";
import "./errorMessage.css";

const ErrorMessage = (props) => {


  return (
    <>
      {/* Error Messege div  */}
      <div className="error-message-container-header">
        {/* Container for error icon and error message heading  */}
        <div className="for-error-icon-and-msg-heading">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7972/7972644.png"
            alt=""
            srcset=""
            style={{ height: "20px", width: "20px" }}
          />

          <strong> {props.title ?? "Issue"}</strong>
        </div>
        {/* for what is the error message text */}
        <div className="what-is-error-text">
          <ul className="text-error-unorderlist">
            <li>{props?.message ?? "Oops! Something went wrong. Please try again later."}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ErrorMessage;

import React from "react";
import "./Security.css";

const Security = () => {
  return (
    <div className="security-main-div">
      <div className="security-heading">
        <p>Security</p>

        <hr />
      </div>
      <div className="password-button-for-create">
        <h4>Password</h4>
        <div>
          <div className="main-div-container-for-btn">
            <div className="security-main">
              <div className="first-name">
                <p>You have not set a password on your account</p>
                <br />
                <button type="submit" className="create-pass-btn">
                  <b>Create Password</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;

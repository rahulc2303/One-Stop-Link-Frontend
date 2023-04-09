import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import LoginModal from "../Modals/LoginModal/LoginModal";

const HomeNavabar = (props) => {



  return (
    <>
      <div className="width-of-navbar-in-secound-section-part">
        <div className="flex-navbar-of-main-website">
          <div className="flex-option-with-logo-in-navabr">
            <Link to="/">
              <span className="navbar-title">
                One Stop Link
              </span>
            </Link>
          </div>
          <div className="btn-section-of-navbar-in-navabr-flex-section">
            {/* <button
              className="login-btn-in-navabr-secound"
              onClick={goToAccountsLogin}
            >
              Login
            </button> */}
            <button
              className="signup-btn-for-signup-in-secound-navbar"
              onClick={props.openSignupModal}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
      <LoginModal visible={props.show} onClose={props.onClose} />
    </>
  );
};

export default HomeNavabar;

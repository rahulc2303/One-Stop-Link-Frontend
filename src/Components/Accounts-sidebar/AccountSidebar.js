import React from "react";
import "./Accountsidebar.css";
import Logo from "../../Assets/Images/SignIn/shopify.png";

function AccountSidebar() {
  return (
    <>
      {/* main Container */}
      <div className="accounts-sidebar-main-container">
        <div className="accounts-sidebar">
          {/* logo */}
          {/* <img src={Logo} alt="shopifyLogo" style={{ height: "60px", width: "120px" }} /> */}
          <h2 className="title">Shopisthan</h2>
          {/* heading */}
          <h2 className="heading-title">Welcome To Shopisthan</h2>
          <p style={{ color: "gray" }}>Where do you want to go ?</p>

          {/* sidebar content */}
          <div className="sidebar-content">
            <div className="sidebar-first-content">
              <p className="text-sizing">Your Bio </p>
            </div>
            <div>
              {/* arrow img */}
              <img
                src="https://img.icons8.com/material-outlined/344/more-than.png "
                className="arrow-img"
                alt=""
              ></img>{" "}
            </div>
          </div>
          <div className="sidebar-content">
            <div className="sidebar-first-content">
              <p className="text-sizing">Your store </p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/material-outlined/344/more-than.png "
                className="arrow-img"
                alt=""
              ></img>{" "}
            </div>
          </div>
          {/* footer */}

          <div>
            <ul className="footer-content">
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSidebar;

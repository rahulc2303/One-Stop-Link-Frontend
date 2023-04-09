import React from "react";
import "./SidebarTablist.css";
const SidebarTablist = (props) => {
  return (
    <>
      <div className="tab-sidenav-container">
        <div className="tabSidenav">
          <div className="tab-container-general-security">
            {/* On click For general */}

            <button
              className="Active-button-for-links-in-sidenav"
              onClick={() => props.setActiveTab("General")}
            >
              <img
                className="icons-for-sidenavbar"
                src="https://cdn-icons.flaticon.com/png/128/1144/premium/1144760.png?token=exp=1658399646~hmac=29a1d5eed38e027c39be778aab879c07"
                alt=""
              />{" "}
              General
            </button>
          </div>
          <div className="tab-container-general-security">
            {" "}
            {/* On click For securitty */}
            <button
              className="Active-button-for-links-in-sidenav"
              onClick={() => props.setActiveTab("Security")}
            >
              <img
                className="icons-for-sidenavbar"
                src="https://cdn-icons-png.flaticon.com/128/3064/3064197.png"
                alt=""
              />{" "}
              Security
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarTablist;

import React from "react";
import DashboardNavabar from "../DashboardNavabar/dashboardnavabr";
import "./AccountSideNav.css";
import { useState } from "react";
import SidebarTablist from "../SidebarTablist/SidebarTablist";
import Security from "../Security/Security";
import GeneralPage from "../GeneralPage/GeneralPage";

const AccountSideNav = () => {
  // use staes for sidebar navbar
  const [activeTab, setActiveTab] = useState("General");

  const renderTabDetails = () => {
    if (activeTab === "General") {
      return (
        <>
          <GeneralPage />
        </>
      );
    } else if (activeTab === "Security") {
      return (
        <>
          <div>
            <Security />
          </div>
        </>
      );
    } else {
      return (
        <>
          <GeneralPage />
        </>
      );
    }
  };

  return (
    <>
      {/*  Side navigation  */}
      {/* <div className="sidenav"> */}
      <div style={{ width: "35em", display: "flex" }}>
        <div>
          {" "}
          <div className="sdvgbn">
            <SidebarTablist
              activeTab={activeTab}
              setActiveTab={(a) => {
                console.log("a", a);
                setActiveTab(a);
              }}
            />
            {/* <Tablist
                  activeTab={activeTab}
                  setActiveTab={(a) => {
                    console.log("a", a);
                    setActiveTab(a);
                  }}
                /> */}
          </div>{" "}
        </div>
        <div className="row-links">{renderTabDetails()}</div>
      </div>
      {/* </div> */}

      {/*  Page content  */}
    </>
  );
};

export default AccountSideNav;

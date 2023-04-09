import React from "react";
import DeletePopup from "../Modals/DeleteModal/DeletePopup";
import "../Tablist/Tablist.css";

const Tablist = (props) => {
  return (
    <>
      <div className="tab-container-analytics">
        {/* On click For Link */}
        <div className="flex-direction-for-delete-btn-df">
          <button
            className={
              props.activeTab === "Link"
                ? "Active-buttppn-for-links-in-tab"
                : "InActive-buttppn-for-links-in-tab"
            }
            onClick={() => props.setActiveTab("Link")}
          >
            Links
          </button>

          {/* On click For Style */}

          <button
            className={
              props.activeTab === "Design"
                ? "Active-buttppn-for-links-in-tab"
                : "InActive-buttppn-for-links-in-tab"
            }
            onClick={() => props.setActiveTab("Design")}
          >
            Design
          </button>

          {/* On click For Stat */}

          <button
            className={
              props.activeTab === "Bio"
                ? "Active-buttppn-for-links-in-tab"
                : "InActive-buttppn-for-links-in-tab"
            }
            onClick={() => props.setActiveTab("Bio")}
          >
            Bio
          </button>

          {/* On click For Stat */}
        </div>
        <button
          className="publish-btn-at-tab-list-in-dashboard"
          onClick={props.publish}
        >
          Publish
        </button>
        <button
          className="delete-btn-at-tab-list-in-dashboard"
          onClick={props.setShowDeleteModal}
        >
          Delete Page
        </button>
      </div>
    </>
  );
};

export default Tablist;

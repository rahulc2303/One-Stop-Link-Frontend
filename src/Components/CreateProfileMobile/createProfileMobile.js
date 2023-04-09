import React from "react";
import "./createProfileMobile.css";
import User from "../../Assets/Images/user.png";

const CreateProfileMobile = (props) => {
  return (
    <>
      <div>
        <div style={{ padding: "0em 5em" }}>
          <div className="cpm-smartphone">
            <div style={{ display: "flex", justifyContent: "center" }}>
              {props.imageUri !== "" ? (
                <img
                  className="cpm-photo-logo-smartphone"
                  src={props.imageUri}
                  alt="pic"
                  srcset=""
                />
              ) : (
                <img
                  className="cpm-photo-logo-smartphone"
                  src={User}
                  alt="pic"
                  srcset=""
                />
              )}
            </div>
            <div className="user-name-in-phone-view-sho-bio">
              {props.profileName !== "" ? props.profileName : "Profile name"}
            </div>

            <div className="user-description-in-one-phone-view-sect">
              {props.profileDescription !== ""
                ? props.profileDescription
                : "Profile description"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProfileMobile;

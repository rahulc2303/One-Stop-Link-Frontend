import React from "react";
import DashboardNavabar from "../DashboardNavabar/dashboardnavabr";
import "./GeneralPage.css";

function GeneralPage() {
  return (
    <>
      <div>
        <DashboardNavabar />
      </div>
      {/*  Side navigation  */}

      <div className="sidenav">
        <div>
          <a href="">General</a>
        </div>
        <div>
          <a href="#">Security</a>
        </div>
      </div>

      {/*  Page content  */}
      <div className="main-page-content">
        <div className="general-main-div">
          <div className="general">
            <h3>General</h3>

            <hr />
          </div>
          <div className="details">
            <h4>Details</h4>
            <div className="main-box">
              <div className="al-box">
                <span className="circle-AL">AL</span>

                <button className="upload-photo-button" type="button">
                  Upload photo
                </button>
                <button className="remove-photo" type="button">
                  Remove photo
                </button>
              </div>
              <div className="main-div-container">
                <div className="first-lastname-main">
                  <div className="first-name">
                    <p>First Name</p>
                    <input
                      className="input-text-firstname"
                      type="text"
                      name="FirstName"
                      placeholder="FirstName"
                    />
                  </div>

                  <div className="first-name">
                    <p>Last Name</p>
                    <input
                      className="input-text-firstname"
                      type="text"
                      name="LastName"
                      placeholder="LastName"
                    />
                  </div>
                </div>
                <div className="content-use-your">
                  <p>
                    Use your first and last name as they appear on your
                    government-issued ID.
                  </p>
                </div>
                <div className="email-phone">
                  <div className="first-name">
                    <p>Email</p>
                    <div className="mail-address">
                      {" "}
                      <p>avneet.shopisthan@gmail.com</p>
                    </div>
                    <div className="change-email">
                      <p>Change email</p>
                    </div>
                  </div>
                  <div className="first-name">
                    <p>Phone(optional)</p>
                    <input
                      className="input-text-firstname"
                      type="text"
                      name="Phone(optional)"
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralPage;

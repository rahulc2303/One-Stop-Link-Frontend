import React from "react";
import "./DashboardSelect.css";

function DashboardSelect() {
  return (
    <>
      <div className="main">
        <div className="main-div">
          <div className="linkpop-main">
            <div className="linkpop">
              <h3>Shobio</h3>

              <div>
                <button className="create-button" type="button">
                  Create page
                </button>
              </div>
            </div>
          </div>
          <div className="select">
            <p>Select a page to continue</p>
          </div>
          <div className="box">
            <div className="home-logo-background-circle">
              <div className="image-styling-in-logo">
                <img
                  className="home-logo"
                  src="https://cdn-icons.flaticon.com/png/128/3405/premium/3405771.png?token=exp=1658397629~hmac=a7e672544d4edbbc40f354fe8b2d1864"
                  alt=""
                ></img>
              </div>

              <h4>avni</h4>
            </div>
            <div>
              <img
                className="greater-than-sign"
                src="https://t4.ftcdn.net/jpg/03/76/69/25/240_F_376692508_XUzZzz0x3W34II8NlIOfqZQ2Lc26kh58.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardSelect;

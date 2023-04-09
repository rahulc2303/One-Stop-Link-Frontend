import React from "react";
import LogoShoBio from "../../Assets/Images/shoboilogo.png";
import "./dashboardnavbar.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignoutAction } from "../../redux/action/auth.action";

const DashboardNavabar = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(userSignoutAction(navigate));
  };

  const shareNavBar = () => {
    return (
      <div className="flex-dash-inside-nav-reverse-part-df">


        <button className="user-dropbtn">
          {auth?.email ?? "Guest User"}
        </button>

        <button
          className="Share-btn-for-sahring-page-profile"
          onClick={props.shareBioPage}
        >
          Share
        </button>
      </div>
    );
  };

  const navbar = () => {
    return (
      <>
        <div className="flex-dash-inside-nav-reverse-part-df">
          <button className="user-dropbtn">
            {auth?.email ?? "Guest User"}
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="width-of-navbar-in-secound-section-part">
        <div className="dashboard-flex-navabr-in-dashboard">
          <div className="flex-option-with-logo-in-navabr">
            <Link to="/select-page">
              <span className="dashboard-navbar-title">
                ONE STOP LINK
              </span>
            </Link>
          </div>
          {props.share ? shareNavBar() : navbar()}
        </div>
      </div>
    </>
  );
};

export default DashboardNavabar;

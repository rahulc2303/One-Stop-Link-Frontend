import React, { useState } from 'react'
import HomeNavabar from '../../Components/HomeScreenNavbar/Navbar';

import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {

  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);

  const openSignupModal = () => {
    return setShow(true)
  }


  if (auth && auth.authenticate) {
    navigate(`/select-page`);
  }



  const SectionOne = () => {
    return (
      <>
        <div style={{ paddingTop: "180px", background: "#ffd901" }}>
          <h1 className="main-header-at-wesite-in-landing-section">
            One Stop Link - Your All-In-One Solution for Link Management
          </h1>
          <div className="flex-ceneter-input-section">
            <div className="flex-input-with-isde-alradey-content-de">
              <p className="shop-io-sw-xjemswqa">onestoplink/</p>
              <input
                className="input-for-newname-of-page-username"
                placeholder="pagename"
              />
              <button
                className="create-page-btn-at-center-position"
                onClick={openSignupModal}
              >
                Create Page
              </button>
            </div>
            <button
              className="without-respos-in-respo-cj"
              onClick={openSignupModal}
            >
              Create Page
            </button>
          </div>
        </div>
      </>
    );
  };



  const SecoundSection = () => {
    return (
      <>
        <>
          <div style={{ margTop: "80px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                background: "rgb(255, 217, 1)",
              }}
            >
              <h2 className="Secound-header-in-website-page-only-in-wesi-sjf-df">
                Create a Single Link to Share All Your Online Content
              </h2>
            </div>
          </div>
        </>
      </>
    );
  };

  return (
    <>
      <div className="fullscreen-background-color-full-view">
        <HomeNavabar show={show} setShow={setShow} openSignupModal={openSignupModal} onClose={() => {
          setShow(false)
        }} />
        <SectionOne />
        <SecoundSection />
      </div>
    </>
  )
}

export default Home
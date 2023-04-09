import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./SelectPage.css";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardNavabar from "../../Components/DashboardNavabar/dashboardnavabr";
import SuccessModal from "../../Components/Modals/SuccesModal/succesModal";
import Logo from "../../Assets/Images/mobile.png";


const SelectPage = () => {
  const location = useLocation();
  const pages = useSelector((state) => state.pages.pages);
  const navigate = useNavigate();
  const [showDeletedSuccessModal, setShowDeletedSuccessModal] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowDeletedSuccessModal(false)
    }, 1500)

    return () => {
      clearTimeout(timeId)
    }
  }, []);



  useEffect(() => {
    if (location?.state?.deleted) {
      setShowDeletedSuccessModal(true)
    }
  }, [location?.state?.deleted]);



  const createPage = () => {
    navigate(`/create-new-page`);
  }

  const goToDashboard = (url, bio) => {
    if (!url) {
      return null;
    }

    navigate(`/select-page/${url}`, {
      state: {
        created: true,
        newPage: bio,
      },
    });
  };



  const onClickOnContent = (e) => {
    e.preventDefault();
    if (showModal) {
      return setShowModal(false);
    }
  }


  const renderPagesList = () => {
    return (
      <>
        <div className="linkpop-main">
          <div className="linkpop">
            <div className="shobio-heading-text">
              <p>One Stop Link</p>
            </div>
            <div className="search-bar-and-icon-flex-container">
              <button className="create-button" type="button" onClick={createPage}>
                Create page
              </button>
            </div>
          </div>
          <div className="select-text-after-heading-section">
            <p>Select a page to continue</p>
          </div>
          <div className="main-container-for-boxes">
            {
              pages.map((bio, index) => (
                <div
                  className="box"
                  id="box-for-first-username"
                  key={index}
                  onClick={() => goToDashboard(bio.page_url, bio)}
                >
                  <div className="logo-and-text-section">
                    <div className="home-logo-background-circle">
                      <div className="image-styling-in-logo">
                        <img
                          className="home-logo-for-page"
                          src="https://cdn-icons-png.flaticon.com/128/726/726569.png"
                          alt=""
                        ></img>
                      </div>
                    </div>
                    <div className="for-text-after-icon">
                      <span>{bio.page_profile_name}</span>
                    </div>
                  </div>
                  <div>
                    <img
                      className="greater-than-sign"
                      src="https://cdn-icons-png.flaticon.com/128/7772/7772244.png"
                      alt=""
                    ></img>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </>

    )
  }


  const renderCreatePageButton = () => {
    return (
      <>
        <div className="container-create-page">
          <div className="mobile-back">
            <img src={Logo} alt="mobileLogo" className="mobile-logo" />
          </div>
          {/* <div class="container-create-page"> */}
            <h2 className="get-start">Let’s get started</h2>
            <p className="create-profile">
              Create the profile page where all your links will live.
            </p>{" "}
            <div>
              <div className="submit-button">
                <button
                  type="submit"
                  className="button-create-page"
                  onClick={createPage}
                >
                  Create page
                </button>
              </div>
            </div>
          {/* </div> */}
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <DashboardNavabar showModal={showModal} setShowModal={(val) => setShowModal(val)} />
      </div>

      <div className="main" onClick={(e) => { showModal && onClickOnContent(e) }}>
        <div className="main-div">



          {
            pages.length > 0 ? renderPagesList() : renderCreatePageButton()
          }

        </div>
      </div>
      <SuccessModal show={showDeletedSuccessModal} onClose={() => { setShowDeletedSuccessModal(false) }} msg={"Deleted!"} />
    </>
  );
};

export default SelectPage;

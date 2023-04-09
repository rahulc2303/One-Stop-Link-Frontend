import React, { useEffect, useRef } from "react";
import "./navbarpopup.css";

const NavbarModal = (props) => {
  if (!props.visible) {
    return null;
  }

  return (
    <>
      <div className="modalFixedBg">
        <div style={{ position: "relative" }}>
          <div className="bcc-navbr-main-pop-up-container">
            <div>
              <div className="flex-box-of-new-navabr-pop-close-section-navbar">
                <p className="Logoname-in-navabr-off-pop-up-sectionn">SIPL</p>
                <div className="flex-d-rectionn-login-and-close-one-part">
                  <p
                    className="color-with-login-btn-at-main-navabr"
                    style={{ fontSize: "18px" }}
                    onClick={props.goToAccountsLogin}
                  >
                    Login
                  </p>
                  <svg
                    onClick={props.onClose}
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ cursor: "pointer" }}
                  >
                    <metadata>
                      Created by potrace 1.16, written by Peter Selinger
                      2001-2019
                    </metadata>
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      fill="#fff"
                      stroke="none"
                    >
                      <path
                        d="M445 5089 c-229 -27 -406 -215 -422 -449 -7 -94 9 -171 52 -258 31
-61 111 -144 910 -942 l875 -875 -884 -885 c-926 -928 -924 -926 -960 -1049
-22 -76 -21 -213 3 -290 47 -151 157 -257 308 -296 72 -19 241 -19 309 -1 128
34 115 22 1044 951 l875 875 880 -879 c929 -928 907 -908 1036 -945 77 -23
240 -23 316 -1 203 58 333 235 333 454 0 108 -25 196 -76 273 -20 29 -430 445
-912 925 l-877 871 876 879 c829 831 877 881 904 943 83 190 43 411 -99 550
-110 108 -208 145 -369 138 -122 -6 -189 -29 -274 -93 -32 -24 -436 -422 -897
-884 l-840 -840 -873 869 c-620 617 -888 877 -926 898 -92 53 -201 74 -312 61z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarModal;

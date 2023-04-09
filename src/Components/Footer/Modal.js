import React, { useEffect, useRef } from "react";
import "./modal.css";

const Modal = (props) => {
  if (!props.visible) {
    return null;
  }

  return (
    <>
      <div className="modalFixedBg">
        <div style={{ position: "relative" }}>
          <div className="footer-modal-container-inti-ceo">
            {" "}
            <div className="modalClose" onClick={props.onClose}>
              {/* <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="24px"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="grey"
                  stroke="none"
                >
                  <path
                    d="M2310 5114 c-284 -34 -517 -93 -748 -190 -767 -321 -1344 -1020
                          -1511 -1829 -70 -342 -70 -728 0 -1070 198 -959 956 -1736 1914 -1960 221 -52
                          303 -60 595 -60 292 0 374 8 595 60 958 224 1716 1001 1914 1960 70 342 70
                          728 0 1070 -196 951 -947 1726 -1894 1956 -203 49 -311 61 -575 64 -140 2
                          -271 1 -290 -1z m-572 -1460 c25 -10 165 -143 429 -407 l393 -391 393 391
                          c264 264 404 397 429 407 129 54 275 -32 286 -168 8 -103 14 -97 -416 -529
                          l-396 -397 391 -393 c264 -264 397 -404 407 -429 54 -129 -32 -275 -168 -286
                          -104 -8 -96 -14 -528 416 l-398 396 -397 -396 c-432 -430 -426 -424 -529 -416
                          -136 11 -222 157 -168 286 10 25 143 165 407 429 l391 393 -396 397 c-430 432
                          -424 426 -416 529 11 136 157 222 286 168z"
                  />
                </g>
              </svg> */}
              <img
                src={"https://cdn-icons-png.flaticon.com/512/1828/1828778.png"}
                alt=""
                style={{ height: "15px", width: "15px" }}
              />
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

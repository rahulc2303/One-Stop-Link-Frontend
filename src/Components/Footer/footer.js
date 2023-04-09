import React, { useState } from "react";
import Modal from "./Modal";
import "./footer.css";
import FacebookSvg from "../../Assets/Svg/facebookSvg";
import TwitterSvg from "../../Assets/Svg/twitterSvg";
import YoutubeSvg from "../../Assets/Svg/youtubeSvg";
import InstagramSvg from "../../Assets/Svg/instagramSvg";
import LinkedinSvg from "../../Assets/Svg/linkedinSvg";
import PinterestSvg from "../../Assets/Svg/pinterestSvg";

function FooterBottom() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <div className="flex-options-of-footer-in-two-ways-inline">
          <div>
            <ul className="ull-list-of-footer-in-bottom-area">
              <li>2022 Shopisthan India, Pvt Ltd.</li>
              {/* <li className="hide-in-respo-ns-cj-camas">Privacy</li>
              <li className="hide-in-respo-ns-cj-camas">Terms</li>
              <li className="hide-in-respo-ns-cj-camas">Sitemap</li>
              <li className="hide-in-respo-ns-cj-camas">Company details</li> */}
            </ul>
          </div>
          <div
            className="ull-list-of-footer-in-bottom-area"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            <div
              className="flex-bt-for-onpening-pop-of-new-footer"
              onClick={() => setShow(true)}
            >
              <p className="fonr-size-in-respo">Support & resources</p>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="uhijnkmlsdoapsklz"
              >
                <g fill="none">
                  <path d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* <button onClick={() => setShow(true)}>Open</button> */}
        <Modal visible={show} onClose={() => setShow(false)}>
          <div className="Flexinside-footer-with-padding-inside-in">
            <div>
              <h2 className="Header-in-header-tags-with-pad">Connect</h2>
              <a href="https://www.shopisthan.com/career/">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  Join Our Team
                </p>
              </a>
              <a href="https://accounts.shopisthan.io/signup/create-online-store">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  By Signup
                </p>
              </a>
              <p className="class-for-pointer-tags-in-footers-in-it">
                On Social Channels
              </p>
              <div className="flex-gap-social-icons-asinxa">
                <a href="https://www.facebook.com/shopisthanindia">
                  <FacebookSvg />
                </a>
                <a href="https://instagram.com/shopisthandotcom?igshid=YmMyMTA2M2Y=">
                  <InstagramSvg />
                </a>
                <a href="https://www.linkedin.com/company/shopisthan-india-private-limited/">
                  <LinkedinSvg />
                </a>
                {/* <PinterestSvg />
<TwitterSvg /> */}
                <a href="https://youtube.com/channel/UCXl97fhhgP63RApsLvwmhSA">
                  <YoutubeSvg />
                </a>
              </div>

              {/* <p className="class-for-pointer-tags-in-footers-in-it">Pricing</p>
              <p className="class-for-pointer-tags-in-footers-in-it">
                Store themes
              </p>
              <p className="class-for-pointer-tags-in-footers-in-it">
                Supports
              </p> */}
            </div>
            <div>
              <h2 className="Header-in-header-tags-with-pad">Product</h2>
              {/* <p className="class-for-pointer-tags-in-footers-in-it">About</p> */}
              <a href="https://www.shopisthan.com/online-store">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  How it works?
                </p>
              </a>
              <a href="https://www.shopisthan.com/online-store">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  {" "}
                  Features
                </p>
              </a>
              <a href="https://www.shopisthan.com/online-store/pricing">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  Pricing
                </p>
              </a>
              <a href="https://www.shopisthan.com/online-store/themes">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  Theme's
                </p>
              </a>
              <a
                href="https://www.shopisthan.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <p className="class-for-pointer-tags-in-footers-in-it">
                  {" "}
                  Request for a Demo
                </p>
              </a>
              <a
                href="https://www.shopisthan.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <p className="class-for-pointer-tags-in-footers-in-it">
                  {" "}
                  What is Online Store?
                </p>
              </a>
            </div>
            <div>
              <h2 className="Header-in-header-tags-with-pad">Collaborate</h2>
              <a href="https://www.shopisthan.com/collaborate-as-a-partner">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  Earn Commission
                </p>
              </a>
              <a href="https://www.shopisthan.com/collaborate-as-a-partner">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  As a Partner Agency
                </p>
              </a>
              <a href="https://www.shopisthan.com/collaborate-as-a-partner">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  As a Influencer
                </p>
              </a>
            </div>
            <div>
              <h2 className="Header-in-header-tags-with-pad">Explore</h2>

              <a href="https://www.shopisthan.com/online-store/mobile-app">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  About Us
                </p>
              </a>
              <a href="https://www.shopisthan.com/blogs/">
                <p className="class-for-pointer-tags-in-footers-in-it">Blogs</p>
              </a>
              <a href="https://www.shopisthan.com/case-study">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  Case Study
                </p>
              </a>
              <a href="https://www.shopisthan.com/online-store/mobile-app">
                <p className="class-for-pointer-tags-in-footers-in-it">
                  Learn more about Mobile App
                </p>
              </a>
              <a
                href="https://www.shopisthan.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <p className="class-for-pointer-tags-in-footers-in-it">
                  Ask an Expert
                </p>
              </a>
            </div>
          </div>
          <div>
            {/* <hr /> */}
            <div className="flex-insta-and-id-shop-and-social">
              <p>© 2020 - 2022 - Shopisthan India Private Limited.</p>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default FooterBottom;

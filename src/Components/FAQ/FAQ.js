import React, { useState } from "react";
import "./faq.css";

const FeqAskQue = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  return (
    <section>
      <div className="display-flex-and-justify-it-to-center">
        <div className="paddingtworem">
          <div>
            <h2 class="balance-text-frequentlyasked">
              Frequently
              <br /> Asked Questions
            </h2>
            <h2 class="balance-text-frequentlyasked-without-respo">
              Frequently Asked Questions
            </h2>
          </div>

          {/* ---------- */}
          <ul className="lsitofquestionasked-list">
            <li className="question-in-the-list-li">
              <h3 class="h6-gap-none">
                <div
                  class="hotspot"
                  data-transition-state="on"
                  data-transition-target="accordion-20KohBp1Ak1ttF22GLQpi0"
                  // href="#"
                >
                  <div
                    class="grid-flex-grid-valign-middle"
                    onClick={() => setFaq1(!faq1)}
                  >
                    <div class="column-expand">What is Shobio?</div>
                    {faq1 ? (
                      <img
                        style={{
                          // marginTop: "5px",
                          height: "0.8em",
                          marginLeft: "2px",
                        }}
                        src={
                          "https://cdn-icons-png.flaticon.com/128/271/271239.png"
                        }
                        alt="LandingLogo"
                      />
                    ) : (
                      <img
                        style={{
                          // marginTop: "5px",
                          height: "0.8em",
                          marginLeft: "2px",
                        }}
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_IMj2E9acZBj7knqWSACkuiwyHo9CgQSJg&usqp=CAU"
                        }
                        alt="LandingLogo"
                      />
                    )}
                  </div>
                  {faq1 ? (
                    <div
                      class="gap-none"
                      data-transition-state="off"
                      data-transition-types="collapse fade"
                      id="accordion-6Os5iM8UKxjXwp4BvE3Se"
                    >
                      <p
                        className="balance-text"
                        style={{ fontWeight: "500", marginTop: "10px" }}
                      >
                        Shobio is a link in bio tool powered by Shopisthan India
                        Private Limited (SIPL) which let you send your followers
                        or visitors to a collection of your important links.You
                        can create your one page website for all your profiles
                        and you can add this link to your Social channels,
                        websites, youtube Channels.
                      </p>
                    </div>
                  ) : null}
                </div>
              </h3>
            </li>
            <li className="question-in-the-list-li">
              <h3 class="h6-gap-none">
                <div
                  class="hotspot"
                  data-transition-state="on"
                  data-transition-target="accordion-20KohBp1Ak1ttF22GLQpi0"
                >
                  <div
                    class="grid-flex-grid-valign-middle"
                    onClick={() => setFaq2(!faq2)}
                  >
                    <div class="column-expand">Is Shobio free?</div>
                    {faq2 ? (
                      <img
                        style={{
                          // marginTop: "5px",
                          height: "0.8em",
                          marginLeft: "2px",
                        }}
                        src={
                          "https://cdn-icons-png.flaticon.com/128/271/271239.png"
                        }
                        alt="Logo"
                      />
                    ) : (
                      <img
                        style={{
                          // marginTop: "5px",
                          height: "0.8em",
                          marginLeft: "2px",
                        }}
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_IMj2E9acZBj7knqWSACkuiwyHo9CgQSJg&usqp=CAU"
                        }
                        alt="Logo"
                      />
                    )}
                  </div>
                  {faq2 ? (
                    <div
                      class="gap-none"
                      data-transition-state="off"
                      data-transition-types="collapse fade"
                      id="accordion-6Os5iM8UKxjXwp4BvE3Se"
                    >
                      <p
                        className="balance-text"
                        style={{ fontWeight: "500", marginTop: "10px" }}
                      >
                        Shobio is created by SIPL and it is absolutely free for
                        everyone. You just need to create your account to use
                        it.
                      </p>
                    </div>
                  ) : null}
                </div>
              </h3>
            </li>
            <li className="question-in-the-list-li">
              <h3 class="h6-gap-none">
                <div
                  class="hotspot"
                  data-transition-state="on"
                  data-transition-target="accordion-20KohBp1Ak1ttF22GLQpi0"
                  href="#"
                >
                  <div
                    class="grid-flex-grid-valign-middle"
                    onClick={() => setFaq3(!faq3)}
                  >
                    <div class="column-expand">
                      What does it mean by Link in Bio?
                    </div>
                    {faq3 ? (
                      <img
                        style={{
                          // marginTop: "5px",
                          height: "0.8em",
                          marginLeft: "2px",
                        }}
                        src={
                          "https://cdn-icons-png.flaticon.com/128/271/271239.png"
                        }
                        alt="Logo"
                      />
                    ) : (
                      <img
                        style={{
                          // marginTop: "5px",
                          height: "0.8em",
                          marginLeft: "2px",
                        }}
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_IMj2E9acZBj7knqWSACkuiwyHo9CgQSJg&usqp=CAU"
                        }
                        alt="Logo"
                      />
                    )}
                  </div>
                  {faq3 ? (
                    <div
                      class="gap-none"
                      data-transition-state="off"
                      data-transition-types="collapse fade"
                      id="accordion-6Os5iM8UKxjXwp4BvE3Se"
                    >
                      <p
                        className="balance-text"
                        style={{ fontWeight: "500", marginTop: "10px" }}
                      >
                        According to the name “Link-in Bio” refers to one
                        clickable URL that you can add to your profile section.
                        Many social media channels allow to provide one link in
                        your bio which leads your followers and visitors to your
                        website.
                      </p>
                    </div>
                  ) : null}
                </div>
              </h3>
            </li>
            <li className="question-in-the-list-li">
              <h3 class="h6-gap-none">
                <div
                  class="hotspot"
                  data-transition-state="on"
                  data-transition-target="accordion-20KohBp1Ak1ttF22GLQpi0"
                >
                  <div
                    class="grid-flex-grid-valign-middle"
                    onClick={() => setFaq4(!faq4)}
                  >
                    <div class="column-expand">Where can I use the Shobio?</div>
                    {faq4 ? (
                      <img
                        style={{
                          // marginTop: "5px",
                          height: "0.8em",
                          marginLeft: "2px",
                        }}
                        src={
                          "https://cdn-icons-png.flaticon.com/128/271/271239.png"
                        }
                        alt="Logo"
                      />
                    ) : (
                      <img
                        style={{
                          // marginTop: "5px",
                          height: "0.8em",
                          marginLeft: "2px",
                        }}
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_IMj2E9acZBj7knqWSACkuiwyHo9CgQSJg&usqp=CAU"
                        }
                        alt="Logo"
                      />
                    )}
                  </div>
                  {faq4 ? (
                    <div
                      class="gap-none"
                      data-transition-state="off"
                      data-transition-types="collapse fade"
                      id="accordion-6Os5iM8UKxjXwp4BvE3Se"
                    >
                      <p
                        className="balance-text"
                        style={{ fontWeight: "500", marginTop: "10px" }}
                      >
                        Shobio enables you to use more than one link in you
                        social media bio. You can use it in your social media
                        bios, email signature, video description, forum,
                        webinars, live streams etc
                      </p>
                    </div>
                  ) : null}
                </div>
              </h3>
            </li>
            <li className="question-in-the-list-li">
              <h3 class="h6-gap-none">
                <div
                  class="hotspot"
                  data-transition-state="on"
                  data-transition-target="accordion-20KohBp1Ak1ttF22GLQpi0"
                  href="#"
                >
                  <div
                    class="grid-flex-grid-valign-middle"
                    onClick={() => setFaq5(!faq5)}
                  >
                    <div class="column-expand">
                      Do I need a website for creating a profile on Shobio?
                    </div>
                    {faq5 ? (
                      <img
                        style={{
                          // marginTop: "5px",
                          height: "0.8em",
                          marginLeft: "2px",
                        }}
                        src={
                          "https://cdn-icons-png.flaticon.com/128/271/271239.png"
                        }
                        alt="Logo"
                      />
                    ) : (
                      <img
                        style={{
                          // marginTop: "5px",
                          height: "0.8em",
                          marginLeft: "2px",
                        }}
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_IMj2E9acZBj7knqWSACkuiwyHo9CgQSJg&usqp=CAU"
                        }
                        alt="Logo"
                      />
                    )}
                  </div>
                  {faq5 ? (
                    <div
                      class="gap-none"
                      data-transition-state="off"
                      data-transition-types="collapse fade"
                      id="accordion-6Os5iM8UKxjXwp4BvE3Se"
                    >
                      <p
                        className="balance-text"
                        style={{ fontWeight: "500", marginTop: "10px" }}
                      >
                        No, you do not need any website for creating a profile
                        on Shobio. Shobio itself is a micro website for all your
                        links
                      </p>
                    </div>
                  ) : null}
                </div>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeqAskQue;

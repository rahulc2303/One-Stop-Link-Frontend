import React from "react";
import "./DesignComponent.css";
import { InputComponents } from "../../Components/Inputs/input";

const DesignComponent = (props) => {
  const options = [
    "Cursive",
    "Fantasy",
    "Inherit",
    "Initial",
    "Monospace",
    "Revert",
    "Sans-Serif",
    "Serif",
    "Unset",
  ];

  const BoxCompo = (props) => {
    return (
      <>
        <div
          className="link-back-design-color-or-image-section "
          style={{ marginBottom: "2em" }}
        >
          <div>
            <p className="font-header-in-link-style-design-compo">
              {props.title}
            </p>
          </div>
          <div>{props.children}</div>
        </div>
      </>
    );
  };





  const handleProfileImage = (e) => {
    e.preventDefault();

    const fsize = e.target.files[0].size;

    // if (fsize > 2e6) {
    //   return null;
    // } else {
    props.setBackGroundImageUri(URL.createObjectURL(e.target.files[0]));
    
    props.setBackGroundPhoto(e.target.files[0]);
    return (e.target.value = "");
    // }
  };


  const renderBackGroundOtion = () => {
    return (
      <div>
        <div className="Flex-color-and-add-images-in-style-bio">
          <p
            className={props.backGroundType === "color" ? "active-color-one-bottom-border-in-side" : "inactive-color-one-bottom-border-in-side"}
            onClick={() => props.setBackGroundType("color")}
          >Color</p>
          <p
            className={props.backGroundType === "image" ? "active-color-one-bottom-border-in-side" : "inactive-color-one-bottom-border-in-side"}
            onClick={() => props.setBackGroundType("image")}
          >Image</p>
        </div>
        <div style={{ padding: "20px" }}>
          {
            props.backGroundType === "color" ?
              <>
                <p>Background color</p>
                <div className="Flex-color-box-and-input-for-color-background">
                  <input
                    type={"color"}
                    id="card-color"
                    name="card-color"
                    value={props.backGroundColor}
                    onChange={props.setBackGroundColor}
                    className="color-picker0style-in-side-design-compo"
                  />
                  {/* <div className="Color-box-in-side-of-innput-deing-sa"></div> */}
                  {/* <InputComponents placeholder={"#000000"} /> */}
                </div>
              </>

              :
              null
          }

          {
            props.backGroundType === "image" ?
              <>
                <p>Background Image</p>
                <input type="file"
                  id="file"
                  name="img"
                  accept="image/*"
                  onChange={handleProfileImage}
                  style={{ display: "none" }}

                />
                <div className="Flex-color-box-and-input-for-color-background">
                  {
                    props?.backGroundImageUri && props.backGroundImageUri !== "" ?
                      <div className="selected-image-and-remove-button">
                        <img
                          src={props.backGroundImageUri}
                          alt=""
                          srcset=""
                          className="image-addded-in-shoi-boi-for-profile-pic"
                        />

                        <button className="open-file-btn-in-create-page" onClick={() => {
                          props.setBackGroundImageUri("");
                          props.setBackGroundPhoto("");
                        }}>
                          {" "}
                          <b> Remove Photo</b>
                        </button>
                      </div>
                      :
                      <label for="file">
                        <div className="open-file-btn-in-create-page">
                          Upload image
                        </div>
                      </label>
                  }
                </div>
              </>

              :
              null
          }

        </div>
      </div>
    )
  }


  return (
    <>
      {/* Profile section in the Design part of the dashboard */}
      <div
        className="link-back-design-color-or-image-section"
        style={{ height: "170px" }}
      >
        {
          renderBackGroundOtion()
        }


        <br />
      </div>
      <BoxCompo title="Text">
        <div style={{ padding: "0px 20px 20px 20px" }}>
          <InputComponents
            type="select"
            storeType
            label="Font"
            options={options}
            value={props.textFont}
            onChange={props.setTextFont}
          />

          <input
            type={"color"}
            id="card-color1"
            name="card-color1"
            style={{ marginTop: "10px" }}
            className="color-picker0style-in-side-design-compo"
            value={props.textColor}
            onChange={props.setTextColor}
          />
        </div>
      </BoxCompo>
      <BoxCompo title="Link Style">
        <div>
          <div style={{ padding: "20px" }}>
            <p>Card color</p>

            <div className="Flex-color-box-and-input-for-color-background">
              <input
                type={"color"}
                id="card-color"
                name="card-color"
                value={props.cardColor}
                onChange={props.setCardColor}
                className="color-picker0style-in-side-design-compo"
              />
              {/* <div className="Color-box-in-side-of-innput-deing-sa" ></div> */}

              {/* <InputComponents placeholder={"#000000"} /> */}
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <p>Link color</p>
            <div className="Flex-color-box-and-input-for-color-background">
              {/* <div className="Color-box-in-side-of-innput-deing-sa"></div> */}
              <input
                type={"color"}
                id="card-color"
                name="card-color"
                value={props.linkColor}
                onChange={props.setLinkColor}
                className="color-picker0style-in-side-design-compo"
              />
              {/* <InputComponents placeholder={"#000000"} /> */}
            </div>
          </div>
          <div style={{ padding: "0px 20px" }}>
            <p style={{ padding: "0px 0px 20px 0px" }}>Card shape</p>
            <div style={{ display: "flex", gap: "30px" }}>
              <div
                className={
                  props.cardShape === "rectangle"
                    ? "Active-Box-for-diff-shaeps-in-card"
                    : "Box-for-diff-shaeps-in-card"
                }
                onClick={() => props.setCardShape("rectangle")}
              >
                <div className="box-of-smpleiasdf"></div>
              </div>

              <div
                className={
                  props.cardShape === "reactangle-border"
                    ? "Active-Box-for-diff-shaeps-in-card"
                    : "Box-for-diff-shaeps-in-card"
                }
                onClick={() => props.setCardShape("reactangle-border")}
              >
                <div
                  className="box-of-smpleiasdf"
                  style={{ borderRadius: "5px" }}
                ></div>
              </div>
              <div
                className={
                  props.cardShape === "oval"
                    ? "Active-Box-for-diff-shaeps-in-card"
                    : "Box-for-diff-shaeps-in-card"
                }
                onClick={() => props.setCardShape("oval")}
              >
                <div
                  className="box-of-smpleiasdf"
                  style={{ borderRadius: "20px", width: "73px" }}
                ></div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </BoxCompo>
    </>
  );
};

export default DesignComponent;

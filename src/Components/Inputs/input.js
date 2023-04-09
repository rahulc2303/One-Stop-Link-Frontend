import React from "react";
import "./input.css";

const InputComponents = (props) => {
  // Inputs Components for every input use in application
  // There are three types inputs 1.Simple Input 2.Select option Input 3. Description Input

  return (
    <>
      {props.type && props.type === "select" ? (
        <>
          <label className="label-for-user-profile-label-only">
            {props.label}
          </label>
          <select
            id="CountryDropdown-for-user-profile-only"
            value={props.value}
            onChange={props.onChange}
          >
            {props.cat && props.options && props.options.length > 0
              ? props.options.map((type, index) => (
                  <option key={type._id} value={type._id}>
                    {type.name}
                  </option>
                ))
              : props.storeType && props.options && props.options.length > 0
              ? props.options.map((type, index) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))
              : null}
          </select>
        </>
      ) : (
        <>
          <label className="label-for-user-profile-label-only">
            {props.label} {props.required ? "*" : null}
          </label>
          <input
            value={props.value}
            type={props.type}
            onChange={props.onChange}
            className="profile-nput-only"
            placeholder={props.placeholder}
            name={props.name}
            readOnly={props.readOnly}
            maxLength={props.maxLength}
            min={props.min}
            max={props.max}
            style={
              props.error
                ? { border: "1px solid red", background: "#fde6e6" }
                : {}
            }
          ></input>

          {props.showTextLength ? (
            <>
              <div style={{ display: "flex", justifyContent: "end" }}>
                {props.showTextLength}
              </div>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

const InputDescription = (props) => {
  return (
    <>
      <label className="label-for-user-profile-label-only">{props.label}</label>
      <textarea
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        className="descriptiokn-box-in-rescponsive-view-only"
        placeholder={props.placeholder}
        name={props.name}
        readOnly={props.readOnly}
        maxLength={props.maxLength}
      ></textarea>
      {props.showTextLength ? (
        <>
          <div style={{ display: "flex", justifyContent: "end" }}>
            {props.showTextLength}
          </div>
        </>
      ) : null}
    </>
  );
};

const InputWithData = (props) => {
  return (
    <>
      <label className="label-for-user-profile-label-only">
        {props.label} {props.required ? "*" : null}
      </label>
      <div
        className="main-cintainer-in-input-section-asfictus"
        style={
          props.error ? { border: "1px solid red", background: "#fde6e6" } : {}
        }
      >
        <p>{props.inputplaceholder}</p>
        <input
          value={props.value}
          type={props.type}
          onChange={props.onChange}
          className="data-inputs-in-inputs-compo"
          placeholder={props.placeholder}
          name={props.name}
          readOnly={props.readOnly}
          maxLength={props.maxLength}
          min={props.min}
          max={props.max}
          style={
            props.error ? { border: "1px  #fde6e6", background: "#fde6e6" } : {}
          }
        ></input>
      </div>
    </>
  );
};

export { InputComponents, InputDescription, InputWithData };

import React, { useEffect, useState } from "react";
import InputErrorMessage from "../../InputErrorMessage/inputErrorMessage";
import { useSelector, useDispatch } from "react-redux";
import "./LoginModal.css";
import {
  userSigninOTPAction,
  userSigninOTPVerifiyAction
} from "../../../redux/action/auth.action";
import ErrorMessage from "../../ErrorMessage/errorMessage";
import { InputComponents } from "../../Inputs/input";
import { useNavigate } from "react-router-dom";

const LoginModal = (props) => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [emailId, setEmailId] = useState("");
  const [otp, setOtp] = useState("");

  const [renderOTP, setRenderOTP] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [otpSubmit, setOTPSubmit] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const [resendOtpSumbit, setResendOTPSumbit] = useState(false);


  //get-otp
  useEffect(() => {
    if (submit && !auth.authenticate && auth.otpSent && !auth.error) {
      setRenderOTP(true);
      setSubmit(false);
      setShowErrorMessage(false);
    }

    if (
      submit &&
      !auth.authenticate &&
      !auth.otpSent &&
      auth.error &&
      auth.errorMessage !== ""
    ) {
      setRenderOTP(false);
      setSubmit(false);
      setShowErrorMessage(true);
    }
  }, [auth, submit]);

  //verify-otp
  useEffect(() => {
    if (
      otpSubmit &&
      auth.authenticate &&
      auth.token &&
      !auth.error &&
      auth.errorMessage === ""
    ) {
      setOTPSubmit(false);
      setSubmit(false);
      setShowErrorMessage(false);
      siginSuccess();
    }

    if (
      otpSubmit &&
      !auth.authenticate &&
      !auth.otpSent &&
      auth.error &&
      auth.errorMessage !== ""
    ) {
      setOTPSubmit(false);
      setSubmit(false);
      setShowErrorMessage(true);
    }
  }, [auth, otpSubmit]);

  //resend-otp
  useEffect(() => {
    if (resendOtpSumbit && !auth.authenticate && auth.otpSent && !auth.error) {
      setMinutes(0);
      setSeconds(59);
      setResendOTPSumbit(false);
    }
    if (
      resendOtpSumbit &&
      !auth.authenticate &&
      !auth.otpSent &&
      auth.error &&
      auth.errorMessage !== ""
    ) {
      setShowErrorMessage(true);
      setResendOTPSumbit(false);
    }
  }, [resendOtpSumbit, auth]);

  //timer
  useEffect(() => {
    if (renderOTP) {
      setShowTimer(true);
    }
    if (showTimer) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [renderOTP, showTimer, seconds, minutes]);


  const siginSuccess = () => {
    // setEmailId("");
    // setOtp("");
    // setRenderOTP("");
    // setSubmit(false);
    // setOTPSubmit(false);
    // setShowValidation(false);
    // setShowErrorMessage(false);
    // setShowTimer(false);
    // setMinutes(0);
    // setSeconds(0);
    // setResendOTPSumbit(false);
    // props.onSigninSuccess();
    navigate(`/select-page`, {
      replace: true
    });
  };

  const validationCheck = () => {
    return true
    // if (isNaN(loginId)) {
    //   return false;
    // } else if (loginId.length < 10) {
    //   return false;
    // } else if (loginId.length > 10) {
    //   return false;
    // } else {
    //   return true;
    // }
  };

  const otpValidationCheck = () => {
    if (isNaN(otp)) {
      return false;
    } else if (otp.length < 6) {
      return false;
    } else if (otp.length > 6) {
      return false;
    } else {
      return true;
    }
  };

  const getOtp = (e) => {
    e.preventDefault();
    setShowErrorMessage(false);

    if (emailId === "") {
      return setShowValidation(true);
    }

    if (validationCheck()) {
      const from = {
        emailId,
      };
      setShowValidation(false);
      setSubmit(true);
      dispatch(userSigninOTPAction(from));
    } else {
      return setShowValidation(true);
    }
  };

  const verifiyOTP = (e) => {
    e.preventDefault();
    setShowErrorMessage(false);

    if (emailId === "") {
      return null;
    }

    if (otp === "") {
      return setShowValidation(true);
    }

    if (otpValidationCheck()) {
      const from = {
        emailId,
        otp,
      };
      setShowValidation(false);
      setOTPSubmit(true);
      dispatch(userSigninOTPVerifiyAction(from));
    } else {
      return setShowValidation(true);
    }
  };

  const resendOtp = (e) => {
    e.preventDefault();
    setShowErrorMessage(false);

    if (!emailId) {
      return null;
    }

    const data = {
      emailId,
    };
    setResendOTPSumbit(true);
    dispatch(userSigninOTPAction(data));
  };

  if (!props.visible) {
    return null;
  }

  const renderOTPSection = () => {
    return (
      <>
        <div>
          <h5 className="lbels-fr-logn-btn-modl-sik">Login</h5>
          {
            showErrorMessage &&
            <ErrorMessage
              title={"Loign Error"}
              message={auth.errorMessage !== "" ? auth.errorMessage : null}
            />
          }
          <label className="label-at-login-modla-in-simple-view">OTP</label>
          <InputComponents
            type="number"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            error={showValidation && !otpValidationCheck() ? true : false}
            maxLength={10}
          />
          {showValidation && !otpValidationCheck() ? (
            <InputErrorMessage errorMessage={"Please enter a valid OTP"} />
          ) : null}
          {/* Timer for OTP  */}
          {minutes === 0 && seconds === 0 ? (
            resendOtpSumbit ? (
              <div style={{ cursor: "pointer", color: "black" }}>
                {/* Resend otp  */}
                <p>Resend OTP...</p>
              </div>
            ) : (
              <div
                style={{ cursor: "pointer", color: "black" }}
                onClick={resendOtp}
              >
                <p>Resend OTP</p>
              </div>
            )
          ) : (
            <p style={{ cursor: "pointer", color: "black" }}>
              {" "}
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </p>
          )}
        </div>

        <div>
          {/* After entering OTP verify & proceed section  */}
          {otpSubmit ? (
            <button type="submit" className="get-otp-at-modal-btn-sinside">
              Verify & Proceed
            </button>
          ) : minutes === 0 && seconds === 0 ? (
            <button type="submit" className="get-otp-at-modal-btn-sinside">
              Verify & Proceed
            </button>
          ) : (
            <>
              <button
                type="submit"
                className="get-otp-at-modal-btn-sinside"
                onClick={verifiyOTP}
              >
                Verify & Proceed
              </button>
            </>
          )}
        </div>
      </>
    );
  };

  const renderLoginSection = () => {
    return (
      <>
        {/* input for phone number  */}

        <div>
          <h5 className="lbels-fr-logn-btn-modl-sik">Login</h5>
          {
            showErrorMessage &&
            <ErrorMessage
              title={"Loign Error"}
              message={auth.errorMessage !== "" ? auth.errorMessage : null}
            />
          }


          <label className="label-at-login-modla-in-simple-view">
            Mobile Number
          </label>
          <InputComponents
            label={"Email"}
            placeholder="Enter Email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            error={showValidation && !validationCheck() ? true : false}
          />
          {/* error message if phone no is invalid  */}
          {showValidation && !validationCheck() ? (
            <InputErrorMessage
              errorMessage={"Please enter a valid 10-digit phone number"}
            />
          ) : null}
        </div>

        {submit ? (
          <button type="submit" className="get-otp-at-modal-btn-sinside">
            Get OTP
          </button>
        ) : (
          <>
            <button
              className="get-otp-at-modal-btn-sinside"
              type="submit"
              onClick={getOtp}
            >
              GET OTP
            </button>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <div className="modalFixedBg">
        <div style={{ position: "relative" }}>
          <div className="modalContainer">
            {" "}
            <div
              className="modalClose"
              onClick={() => {
                setEmailId("");
                setOtp("");
                setRenderOTP("");
                setSubmit(false);
                setOTPSubmit(false);
                setShowValidation(false);
                setShowErrorMessage(false);
                setShowTimer(false);
                setMinutes(0);
                setSeconds(0);
                setResendOTPSumbit(false);
                props.onClose();
              }}
            >
              <svg
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
              </svg>
            </div>
            <div className="logs-modl-for-jwerllry-hdk">
              {renderOTP ? renderOTPSection() : renderLoginSection()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;

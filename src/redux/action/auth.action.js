import axiosIntance from "../../helpers/axios";
import { authConstants } from "../constants/constants";



export const isUserLoggedIn = () => {
    return async (dispatch) => {
        dispatch({
            type: authConstants.LOGIN_REQUEST,
        });
        const token = localStorage.getItem("token");
        if (token) {
            await axiosIntance.get(`/auth/is-user-loggedIn`)
                .then((res) => {
                    const { email } = res.data;
                    dispatch({
                        type: authConstants.LOGIN_SUCCESS,
                        payload: {
                            token,
                            email
                        },
                    });
                }).catch((err) => {
                    localStorage.clear();
                    console.clear();
                    dispatch({
                        type: authConstants.LOGIN_FAILURE,
                        payload: { error: "Failed to login" },
                    });
                })
        } else {
            localStorage.clear();
            console.clear();
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: "Failed to login" },
            });
        }
    };
};


export const userSignoutAction = (navigate) => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch({ type: authConstants.LOGOUT_SUCCESS });
        navigate("/");
    };
};


export const userSigninOTPAction = form => {
    return async dispatch => {
        dispatch({ type: authConstants.LOGIN_OTP_REQUEST });
        await axiosIntance
            .post(`/auth/otp`, {
                ...form,
            })
            .then(res => {
                dispatch({
                    type: authConstants.LOGIN_OTP_SUCCESS,
                });
            })
            .catch(error => {
                console.clear()
                const { message } = error && error.response && error.response.data ? error.response.data : "";
                dispatch({
                    type: authConstants.LOGIN_OTP_FAILURE,
                    payload: message ? { message } : { message: 'Oops! Something went wrong. Please try again later.' },
                });
            });
    };
};



export const userSigninOTPVerifiyAction = user => {
    return async dispatch => {
        dispatch({ type: authConstants.LOGIN_OTP_VERIFIY_REQUEST });
        await axiosIntance
            .post(`/auth/otp-verify`, {
                ...user,
            })
            .then(async res => {
                const { token, email } = res.data;
                localStorage.setItem("token", token);
                dispatch({
                    type: authConstants.LOGIN_OTP_VERIFIY_SUCCESS,
                    payload: { token, email }
                });
            })
            .catch(error => {
                console.clear()
                const { message } = error && error.response && error.response.data ? error.response.data : "";
                dispatch({
                    type: authConstants.LOGIN_OTP_VERIFIY_FAILURE,
                    payload: message ? { message } : { message: 'Oops! Something went wrong. Please try again later.' },
                });
            });
    };
};
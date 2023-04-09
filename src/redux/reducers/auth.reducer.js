import {
    authConstants,
} from "../constants/constants";

const initState = {
    token: null,
    email: null,
    authenticating: false,
    authenticate: false,
    otpSent: false,
    error: false,
    errorMessage: '',
    loading: false,

};

const authReducer = (state = initState, action) => {
    switch (action.type) {



        case authConstants.LOGIN_OTP_REQUEST:
            state = {
                ...state,
                authenticating: true,
                authenticate: false,
                error: false,
                otpSent: false,
                errorMessage: '',
            }
            break;


        case authConstants.LOGIN_OTP_SUCCESS:
            state = {
                ...state,
                authenticating: false,
                authenticate: false,
                error: false,
                otpSent: true,
                errorMessage: '',
            };
            break;

        case authConstants.LOGIN_OTP_FAILURE:
            state = {
                ...state,
                authenticating: false,
                authenticate: false,
                otpSent: false,
                error: true,
                errorMessage: action.payload.message,
            };
            break;




        case authConstants.LOGIN_OTP_VERIFIY_REQUEST:
            state = {
                ...state,
                authenticating: true,
                authenticate: false,
                error: false,
                otpSent: false,
                errorMessage: '',
            }
            break;


        case authConstants.LOGIN_OTP_VERIFIY_SUCCESS:
            state = {
                ...state,
                authenticating: false,
                token: action.payload.token,
                email: action.payload.email,
                authenticate: true,
                error: false,
                otpSent: false,
                errorMessage: '',
            };
            break;

        case authConstants.LOGIN_OTP_VERIFIY_FAILURE:
            state = {
                ...state,
                authenticating: false,
                authenticate: false,
                otpSent: false,
                error: true,
                errorMessage: action.payload.message,
            };
            break;





        case authConstants.LOGIN_REQUEST:
            state = {
                authenticating: false,
                authenticate: false,
                error: false,
                errorMessage: '',
                loading: true,
            }
            break;

        case authConstants.LOGIN_SUCCESS:
            state = {
                authenticating: false,
                token: action.payload.token,
                email:action.payload.email,
                authenticate: true,
                error: false,
                errorMessage: '',
                loading: false,
            }
            break;

        case authConstants.LOGIN_FAILURE:
            state = {
                authenticating: false,
                authenticate: false,
                loading: false,
            }
            break;


        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState,
            };
            break;



        default:
            return state;
    }

    return state;
};

export default authReducer;

import {
    pageConstants
} from "../constants/constants";

const initState = {
    pageProfile: {},
    loading: false,
    action: false,
    error: false,
    errorMessage: '',
};

const pageProfileReducer = (state = initState, action) => {
    switch (action.type) {


        case pageConstants.GET_PAGE_BY_URL_REQUEST:
            state = {
                ...state,
                loading: true,
                action: false,
                error: false,
                errorMessage: '',

            }
            break;

        case pageConstants.GET_PAGE_BY_URL_SUCCESS:
            state = {
                ...state,
                pageProfile: action.payload.page,
                loading: false,
                error: false,
                action: true,
                errorMessage: '',
            };
            break;

        case pageConstants.GET_PAGE_BY_URL_FAILURE:
            state = {
                ...state,
                loading: false,
                action: false,
                error: true,
                errorMessage: action.payload.message,
            };
            break;


        default:
            return state;
    }

    return state;
};

export default pageProfileReducer;

import {
    authConstants,
    pageConstants
} from "../constants/constants";

const initState = {
    pages: [],
    loading: false,
    action: false,
    error: false,
    errorMessage: '',
};




const pageReducer = (state = initState, action) => {

    switch (action.type) {

        case pageConstants.GET_ALL_PAGE_REQUEST:
            state = {
                ...state,

            }
            break;

        case pageConstants.GET_ALL_PAGE_SUCCESS:
            state = {
                ...state,
                pages: action.payload.pages,
            };
            break;

        case pageConstants.GET_ALL_PAGE_FAILURE:
            state = {
                ...state,
            };
            break;



        case pageConstants.CREATE_PAGE_ACTION_REQUEST:
            state = {
                ...state,
                loading: true,
                action: false,
                error: false,
                errorMessage: '',

            }
            break;

        case pageConstants.CREATE_PAGE_ACTION_SUCCESS:
            state = {
                ...state,
                pages: [action.payload.page, ...state.pages],
                loading: false,
                error: false,
                action: true,
                errorMessage: '',
            };
            break;

        case pageConstants.CREATE_PAGE_ACTION_FAILURE:
            state = {
                ...state,
                loading: false,
                action: false,
                error: true,
                errorMessage: action.payload.message,
            };
            break;






        case pageConstants.UPDATE_PAGE_ACTION_REQUEST:
            state = {
                ...state,
                loading: true,
                action: false,
                error: false,
                errorMessage: '',

            }
            break;

        case pageConstants.UPDATE_PAGE_ACTION_SUCCESS:

            state = {
                ...state,
                loading: false,
                error: false,
                action: true,
                errorMessage: '',
            };
            break;

        case pageConstants.UPDATE_PAGE_ACTION_FAILURE:
            state = {
                ...state,
                loading: false,
                action: false,
                error: true,
                errorMessage: action.payload.message,
            };
            break;



        case pageConstants.DELETE_PAGE_ACTION_REQUEST:
            state = {
                ...state,
                loading: true,
                action: false,
                error: false,
                errorMessage: '',

            }
            break;

        case pageConstants.DELETE_PAGE_ACTION_SUCCESS:
            state = {
                ...state,
                pages: state.pages.filter((p) => p._id !== action.payload.pageId),
                loading: false,
                error: false,
                action: true,
                errorMessage: '',
            };
            break;

        case pageConstants.DELETE_PAGE_ACTION_FAILURE:
            state = {
                ...state,
                loading: false,
                action: false,
                error: true,
                errorMessage: action.payload.message,
            };
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

export default pageReducer;

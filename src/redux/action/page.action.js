import axiosIntance from "../../helpers/axios";
import { pageConstants } from "../constants/constants";




export const getAllPageListAction = () => {
    return async (dispatch) => {
        dispatch({
            type: pageConstants.GET_ALL_PAGE_REQUEST,
        });
        const res = await axiosIntance.get(`/page/get-current-user-pages`);
        if (res.status === 200) {
            const { pages } = res.data;
            dispatch({
                type: pageConstants.GET_ALL_PAGE_SUCCESS,
                payload: { pages: pages },
            });
        } else {
            console.clear();
            dispatch({
                type: pageConstants.GET_ALL_PAGE_FAILURE,
                payload: { message: 'Oops! Something went wrong. Please try again later.' }
            });

        }
    };
};



export const createPageAction = (form) => (dispatch) => {
    try {

        dispatch({
            type: pageConstants.CREATE_PAGE_ACTION_REQUEST
        });
        axiosIntance
            .post("/page/create-page", form)
            .then((res) => {
                const { page } = res.data
                dispatch({
                    type: pageConstants.CREATE_PAGE_ACTION_SUCCESS,
                    payload: { page }
                });
            })
            .catch((error) => {
                console.clear()
                const { message } = error && error.response && error.response.data ? error.response.data : "";
                dispatch({
                    type: pageConstants.CREATE_PAGE_ACTION_FAILURE,
                    payload: message ? { message } : { message: 'Oops! Something went wrong. Please try again later.' },
                });
            });

    } catch (err) {
        console.clear()
        dispatch({
            type: pageConstants.CREATE_PAGE_ACTION_FAILURE,
            payload: { message: 'Oops! Something went wrong. Please try again later.' },
        });
    }

};


export const updatePageByIDAction = (form) => (dispatch) => {
    try {

        dispatch({
            type: pageConstants.UPDATE_PAGE_ACTION_REQUEST
        });
        axiosIntance
            .post("/page/update-page-by-id", form)
            .then((res) => {
                const { page } = res.data
                dispatch({
                    type: pageConstants.UPDATE_PAGE_ACTION_SUCCESS,
                    payload: { page }
                });
            })
            .catch((error) => {
                console.clear()
                const { message } = error && error.response && error.response.data ? error.response.data : "";
                dispatch({
                    type: pageConstants.UPDATE_PAGE_ACTION_FAILURE,
                    payload: message ? { message } : { message: 'Oops! Something went wrong. Please try again later.' },
                });
            });

    } catch (err) {
        console.clear()
        dispatch({
            type: pageConstants.UPDATE_PAGE_ACTION_FAILURE,
            payload: { message: 'Oops! Something went wrong. Please try again later.' },
        });
    }

};




export const deletePageByIdAction = (payload) => {

    return async (dispatch) => {
        dispatch({
            type: pageConstants.DELETE_PAGE_ACTION_REQUEST,
        });

        try {
            const res = await axiosIntance.delete(`/page/delete-page-by-id`, {
                data: { payload },
            });
            if (res.status === 202) {
                dispatch({
                    type: pageConstants.DELETE_PAGE_ACTION_SUCCESS,
                    payload: { pageId: payload.pageId }
                });
            } else {
                dispatch({
                    type: pageConstants.DELETE_PAGE_ACTION_FAILURE,
                    payload: { message: 'Oops! Something went wrong. Please try again later.' },
                });
            }
        } catch (error) {
            console.clear()
            dispatch({
                type: pageConstants.DELETE_PAGE_ACTION_FAILURE,
                payload: { message: 'Oops! Something went wrong. Please try again later.' },
            });
        }
    };
};


export const getPageByUrlAction = (payload) => {
    return async (dispatch) => {
        dispatch({
            type: pageConstants.GET_PAGE_BY_URL_REQUEST,
        });
        const { pageUrl } = payload.params;
        await axiosIntance
            .get(`/page/get-page-by-url/${pageUrl}`)
            .then(async (res) => {
                const { page } = res.data;
                dispatch({
                    type: pageConstants.GET_PAGE_BY_URL_SUCCESS,
                    payload: { page: page },
                });
            })
            .catch((error) => {
                console.clear();
                const { message } = error && error.response && error.response.data ? error.response.data : "";
                dispatch({
                    type: pageConstants.GET_PAGE_BY_URL_FAILURE,
                    payload: message ? { message } : { message: 'Oops! Something went wrong. Please try again later.' },
                });
            });
    };
};

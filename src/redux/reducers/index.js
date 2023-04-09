import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import pageReducer from "./page.reducer";
import pageProfileReducer from "./pageProfile.reducer";



const rootReducer = combineReducers({
    auth:authReducer,
    pages:pageReducer,
    pageProfile:pageProfileReducer,
});

export default rootReducer;

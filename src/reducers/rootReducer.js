import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
// import { dateReducer } from "./DateReducer";
// import { uiReducer } from "./uiReducer";

export const rootReducer=combineReducers({
    auth:authReducer,
    // date:dateReducer,
    // ui:uiReducer   
})

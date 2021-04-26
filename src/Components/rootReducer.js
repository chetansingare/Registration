import { combineReducers } from "redux";
import thunkreducer from "./thunkReducer";
import getReducer from "./thunkGetReducer";
import snackReducer from "./snackBarReducer";

const rootreducer = combineReducers({
    thunkreducer,
    getReducer,
    snackReducer
})

export default rootreducer
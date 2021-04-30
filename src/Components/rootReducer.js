import { combineReducers } from "redux";
import thunkreducer from "./thunkReducer";
import getReducer from "./thunkGetReducer";
import snackReducer from "./snackBarReducer";
import editReducer from "./editReducer"

const rootreducer = combineReducers({
    thunkreducer,
    getReducer,
    snackReducer,
    editReducer
})

export default rootreducer
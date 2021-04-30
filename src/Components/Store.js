import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from "./rootReducer";

const Store = createStore(
    rootreducer,
    applyMiddleware(thunk)
)
export default Store;
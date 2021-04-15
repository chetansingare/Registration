import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import thunkreducer from './thunkReducer';

const Store = createStore(
    thunkreducer,
    applyMiddleware(thunk)
)
export default Store;
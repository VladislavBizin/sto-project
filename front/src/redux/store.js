import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

let reducer = combineReducers({
    sto: stoReducer
});
let store = createStore(reducer,applyMiddleware(thunkMiddleware));

export default store;
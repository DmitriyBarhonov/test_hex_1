import {applyMiddleware,createStore, combineReducers } from 'redux'
import {infoReducer} from "./infoReducer"
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import thunkMiddleware from "redux-thunk"



let reducers = combineReducers({
    infoReducer: infoReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer

});


let storeRedux = createStore(reducers,  applyMiddleware(thunkMiddleware));

window.storeRedux = storeRedux;

export default storeRedux;
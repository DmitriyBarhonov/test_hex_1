import {applyMiddleware,createStore, combineReducers } from 'redux'
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { dataReducer } from './dataReducer';
import { squeezeReducer } from './squeezeReducer';
import thunkMiddleware from "redux-thunk"



let reducers = combineReducers({
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    dataReducer: dataReducer,
    squeezeReducer: squeezeReducer

});


let storeRedux = createStore(reducers,  applyMiddleware(thunkMiddleware));


export default storeRedux;
import {
    loginAPI
} from "../../api/api"
const LOGIN = 'LOGIN'
const LOGIN_ERROR = 'LOGIN_ERROR'
const TOKEN_ADD ='TOKEN_ADD'


const initialState = {
    loginStatus: false,
    loginError: false,
    token:''
}

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                loginStatus: true
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                loginError: true
            }
        }

        case TOKEN_ADD:{
            return{
                ...state,
                token: action.token
            }
        }
        default:
            return state;
    }
}

export const loginAC = () => ({
    type: LOGIN
});
export const loginErrorAC = () => ({
    type: LOGIN_ERROR
});

export const tocenAC = (token) => ({
    type: TOKEN_ADD,
    token: token
});



// АВТОРИЗАЦИЯ

export const loginThunkCreactor = (dataLogin) => {
    return (dispatch) => {
        loginAPI(dataLogin).then(r => {
                dispatch(tocenAC(r.data.access_token))
                dispatch(loginAC())
            })
            .catch(r => {
                dispatch(loginErrorAC())
            })
    }
}
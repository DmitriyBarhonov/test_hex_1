import { registerAPI, loginAPI, getInfoAPI} from "../api/api"
const LOGIN = 'LOGIN'


const initialState = {
    loginStatus: false
}

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN: {
            console.log('ok')
            return {
                loginStatus: true
            }
        }
        default:
            return state;
    }
}

export const loginAC = () => ({
    type: LOGIN
});



// АВТОРИЗАЦИЯ

export const loginThunkCreactor = (dataLogin) => {
    return (dispatch) => {
        loginAPI(dataLogin).then(r => {
                console.log(r.data.access_token)
                localStorage.setItem("access_token", r.data.access_token);
                dispatch(loginAC())
            })
            .catch(r => {
                console.log(r.data)
            })
    }
}

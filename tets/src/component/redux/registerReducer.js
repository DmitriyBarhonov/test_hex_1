import { registerAPI, loginAPI, getInfoAPI} from "../api/api"
const REGISTER = 'REGISTER'


const initialState = {
    registrationStatus: false
}

export const registerReducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER: {
            console.log('ok')
            return {
                registrationStatus: true
            }
        }
        default:
            return state;
    }
}

export const registerLinkAC = () => ({
    type: REGISTER
});


// РЕГИСТРАЦИЯ

export const registerThunkCreactor = (username, password) => {
    return (dispatch) => {
        registerAPI(username, password).then(r => {
                dispatch(registerLinkAC())
                console.log(r)
            })
            .catch(r => {
                console.log(r.data)
            })
    }
}

// АВТОРИЗАЦИЯ

export const loginThunkCreactor = (dataLogin) => {
    return (dispatch) => {
        loginAPI(dataLogin).then(r => {
                console.log(r.data)
            })
            .catch(r => {
                console.log(r.data)
            })
    }
}


// ЗАПРОС ЗА ДАННЫМИ

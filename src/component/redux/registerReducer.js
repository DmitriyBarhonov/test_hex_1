import { registerAPI} from "../../api/api"
const REGISTER = 'REGISTER'
const REGISTER_ERROR = 'REGISTER_ERROR'


const initialState = {
    registrationStatus: false,
    registrationError: false
}

export const registerReducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER: {
            return {
                registrationStatus: true
            }
        }
        case REGISTER_ERROR:{
            return{
                registrationError: true
            }
        }
        default:
            return state;
    }
}

export const registerLinkAC = () => ({
    type: REGISTER
});

export const registerErrorLinkAC = () => ({
    type: REGISTER_ERROR
});


// РЕГИСТРАЦИЯ

export const registerThunkCreactor = (username, password) => {
    return (dispatch) => {
        registerAPI(username, password).then(r => {
                dispatch(registerLinkAC())
            })
            .catch(r => {
                dispatch(registerErrorLinkAC())
            })
    }
}


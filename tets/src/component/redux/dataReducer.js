import { registerAPI, loginAPI, getInfoAPI} from "../api/api"
const GET_DATA = 'GET_DATA'


const initialState = {
    registrationStatus: false
}

export const registerReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA: {
            console.log('ok')
            return {
                registrationStatus: true
            }
        }
        default:
            return state;
    }
}

export const dataAC = () => ({
    type: GET_DATA
});




// ЗАПРОС ЗА ДАННЫМИ

export const dataThunkCreactor = () => {
    return (dispatch) => {
        getInfoAPI(localStorage.getItem("access_token")).then(r => {
                console.log(r.data)
            })
            .catch(r => {
                console.log(r.data)
            })
    }
}
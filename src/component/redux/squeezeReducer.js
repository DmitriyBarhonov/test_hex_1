import {
    postLink
} from "../../api/api"
const POST_DATA_LINK = 'POST_DATA_LINK'
const POST_DATA_LINK_ERROR ="POST_DATA_LINK_ERROR"

const initialState = {
    id: 0,
    short: "",
    target: "",
    counter: 0,
    squeezeError: false
}

export const squeezeReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_DATA_LINK: {
            return {
                id:action.id,
                short: action.short,
                target: action.target,
                counter:action.counter,
            }
        }
       case POST_DATA_LINK_ERROR:{
        return{
            squeezeError: true
        }
       }
        default:
            return state;
    }
}

export const dataLinkAC = (counter, id, short, target) => ({
    type: POST_DATA_LINK,
    counter: counter,
    id: id,
    short: short,
    target: target
});

export const dataLinkErrorAC = () => ({
    type: POST_DATA_LINK_ERROR,
});


// ЗАПРОС ЗА ССЫЛКОЙ

export const postLinkThunkCreactor = (url) => {
     
    return (dispatch) => {
        postLink(localStorage.getItem("access_token"), url).then(r => {
            let{counter, id, short, target}=r.data
                dispatch(dataLinkAC(counter, id, short, target))
            })
            .catch(r => {
                dispatch(dataLinkErrorAC())
            })
    }
}
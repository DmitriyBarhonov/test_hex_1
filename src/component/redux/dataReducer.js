import {
    getInfoAPI,
    paginationAPI
} from "../../api/api"
const SET_DATA = 'SET_DATA'
const SET_NUMBER_PAGE = 'SET_NUMBER_PAGE'
const SET_STATIC_COUNT = 'SET_STATIC_COUNT'
const SET_DESC = 'SET_DESC'


const initialState = {
    statistic: [],
    staisticStatus: false,
    staisticCount: 0,
    pageSize: 10,
    numberPage: 1,
    sortParam: "asc_short"

}

export const dataReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                statistic: action.statistic,
                staisticStatus: true,
            }
        }
        case SET_NUMBER_PAGE: {
            return {
                ...state,
                numberPage: action.numberPage
            }
        }
        case SET_STATIC_COUNT: {
            return {
                  ...state,
                  staisticCount: action.staisticCount
            }
        }

        case SET_DESC:{
            return{
                ...state,
                sortParam: action.sortParam
            }
        }
        default:
            return state;
    }
}


export const setCurntPage = (numberPage) => ({
    type: SET_NUMBER_PAGE,
    numberPage: numberPage
});

export const setStaticCount = (staisticCount) => ({
    type: SET_STATIC_COUNT,
    staisticCount: staisticCount

})


export const dataAC = (statistic) => ({
    type: SET_DATA,
    statistic: statistic
});

export const setDeckShortAC = (desc) => ({
    type: SET_DESC,
    sortParam: desc
});



// ЗАПРОС ЗА ДАННЫМИ
// Возможно не самое хорошее решение, но оно работает)     

export const dataThunkCreactor = (numberPage, token) => {
    return (dispatch) => {
      return  getInfoAPI(token,numberPage).then(r => {
                dispatch(setStaticCount(r.data.length))
                dispatch(setCurntPage(numberPage))
                dispatch(dataAC(r.data))
            })
            .catch(r => {
                console.warn("Ошибка")
            })
    }
}



export const paginationThunkCreactor = (token, numberPage, order) => {
    return (dispatch) => {
        paginationAPI(token,numberPage, order).then(r => {
            dispatch(setDeckShortAC(order))
                dispatch(setCurntPage(numberPage))
                dispatch(dataAC(r.data))
            })
            .catch(r => {
                console.warn("Ошибка")
            })
    }
}


import axios from "axios";
import qs from "qs"

// Регистрация
export const registerAPI = (username, password) => {
    return axios({
        method: "post",
        url: `http://79.143.31.216/register?username=${username}&password=${password}`,
    })

}

// Авторозиция
export const loginAPI = (dataLogin) => {
    return axios({
        method: "post",
        url: 'http://79.143.31.216/login',
        data: qs.stringify(dataLogin),
        headers: {
            "content-Type": "application/x-www-form-urlencoded"
        }
    })
}

// Получение статистики
export const getInfoAPI =(token)=>{
    return axios({
        method: "get",
        url: `http://79.143.31.216/statistics?order=asc_short`,
        headers: {'Authorization': `bearer ${token}`}
    })
}


// Пагинация
export const paginationAPI =(token, numberPage, order)=>{
    return axios({
        method: "get",
        url: `http://79.143.31.216/statistics?order=${order}&offset=${numberPage-10}&limit=10`,
        headers: {'Authorization': `bearer ${token}`}
    })
}

// Отправка ссылки
export const postLink =(token, url)=>{
    return axios({
        method: "post",
        url: `http://79.143.31.216/squeeze?link=${encodeURIComponent(url)}`,
        headers: {'Authorization': `bearer ${token}`}
    })
}


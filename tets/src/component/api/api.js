import axios from "axios";
import qs from "qs"

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: `http://79.143.31.216/`,
// })


export const registerAPI = (username, password) => {
    return axios({
        method: "post",
        url: `http://79.143.31.216/register?username=${username}&password=${password}`,
    })

}

// const govno = {
//     "username": "username",
//     "password": "password"
// }


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

export const getInfoAPI =(token)=>{
    return axios({
        method: "get",
        url: 'http://79.143.31.216/statistics?order=asc_short&offset=0&limit=0',
        headers: {'Authorization': `bearer ${token}`}
    })
}
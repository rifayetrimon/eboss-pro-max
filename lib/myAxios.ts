import axios from 'axios';


const myAxios = axios.create({
    baseURL: "https://devapi01.awfatech.com/",
    headers: {
        'Content-Type': 'application/json',
    },
    // withCredentials: true,
})

export default myAxios;
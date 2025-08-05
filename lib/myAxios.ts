import axios from 'axios';


const myAxios = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

export default myAxios;
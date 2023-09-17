import axios from "axios";

const api = axios.create({
    baseURL: 'https://192.34.63.8:5080',
});

export default api;
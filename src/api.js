import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.34.63.8:5080',
});

export default api;
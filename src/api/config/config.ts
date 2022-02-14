import axios from "axios";

// http://localhost:7542/2.0/
const baseURL = 'https://neko-back.herokuapp.com/2.0';

export const instance = axios.create({
    baseURL,
    withCredentials: true,
});
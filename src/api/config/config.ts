import axios from 'axios';

// const baseURL = 'http://localhost:7542/2.0/';
// const baseURL = 'https://neko-back.herokuapp.com/2.0';
const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:7542/2.0/';

export const instance = axios.create({
  baseURL,
  withCredentials: true,
});

import axios from "axios";
import { REACT_APP_API } from '../config/keys'


const axiosIntance = axios.create({
  baseURL: REACT_APP_API,
});
axiosIntance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const Token = `Bearer ${token}`
      config.headers.Authorization = Token;
    } else {
      delete axiosIntance.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export default axiosIntance;
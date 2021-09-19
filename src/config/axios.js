/* eslint-disable indent */
import axios from "axios";

let baseURL = "http://0.0.0.0:8000";

switch(process.env.REACT_APP_ENVIRONMENT) {
  case "staging":
    baseURL = "https://api-staging.bycoders.com.br";
    break;
  case "production":
    baseURL = "https://api.bycoders.com.br";
    break;
  case "sandbox":
    baseURL = "https://api-sandbox.bycoders.com.br";
    break;
  default:
    break;
}

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem("cnab-token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function(error) {
  return Promise.reject(error);
});


axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  if (error.response) {
    let msg = "Erro desconhecido!";
    try {
      msg = error.response.data.non_field_errors[0];
    } catch(e) {
      msg = error.response.data.detail;
    }

    return Promise.reject(msg);
  }
  return Promise.reject(error);
});


export default axios;

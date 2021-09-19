import axios from "config/axios";

export function loginAPI(data) {
  const url = "/auth/";
  return axios.post(url, data);
}

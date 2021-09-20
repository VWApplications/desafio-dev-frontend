import axios from "config/axios";

export function CNABUploadAPI(data) {
  const url = "/cnab/upload/";
  return axios.post(url, data, { headers: { "Content-Type": "multipart/form-data" }});
}

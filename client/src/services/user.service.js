import axios from "axios";
import { getToken } from "./auth.service";

const API_URL = "http://localhost:3001/api/v1/user/";
const token = getToken();

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const fetchUser = async abortController => {
  const { data } = await axios({
    signal: abortController.signal,
    method: "post",
    url: API_URL + "profile",
  });
  return data.body;
};

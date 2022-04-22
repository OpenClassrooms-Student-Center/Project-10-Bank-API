import axios from "axios";
const API_URL = "http://localhost:3001/api/v1/user/";
const token = JSON.parse(localStorage.getItem("token"));

if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const fetchUser = async () => {
  const { data } = await axios({
    method: "post",
    url: API_URL + "profile",
  });
  return data.body;
};

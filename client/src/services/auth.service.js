import axios from "axios";
const API_URL = "http://localhost:3001/api/v1/user/";

export const getToken = async => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token;
};

export const setToken = async ({ email, password }) => {
  const response = await axios({
    method: "post",
    url: API_URL + "login",
    data: { email: email, password: password },
  });
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.body.token));
  }
  return response.data.body.token;
};

export const removeToken = async () => {
  localStorage.removeItem("token");
  return Promise.resolve();
};

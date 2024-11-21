import axios, { AxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";

type Arguments = {
  withAuth?: boolean;
  config?: AxiosRequestConfig;
  storedToken?: string;
};

export const getAxiosInstance = ({
  withAuth,
  storedToken,
  config = {},
}: Arguments = {}) => {
  const cookies = new Cookies();

  const token = cookies.get("token");

  const usedToken = token || storedToken;

  const { headers, ...restConfig } = config;

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      ...(withAuth && usedToken && { Authorization: `Bearer ${usedToken}` }),
      ...headers,
    },
    ...restConfig,
  });
};

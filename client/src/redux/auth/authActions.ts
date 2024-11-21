import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../api/endpoints";
import { Credentials } from "../../types/auth";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { getAxiosInstance } from "../../utils/apiHelpers";
import { setToken } from "./authSlice";
import { addNotificationToQueue } from "../app/appSlice";

const axios = getAxiosInstance();

type DecodedToken = {
  id: string;
  iat: number;
  exp: number;
};

interface LoginPayload extends Credentials {
  rememberMe: boolean;
}

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password, rememberMe }: LoginPayload,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const {
        data: {
          body: { token },
        },
      } = await axios.post(Endpoints.user.LOGIN, { email, password });

      const decodedToken: DecodedToken = jwtDecode(token);

      dispatch(setToken(token));

      if (rememberMe) {
        const cookies = new Cookies();

        cookies.set("token", token, {
          path: "/",
          expires: new Date(decodedToken.exp * 1000),
        });
      }

      return token;
    } catch (error) {
      const err = error as AxiosError;

      if (err.response?.data) {
        const responseData: { message?: string } = err.response.data;
        dispatch(
          addNotificationToQueue({
            message: responseData.message!,
            type: "error",
          })
        );
        return rejectWithValue(responseData);
      } else {
        dispatch(
          addNotificationToQueue({
            message: err.message,
            type: "error",
          })
        );
        return rejectWithValue(err.message);
      }
    }
  }
);

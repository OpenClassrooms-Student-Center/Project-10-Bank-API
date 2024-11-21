import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../api/endpoints";
import { getAxiosInstance } from "../../utils/apiHelpers";
import { User } from "../../types/user";
import { RootState } from "../store";
import { addNotificationToQueue } from "../app/appSlice";

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const {
      auth: {
        data: { token },
      },
    } = getState() as RootState;
    try {
      const axios = getAxiosInstance({ withAuth: true, storedToken: token });

      const {
        data: { body },
      } = await axios.post(Endpoints.user.PROFILE);

      return body as User;
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

interface UpdateUserProfileData {
  payload: Partial<User>;
  successFn: () => void;
}

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (
    data: UpdateUserProfileData,
    { rejectWithValue, getState, dispatch }
  ) => {
    const {
      auth: {
        data: { token },
      },
    } = getState() as RootState;
    try {
      const axios = getAxiosInstance({ withAuth: true, storedToken: token });

      const {
        data: { body, message },
      } = await axios.put(Endpoints.user.PROFILE, data.payload);

      data.successFn();
      dispatch(addNotificationToQueue({ message, type: "success" }));

      return body as User;
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

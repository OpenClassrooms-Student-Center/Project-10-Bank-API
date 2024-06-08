import { createAsyncThunk } from "@reduxjs/toolkit";
import { Transaction } from "../../types/transactions";
import { AxiosError } from "axios";
import { RootState } from "../store";
import { addNotificationToQueue } from "../app/appSlice";
import { getAxiosInstance } from "../../utils/apiHelpers";
import { Endpoints } from "../api/endpoints";

// Uncomment the following line when you are ready to connect to the backend

export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const {
      user,
      auth: {
        data: { token },
      },
    } = getState() as RootState;

    try {
      const axios = getAxiosInstance({ withAuth: true, storedToken: token });

      if (!user?.data?.id) {
        throw new Error("User ID not found");
      }

      const {
        data: { body },
      } = await axios.get(Endpoints.transactions.BASE(user?.data?.id));

      return body as Transaction[];
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

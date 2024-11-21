import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/user";
import { getUserProfile, updateUserProfile } from "./userActions";

interface UserState {
  loading: boolean;
  error: string | SerializedError;
  success: boolean;
  data: User | null;
}

const initialState: UserState = {
  loading: false,
  error: "",
  success: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.loading = false;
      state.error = "";
      state.success = false;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.data = payload;
      state.success = true;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ? action.error.message : action.error;
      state.success = false;
    });
    builder.addCase(updateUserProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.data = payload;
      state.success = true;
    });
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ? action.error.message : action.error;
      state.success = false;
    });
  },
});

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;

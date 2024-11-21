import { RootState } from "../store";

export const userSelectors = {
  selectUser: (state: RootState) => state.user.data,
  selectUserLoading: (state: RootState) => state.user.loading,
  selectUserError: (state: RootState) => state.user.error,
  selectUserSuccess: (state: RootState) => state.user.success,
};

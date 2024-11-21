import { RootState } from "../store";

export const authSelectors = {
  selectLoading: (state: RootState) => state.auth.loading,
  selectError: (state: RootState) => state.auth.error,
  selectSuccess: (state: RootState) => state.auth.success,
  selectToken: (state: RootState) => state.auth.data.token,
};

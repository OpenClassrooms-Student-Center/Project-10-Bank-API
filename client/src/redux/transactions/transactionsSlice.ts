import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { Transaction } from "../../types/transactions";
import { getTransactions, updateTransaction } from "./transactionsActions";

interface TransactionsState {
  loading: boolean;
  error: string | SerializedError;
  success: boolean;
  mutationLoading: boolean;
  mutationError: string | SerializedError;
  mutationSuccess: boolean;
  data: Transaction[] | null;
}

const initialState: TransactionsState = {
  loading: false,
  error: "",
  success: false,
  mutationLoading: false,
  mutationError: "",
  mutationSuccess: false,
  data: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    resetTransactions: (state) => {
      state.loading = false;
      state.error = "";
      state.success = false;
      state.data = null;
    },
    updateTransactionState: (state, { payload }) => {
      const transaction = state.data?.find(
        (transaction) => transaction.id === payload.id
      );

      if (transaction && Array.isArray(state.data)) {
        state.data = state.data.map((t) =>
          t.id === payload.id ? { ...t, ...payload } : t
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTransactions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.data = payload;
      state.success = true;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ? action.error.message : action.error;
      state.success = false;
    });
    builder.addCase(updateTransaction.pending, (state) => {
      state.mutationLoading = true;
    });
    builder.addCase(updateTransaction.fulfilled, (state) => {
      state.mutationLoading = false;
      state.mutationError = "";
      state.mutationSuccess = true;
    });
    builder.addCase(updateTransaction.rejected, (state, action) => {
      state.mutationLoading = false;
      state.mutationError = action.error.message
        ? action.error.message
        : action.error;
      state.mutationSuccess = false;
    });
  },
});

export const { resetTransactions, updateTransactionState } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;

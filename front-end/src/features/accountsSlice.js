import { createSlice } from '@reduxjs/toolkit';
import { fetchUserAccounts } from '../services/accountsAPI';
import {
  createThunkAction,
  handleAsyncActions,
} from '../utils/slicerFunctions';

const GET_ACCOUNTS = 'accounts/fetchAccounts';

export const fetchAccountsAsync = createThunkAction(
  GET_ACCOUNTS,
  fetchUserAccounts
);

// Redux slice for accounts state management
export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    accounts: JSON.parse(sessionStorage.getItem('accounst')) || null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearAccounts: (state) => {
      // clear accounts when logout
      state.accounts = null;
      state.status = 'idle';
      state.error = null;
      sessionStorage.removeItem('accounts');
    },
  },
  extraReducers: (builder) => {
    // Extra reducers to handle async actions (fetchUserAccounts)
    handleAsyncActions(builder, fetchAccountsAsync, 'accounts', 'status');
  },
  selectors: {
    selectAccounts: (state) => state.accounts,
    selectAccountsStatus: (state) => state.status,
    selectAccountsError: (state) => state.error,
  },
});

export const { clearAccounts } = accountsSlice.actions;
export const { selectAccounts, selectAccountsStatus, selectAccountsError } =
  accountsSlice.selectors;

export default accountsSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';

export const createThunkAction = (type, apiFunction) => {
  return createAsyncThunk(type, async (params) => {
    const response = await apiFunction(params);
    return response;
  });
};

export const handleAsyncActions = (builder, thunk, slicer, statusKey) => {
  builder
    .addCase(thunk.pending, (state) => {
      state[statusKey] = 'loading';
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state[statusKey] = 'succeeded';
      state[slicer] = action.payload.body;
      state.error = null;
      sessionStorage.setItem(slicer, JSON.stringify(state[slicer]));
    })
    .addCase(thunk.rejected, (state, action) => {
      state[statusKey] = 'failed';
      state.error = action.error.message;
    });
};

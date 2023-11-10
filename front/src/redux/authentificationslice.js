    
   import { createSlice } from '@reduxjs/toolkit';

   const authentificationSlice = createSlice({
       name: 'authentification',
       initialState: {
           isConnected: false,
           token: null,
       },
       reducers: {
           signIn: (state, action) => {
               state.isConnected = true;
               state.token = action.payload;
           },
           signOut: (state) => {
               state.isConnected = false;
               state.token = null;
           },
       },
   });
   
   export const { signIn, signOut } = authentificationSlice.actions;
   export default authentificationSlice.reducer;
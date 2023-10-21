import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.isAuth = true;
      state.user = JSON.parse(action.payload);
    },
    signOut: (state) => {
        state.isAuth = false;
        state.user = null;
    }
  }
});


export const {signOut, signUp} = authSlice.actions;
export default authSlice;


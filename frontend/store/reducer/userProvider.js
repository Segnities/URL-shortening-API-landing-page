import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userProviderSlice = createSlice({
  name: "userProvider",
  initialState,
  reducers: {
    setUserProvider(state, action) {
      state.user = action.payload;
    }
  }
});

export const {setUserProvider} = userProviderSlice.actions;
export  default userProviderSlice;
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from './reducer/auth';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware()
});
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from './reducer/auth';
import userProvider from './reducer/userProvider';
import urls from './reducer/urls';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  userProvider: userProvider.reducer,
  urls: urls.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware()
});
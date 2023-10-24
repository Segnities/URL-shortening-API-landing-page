import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listId: null,
  urls: [],
}

const urlsSlice = createSlice({
  name: "urls",
  initialState,
  reducers: {
    setUrls: (state, action)=> {
      state.urls = action.payload.urls;
      state.listId = action.payload.listId;
    },
    addUrl: (state, action)=> {
      state.urls.push(action.payload);
    },
  }
});

export const {addUrl, setUrls} = urlsSlice.actions;
export default urlsSlice;
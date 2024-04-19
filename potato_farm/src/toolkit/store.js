import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./createSlice/comment_createSlice";

const store = configureStore({
  reducer: {
    comment: commentSlice.reducer,
  },
});

export default store;

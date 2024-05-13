import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  reviewList: [],
  pageInfo: { currentPage: 1 },
};

const myReviewSlice = createSlice({
  name: "myReview",
  initialState,
  reducers: {
    getReviewList(state, action) {
      console.log("action>>>>", action.payload);
      state.pageInfo = action.payload.ReviewResponse.pageInfo;
      state.reviewList = action.payload.ReviewResponse.reviewList;      
    },
  },
});

export const myReviewReducers = myReviewSlice.actions;

export default myReviewSlice;

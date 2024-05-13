import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  reviewList: [],
  viewList: [],
  movieReviewList: [],
  pageInfo: { currentPage: 1 },
  reviewDetail: {},
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    getMostlikeReviewList(state, action) {
      // console.log("action>>>>", action.payload);
      state.reviewList = action.payload.reviewResponse.reviewList;
      state.pageInfo = action.payload.reviewResponse.pageInfo;
    },

    getNewReviewList(state, action) {
      // console.log("action>>>>", action.payload);
      state.reviewList = action.payload.reviewResponse.reviewList;
      state.pageInfo = action.payload.reviewResponse.pageInfo;
    },

    getReviewList(state, action) {
      // console.log("action>>>>", action.payload);
      state.reviewList = action.payload.reviewResponse.reviewList;
      state.pageInfo = action.payload.reviewResponse.pageInfo;
    },
    getReviewDetail(state, action) {
      state.reviewDetail = action.payload.reviewResponse;
    },

    getMovieReviewList(state, action) {
      // console.log("action>>>>", action.payload);
      state.movieReviewList = action.payload.reviewResponse;
    },
  },
});

//board_action에서 사용함
//export const{getBoardList}=boardSlice.actions;
export const reviewReducers = reviewSlice.actions;

//store에서 사용함0.0
export default reviewSlice;

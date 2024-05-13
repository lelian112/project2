import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./createSlice/comment_createSlice";
import reviewSlice from "./createSlice/review_createSlice";
import movieSlice from "./createSlice/movie_createSlice";
import wishSlice from "./createSlice/mypagewish_createSlice";
import myReviewSlice from "./createSlice/mypagereview_createSlice";
import calendarSlice from './createSlice/calendar';


const store = configureStore({
  reducer: {
    comment: commentSlice.reducer,
    myReview: myReviewSlice.reducer, //추가
    wish: wishSlice.reducer, //추가
    review : reviewSlice.reducer,
    movie: movieSlice.reducer,
    calendar: calendarSlice.reducer, //추가

  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  genreList: [],
  pageInfo: { currentPage: 1 },
  addMovieWish: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovieList(state, action) {
      // console.log("action>>>>", action.payload);
      state.genreList = action.payload.movieResponse.genreList;
      state.pageInfo = action.payload.movieResponse.pageInfo;
    },

    getAddMovieWish(state, action) {
      state.addMovieWish = action.payload.movieResponse;
    },
  },
});

//board_action에서 사용함
//export const{getBoardList}=boardSlice.actions;
export const movieReducers = movieSlice.actions;

//store에서 사용함0.0
export default movieSlice;

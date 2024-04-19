import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  viewList: [],
  pageInfo: { currentPage: 1 },
  // boardDetail: {},
  // boardFile: null,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getViewList(state, action) {
      console.log("action>>>>", action.payload);
      state.viewList = action.payload.commentResponse.viewList;
      state.pageInfo = action.payload.commentResponse.pageInfo;
    },
    // getBoardDetail(state, action) {
    //   state.boardDetail = action.payload.data;
    // },
  },
});

//board_action에서 사용함
//export const{getBoardList}=boardSlice.actions;
export const commentReducers = commentSlice.actions;

//store에서 사용함0.0
export default commentSlice;

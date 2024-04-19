import axios from "axios";
import { commentReducers } from "../createSlice/comment_createSlice";
import { useState } from "react";

function getViewList(currentPage) {
  return async (dispatch) => {
    const commentResponse = await axios
      .get(`/review/list/${currentPage}`)
      .then((response) => response.data);
    console.log("action>>", commentResponse);
    dispatch(commentReducers.getViewList({ commentResponse }));
  };
}

export const commentActions = {
  getViewList,
};

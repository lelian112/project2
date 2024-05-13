import axios from "axios";
import { commentReducers } from "../createSlice/comment_createSlice";
import { useState } from "react";

//review별 comment 리스트
function getCommentList(user_review_idx) {
  return async (dispatch) => {
    const commentResponse = await axios
      .get(`/comment/${user_review_idx}`)
      .then((response) => response.data);
    console.log("action>>", commentResponse);
    dispatch(commentReducers.getCommentList({ commentResponse }));
  };
}

//comment detail
function getCommentDetail(idx) {
  return async (dispatch) => {
    const commentResponse = await axios
      .get(`/comment/detail/${idx}`)
      .then((response) => response.data);
    console.log("view>>", commentResponse);
    dispatch(commentReducers.getCommentDetail({ commentResponse }));
  };
}

//comment write
function getCommentWrite(user_id, user_review_idx, formData) {
  console.log("formData:", formData);
  return async () => {
    await axios.post(`/comment/write/${user_id}/${user_review_idx}`, formData);
    console.log(user_id);
  };
}

//comment update
function getCommentUpdate(user_id, idx, formData) {
  return async () => {
    await axios
      .put(`/comment/update/${user_id}/${idx}`, formData)
      .then((response) => response.data);
    console.log("Ffformdata", formData);
  };
}

//comment delete
function getCommentDelete(user_id, idx) {
  return async () => {
    await axios
      .delete(`/comment/delete/${user_id}/${idx}`)
      .then((response) => response.data);
  };
}

export const commentActions = {
  getCommentList,
  getCommentDetail,
  getCommentWrite,
  getCommentUpdate,
  getCommentDelete,
};

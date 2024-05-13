import axios from "axios";
import { reviewReducers } from "../createSlice/review_createSlice";
import { useState } from "react";

const id = localStorage.getItem("id");

//좋아요 순 리뷰 정렬
function getMostlikeReviewList(currentPage) {
  return async (dispatch) => {
    let id = localStorage.getItem("id");
    const reviewResponse = await axios
      .get(`/review/mostlike/${currentPage}/${id}`)
      .then((response) => response.data);
    // console.log("action>>", reviewResponse);
    console.log("localid", currentPage, id);
    dispatch(reviewReducers.getMostlikeReviewList({ reviewResponse }));
  };
}

//최신 순 리뷰 정렬
function getNewReviewList(currentPage) {
  return async (dispatch) => {
    let id = localStorage.getItem("id");
    const reviewResponse = await axios
      .get(`/review/newreview/${currentPage}/${id}`)
      .then((response) => response.data);
    // console.log("action>>", reviewResponse);
    console.log("localidnew", id);
    dispatch(reviewReducers.getNewReviewList({ reviewResponse }));
  };
}

//리뷰 리스트
function getReviewList(currentPage) {
  return async (dispatch) => {
    const reviewResponse = await axios
      .get(`/review/list/${currentPage}`)
      .then((response) => response.data);
    // console.log("action>>", reviewResponse);
    dispatch(reviewReducers.getReviewList({ reviewResponse }));
  };
}

// 리뷰 detail
function getReviewDetail(idx) {
  return async (dispatch) => {
    const reviewResponse = await axios
      .get(`/review/view/${idx}/${id}`)
      .then((response) => response.data);
    // console.log("view>>", reviewResponse);
    dispatch(reviewReducers.getReviewDetail({ reviewResponse }));
  };
}

//리뷰 write
function getReviewWrite(movie_code, formData) {
  console.log("formData:", formData);
  return async () => {
    await axios.post(`/review/write/${id}/${movie_code}`, formData);
    console.log(id, movie_code);
  };
}

//리뷰 update
function getReviewUpdate(idx, formData) {
  return async () => {
    await axios
      .put(`/review/update/${idx}`, formData)
      .then((response) => response.data);
    console.log("Ffformdata", formData);
  };
}

//리뷰 delete
function getReviewDelete(idx) {
  return async () => {
    await axios
      .delete(`/review/delete/${idx}`)
      .then((response) => response.data);
  };
}

// 영화별 리뷰 리스트
function getMovieReviewList(movie_code) {
  return async (dispatch) => {
    const reviewResponse = await axios
      .get(`/review/${movie_code}/${id}`)
      .then((response) => response.data);
    console.log("action>>..", reviewResponse);
    dispatch(reviewReducers.getMovieReviewList({ reviewResponse }));
  };
}

//좋아요
function getHitLike(user_review_idx) {
  console.log("hitlike>>:", id, user_review_idx);
  return async () => {
    await axios.post(`/review/hitlike/${id}/${user_review_idx}`);
    console.log("get?", id, user_review_idx);
  };
}

//좋아요 중복 방지
// function getPushLike(user_id, user_review_idx) {
//   return async () => {
//     await axios.post(`/review/hitlike/${user_id}/${user_review_idx}`);
//     console.log(">>", user_id, user_review_idx);
//   };
// }

//좋아요 -
// function getDeleteLike(user_id, user_review_idx) {
//   return async () => {
//     await axios
//       .delete(`/review/deletelike/${user_id}/${user_review_idx}`)
//       .then((response) => response.data);
//     console.log(">>>>", user_id, user_review_idx);
//   };
// }

export const reviewActions = {
  getMostlikeReviewList,
  getNewReviewList,
  getReviewList,
  getReviewDetail,
  getReviewWrite,
  getReviewUpdate,
  getReviewDelete,
  getMovieReviewList,
  getHitLike,
};

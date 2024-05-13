import axios from "axios";
import { movieReducers } from "../createSlice/movie_createSlice";
import { useState } from "react";

const id = localStorage.getItem("id");

//장르별 영화 리스트
function getMovieList(currentPage, genre) {
  return async (dispatch) => {
    const movieResponse = await axios
      .get(`/movie/${genre}/${currentPage}`)
      .then((response) => response.data);
    console.log("action>>", movieResponse);
    dispatch(movieReducers.getMovieList({ movieResponse }));
  };
}

//user_rate 입력
function getAddMovieUserRate(formData) {
  return async () => {
    await axios.post(`/movie/detail/rate/${id}`, formData);
    console.log("user_rate input", id, formData);
  };
}

//wish 추가
function getAddMovieWish(code) {
  return async () => {
    await axios.post(`/movie/detail/wish/${code}/${id}`);
    console.log("wish", code, id);
  };
}

export const movieActions = {
  getMovieList,
  getAddMovieUserRate,
  getAddMovieWish,
};

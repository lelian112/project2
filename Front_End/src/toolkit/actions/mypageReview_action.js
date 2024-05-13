import axios from "axios";
import { myReviewReducers } from "../createSlice/mypagereview_createSlice";

function getReviewList(currentPage) {
  console.log(currentPage);

  const pathname = window.location.pathname;
  const id = pathname.split("/")[2];
  console.log("id:", id);

  return async (dispatch) => {
    const ReviewResponse = await axios
      .get(`/review/mypage/${id}/${currentPage}`)
      .then((response) => response.data);
    console.log("data:", ReviewResponse);

    dispatch(
      myReviewReducers.getReviewList({
        ReviewResponse,
      })
    );
  };
}

export const reviewActions = {
  getReviewList,
};

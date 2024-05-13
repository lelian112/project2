import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Pagination from "../Pagination/ReviewPagination";
import { reviewActions } from "../toolkit/actions/mypageReview_action";
import "./Review.css";

const Review = () => {
  {
    /**page */
  }
  const { currentPage } = useParams();
  console.log("page:", currentPage);
  const dispatch = useDispatch();

  const reviewList = useSelector((state) => state.myReview.reviewList);
  const pageInfo = useSelector((state) => state.myReview.pageInfo);

  console.log("pageinfo", pageInfo);
  console.log("reviewlist:", reviewList);

  const getReviewList = (currentPage) => {
    console.log("currentPage", currentPage);
    dispatch(reviewActions.getReviewList(currentPage));
  };

  useEffect(() => {
    // getinfo();
    getReviewList(currentPage);
  }, []);

  return (
    <>
      <div id='reviewContainer'>
        <div className='reviewTitle'>
          <h3>내가 평가한 영화</h3>
          <div className='line' />
        </div>

        {/*스크롤 */}
        <div className='review'>
          {reviewList &&
            reviewList.map((review) => (
              <div className='eachContainer' key={review.idx}>
                <div className='movie'>
                  <img src={review.poster}></img>
                </div>
                <div className='reviewContent'>
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
        </div>

        <div className='pagination'>
          {pageInfo && <Pagination getReviewList={getReviewList} />}
        </div>
      </div>
    </>
  );
};

export default Review;

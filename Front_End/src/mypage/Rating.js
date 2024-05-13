import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Rating.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Pagenation from "../Pagination/ReviewPagination";

const Rating = () => {
  const pathname = window.location.pathname;
  const id = pathname.split("/")[2];
  console.log("id:", id);

  const [poster, setPoster] = useState([]);
  const [rating, setRating] = useState([]);

  const getinfo = async (e) => {
    try {
      const response = await axios.get(`/wish/rate/${id}`);
      const data = response.data;
      console.log("list", data);

      const poster = data.map((item) => item.poster);
      console.log("poster:", poster);

      const rate = data.map((item) => item.rate);
      console.log("rate: ", rate);

      setPoster(poster);
      setRating(rate);
    } catch (error) {
      console.error("error:", error);
    }
  };

  {
    /**page */
  }
  // const {currentPage} = useParams();
  // const dispatch = useDispatch();
  // const pageInfo = useSelector((state) => state.review.pageInfo)

  // const getReviewList = (currentPage) => {
  //   console.log('currentPage', currentPage);
  //   dispatch(reviewActions.getReviewList(currentPage));
  // }

  useEffect(() => {
    getinfo();
    // getReviewList(currentPage);
  }, []);

  return (
    <>
      <div id='ratingContainer'>
        <div className='ratingTitle'>
          <h3>내가 별점한 영화</h3>
          <div className='line' />
        </div>

        {/*review 박스 */}
        <div className='rating'>
          {rating &&
            poster &&
            rating.map((rate, idx) => (
              <div className='movieRateInfo' key={idx}>
                <div className='movie'>
                  <img src={poster[idx]}></img>
                </div>

                <div className='rate'>
                  <p>별점: {rate}</p>
                  <i className='icon fa-solid fa-star' />
                </div>
              </div>
            ))}
        </div>

        <div className='numbering'></div>
      </div>
    </>
  );
};

export default Rating;

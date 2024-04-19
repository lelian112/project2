import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Review.css';

const Review = () => {

  const [review, setReview] = useState([]);
  const [poster, setPoster] = useState([]);

  const getinfo = async (e) => {
    try {
      const response = await axios
        .get(`/review/${localStorage.id}`);
      const data = response.data;
      console.log(data)

      const review = data.reviewList.map((item) => item.review);
      console.log(review);

      const poster = data.reviewList.map((item) => item.poster);
      console.log(poster)

      setReview(review);
      setPoster(poster);

    } catch (error) {
      console.error('error', error);
    }
  }

  useEffect(() => {
    getinfo();
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

          {review && poster && review.map((code, idx) => (
            <div className='eachContainer' key={idx}>
              <div className='movie'>
                <img src={poster[idx]}></img>
                
              </div>
              <div className='reviewContent'>
                <p>{code}</p>
              </div>
            </div>
          ))}

          {/* <div className='eachContainer'>
            <div className='movie'></div>
            <div className='reviewContent'></div>
          </div>

          <div className='eachContainer'>
            <div className='movie'></div>
            <div className='reviewContent'></div>
          </div>

          <div className='eachContainer'>
            <div className='movie'></div>
            <div className='reviewContent'></div>
          </div> */}


        </div>




      </div>
    </>
  );
};

export default Review;
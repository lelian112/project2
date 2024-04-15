import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <>
      <div id='reviewContainer'>
        <div className='reviewTitle'>
          <h3>내가 평가한 영화</h3>
          <div className='line' />
        </div>

        {/*스크롤 */}
        <div className='review'>

          <div className='eachContainer'>
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
          </div>

          <div className='eachContainer'>
            <div className='movie'></div>
            <div className='reviewContent'></div>
          </div>


        </div>

        


      </div>
    </>
  );
};

export default Review;
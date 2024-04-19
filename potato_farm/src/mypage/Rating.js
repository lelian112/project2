import React, { useState } from 'react';
import './Rating.css';

const Rating = () => {

  const [rating, setRating] = useState([]);

  const getinfo = async (e) => {
    try{
      
    }catch (error){
      console.error('error:', error);
    };
  };

  return (
    <>
      <div id='ratingContainer'>
        <div className='ratingTitle'>
          <h3>내가 별점한 영화</h3>
          <div className='line' />
        </div>

        <div className='ratingContainer'>
          
            <div className="movie">
              
            </div>
          
          {/* <div className='movie'></div>
          <div className='movie'></div>
          <div className='movie'></div>
          <div className='movie'></div>
          <div className='movie'></div>
          <div className='movie'></div>
          <div className='movie'></div>
          <div className='movie'></div> */}


        </div>

        <div className='numbering'>

        </div>

      </div>

    </>
  );
};

export default Rating;
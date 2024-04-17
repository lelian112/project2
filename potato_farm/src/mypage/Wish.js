import React, { useEffect, useState } from 'react';
import './Wish.css';
import axios from 'axios';

const Wish = () => {

  const [movie_code, setMovie_code] = useState([]);

  const getinfo = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios
        .get(`/wish/${localStorage.id}`);
      const data = response.data;

      const movieCodes = data.map((item) => item.movie_code);
      console.log(movieCodes);

      setMovie_code(movieCodes);

    } catch (error) {
      console.error('error', error);
    }
  }

  useEffect(() => {
    getinfo();
  }, []);

  return (
    <>
      <div id='wishContainer'>
        <div className='wishTitle'>
          <h3>내가 찜한 목록</h3>
          <div className='line' />
        </div>

        <div className='movieContainer'>
          {movie_code && movie_code.map((code, index) => (
            <div className="movie" key={index}>
              <p>{code}</p>
            </div>
          ))}
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

export default Wish;
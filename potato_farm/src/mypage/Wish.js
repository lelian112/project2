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
      console.log(data);

      //db에서 가져온 data를 한줄씩 for(map)문으로 돌려짐
      //각 줄당 item이라는 변수명에 들어감
      //item = {idx: 18, user_id: 'test', movie_code: '20247780', wish: 'Y'}
      //여기서 moviecode만 가져옴
      // const movieCodes = data.WishList.map((item) => item.movie_code);
      const movieCodes = data.WishList.map((item) => item.poster);
      console.log(movieCodes);
      
      //setmovie_code 안에 moviecode 배열 들어감
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
          {movie_code && movie_code.map((code, idx) => (
            <div className="movie" key={idx}>
              {/* <p>{code}</p> */}
              <img src={code}></img>
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
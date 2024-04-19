import React, { useEffect, useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import './Mypage.css';

const Mypage = () => {

  // const [profilePic, setProfilePic] = useState({
  //   pic: '',
  // });

  // const info = async () => {
  //   try {
  //     const response = await axios
  //       .get(`/user/editinfo/${localStorage.id}`);
  //     const data = response.data;

  //     console.log(data.pic);

  //     setProfilePic(data.pic);

  //   } catch (error) {
  //     console.error('Error', error);
  //   }
  // };

  // useEffect(() => {
  //   info();
  // }, []);

  const [daliyCnt, setDailyCnt] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);
  const [propic, setPropic] = useState('');

  //방문자 수 가져오기
  const info = async () => {
    try {
      const response = await axios
        .post(`/mypage/${localStorage.id}`);
      const data = response.data;
      console.log(data);

      setDailyCnt(data.totalCnt);
      setTotalCnt(data.totalCnt);
      // setPropic(data.pic);


    } catch (error) {
      console.error('error', error);
    }
  }

  


  useEffect(() => {
    info();
  }, []);

  return (
    <>
      <div id='mypageLayout'> {/*지우는거 */}
        <div id='mypageContainer'> {/*background: transparent */}
          <div id='background'>

            <div className='buttonContainer'>
              <Link to=''>
                <button id='home'>home</button>
              </Link>

              <Link to='calendar'>
                <button id='calendar'>Calendar</button>
              </Link>

              <Link to='wish'>
                <button id='wish'>Wish</button>
              </Link>

              <Link to='rating'>
                <button id='rating'>Rating</button>
              </Link>

              <Link to='review'>
                <button id='review'>Review</button>
              </Link>

              <Link to='setting'>
                <button id='setting'>Setting</button>
              </Link>
            </div>



            {/*프로필(왼쪽) */}
            <div id='profile'>
              {/*프로필사진 */}
              <div className='box profilePic'>
                <img></img>
              </div>

              {/*방문자 수 */}
              <div className='box visitors'>
                <p>
                  <p>오늘 방문자 수:{daliyCnt}</p>
                  <p>모든 방문자 수:{totalCnt}</p>
                </p>
              </div>

              {/*팔로워 팔로잉 */}
              <div className='box follow'>
                <p>
                  팔로잉
                </p>
              </div>

              <div className='line' />

              {/*한줄소개 */}
              <div className='box aboutMyself'>
                <p>
                  hihi
                </p>
              </div>



            </div>

            {/*게시판(가운데) */}
            <div id='board'>
              <div id='boardContainer'>
                <Link to='logout'>
                  <button id='logout'>logout</button>
                </Link>
              </div>

            </div>

          </div>

          {/*가운데 이어주는 링크*/}
          <div className='container'>
            <div className='link' />
            <div className='link' />
          </div>

          <div className='container'>
            <div className='link' />
            <div className='link' />
          </div>

        </div>
        <Outlet />
      </div >

    </>
  );
};

export default Mypage;
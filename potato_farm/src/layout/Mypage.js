import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import './Mypage.css';

const Mypage = () => {
  return (
    <>
      <div id='mypageLayout'> {/*지우는거 */}
        <div id='mypageContainer'> {/*background: transparent */}
          <div id='background'>

            <div className='buttonContainer'>
              <button id='home'>home</button>
              <Link to='calendar'>
                <button id='calendar'>Calendar</button>
              </Link>
              <button id='home'>Wanted</button>
              <button id='home'>Reviewd</button>
              <button id='home'>Wrotereview</button>
              <button id='home'>Setting</button>
            </div>



            {/*프로필(왼쪽) */}
            <div id='profile'>
              {/*프로필사진 */}
              <div className='box profilePic'>
                <p>
                  hi
                  asdkjasd
                  dasjkdnals
                  daksjdnas
                  adsjdnasd
                  dsajdnaksjdnkasndakdsajdnasjdn

                </p>
              </div>

              {/*한줄소개 */}
              <div className='box aboutMyself'>
                <p>
                  hihi
                </p>
              </div>

              <div className='line' />

              {/*방문자 수 */}
              <div className='box visitors'>
                <p>
                  ihihihih
                </p>
              </div>

              {/*팔로워 팔로잉 */}
              <div className='box follow'>
                <p>
                  dsadasdasd
                </p>
              </div>

            </div>

            {/*게시판(가운데) */}
            <div id='board'>


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
      </div>

    </>
  );
};

export default Mypage;
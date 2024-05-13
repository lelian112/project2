import React, { useEffect, useState } from "react";
import { Link, useNavigate, Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./Mypage.css";
import { reviewActions } from "../toolkit/actions/mypageReview_action";

const Mypage = () => {
  const navigate = useNavigate();

  const [daliyCnt, setDailyCnt] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);
  const [propic, setPropic] = useState("");
  const [caption, setCaption] = useState("");
  const [userfollowings, setUserFollowings] = useState([]);
  const [userfollowers, setUserFollowers] = useState([]);
  const [usembti, setUserMbti] = useState("");

  //방문자 수 가져오기 + caption
  const info = async () => {
    try {
      const pathname = window.location.pathname;
      const id = pathname.split("/")[2];
      console.log(id);

      const response = await axios.post(`/mypage/${id}`);
      const data = response.data;
      console.log(data);

      setDailyCnt(data.daliyCnt);
      setTotalCnt(data.totalCnt);
      setCaption(data.userCaption);
      setUserMbti(data.userMbti);
      setPropic(data.userPic);

      setUserFollowings(data.userfollowings);
      setUserFollowers(data.userfollowers);
      // setPropic(data.pic);
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      navigate(`/mypage/${selectedValue}/home`);
      window.location.reload();
    }
  };

  const tomypage = () => {
    navigate(`/mypage/${localStorage.id}/home`);
    window.location.reload();
  };

  {
    /**내페이지면 팔로우 버튼 안나오게 */
  }
  const pathname = window.location.pathname;
  const urlid = pathname.split("/")[2];
  console.log(urlid);

  const mypage = localStorage.id === urlid;

  {
    /*팔로잉 체크 */
  }
  const [isfollow, setIsFollow] = useState(false);

  const checkfollow = async () => {
    // e.preventDefault();

    const pathname = window.location.pathname;
    const urlid = pathname.split("/")[2];
    console.log(urlid);

    try {
      const response = await axios.get(
        `/mypage/check/${localStorage.id}/${urlid}`
      );
      const follow = response.data;
      console.log("follow:", follow);
      setIsFollow(follow);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFollowClick = async () => {
    try {
      const pathname = window.location.pathname;
      const urlid = pathname.split("/")[2];
      const response = await axios.post(
        `/mypage/follow/${localStorage.id}/${urlid}`
      );
      const follow = response.data;
      setIsFollow(follow);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollowClick = async () => {
    try {
      const pathname = window.location.pathname;
      const urlid = pathname.split("/")[2];
      const response = await axios.delete(
        `/mypage/unfollow/${localStorage.id}/${urlid}`
      );
      const unfollow = response.data;
      setIsFollow(unfollow);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    info();
    checkfollow();
  }, []);

  return (
    <>
      <div id='mypageLayout'>
        {" "}
        {/*지우는거 */}
        <div id='mypageContainer'>
          {" "}
          {/*background: transparent */}
          <div id='background'>
            <div className='buttonContainer'>
              <Link to='home'>
                <button id='home'>home</button>
              </Link>

              <Link to='calendar'>
                <button id='calendar'>Calendar</button>
              </Link>

              <Link to='wish/1'>
                <button id='wish'>Wish</button>
              </Link>

              <Link to='rating'>
                <button id='rating'>Rating</button>
              </Link>

              <Link to='review/1'>
                <button id='review'>Review</button>
              </Link>

              <Link to='editinfo'>
                {mypage && <button id='editinfo'>Setting</button>}
              </Link>
            </div>

            {/*프로필(왼쪽) */}
            <div id='profile'>
              {/*프로필사진 */}
              <div className='box profilePic'>
                <img src={propic}></img>
                {/* <img src='C:/Users/CWPARK/Documents/ai_chatbot/project/2nd_java_web/Project/Back_End/Image/profile/viking.jpg' /> */}
              </div>

              {/*방문자 수 */}
              <div className='box visitors'>
                <div>
                  <p>오늘 방문자:{daliyCnt} </p>
                  <p>모든 방문자:{totalCnt}</p>
                </div>
              </div>

              {/*팔로워 팔로잉 */}
              <div className='box follow'>
                <label htmlFor='followings'>팔로잉:</label>
                <select onChange={handleSelectChange}>
                  <option value=''>Following</option>
                  {userfollowings.map((code, idx) => (
                    <option key={idx} value={code}>
                      {code}
                    </option>
                  ))}
                </select>

                <label htmlFor='followers'>팔로워:</label>
                <select>
                  <option value=''>Follower</option>
                  {userfollowers.map((code, idx) => (
                    <option key={idx} value={code}>
                      {code}
                    </option>
                  ))}
                </select>

                <button id='tomypage' onClick={tomypage}>
                  내 페이지로
                </button>
              </div>

              <div className='line' />

              {/*MBTI */}
              <div className='box mbti'>
                <p>MBTI: {usembti}</p>
              </div>

              {/*한줄소개 */}
              <div className='box aboutMyself'>
                <p>{caption}</p>
              </div>
            </div>

            {/**팔로우 버튼 */}
            <div className='followbtnContainer'>
              {!mypage && isfollow ? (
                <button id='followBtn' onClick={handleUnfollowClick}>
                  unfollow
                </button>
              ) : (
                !mypage && <button onClick={handleFollowClick}>follow</button>
              )}
            </div>

            {/*게시판(가운데) */}
            <div id='board'>
              <div id='boardContainer'>
                {/* <Link to='logout'>
                  <button id='logout'>logout</button>
                </Link> */}
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
      </div>
    </>
  );
};

export default Mypage;

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { StyleSheetManager } from "styled-components";
import graystar from "../../images/graystar.png";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import like from "../../images/like.png";
import commentImage from "../../images/commentImage.png";
import reviewwrite from "../../images/reviewWrite.png";
import wish from "../../images/wish.png";
import addWish from "../../images/addWish.png";
import write from "../../images/write.png";
import * as m from "../../Styles/Movie/MovieInfoStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../toolkit/actions/movie_action";
import { reviewActions } from "../../toolkit/actions/review_action";
import ReviewWritePopup from "../Review/ReviewWritePopup";
import StarRating from "../../Hook/StarRating";
import LoginModal from "../../components/LoginModal";

const MovieInfo = () => {
  const [moviesData, setMoviesData] = useState([]);

  //modal
  const [showModal, setShowModal] = useState(false);
  const handleModalCancel = () => {
    setShowModal(false);
  };

  const { code } = useParams();
  // console.log("code>>>>", code);

  const dispatch = useDispatch();

  //user_rate 입력
  const [userRate, setUserRate] = useState();
  const handleRatingChange = (rating) => {
    setUserRate(rating);
    console.log("setuserrate", userRate);
  };

  //add moviewish
  const [addwish, setAddwish] = useState();
  const handleWishToggle = async (code) => {
    if (!user_id) {
      setShowModal(true);
      return;
    }

    if (addwish) {
      dispatch(movieActions.getAddMovieWish(code));
    } else {
      dispatch(movieActions.getAddMovieWish(code));
    }
    setAddwish(!addwish);
  };

  // 좋아요
  const [liked, setLiked] = useState();

  const handleLikeToggle = async (reviewIdx) => {
    if (liked) {
      dispatch(reviewActions.getHitLike(reviewIdx));
    } else {
      dispatch(reviewActions.getHitLike(reviewIdx));
    }
    setLiked(!liked);
  };
  const user_id = localStorage.getItem("id");
  useEffect(() => {
    getMovieReviewList(code);
    const fetchMoviesData = async () => {
      try {
        const response = await axios.get(`/movie/detail/${code}/${user_id}`);
        setMoviesData(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMoviesData();
  }, [addwish, userRate, liked]);

  const getMovieReviewList = (code) => {
    dispatch(reviewActions.getMovieReviewList(code));
  };
  const movieReviewList = useSelector((state) => state.review.movieReviewList);

  //팝업
  const [popupOpen, setPopupOpen] = useState(false);

  // 팝업 열기 함수
  const openPopup = () => {
    if (!user_id) {
      setShowModal(true);
      return;
    }
    setPopupOpen(true);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    setPopupOpen(false);
  };

  const getReleaseDate = () => {
    if (!moviesData.release_at) return ""; // release_at 값이 없는 경우 빈 문자열 반환
    return moviesData.release_at.split("T")[0]; // "T"를 기준으로 나눈 후 첫 번째 요소인 날짜 정보만 반환
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "imageUrl"}>
      <>
        {showModal && <LoginModal handleModalCancel={handleModalCancel} />}
        <m.Movie key={moviesData.code}>
          <m.MoviePage>
            <m.MovieInfoContainer>
              <m.MovieBackgroundImg imageUrl={moviesData.stillcut_1}>
                <m.MovieBackground>
                  <m.WrapMovieInfo>
                    <m.MovieTitle>
                      <m.MovieNameKor>{moviesData.name_kor}</m.MovieNameKor>
                      <m.MovieNameEng>{moviesData.name_eng}</m.MovieNameEng>
                      <m.MovieInfo1>
                        <m.MovieReleaseAt>{getReleaseDate()}</m.MovieReleaseAt>
                        <m.MovieGenre>
                          · {moviesData.genre_1 && `${moviesData.genre_1} `}
                          {moviesData.genre_1 && moviesData.genre_2 && "· "}
                          {moviesData.genre_2 && `${moviesData.genre_2} `}
                        </m.MovieGenre>
                        <m.MovieCountry>· {moviesData.country}</m.MovieCountry>
                      </m.MovieInfo1>

                      <m.MovieInfo2>
                        <m.RunningTime>
                          {moviesData.running_time}분{" "}
                        </m.RunningTime>
                        <m.MovieAgeType>· {moviesData.age_type}</m.MovieAgeType>
                      </m.MovieInfo2>
                      <m.MovieInfo3>
                        {moviesData.total_audience && (
                          <m.TotalAudience>
                            누적 관객 {moviesData.total_audience}명
                          </m.TotalAudience>
                        )}
                      </m.MovieInfo3>
                    </m.MovieTitle>
                  </m.WrapMovieInfo>
                </m.MovieBackground>
              </m.MovieBackgroundImg>
            </m.MovieInfoContainer>

            <m.MovieContents>
              <m.MovieContentsContainer>
                <m.LeftMovieContentsContainer>
                  <m.Poster src={moviesData.poster} alt='포스터'></m.Poster>
                </m.LeftMovieContentsContainer>
                <m.RightMovieContentsContainer>
                  <m.TopContents>
                    <m.WrapRate>
                      <m.WrapUserRate>
                        <StarRating
                          star={moviesData.rate}
                          // onClick={handleRatingChange}
                          onClick={handleRatingChange}
                        />
                        <m.UserStarRating>평가하기</m.UserStarRating>
                      </m.WrapUserRate>
                      <m.WrapRateAvg>
                        <m.RateAvg>{moviesData.rate_avg}</m.RateAvg>
                        <m.Rate>평균 평점</m.Rate>
                      </m.WrapRateAvg>
                    </m.WrapRate>

                    <m.UserMenu>
                      <m.UserMovieWish>
                        <m.UserMovieWishBtn
                          onClick={() => handleWishToggle(moviesData.code)}
                        >
                          <m.UserMovieWishImage
                            src={moviesData.wish === "0" ? wish : addWish}
                          ></m.UserMovieWishImage>
                          <m.AddWish
                            iswish={moviesData.wish === "0" ? "true" : "false"}
                          >
                            위시리스트
                          </m.AddWish>
                        </m.UserMovieWishBtn>
                      </m.UserMovieWish>
                      <m.UserComment>
                        <m.UserCommentBtn onClick={openPopup}>
                          <m.UserCommentImage
                            src={reviewwrite}
                          ></m.UserCommentImage>
                          <m.UserCommentMenu>리뷰 작성</m.UserCommentMenu>
                        </m.UserCommentBtn>
                      </m.UserComment>
                    </m.UserMenu>
                  </m.TopContents>
                  <m.BottomContents>
                    <m.MoviePlot>{moviesData.plot}</m.MoviePlot>
                  </m.BottomContents>
                </m.RightMovieContentsContainer>
              </m.MovieContentsContainer>

              {moviesData.director_1 ||
              moviesData.director_2 ||
              moviesData.actor_1 ||
              moviesData.actor_2 ||
              moviesData.actor_3 ||
              moviesData.actor_4 ||
              moviesData.actor_5 ? (
                <m.MoviePeople>
                  <m.MoviePeopleTitle>출연/제작</m.MoviePeopleTitle>
                  <m.MoviePeopleName>
                    {moviesData.director_1 && (
                      <m.MovieDirector>
                        {moviesData.director_1} (감독)
                      </m.MovieDirector>
                    )}
                    {moviesData.director_2 && (
                      <m.MovieDirector>
                        {moviesData.director_2} (감독)
                      </m.MovieDirector>
                    )}
                    {moviesData.actor_1 && (
                      <m.MovieActor>{moviesData.actor_1} (배우)</m.MovieActor>
                    )}
                    {moviesData.actor_2 && (
                      <m.MovieActor>{moviesData.actor_2} (배우)</m.MovieActor>
                    )}
                    {moviesData.actor_3 && (
                      <m.MovieActor>{moviesData.actor_3} (배우)</m.MovieActor>
                    )}
                    {moviesData.actor_4 && (
                      <m.MovieActor>{moviesData.actor_4} (배우)</m.MovieActor>
                    )}
                    {moviesData.actor_5 && (
                      <m.MovieActor>{moviesData.actor_5} (배우)</m.MovieActor>
                    )}
                  </m.MoviePeopleName>
                </m.MoviePeople>
              ) : null}

              <m.UserReview
                style={{
                  marginBottom:
                    moviesData.stillcut_1 &&
                    moviesData.stillcut_2 &&
                    moviesData.stillcut_3
                      ? 0
                      : 60,
                }}
              >
                <m.UserReviewTitleContainer>
                  <m.WrapUserReviewTitle>
                    <m.UserReviewTitle>리뷰</m.UserReviewTitle>
                    {/* <m.UserReviewCnt>userReviewCnt</m.UserReviewCnt> */}
                  </m.WrapUserReviewTitle>
                  {movieReviewList.length > 0 && (
                    <m.MoreBtn to={`/movie/${code}/review`}>더보기</m.MoreBtn>
                  )}
                </m.UserReviewTitleContainer>

                {movieReviewList.length === 0 && (
                  <m.NoReviewBox>
                    <m.ReviewIcon src={write} alt="댓글 아이콘"></m.ReviewIcon>
                    <m.ReviewInfo>처음으로 리뷰를 남겨보세요</m.ReviewInfo>
                  </m.NoReviewBox>
                )}

                <m.UserReviewContentsContainer>
                  {movieReviewList.slice(0, 8).map((review) => (
                    <m.WrapUserReviewContents key={review.idx}>
                      <m.UserReviewContentsTitleContainer>
                        <m.WrapUserReviewContentsTitle
                          to={`/mypage/${review.user_id}`}
                        >
                          <m.UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></m.UserImage>
                          <m.UserName>{review.user_id}</m.UserName>
                        </m.WrapUserReviewContentsTitle>
                        {/* <m.MovieRate>
                          <m.RateImage
                            src={graystar}
                            alt="별점 이미지"
                          ></m.RateImage>
                          <m.UserRate>userRate</m.UserRate>
                        </m.MovieRate> */}
                      </m.UserReviewContentsTitleContainer>

                      <m.UserReviewContents>
                        {/* <m.UserReviewContentsMain
                      to={`/playground/comments/detail/${view.idx}`}
                    > */}
                        <m.UserReviewContentsMain
                          to={`/playground/review/detail/${review.idx}`}
                        >
                          {review.review}
                        </m.UserReviewContentsMain>
                      </m.UserReviewContents>

                      <m.ActiveArea>
                        <m.Like onClick={() => handleLikeToggle(review.idx)}>
                          <m.LikeImg
                            src={review.like_btn ? like : likeImage}
                            alt='좋아요 이미지'
                          ></m.LikeImg>
                          <m.LikeCnt>{review.total_likes_cnt}</m.LikeCnt>
                        </m.Like>
                        <m.UserReviewComment>
                          <m.UserReviewCommentImg
                            src={commentImage}
                            alt='댓글 이미지'
                          ></m.UserReviewCommentImg>
                          <m.UserReviewCommentCnt>
                            {review.total_comment_cnt}
                          </m.UserReviewCommentCnt>
                        </m.UserReviewComment>
                      </m.ActiveArea>
                    </m.WrapUserReviewContents>
                  ))}
                </m.UserReviewContentsContainer>
              </m.UserReview>

              {moviesData.stillcut_1 &&
                moviesData.stillcut_2 &&
                moviesData.stillcut_3 && (
                  <m.Stillcut
                    style={{ marginBottom: moviesData.teaser ? 0 : 60 }}
                  >
                    <m.StillcutTitle>갤러리</m.StillcutTitle>
                    <m.StillcutContentsContainer>
                      <m.WrapStillcutContents>
                        <m.StillcutContents
                          imageUrl={moviesData.stillcut_1}
                        ></m.StillcutContents>
                        <m.StillcutContents
                          imageUrl={moviesData.stillcut_2}
                        ></m.StillcutContents>
                        <m.StillcutContents
                          imageUrl={moviesData.stillcut_3}
                        ></m.StillcutContents>
                      </m.WrapStillcutContents>
                    </m.StillcutContentsContainer>
                  </m.Stillcut>
                )}

              {moviesData.teaser && (
                <m.Teaser>
                  <m.TeaserTitle>동영상</m.TeaserTitle>
                  <m.TeaserContentsContainer>
                    <m.WrapTeaserContents>
                      <m.TeaserLink
                        to={moviesData.teaser}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <m.TeaserContents>예고</m.TeaserContents>
                      </m.TeaserLink>
                    </m.WrapTeaserContents>
                  </m.TeaserContentsContainer>
                </m.Teaser>
              )}
            </m.MovieContents>
          </m.MoviePage>
        </m.Movie>

        {popupOpen && (
          <ReviewWritePopup popupOpen={popupOpen} closePopup={closePopup} />
        )}
      </>
    </StyleSheetManager>
  );
};

export default MovieInfo;

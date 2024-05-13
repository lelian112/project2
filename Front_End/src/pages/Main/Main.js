import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";
import { scrollLeft, scrollRight } from "../../Hook/scrollFunctions";
import * as m from "../../Styles/Main/MainStyle";
import { useParams } from "react-router-dom";

const Main = () => {
  const reviewListRef = useRef(null);
  const movieListRef = useRef(null);
  const domesticMovieListRef = useRef(null);
  const foreignMovieListRef = useRef(null);
  const aniListRef = useRef(null);
  // const [allMoviesData, setAllMoviesData] = useState([]);
  // const [combinedMoviesData, setCombinedMoviesData] = useState([]);
  const [domesticMoviesData, setDomesticMoviesData] = useState([]);
  const [foreignMoviesData, setForeignMoviesData] = useState([]);
  const [animationListData, setAnimationListData] = useState([]);
  const [dailyboxofficeData, setDailyboxofficeData] = useState([]);
  // const [selectedcode, setSelectedCode] = useState("");
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchDailyBoxoffice = async () => {
      try {
        const mainResponse = await axios.get("/main");
        const { dailyboxoffice, domesticmovies, foreignmovies, animationList } =
          mainResponse.data;
        setDailyboxofficeData(dailyboxoffice);
        setDomesticMoviesData(domesticmovies);
        setForeignMoviesData(foreignmovies);
        setAnimationListData(animationList);

        //리뷰
        const reviewResponse = await axios.get(`/review/mostlike/1`);
        setReviewData(reviewResponse.data.reviewList);

        // const codes = combinedMoviesData.map((movie) => movie.code);
        // setSelectedCode(codes);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchDailyBoxoffice(); // 영화 정보를 가져오는 함수 호출
  }, []);

  return (
    <>
      <m.MainPage>
        <m.MainPageContainer>
          <m.Review>
            <m.ReviewHeader>
              <m.ReviewHeaderName>지금 뜨는 리뷰</m.ReviewHeaderName>
              <m.ReviewLink to={`/playground/review/1`}>
                더보기 {">"}
              </m.ReviewLink>
            </m.ReviewHeader>

            <m.BoxContainer>
              <m.LeftBtn onClick={() => scrollLeft(reviewListRef)}>
                <m.LeftBtnIcon src={arrowleft} alt='왼쪽 이동'></m.LeftBtnIcon>
              </m.LeftBtn>
              <m.BoxList ref={reviewListRef}>
                {reviewData.map((review) => (
                  <m.Box key={review.idx}>
                    <m.BoxContents>
                      <m.ReviewBox to='/playground/review/1'>
                        <m.BoxTitle>
                          <m.BoxTitleContainer>
                            <m.UserImage src={userImage} alt='유저 이미지' />
                            <m.UserName>{review.user_id}</m.UserName>
                          </m.BoxTitleContainer>
                          <m.MovieRate>{review.userRate}</m.MovieRate>
                        </m.BoxTitle>

                        <m.BoxBodyContainer>
                          <m.MoviePoster src={review.poster} alt='포스터' />
                          <m.MovieReview>
                            <m.MovieName>{review.name_kor}</m.MovieName>
                            <m.UserReview>{review.review}</m.UserReview>
                          </m.MovieReview>
                        </m.BoxBodyContainer>

                        <m.DividingLine />
                        <m.ActiveArea>
                          <m.Like>
                            <m.LikeImg src={likeImage} alt='좋아요 이미지' />
                            <m.LikeCnt>{review.total_likes_cnt}</m.LikeCnt>
                          </m.Like>

                          <m.UserReviewComment>
                            <m.UserReviewCommentImg
                              src={commentImage}
                              alt='댓글 이미지'
                            />
                            <m.UserReviewCommentCnt>
                              {review.total_comment_cnt}
                            </m.UserReviewCommentCnt>
                          </m.UserReviewComment>
                        </m.ActiveArea>
                      </m.ReviewBox>
                    </m.BoxContents>
                  </m.Box>
                ))}
              </m.BoxList>
              <m.RightBtn onClick={() => scrollRight(reviewListRef)}>
                <m.RightBtnIcon
                  src={arrowright}
                  alt='오른쪽 이동'
                ></m.RightBtnIcon>
              </m.RightBtn>
            </m.BoxContainer>
          </m.Review>

          {/* 박스오피스 */}
          <m.Boxoffice>
            <m.BoxofficeHeader>
              <m.BoxofficeHeaderName>박스오피스 순위</m.BoxofficeHeaderName>
              <m.BoxofficeLink to='/boxoffice/daily'>
                더보기 {">"}
              </m.BoxofficeLink>
            </m.BoxofficeHeader>

            <m.MovieContainer>
              <m.LeftBtn onClick={() => scrollLeft(movieListRef)}>
                <m.LeftBtnIcon src={arrowleft} alt='왼쪽 이동'></m.LeftBtnIcon>
              </m.LeftBtn>
              <m.WrapMovie ref={movieListRef}>
                {dailyboxofficeData &&
                  dailyboxofficeData.map((movie, index) => (
                    <m.Movie key={movie.code}>
                      <m.MovieRanking>
                        <m.Ranking>{movie.ranking}</m.Ranking>
                      </m.MovieRanking>
                      <m.PosterLink to={`/movie/${movie.code}`}>
                        <m.Poster src={movie.poster} alt='포스터'></m.Poster>
                      </m.PosterLink>
                      <m.MovieNameKor>{movie.name_kor}</m.MovieNameKor>
                      <m.MovieInfo>
                        <m.MovieReleaseAt>
                          {movie.release_at.slice(
                            0,
                            movie.release_at.indexOf("T")
                          )}
                        </m.MovieReleaseAt>
                        <m.MovieCountry>{movie.country}</m.MovieCountry>
                      </m.MovieInfo>
                      <m.Rate>평균★ {movie.rate_avg}</m.Rate>
                    </m.Movie>
                  ))}
              </m.WrapMovie>
              <m.RightBtn onClick={() => scrollRight(movieListRef)}>
                <m.RightBtnIcon
                  src={arrowright}
                  alt='오른쪽 이동'
                ></m.RightBtnIcon>
              </m.RightBtn>
            </m.MovieContainer>
          </m.Boxoffice>

          {/* 국내영화 */}
          <m.Boxoffice>
            <m.BoxofficeHeader>
              <m.BoxofficeHeaderName>국내 영화</m.BoxofficeHeaderName>
            </m.BoxofficeHeader>

            <m.MovieContainer>
              <m.LeftBtn onClick={() => scrollLeft(domesticMovieListRef)}>
                <m.LeftBtnIcon src={arrowleft} alt='왼쪽 이동'></m.LeftBtnIcon>
              </m.LeftBtn>
              <m.WrapMovie ref={domesticMovieListRef}>
                {domesticMoviesData &&
                  domesticMoviesData.map((domestic, index) => (
                    <m.Movie key={domestic.code}>
                      <m.PosterLink to={`/movie/${domestic.code}`}>
                        <m.Poster src={domestic.poster} alt='포스터'></m.Poster>
                      </m.PosterLink>
                      <m.MovieNameKor>{domestic.name_kor}</m.MovieNameKor>
                      <m.MovieInfo>
                        <m.MovieReleaseAt>
                          {domestic.release_at.slice(
                            0,
                            domestic.release_at.indexOf("T")
                          )}
                        </m.MovieReleaseAt>
                        <m.MovieCountry>{domestic.country}</m.MovieCountry>
                      </m.MovieInfo>
                      <m.Rate>평균★ {domestic.rate_avg}</m.Rate>
                    </m.Movie>
                  ))}
              </m.WrapMovie>
              <m.RightBtn onClick={() => scrollRight(domesticMovieListRef)}>
                <m.RightBtnIcon
                  src={arrowright}
                  alt='오른쪽 이동'
                ></m.RightBtnIcon>
              </m.RightBtn>
            </m.MovieContainer>
          </m.Boxoffice>

          {/* 해외영화 */}
          <m.Boxoffice>
            <m.BoxofficeHeader>
              <m.BoxofficeHeaderName>해외 영화</m.BoxofficeHeaderName>
            </m.BoxofficeHeader>

            <m.MovieContainer>
              <m.LeftBtn onClick={() => scrollLeft(foreignMovieListRef)}>
                <m.LeftBtnIcon src={arrowleft} alt='왼쪽 이동'></m.LeftBtnIcon>
              </m.LeftBtn>
              <m.WrapMovie ref={foreignMovieListRef}>
                {foreignMoviesData &&
                  foreignMoviesData.map((foreign, index) => (
                    <m.Movie key={foreign.code}>
                      <m.PosterLink to={`/movie/${foreign.code}`}>
                        <m.Poster src={foreign.poster} alt='포스터'></m.Poster>
                      </m.PosterLink>
                      <m.MovieNameKor>{foreign.name_kor}</m.MovieNameKor>
                      <m.MovieInfo>
                        <m.MovieReleaseAt>
                          {foreign.release_at.slice(
                            0,
                            foreign.release_at.indexOf("T")
                          )}
                        </m.MovieReleaseAt>
                        <m.MovieCountry>{foreign.country}</m.MovieCountry>
                      </m.MovieInfo>
                      <m.Rate>평균★ {foreign.rate_avg}</m.Rate>
                    </m.Movie>
                  ))}
              </m.WrapMovie>
              <m.RightBtn onClick={() => scrollRight(foreignMovieListRef)}>
                <m.RightBtnIcon
                  src={arrowright}
                  alt='오른쪽 이동'
                ></m.RightBtnIcon>
              </m.RightBtn>
            </m.MovieContainer>
          </m.Boxoffice>

          {/* 애니메이션 */}
          <m.Boxoffice>
            <m.BoxofficeHeader>
              <m.BoxofficeHeaderName>애니메이션</m.BoxofficeHeaderName>
            </m.BoxofficeHeader>

            <m.MovieContainer>
              <m.LeftBtn onClick={() => scrollLeft(aniListRef)}>
                <m.LeftBtnIcon src={arrowleft} alt='왼쪽 이동'></m.LeftBtnIcon>
              </m.LeftBtn>
              <m.WrapMovie ref={aniListRef}>
                {animationListData &&
                  animationListData.map((ani, index) => (
                    <m.Movie key={ani.code}>
                      <m.PosterLink to={`/movie/${ani.code}`}>
                        <m.Poster src={ani.poster} alt='포스터'></m.Poster>
                      </m.PosterLink>
                      <m.MovieNameKor>{ani.name_kor}</m.MovieNameKor>
                      <m.MovieInfo>
                        <m.MovieReleaseAt>
                          {ani.release_at.slice(0, ani.release_at.indexOf("T"))}
                        </m.MovieReleaseAt>
                        <m.MovieCountry>{ani.country}</m.MovieCountry>
                      </m.MovieInfo>
                      <m.Rate>평균★ {ani.rate_avg}</m.Rate>
                    </m.Movie>
                  ))}
              </m.WrapMovie>
              <m.RightBtn onClick={() => scrollRight(aniListRef)}>
                <m.RightBtnIcon
                  src={arrowright}
                  alt='오른쪽 이동'
                ></m.RightBtnIcon>
              </m.RightBtn>
            </m.MovieContainer>
          </m.Boxoffice>
        </m.MainPageContainer>
      </m.MainPage>
    </>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import axios from "axios";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import * as m from "../../Styles/Comments/CommentsMainStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageNavigation from "../PageNavigation";
import { commentActions } from "../../toolkit/actions/comment_action";

const CommentsMain = () => {
  const [isPopular, setIsPopular] = useState(true);

  const handleToggle = () => {
    setIsPopular(!isPopular);
  };

  const [allMoviesData, setAllMoviesData] = useState([]);
  const [domesticMoviesData, setDomesticMoviesData] = useState([]);
  const [foreignMoviesData, setForeignMoviesData] = useState([]);
  const [animationListData, setAnimationListData] = useState([]);
  const [selectedcode, setSelectedCode] = useState("");
  const [selectedMoviecode, setselectedMoviecode] = useState("");
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    getViewList(currentPage);

    const fetchDailyBoxoffice = async () => {
      try {
        const [
          domesticMoviesResponse,
          foreignMoviesResponse,
          animationListResponse,
        ] = await Promise.all([
          axios.get(`/home`).then((response) => response.data.domesticmovies),
          axios.get(`/home`).then((response) => response.data.foreignmovies),
          axios.get(`/home`).then((response) => response.data.animationList),
        ]);

        const domesticMoviesData = domesticMoviesResponse;
        const foreignMoviesData = foreignMoviesResponse;
        const animationListData = animationListResponse;
        setDomesticMoviesData(domesticMoviesData);
        setForeignMoviesData(foreignMoviesData);
        setAnimationListData(animationListData);

        const combinedMoviesData = [
          ...domesticMoviesData,
          ...foreignMoviesData,
          ...animationListData,
        ];
        setAllMoviesData(combinedMoviesData);

        // const codes = combinedMoviesData.map((movie) => movie.code);
        // setSelectedCode(codes);

        //코멘트
        // const commentResponse = await axios
        //   .get(`/review/list/${currentPage}`)
        //   .then((response) => response.data);
        // console.log("page>>>", currentPage);
        // console.log("comments", commentResponse);
        // const movieCodes = commentResponse.map((comment) => comment.movie_code);
        // setselectedMoviecode(movieCodes);
        // setCommentsData(commentResponse);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchDailyBoxoffice(); // 영화 정보를 가져오는 함수 호출
  }, []);

  const getMovieInfo = (commentMovieCode) => {
    const matchedMovie = allMoviesData.find(
      (movie) => movie.code === commentMovieCode
    );
    return matchedMovie
      ? { name_kor: matchedMovie.name_kor, poster: matchedMovie.poster }
      : null;
  };

  //pagination
  const { currentPage } = useParams();
  console.log("PPPage>", currentPage);

  const dispatch = useDispatch();

  const getViewList = (currentPage) => {
    console.log("currentPagemain>>", currentPage);
    dispatch(commentActions.getViewList(currentPage));
  };
  const viewList = useSelector((state) => state.comment.viewList);
  console.log("vlist", viewList);
  const pageInfo = useSelector((state) => state.comment.pageInfo);
  console.log("pageinfo", pageInfo);

  return (
    <>
      <m.Comments>
        <m.CommentsLayout>
          <m.CommentHeader>지금 뜨는 코멘트</m.CommentHeader>

          <m.ToggleButtons>
            <m.Popular active={isPopular} onClick={handleToggle}>
              인기
            </m.Popular>
            <m.Latest active={!isPopular} onClick={handleToggle}>
              최신
            </m.Latest>
          </m.ToggleButtons>

          <m.MainContents>
            {viewList.map((view, index) => {
              const movieInfo = getMovieInfo(view.movie_code);
              return (
                <m.Box key={index}>
                  <m.CommentBox>
                    <m.BoxTitleContainer>
                      <m.BoxTitle to="/mypage">
                        <m.UserImage
                          src={userImage}
                          alt="유저 이미지"
                        ></m.UserImage>
                        <m.UserName>{view.user_id}</m.UserName>
                      </m.BoxTitle>
                      <m.MovieRate>userRate</m.MovieRate>
                    </m.BoxTitleContainer>

                    <m.BoxBodyContainer>
                      <m.PosterLink to={`/movie/${selectedMoviecode[index]}`}>
                        <m.Poster
                          to
                          src={movieInfo ? movieInfo.poster : ""}
                          alt="poster"
                        ></m.Poster>
                      </m.PosterLink>
                      <m.MovieComment
                        to={`/playground/comments/detail/${view.idx}`}
                      >
                        <m.MovieName>
                          {movieInfo ? movieInfo.name_kor : ""}
                        </m.MovieName>
                        <m.UserComment>{view.review}</m.UserComment>
                      </m.MovieComment>
                    </m.BoxBodyContainer>
                    <m.Cnt>
                      <m.LikeCnt>좋아요 {view.like_Cnt}</m.LikeCnt>
                      <m.UserCommentCommentCnt>
                        댓글 userCommentCommentCnt
                      </m.UserCommentCommentCnt>
                    </m.Cnt>

                    <m.DividingLine></m.DividingLine>
                    <m.ActiveArea>
                      <m.LikeImg
                        src={likeImage}
                        alt="좋아요 이미지"
                      ></m.LikeImg>

                      <m.UserCommentCommentImg
                        src={commentImage}
                        alt="댓글 이미지"
                      ></m.UserCommentCommentImg>
                    </m.ActiveArea>
                  </m.CommentBox>
                </m.Box>
              );
            })}
          </m.MainContents>
        </m.CommentsLayout>
      </m.Comments>

      {/* 페이지 번호 */}
      {pageInfo && <PageNavigation getViewList={getViewList} />}
      <m.BlankBox></m.BlankBox>
    </>
  );
};

export default CommentsMain;

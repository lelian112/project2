import React, { useEffect, useState } from "react";
import axios from "axios";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import like from "../../images/like.png";
import commentImage from "../../images/commentImage.png";
import * as m from "../../Styles/Review/ReviewMainStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageNavigation from "../PageNavigation";
import { reviewActions } from "../../toolkit/actions/review_action";

const ReviewMain = () => {
  const dispatch = useDispatch();

  const [selectedButton, setSelectedButton] = useState("popular");
  const { user_id } = useParams();

  const handleButtonClick = (buttonType) => {
    if (buttonType === "popular") {
      setSelectedButton("popular");
      getMostlikeReviewList(currentPage);
    } else if (buttonType === "latest") {
      setSelectedButton("latest");
      getNewReviewList(currentPage);
    }
  };

  // 좋아요 상태 관리
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = (reviewIdx) => {
    if (liked) {
      dispatch(reviewActions.getPushLike(user_id, reviewIdx));
    } else {
      dispatch(reviewActions.getPushLike(user_id, reviewIdx));
    }
    setLiked(!liked); // 상태를 토글
  };

  useEffect(() => {
    if (selectedButton === "popular") {
      getMostlikeReviewList(currentPage);
    } else if (selectedButton === "latest") {
      getNewReviewList(currentPage);
    }
  }, [selectedButton, liked]);

  //pagination
  const { currentPage } = useParams();
  console.log(currentPage);

  const getMostlikeReviewList = (currentPage) => {
    dispatch(reviewActions.getMostlikeReviewList(currentPage));
  };

  const getNewReviewList = (currentPage) => {
    dispatch(reviewActions.getNewReviewList(currentPage));
  };

  const reviewList = useSelector((state) => state.review.reviewList);
  const pageInfo = useSelector((state) => state.review.pageInfo);

  return (
    <>
      <m.Review>
        <m.ReviewLayout>
          <m.ReviewHeader>지금 뜨는 리뷰</m.ReviewHeader>

          <m.ToggleButtons>
            <m.Popular
              active={selectedButton === "popular"}
              onClick={() => handleButtonClick("popular")}
            >
              인기
            </m.Popular>
            <m.Latest
              active={selectedButton === "latest"}
              onClick={() => handleButtonClick("latest")}
            >
              최신
            </m.Latest>
          </m.ToggleButtons>

          <m.MainContents>
            {reviewList.map((review) => (
              <m.Box key={review.idx}>
                <m.ReviewBox>
                  <m.BoxTitleContainer>
                    <m.BoxTitle to={`/mypage/${review.user_id}`}>
                      <m.UserImage
                        src={userImage}
                        alt='유저 이미지'
                      ></m.UserImage>
                      <m.UserName>{review.user_id}</m.UserName>
                    </m.BoxTitle>
                    <m.MovieRate>userRate</m.MovieRate>
                  </m.BoxTitleContainer>

                  <m.BoxBodyContainer>
                    <m.PosterLink to={`/movie/${review.movie_code}`}>
                      <m.Poster src={review.poster} alt='poster'></m.Poster>
                    </m.PosterLink>
                    <m.MovieReview
                      to={`/playground/review/detail/${review.idx}`}
                    >
                      <m.MovieName>{review.name_kor}</m.MovieName>
                      <m.UserReview>{review.review}</m.UserReview>
                    </m.MovieReview>
                  </m.BoxBodyContainer>
                  <m.Cnt>
                    <m.LikeCnt>좋아요 {review.total_likes_cnt}</m.LikeCnt>
                    <m.UserReviewCommentCnt>
                      댓글 {review.total_comment_cnt}
                    </m.UserReviewCommentCnt>
                  </m.Cnt>

                  <m.DividingLine></m.DividingLine>
                  <m.ActiveArea>
                    <m.LikeBtn onClick={() => handleLikeToggle(review.idx)}>
                      <m.LikeImg
                        src={liked ? like : likeImage}
                        alt='좋아요 이미지'
                      />
                    </m.LikeBtn>
                    <m.UserReviewCommentImg
                      src={commentImage}
                      alt='댓글 이미지'
                    ></m.UserReviewCommentImg>
                  </m.ActiveArea>
                </m.ReviewBox>
              </m.Box>
            ))}
          </m.MainContents>
        </m.ReviewLayout>
      </m.Review>

      {/* 페이지 번호 */}
      {pageInfo && (
        <PageNavigation
          getReviewList={
            selectedButton === "popular"
              ? getMostlikeReviewList
              : getNewReviewList
          }
        />
      )}
      <m.BlankBox></m.BlankBox>
    </>
  );
};

export default ReviewMain;

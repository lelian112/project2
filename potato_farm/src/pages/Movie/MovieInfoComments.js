import React from "react";
import graystar from "../../images/graystar.png";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import leftarrow from "../../images/leftarrow.png";
import commentImage from "../../images/commentImage.png";
import * as m from "../../Styles/Movie/MovieInfoCommentsStyle";

const MovieInfoComments = () => {
  return (
    <>
      <m.Review>
        <m.UserReview>
          <m.WrapUserReviewTitle>
            <m.GobackButton to="/movie/:movieName">
              <m.GobackButtonImage
                src={leftarrow}
                alt="뒤로가기 버튼"
              ></m.GobackButtonImage>
            </m.GobackButton>
            <m.UserReviewTitle>코멘트</m.UserReviewTitle>
          </m.WrapUserReviewTitle>

          <m.UserReviewContentsContainer>
            <m.WrapUserReviewContents>
              <m.UserReviewContentsTitleContainer>
                <m.WrapUserReviewContentsTitle to="/mypage">
                  <m.UserImage src={userImage} alt="유저 이미지"></m.UserImage>
                  <m.UserName>userName</m.UserName>
                </m.WrapUserReviewContentsTitle>
                <m.MovieRate>
                  <m.RateImage src={graystar} alt="별점 이미지"></m.RateImage>
                  <m.UserRate>userRate</m.UserRate>
                </m.MovieRate>
              </m.UserReviewContentsTitleContainer>

              <m.UserReviewContents>
                <m.UserReviewContentsMain to="/playground/comments/1">
                  userReview
                  zazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                  zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                  zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                </m.UserReviewContentsMain>
              </m.UserReviewContents>

              <m.ActiveArea>
                <m.Like>
                  <m.LikeImg src={likeImage} alt="좋아요 이미지"></m.LikeImg>
                  <m.LikeCnt>likeCnt</m.LikeCnt>
                </m.Like>
                <m.UserCommentComment>
                  <m.UserCommentCommentImg
                    src={commentImage}
                    alt="댓글 이미지"
                  ></m.UserCommentCommentImg>
                  <m.UserCommentCommentCnt>
                    userCommentCommnentCnt
                  </m.UserCommentCommentCnt>
                </m.UserCommentComment>
              </m.ActiveArea>
            </m.WrapUserReviewContents>
          </m.UserReviewContentsContainer>

          <m.UserReviewContentsContainer>
            <m.WrapUserReviewContents>
              <m.UserReviewContentsTitleContainer>
                <m.WrapUserReviewContentsTitle to="/mypage">
                  <m.UserImage src={userImage} alt="유저 이미지"></m.UserImage>
                  <m.UserName>userName</m.UserName>
                </m.WrapUserReviewContentsTitle>
                <m.MovieRate>
                  <m.RateImage src={graystar} alt="별점 이미지"></m.RateImage>
                  <m.UserRate>userRate</m.UserRate>
                </m.MovieRate>
              </m.UserReviewContentsTitleContainer>

              <m.UserReviewContents>
                <m.UserReviewContentsMain to="/playground/comments/1">
                  userReview
                  zazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                  zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                </m.UserReviewContentsMain>
              </m.UserReviewContents>

              <m.ActiveArea>
                <m.Like>
                  <m.LikeImg src={likeImage} alt="좋아요 이미지"></m.LikeImg>
                  <m.LikeCnt>likeCnt</m.LikeCnt>
                </m.Like>
                <m.UserCommentComment>
                  <m.UserCommentCommentImg
                    src={commentImage}
                    alt="댓글 이미지"
                  ></m.UserCommentCommentImg>
                  <m.UserCommentCommentCnt>
                    userCommentCommnentCnt
                  </m.UserCommentCommentCnt>
                </m.UserCommentComment>
              </m.ActiveArea>
            </m.WrapUserReviewContents>
          </m.UserReviewContentsContainer>
        </m.UserReview>
      </m.Review>
    </>
  );
};

export default MovieInfoComments;

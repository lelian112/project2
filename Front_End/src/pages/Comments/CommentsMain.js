import React, { useState } from "react";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import * as m from "../../Styles/Comments/CommentsMainStyle";

const CommentsMain = () => {
  const [isPopular, setIsPopular] = useState(true);

  const handleToggle = () => {
    setIsPopular(!isPopular);
  };

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
            <m.Box>
              <m.CommentBox>
                <m.BoxTitleContainer>
                  <m.BoxTitle to='/mypage'>
                    <m.UserImage
                      src={userImage}
                      alt='유저 이미지'
                    ></m.UserImage>
                    <m.UserName>userName</m.UserName>
                  </m.BoxTitle>
                  <m.MovieRate>userRate</m.MovieRate>
                </m.BoxTitleContainer>

                <m.BoxBodyContainer>
                  <m.PosterLink to='/movie/${movieCode}'>
                    <m.Poster
                      to
                      src='https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg'
                      alt='poster'
                    ></m.Poster>
                  </m.PosterLink>
                  <m.MovieComment to='/playground/comments/1'>
                    <m.MovieName>movieName</m.MovieName>
                    <m.UserComment>userComment</m.UserComment>
                  </m.MovieComment>
                </m.BoxBodyContainer>
                <m.Cnt>
                  <m.LikeCnt>좋아요 likeCnt</m.LikeCnt>
                  <m.UserCommentCommentCnt>
                    댓글 userCommentCommentCnt
                  </m.UserCommentCommentCnt>
                </m.Cnt>

                <m.DividingLine></m.DividingLine>
                <m.ActiveArea>
                  <m.LikeImg src={likeImage} alt='좋아요 이미지'></m.LikeImg>

                  <m.UserCommentCommentImg
                    src={commentImage}
                    alt='댓글 이미지'
                  ></m.UserCommentCommentImg>
                </m.ActiveArea>
              </m.CommentBox>
            </m.Box>
          </m.MainContents>
        </m.CommentsLayout>
      </m.Comments>
    </>
  );
};

export default CommentsMain;

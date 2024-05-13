import React, { useState } from "react";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import graystar from "../../images/graystar.png";
import commentIcon from "../../images/commentIcon.png";
import * as m from "../../Styles/Comments/CommentDetailsStyle";

const CommentDetails = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  // 팝업 열기 함수
  const openPopup = () => {
    setPopupOpen(true);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    setPopupOpen(false);
  };

  const [commentText, setCommentText] = useState(""); // 입력된 텍스트를 추적하는 상태

  // 텍스트 입력 시 호출되는 함수
  const handleTextChange = (event) => {
    setCommentText(event.target.value); // 입력된 텍스트를 상태에 업데이트
  };

  return (
    <>
      <m.Comment>
        <m.CommentBox>
          <m.BoxTitleContainer>
            <m.BoxTitle>
              <m.User to="/mypage">
                <m.UserImage src={userImage} alt="유저 이미지"></m.UserImage>
                <m.UserName>userName</m.UserName>
              </m.User>
              <m.MovieName>movieName</m.MovieName>
              <m.MovieRate>
                <m.RateImage src={graystar} alt="별점 이미지"></m.RateImage>
                <m.UserRate>userRate</m.UserRate>
              </m.MovieRate>
            </m.BoxTitle>

            <m.PosterLink to="/movie/${movieCode}">
              <m.Poster
                to
                src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                alt="poster"
              ></m.Poster>
            </m.PosterLink>
          </m.BoxTitleContainer>

          <m.UserComment>userComment</m.UserComment>

          <m.Cnt>
            <m.LikeCnt>좋아요 likeCnt</m.LikeCnt>
            <m.UserCommentCommentCnt>
              댓글 userCommentCommentCnt
            </m.UserCommentCommentCnt>
          </m.Cnt>

          <m.ActiveArea>
            <m.Like>
              <m.LikeImg src={likeImage} alt="좋아요 이미지"></m.LikeImg>
              <m.LikeWord>좋아요</m.LikeWord>
            </m.Like>

            <m.UserCommentComment>
              <m.UserCommentCommentImg
                src={commentImage}
                alt="댓글 이미지"
              ></m.UserCommentCommentImg>
              <m.UserCommentCommentWord onClick={openPopup}>
                댓글
              </m.UserCommentCommentWord>
            </m.UserCommentComment>
          </m.ActiveArea>

          <m.NoCommentsBox>
            <m.CommentIcon src={commentIcon} alt="댓글 아이콘"></m.CommentIcon>
            <m.CommentInfo>처음으로 댓글을 남겨보세요</m.CommentInfo>
          </m.NoCommentsBox>

          <m.WrapUserCommentCommentBox>
            <m.UserCommentCommentBox>
              <m.CommentUser to="/mypage">
                <m.CommentUserImage
                  src={userImage}
                  alt="유저 이미지"
                ></m.CommentUserImage>
              </m.CommentUser>
              <m.CommentUserContent>
                <m.CommentUserName>userName</m.CommentUserName>
                <m.CommentContent>comments</m.CommentContent>
                <m.CommentLike>
                  <m.CommentLikeWord>좋아요</m.CommentLikeWord>
                  <m.CommentLikeIcon
                    src={likeImage}
                    alt="좋아요 이미지"
                  ></m.CommentLikeIcon>
                  <m.CommentLikeCnt>Cnt</m.CommentLikeCnt>
                </m.CommentLike>
              </m.CommentUserContent>
            </m.UserCommentCommentBox>

            <m.UserCommentCommentBox>
              <m.CommentUser to="/mypage">
                <m.CommentUserImage
                  src={userImage}
                  alt="유저 이미지"
                ></m.CommentUserImage>
              </m.CommentUser>
              <m.CommentUserContent>
                <m.CommentUserName>userName</m.CommentUserName>
                <m.CommentContent>comments</m.CommentContent>
                <m.CommentLike>
                  <m.CommentLikeWord>좋아요</m.CommentLikeWord>
                  <m.CommentLikeIcon
                    src={likeImage}
                    alt="좋아요 이미지"
                  ></m.CommentLikeIcon>
                  <m.CommentLikeCnt>Cnt</m.CommentLikeCnt>
                </m.CommentLike>
              </m.CommentUserContent>
            </m.UserCommentCommentBox>

            <m.UserCommentCommentBox>
              <m.CommentUser to="/mypage">
                <m.CommentUserImage
                  src={userImage}
                  alt="유저 이미지"
                ></m.CommentUserImage>
              </m.CommentUser>
              <m.CommentUserContent>
                <m.CommentUserName>userName</m.CommentUserName>
                <m.CommentContent>comments</m.CommentContent>
                <m.CommentLike>
                  <m.CommentLikeWord>좋아요</m.CommentLikeWord>
                  <m.CommentLikeIcon
                    src={likeImage}
                    alt="좋아요 이미지"
                  ></m.CommentLikeIcon>
                  <m.CommentLikeCnt>Cnt</m.CommentLikeCnt>
                </m.CommentLike>
              </m.CommentUserContent>
            </m.UserCommentCommentBox>
          </m.WrapUserCommentCommentBox>
        </m.CommentBox>
      </m.Comment>

      {popupOpen && (
        <m.Popup>
          {/* 팝업 닫기 버튼 */}
          <m.CloseButton onClick={closePopup}>X 닫기</m.CloseButton>
          {/* 팝업 내용 */}
          <m.CommentMenu>댓글</m.CommentMenu>
          <m.TextContainer>
            <m.Textarea
              placeholder="이 movieName에 대한 생각을 자유롭게 표현해주세요."
              onChange={handleTextChange}
            ></m.Textarea>
          </m.TextContainer>
          <m.WrapSave>
            <m.SaveButton
              style={{ opacity: commentText ? 1 : 0.5 }}
              onClick={closePopup}
            >
              저장
            </m.SaveButton>
          </m.WrapSave>
        </m.Popup>
      )}
    </>
  );
};

export default CommentDetails;

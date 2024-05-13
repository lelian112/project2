import React, { useEffect, useState } from "react";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import like from "../../images/like.png";
import axios from "axios";
import commentImage from "../../images/commentImage.png";
import graystar from "../../images/graystar.png";
import commentIcon from "../../images/commentIcon.png";
import * as m from "../../Styles/Review/ReviewDetailsStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "../../toolkit/actions/review_action";
import { commentActions } from "../../toolkit/actions/comment_action";

import ReviewUpdatePopup from "./ReviewUpdatePopup";
import ReviewCommentList from "./ReviewCommentList";
import ReviewCommentWrite from "./ReviewCommentWrite";
import LoginModal from "../../components/LoginModal";

const ReviewDetails = () => {
  const { code } = useParams();
  const { idx } = useParams();

  //modal
  const [showModal, setShowModal] = useState(false);
  const handleModalCancel = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();
  const navigator = useNavigate();
  //   console.log("code>>>>", code);

  // 좋아요
  const [liked, setLiked] = useState();

  const handleLikeToggle = async (reviewIdx) => {
    if (!user_id) {
      setShowModal(true);
      return;
    }

    if (liked) {
      dispatch(reviewActions.getHitLike(reviewIdx));
    } else {
      dispatch(reviewActions.getHitLike(reviewIdx));
    }
    setLiked(!liked);
  };

  //review detail
  useEffect(() => {
    dispatch(reviewActions.getReviewDetail(idx));
  }, [liked]);

  const reviewDetail = useSelector((state) => state.review.reviewDetail);

  //review update
  const [inputs, setInputs] = useState({
    content: "",
  });
  const { content } = inputs;

  useEffect(() => {
    setInputs((prev) => {
      return { ...prev, ...reviewDetail };
    });
  }, []);

  //review delete
  const handelDelete = async (e) => {
    e.preventDefault();
    dispatch(reviewActions.getReviewDelete(idx));
    navigator(`/playground/review/1`);
  };

  //comment list
  const getCommentList = (idx) => {
    dispatch(commentActions.getCommentList(idx));
  };

  const commentList = useSelector((state) => state.comment.commentList);
  // console.log("detail", commentList);
  const pageInfo = useSelector((state) => state.comment.pageInfo);

  //comment update
  const commentDetail = useSelector((state) => state.comment.commentDetail);
  console.log("cmtdetail>>", commentDetail);
  const user_id = localStorage.getItem("id");
  console.log("user_id", user_id);

  //popup
  const [updatePopupOpen, setUpdatePopupOpen] = useState(false);
  const [commentPopupOpen, setCommentPopupOpen] = useState(false);
  const [commentUpdatePopupOpen, setCommentUpdatePopupOpen] = useState(false);

  // 리뷰 수정 팝업 열기 함수
  const openUpdatePopup = () => {
    setUpdatePopupOpen(true);
  };

  // 리뷰 수정 팝업 닫기 함수
  const closeUpdatePopup = () => {
    setUpdatePopupOpen(false);
  };

  // 댓글 팝업 열기 함수
  const openCommentPopup = () => {
    setCommentPopupOpen(true);
  };

  // 댓글 팝업 닫기 함수
  const closeCommentPopup = () => {
    setCommentPopupOpen(false);
  };

  // 댓글 팝업 열기 함수
  const openCommentUpdatePopup = (commentIdx) => {
    setCommentUpdatePopupOpen(true);
  };

  // 댓글 팝업 닫기 함수
  const closeCommentUpdatePopup = () => {
    setCommentUpdatePopupOpen(false);
  };

  // 좋아요 상태 관리

  return (
    <>
      {showModal && <LoginModal handleModalCancel={handleModalCancel} />}
      <m.Review>
        <m.ReviewBox>
          <m.BoxTitleContainer>
            <m.BoxTitle>
              <m.User to={`/mypage/${reviewDetail.user_id}`}>
                <m.UserImage src={userImage} alt="유저 이미지"></m.UserImage>
                <m.UserName>{reviewDetail.user_id}</m.UserName>
              </m.User>
              <m.MovieName>{reviewDetail.name_kor}</m.MovieName>
            </m.BoxTitle>

            <m.RightsideContents>
              <m.PosterLink to={`/movie/${reviewDetail.movie_code}`}>
                <m.Poster src={reviewDetail.poster} alt='poster'></m.Poster>
              </m.PosterLink>
            </m.RightsideContents>
          </m.BoxTitleContainer>

          <m.BoxContents>
            <m.UserReview>
              {updatePopupOpen ? (
                <ReviewUpdatePopup
                  popupOpen={updatePopupOpen}
                  // closePopup={closeUpdatePopup}
                  closePopup={closeUpdatePopup}
                  reviewDetail={reviewDetail}
                />
              ) : (
                reviewDetail.review
              )}
            </m.UserReview>
            {reviewDetail.user_id === user_id && (
              <m.Btn>
                <m.UpdateBtn onClick={openUpdatePopup}>리뷰 수정</m.UpdateBtn>
                <m.DeleteBtn onClick={handelDelete}>리뷰 삭제</m.DeleteBtn>
              </m.Btn>
            )}
          </m.BoxContents>

          <m.ActiveArea>
            <m.Like onClick={() => handleLikeToggle(reviewDetail.idx)}>
              <m.LikeImg
                src={reviewDetail.like_btn ? like : likeImage}
                alt='좋아요 이미지'
              ></m.LikeImg>
              <m.LikeWord>{reviewDetail.total_likes_cnt}</m.LikeWord>
            </m.Like>

            <m.UserReviewComment>
              <m.UserReviewCommentImg
                src={commentImage}
                alt='댓글 이미지'
              ></m.UserReviewCommentImg>
              <m.UserReviewCommentWord>
                {reviewDetail.total_comment_cnt}
              </m.UserReviewCommentWord>
            </m.UserReviewComment>
          </m.ActiveArea>

          <ReviewCommentWrite />

          {pageInfo.totalCount === 0 ? (
            <m.NoCommentsBox>
              <m.CommentIcon
                src={commentIcon}
                alt="댓글 아이콘"
              ></m.CommentIcon>
              <m.CommentInfo>처음으로 댓글을 남겨보세요</m.CommentInfo>
            </m.NoCommentsBox>
          ) : (
            <ReviewCommentList />
          )}
        </m.ReviewBox>
      </m.Review>
    </>
  );
};

export default ReviewDetails;

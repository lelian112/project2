import React, { useEffect, useState } from "react";
import * as m from "../../Styles/Review/ReviewCommentWriteStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "../../toolkit/actions/review_action";
import { commentActions } from "../../toolkit/actions/comment_action";

const ReviewCommentWrite = () => {
  const { idx } = useParams();
  let id = localStorage.getItem("id");
  console.log("idx", idx, id);

  const dispatch = useDispatch();

  //review detail
  useEffect(() => {
    dispatch(reviewActions.getReviewDetail(idx));
  }, []);

  const reviewDetail = useSelector((state) => state.review.reviewDetail);

  //comment
  const [inputs, setInputs] = useState({
    content: "",
  });

  const { content } = inputs;

  const commentList = useSelector((state) => state.comment.commentList);

  const handleValueChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onSubmit = async (e) => {
    if (!id) {
      alert("로그인을 해주세요.");
      window.location.href = `/login`;
      return;
    }

    e.preventDefault();
    const formData = {
      user_id: id,
      comment: content,
      user_review_idx: idx,
    };
    // formData.append("user_id", localStorage.getItem("user_id"));
    console.log("formData", formData); //데이터 확인용

    await dispatch(commentActions.getCommentWrite(id, idx, formData));

    setInputs({
      content: "",
    });

    await dispatch(commentActions.getCommentList(idx));
    window.location.reload();
  };
  return (
    <>
      <m.Popup>
        <m.Form onSubmit={onSubmit}>
          <m.Textarea
            name="content"
            placeholder={`${reviewDetail.user_id}님의 리뷰에 댓글을 남겨주세요.`}
            onChange={handleValueChange}
            value={content}
          ></m.Textarea>

          <m.SaveButton
            style={{ opacity: content ? 1 : 0.5 }}
            type="submit"
            value="등록"
            onSubmit={onSubmit}
          >
            저장
          </m.SaveButton>
        </m.Form>
      </m.Popup>
    </>
  );
};

export default ReviewCommentWrite;

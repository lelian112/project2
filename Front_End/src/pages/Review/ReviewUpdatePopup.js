import React, { useEffect, useState } from "react";
import axios from "axios";
import * as m from "../../Styles/Review/ReviewUpdatePopupStyle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { reviewActions } from "../../toolkit/actions/review_action";

const ReviewUpdatePopup = (props) => {
  const { idx } = useParams();

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [inputs, setInputs] = useState({
    content: "",
  });
  const { content } = inputs;
  console.log(">>>", content, inputs);
  const reviewDetail = useSelector((state) => state.review.reviewDetail);
  console.log("detail>>", reviewDetail);
  const { movie_code, user_id } = reviewDetail;

  useEffect(() => {
    setInputs((prev) => {
      return { ...prev, ...reviewDetail.review };
    });
  }, [reviewDetail]);

  const handleValueChange = (e) => {
    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = {
      idx: idx,
      movie_code: movie_code,
      user_id: user_id,
      review: content,
    };
    // formData.append("user_id", localStorage.getItem("user_id"));

    console.log("content", formData); //데이터 확인용

    await dispatch(reviewActions.getReviewUpdate(idx, formData));

    setInputs({
      content: "",
    });

    // navigator(`/playground/review/detail/${reviewDetail.idx}`);
    closePopup();
    dispatch(reviewActions.getReviewDetail(idx));
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    // setPopupOpen(false);
    props.closePopup();
  };
  return (
    <>
      <m.Popup>
        {/* 팝업 닫기 버튼 */}
        <m.CloseBtn onClick={closePopup}>X 닫기</m.CloseBtn>
        {/* 팝업 내용 */}
        <m.CommentMenu>{reviewDetail.name_kor}</m.CommentMenu>

        <m.TextContainer>
          <m.Textarea
            name="content"
            defaultValue={reviewDetail.review}
            onChange={handleValueChange}
          ></m.Textarea>
        </m.TextContainer>
        <m.WrapSave>
          <m.UpdateBtn
            style={{ opacity: content ? 1 : 0.5 }}
            type="submit"
            value="수정"
            onClick={handleUpdate}
          >
            수정
          </m.UpdateBtn>
        </m.WrapSave>
      </m.Popup>
    </>
  );
};

export default ReviewUpdatePopup;

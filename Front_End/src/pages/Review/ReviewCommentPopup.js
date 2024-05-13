import React, { useState } from "react";
import axios from "axios";
import * as m from "../../Styles/Review/ReviewCommentPopupStyle";

const ReviewCommentPopup = (props) => {
  const [inputs, setInputs] = useState({
    content: "",
  });

  const { content } = inputs;

  const handleValueChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
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
        <m.CloseButton onClick={closePopup}>X 닫기</m.CloseButton>
        {/* 팝업 내용 */}
        <m.CommentMenu>댓글</m.CommentMenu>
        <m.TextContainer>
          <m.Textarea
            placeholder="이 movieName에 대한 생각을 자유롭게 표현해주세요."
            onChange={handleValueChange}
          ></m.Textarea>
        </m.TextContainer>
        <m.WrapSave>
          <m.SaveButton
            style={{ opacity: content ? 1 : 0.5 }}
            onClick={closePopup}
          >
            저장
          </m.SaveButton>
        </m.WrapSave>
      </m.Popup>
    </>
  );
};

export default ReviewCommentPopup;

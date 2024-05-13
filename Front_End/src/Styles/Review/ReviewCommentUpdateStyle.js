import styled from "styled-components";
import { Link } from "react-router-dom"; // 팝업 창 스타일
export const Popup = styled.div`
  margin: 0px 10px;
`;

export const CommentUpdate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Textarea = styled.textarea`
  width: 100%;

  padding: 2px 10px;
  margin: 1px 0;
  border: 1px solid none;
  border-radius: 5px;
  font-size: 17px;
  resize: none;
  background-color: #ededed40;
  margin-right: 10px;

  /* Placeholder styling */
  &::placeholder {
    font-size: 17px;
    color: #999;
  }
`;
export const Btn = styled.div``;
export const CancelBtn = styled.button`
  background-color: black;
  color: white;
  font-size: 13px;
  font-weight: 400;
  padding: 3px 10px;
  border-radius: 7px;
  border: 0px none rgb(255, 255, 255);
  margin-bottom: 5px;
`;
export const UpdateBtn = styled.button`
  /* width: 35%; */
  width: 40%;
  background-color: rgb(255, 47, 110);
  /* height: 38px; */
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-weight: 400;
  padding: 3px 10px;
  border-radius: 7px;
  border: 0px none rgb(255, 255, 255);
  opacity: 0.5;

`;

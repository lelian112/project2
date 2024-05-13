import styled from "styled-components";
import { Link } from "react-router-dom"; // 팝업 창 스타일
export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #212529;
  width: 480px;
  min-height: 460px;
  border: 1px solid #ededed;
  border-top-left-radius: 16px;
  padding: 16px 20px 18px;
  z-index: 999;
`;

// 팝업 닫기 버튼 스타일
export const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 11px;
  font-weight: bold;
  color: white;
  background: black;
  border-radius: 7px;
`;

export const CommentMenu = styled.div`
  /* width: 423px; */
  font-weight: bold;
  font-size: 17px;
  color: #ededed;
  margin-bottom: 15px;
`;

export const TextContainer = styled.div`
  /* width: 423px; */
  height: auto;
  display: flex;
  overflow-y: scroll;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 360px;
  padding: 2px;
  margin: 1px 0;
  border: 1px solid none;
  border-radius: 5px;
  font-size: 17px;
  resize: none;
  background-color: #ededed40;

  /* Placeholder styling */
  &::placeholder {
    font-size: 17px;
    color: #999;
  }
`;

export const WrapSave = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const SaveButton = styled.button`
  background-color: rgb(255, 47, 110);
  height: 38px;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 400;
  padding: 0px 40px;
  border-radius: 7px;
  border: 0px none rgb(255, 255, 255);
  opacity: 0.5;
  margin-left: auto;
`;

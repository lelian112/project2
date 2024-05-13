import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapUserReviewCommentBox = styled.div``;

export const UserReviewCommentBox = styled.div`
  margin-top: 35px;
  display: flex;
  padding: 12px 0;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  /* 
  
  flex-direction: column;
  align-items: center; */

  &::after {
    /* 가상 요소의 스타일 */
    content: "";
    display: block;
    width: 1320px;
    height: 1px;
    background-color: rgb(240, 240, 240);
    position: absolute;
    left: 50%;
    bottom: -10px; /* 하단에 위치하도록 설정 */
    transform: translateX(-50%);
  }
`;
export const CommentInfo = styled.div`
  display: flex;
`;

export const CommentUser = styled.div``;

export const CommentUserImage = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  width: 32px;
  height: 32px;
`;
export const CommentContentsWrap = styled.div`
  width: 1200px;
`;
export const CommentUserContent = styled.div`
  margin-left: 8px;
`;
export const CommentUserName = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: white;
`;
export const CommentContent = styled.div`
  font-size: 15px;
  font-weight: 400;
  margin: 2px 0 9px;
  color: #ededed;
`;


export const Btn = styled.div``;

export const UpdateBtn = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

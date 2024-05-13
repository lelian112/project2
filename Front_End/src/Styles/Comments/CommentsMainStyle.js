import styled from "styled-components";
import { Link } from "react-router-dom";

export const Comments = styled.div`
  background-color: #212529;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const CommentsLayout = styled.div`
  width: 640px;
  padding: 22px 0;
`;

export const CommentHeader = styled.div`
  padding: 12px 0 14px;
  font-size: 24px;
  font-weight: 700;
  color: rgb(41, 42, 50);
  color: white;
`;

export const ToggleButtons = styled.div`
  padding-bottom: 16px;
`;

export const Popular = styled.button`
  /* background-color: rgb(255, 255, 255);
  border: 1.6px solid rgb(231, 231, 231); */
  background-color: ${({ active }) => (active ? "#ededed" : "rgb(20, 20, 20)")};
  color: ${({ active }) => (active ? "inherit" : "#ededed")};
  border: ${({ active }) =>
    active ? "1.6px solid #ededed" : "1.6px solid rgb(20, 20, 20)"};

  border-radius: 24px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
  cursor: pointer;
`;

export const Latest = styled.button`
  /* background-color: rgb(20, 20, 20);
  color: rgb(255, 255, 255);
  border: 1.6px solid rgb(20, 20, 20); */
  background-color: ${({ active }) => (active ? "#ededed" : "rgb(20, 20, 20)")};
  color: ${({ active }) => (active ? "inherit" : "#ededed")};
  border: ${({ active }) =>
    active ? "1.6px solid #ededed" : "1.6px solid rgb(20, 20, 20)"};

  border-radius: 24px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  margin-right: 8px;
  cursor: pointer;
`;

export const MainContents = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Box = styled.div`
  border: 1px solid #ededed;
  border-radius: 5px;
  padding: 11px;
  pad: 8px 0;
  background-color: #00000090;
`;

export const CommentBox = styled.div`
  // text-decoration: none;
  // color: inherit;
`;

export const BoxTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
`;

export const BoxTitle = styled(Link)`
  display: flex;
  align-items: center;
  color: rgb(20, 20, 20);
  font-size: 13px;
  text-decoration: none;
`;

export const UserImage = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  margin-right: 8px;
  width: 36px;
  height: 36px;
`;

export const UserName = styled.div`
  font-size: 14px;
  color: #ededed;
`;

export const MovieRate = styled.div`
  color: #ededed;
`;

export const BoxBodyContainer = styled.div`
  display: flex;
  padding: 12px 0;
`;

export const PosterLink = styled(Link)``;

export const Poster = styled.img`
  width: 63px;
  height: 93px;
  margin-right: 8px;
`;

export const MovieComment = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const MovieName = styled.div`
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 4px;
  color: white;
`;

export const UserComment = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: #ededed;
`;

export const Cnt = styled.div`
  display: flex;
  color: #ededed;
`;

export const LikeCnt = styled.div`
  font-size: 13px;
  margin-right: 12px;
`;

export const UserCommentCommentCnt = styled.div`
  font-size: 13px;
  margin-right: 12px;
`;

export const DividingLine = styled.div`
  height: 1px;
  background-color: rgb(237, 237, 237);
  margin: 10px 0;
  line-height: 18.4px;
`;

export const ActiveArea = styled.div`
  display: flex;
`;

export const LikeImg = styled.img`
  width: 24px;
  margin-right: 20px;
`;

export const UserCommentCommentImg = styled.img`
  width: 24px;
  margin-right: 20px;
`;

export const BlankBox = styled.div`
  width: 100%;
  height: 60px;
`;

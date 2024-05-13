import styled from "styled-components";
import { Link } from "react-router-dom";

export const Review = styled.div`
  background-color: #212529;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 55px;
`;

export const ReviewBox = styled.div`
  width: 1320px;
  margin: 18px 0 16px;
`;

export const BoxTitleContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  padding-bottom: 12px;
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin-bottom: 18px;
`;

export const User = styled(Link)`
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
  margin-right: 5px;
  width: 18px;
  height: 18px;
`;

export const UserName = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #ededed;
`;

export const MovieName = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: 3px;
  color: white;
`;

export const RightsideContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PosterLink = styled(Link)``;

export const Poster = styled.img`
  width: 70px;
  height: 104px;
  /* margin-right: 8px; */
`;

export const BoxContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const UserReview = styled.div`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 22px;
  color: #ededed;
`;

export const Btn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UpdateBtn = styled.button`
  border: 1px solid;
  border-radius: 10px;
  background: none;
  color: white;
  cursor: pointer;
  padding: 4px 5px;
  margin-bottom: 5px;
`;

export const DeleteBtn = styled.button`
  border: 1px solid;
  border-radius: 10px;
  background: none;
  color: white;
  cursor: pointer;
  padding: 4px 5px;
`;

export const ActiveArea = styled.div`
  column-gap: 1px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 43px;
  border-top: solid 1px rgb(240, 240, 240);
  border-bottom: solid 1px rgb(240, 240, 240);
  margin-bottom: 20px;
`;

export const Like = styled.button`
  background: none;
  border: none;

  /* padding: 0; */

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 15px;
  margin: 3px;
  cursor: pointer;

  &:hover {
    color: #292a32;
    background-color: #eeeeef25;
  }

  &::after {
    /* 가상 요소의 스타일 */
    content: "";
    display: block;
    width: 1px;
    height: 14px;
    background-color: rgb(240, 240, 240);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const LikeImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const LikeWord = styled.div`
  color: #ededed;
  font-size: 15px;
  font-weight: 400;
`;

export const UserReviewComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 15px;
  margin: 3px;
  cursor: pointer;

  &:hover {
    color: #292a32;
    background-color: #eeeeef25;
  }

  &::after {
    /* 가상 요소의 스타일 */
    content: "";
    display: block;
    width: 1px;
    height: 14px;
    background-color: rgb(240, 240, 240);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const UserReviewCommentImg = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const UserReviewCommentWord = styled.div`
  color: #ededed;
  font-size: 15px;
  font-weight: 400;
`;

export const NoCommentsBox = styled.div`
  margin-top: 35px;
  padding: 16px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentIcon = styled.img`
  width: 72px;
  height: 72px;
`;

export const CommentInfo = styled.div`
  color: rgb(160, 160, 160);
  font-size: 15px;
  font-weight: 400;
  margin-top: 12px;
`;

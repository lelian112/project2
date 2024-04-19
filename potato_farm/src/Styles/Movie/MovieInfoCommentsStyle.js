import styled from "styled-components";
import { Link } from "react-router-dom";

export const Review = styled.div`
  background-color: #212529;
  color: #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserReview = styled.div``;

export const WrapUserReviewTitle = styled.div``;

export const GobackButton = styled(Link)`
  cursor: pointer;
`;

export const GobackButtonImage = styled.img`
  margin: 10px 0;
  width: 24px;
  height: 24px;
`;

export const UserReviewTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const UserReviewContentsContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  margin-bottom: 20px;
`;
export const WrapUserReviewContents = styled.li`
  width: 610px;
  list-style-type: none;
  padding: 0 12px;
  background-color: black;
  border-radius: 6px;
`;
export const UserReviewContentsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
`;
export const WrapUserReviewContentsTitle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 11px 8px 11px 0px;
`;
export const UserName = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: white;
`;
export const MovieRate = styled.div`
  display: flex;
  align-items: center;
  color: #ededed;
  background-color: rgb(74, 74, 74);
  border: solid 1px rgb(234, 234, 234);
  border-radius: 13px;
  height: 26px;
  padding: 0 8px;
`;
export const RateImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 3px;
`;
export const UserRate = styled.div`
  font-size: 14px;
`;

export const UserReviewContents = styled.div`
  height: 100%;
  margin: 12px 0px 15px;
`;

export const UserReviewContentsMain = styled(Link)`
  white-space: normal;
  word-break: break-word;
  text-decoration: none;
  color: inherit;
`;

export const ActiveArea = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  border-top: 1px solid #ededed;
`;
export const Like = styled.div`
  display: flex;
  align-items: center;
`;
export const LikeImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 3px;
`;

export const LikeCnt = styled.div`
  font-size: 14px;
`;
export const UserCommentComment = styled.div`
  display: flex;
  align-items: center;
`;
export const UserCommentCommentImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 0px 3px 0px 13px;
`;
export const UserCommentCommentCnt = styled.div`
  font-size: 14px;
`;

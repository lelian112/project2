import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainPage = styled.div`
  background-color: #212529;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainPageContainer = styled.div`
  width: 1320px;
`;

export const Comments = styled.div`
  margin-bottom: 42px;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const CommentHeaderName = styled.div`
  font-size: 22px;
  font-weight: 700;
  padding: 12px 0 14px;
`;

export const CommentLink = styled(Link)`
  text-decoration: none;
  color: rgb(116, 116, 123);
  font-size: 15px;
  font-weight: 400;
  padding-bottom: 14px;
  cursor: pointer;
`;

export const BoxContainer = styled.div`
  overflow: scroll;
  display: block;
  scrollbar-width: none;
`;

export const BoxList = styled.ul`
  overflow: visible;
  position: relative;
  color: rgb(0, 0, 0);
  column-gap: 16px;
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Box = styled.li`
  display: list-item;
  flex-basis: auto;
  width: 429.328px;
  height: 182px;
  flex-shrink: 0;
`;

export const BoxContents = styled.div`
  border: 1px solid black;
  background-color: #00000090;
  border-radius: 5px;
  padding: 11px;
`;

export const CommentBox = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
`;

export const BoxTitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`;

export const UserImage = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  margin-right: 4px;
`;

export const UserName = styled.div`
  color: #ededed;
`;

export const MovieRate = styled.div`
  color: #ededed;
`;

export const BoxBodyContainer = styled.div`
  display: flex;
  padding: 12px 0;
`;

export const MoviePoster = styled.img`
  width: 57px;
  margin-right: 8px;
`;

export const MovieComment = styled.div``;

export const MovieName = styled.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 4px;
`;

export const UserComment = styled.div`
  color: #ededed;
  font-weight: 400;
  font-size: 15px;
`;

export const DividingLine = styled.div`
  height: 1px;
  background-color: rgb(237, 237, 237);
  margin-bottom: 9px;
  line-height: 18.4px;
`;

export const ActiveArea = styled.div`
  display: flex;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #ededed;
`;

export const LikeImg = styled.img`
  width: 16px;
  margin-right: 4px;
`;

export const LikeCnt = styled.div`
  font-size: 14px;
`;

export const UserCommentComment = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #ededed;
`;

export const UserCommentCommentImg = styled.img`
  width: 16px;
  margin-right: 4px;
`;

export const UserCommentCommentCnt = styled.div`
  font-size: 14px;
`;

export const Boxoffice = styled.div``;

export const BoxofficeHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const BoxofficeHeaderName = styled.div`
  font-size: 22px;
  font-weight: 700;
  padding: 12px 0 14px;
`;

export const BoxofficeLink = styled(Link)`
  text-decoration: none;
  color: rgb(116, 116, 123);
  font-size: 15px;
  font-weight: 400;
  padding-bottom: 14px;
  cursor: pointer;
`;
export const MovieContainer = styled.div`
  position: relative;
`;

export const LeftBtn = styled.div`
  position: absolute;
  left: -15px;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 24px;
  background-image: url("gradientRight.svg");
  cursor: pointer;
  margin-left: -32px;
`;

export const LeftBtnIcon = styled.img``;

export const WrapMovie = styled.ul`
  padding: 0;
  display: flex;
  overflow-x: scroll;
  -webkit-scrollbar: no-button;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  column-gap: 14px;
  /* margin: 0 32px; */
  scroll-behavior: smooth;
`;

export const RightBtn = styled.div`
  position: absolute;
  right: -15px;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 24px;
  background-image: url("gradientRight.svg");
  cursor: pointer;
  margin-right: -32px;
`;

export const RightBtnIcon = styled.img``;

export const Movie = styled.li`
  width: calc(20% - 12.8px);
  flex-shrink: 0;
  list-style-type: none;
  margin: 10px 0 40px;
`;
export const MovieRanking = styled.div``;
export const Ranking = styled.div`
  height: 30px;
  background-color: black;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
`;
export const PosterLink = styled(Link)``;
export const Poster = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export const MovieNameKor = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const MovieInfo = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
`;
export const MovieReleaseAt = styled.div`
  margin-right: 5px;
`;
export const MovieCountry = styled.div``;

export const Rate = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

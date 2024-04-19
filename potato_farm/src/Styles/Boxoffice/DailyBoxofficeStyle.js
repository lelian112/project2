import styled from "styled-components";
import { Link } from "react-router-dom";

export const DailyBoxofficeContainer = styled.div`
  width: 100%;
  background-color: #212529;
  color: #ededed;
  display: flex;
  justify-content: center;
`;
export const WrapDailyBoxoffice = styled.div`
  width: 1320px;
  padding: 22px 0;
`;
export const BoxofficeTitleContainer = styled.div`
  padding: 12px 0px 14px;
  display: flex;
  /* align-items: flex-end; */
  align-items: center;
`;

export const BoxofficeTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-right: 20px;
`;

export const BoxofficeToggleButton = styled.div`
  display: flex;
  align-items: center;
`;

export const DailyBoxofficeButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const DailyBoxofficeButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const DailyBoxofficeButtonLink = styled(Link)`
  text-decoration: none;
  color: rgb(255, 47, 110);
  font-size: 18px;
  font-weight: 600;
`;
export const MonthlyBoxofficeButton = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: 400;
`;

export const DailyBoxofficeDate = styled.div`
  display: flex;
  gap: 5px;
  align-items: center; /* 수직 중앙 정렬 */
`;
export const PrevButton = styled.button`
  border: none; /* 테두리 없음 */
  background-color: transparent; /* 배경색 투명 */
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  cursor: pointer;
`;
export const PrevButtonIcon = styled.img`
  width: 18px;
  height: 18px;
`;
export const BoxAt = styled.div`
  font-size: 13px;
`;
export const NextButton = styled.button`
  border: none; /* 테두리 없음 */
  background-color: transparent; /* 배경색 투명 */
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  cursor: pointer;
`;
export const NextButtonIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const WrapMovie = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  column-gap: 16px;
`;
export const Movie = styled.li`
  width: calc(20% - 12.8px);
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

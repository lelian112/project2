import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieGenreContainer = styled.div`
  width: 100%;
  background-color: #212529;
  color: #ededed;
  display: flex;
  justify-content: center;
`;
export const WrapMovieGenre = styled.div`
  width: 1320px;
  padding: 22px 0;
`;
export const MovieGenreTitleContainer = styled.div`
  padding: 12px 0px 14px;
  display: flex;
  /* align-items: flex-end; */
  align-items: center;
`;

export const MovieGenreTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-right: 20px;
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import * as m from "../../Styles/Movie/MovieGenreStyle";
import { useParams } from "react-router-dom";
import MovieGenrePagination from "./MovieGenrePagination";
import { movieActions } from "../../toolkit/actions/movie_action";
import { useDispatch, useSelector } from "react-redux";

const MovieGenre = () => {
  const [genreData, setGenreData] = useState([]);
  const [pageData, setPageData] = useState([]);

  const { genre, currentPage } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    getMovieList(currentPage, genre);
  }, [genre, currentPage]);

  const getMovieList = (currentPage, genre) => {
    dispatch(movieActions.getMovieList(currentPage, genre));
  };

  const genreList = useSelector((state) => state.movie.genreList);
  console.log("genreList", genreList);
  const pageInfo = useSelector((state) => state.movie.pageInfo);

  return (
    <>
      <m.MovieGenreContainer>
        <m.WrapMovieGenre>
          <m.MovieGenreTitleContainer>
            <m.MovieGenreTitle>{genre}</m.MovieGenreTitle>
          </m.MovieGenreTitleContainer>

          <m.WrapMovie>
            {genreList.map((genre) => (
              <m.Movie key={genre.code}>
                <m.PosterLink to={`/movie/${genre.code}`}>
                  <m.Poster src={genre.poster} alt="poster"></m.Poster>
                </m.PosterLink>
                <m.MovieNameKor>{genre.name_kor}</m.MovieNameKor>
                <m.MovieInfo>
                  <m.MovieReleaseAt>
                    {" "}
                    {genre.release_at.slice(0, genre.release_at.indexOf("T"))}
                  </m.MovieReleaseAt>
                  <m.MovieCountry>{genre.country}</m.MovieCountry>
                </m.MovieInfo>
                <m.Rate>평균★ {genre.rate_avg}</m.Rate>
              </m.Movie>
            ))}
          </m.WrapMovie>
        </m.WrapMovieGenre>
      </m.MovieGenreContainer>

      {/* 페이지 번호 */}
      {pageInfo && <MovieGenrePagination getMovieList={getMovieList} />}
    </>
  );
};

export default MovieGenre;

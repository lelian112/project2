import React from "react";
import * as m from "../../Styles/Movie/MovieGenreStyle";

const MovieGenre = () => {
  return (
    <>
      <m.MovieGenreContainer>
        <m.WrapMovieGenre>
          <m.MovieGenreTitleContainer>
            <m.MovieGenreTitle>Movie Genre</m.MovieGenreTitle>
          </m.MovieGenreTitleContainer>

          <m.WrapMovie>
            <m.Movie>
              <m.PosterLink to="/movie/${code}">
                <m.Poster
                  to
                  src="https://an2-img.amz.wtchn.net/image/v2/XqWZa9ZYN4q5Zh8zpIGeyA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJMk5UTXhNalk1T0RReE5ESTBPU0o5LmhVS3lCcVdremR3SS1FNHlVTmFNeFdMb0tsNGZNZkZ6b3VGX3J2c0pLZzA"
                  alt="poster"
                ></m.Poster>
              </m.PosterLink>
              <m.MovieNameKor>movieNameKor</m.MovieNameKor>
              <m.MovieInfo>
                <m.MovieReleaseAt>releaseAt</m.MovieReleaseAt>
                <m.MovieCountry>country</m.MovieCountry>
              </m.MovieInfo>
              <m.Rate>평균★ rate_avg</m.Rate>
            </m.Movie>
          </m.WrapMovie>
        </m.WrapMovieGenre>
      </m.MovieGenreContainer>
    </>
  );
};

export default MovieGenre;

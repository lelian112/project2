package com.gamja_farm.service;

import java.util.List;

import com.gamja_farm.dto.MovieDetailDTO;
import com.gamja_farm.dto.MovieHomeDTO;
import com.gamja_farm.dto.MovieSearchDTO;
import com.gamja_farm.dto.RateDTO;

public interface MovieService {

	List<MovieHomeDTO> weekBoxOffice();

	List<MovieHomeDTO> dailyBoxOffice();

	List<MovieHomeDTO> domesticMovies();

	List<MovieHomeDTO> foreignMovies();

	List<MovieHomeDTO> animationMovies();

	int genreCount(String genre);

	List<MovieHomeDTO> genreList(MovieSearchDTO dto);

	MovieDetailDTO movieDetail(String code);

	MovieDetailDTO movieDetailUser(String code, String user_id);
	
	public int movieWished(String code, String user_id);
	
	public void userMovieRate(RateDTO dto);

}

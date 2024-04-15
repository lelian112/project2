package com.gamja_farm.service;

import java.util.List;

import com.gamja_farm.dto.MovieDetailDTO;
import com.gamja_farm.dto.MovieHomeDTO;
import com.gamja_farm.dto.MovieSearchDTO;

public interface MovieService {
	
	List<MovieHomeDTO> weekBoxOffice();
	
	List<MovieHomeDTO> dailyBoxOffice();
	
	List<MovieHomeDTO> domesticMovies();
	
	List<MovieHomeDTO> foreignMovies();

	List<MovieHomeDTO> animationMovies();
	
	List<MovieHomeDTO> genreList(MovieSearchDTO dto);
	
	MovieDetailDTO movieDetail(String code);
	
}

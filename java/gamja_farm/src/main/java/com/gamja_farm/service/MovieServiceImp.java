package com.gamja_farm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.dto.MovieDetailDTO;
import com.gamja_farm.dto.MovieHomeDTO;
import com.gamja_farm.dto.MovieSearchDTO;
import com.gamja_farm.mapper.MovieMapper;

@Service
public class MovieServiceImp implements MovieService {

	@Autowired
	MovieMapper movieMapper;

//	Date date = new Date();
//	SimpleDateFormat targetDateFormat = new SimpleDateFormat("yyyy-MM-dd");
//	String boxat = targetDateFormat.format(date);

	String boxat = "2024-04-11";
	String weekat = "20230102~20230108";

	@Override
	public List<MovieHomeDTO> dailyBoxOffice() {
		List<MovieHomeDTO> dailyList = movieMapper.dailyList(boxat);
		return dailyList;
	}

	@Override
	public List<MovieHomeDTO> weekBoxOffice() {
		List<MovieHomeDTO> weekList = movieMapper.weekList(weekat);
		return weekList;
	}

	@Override
	public List<MovieHomeDTO> domesticMovies() {
		List<MovieHomeDTO> domesticList = movieMapper.domesticList();
		return domesticList;

	}

	@Override
	public List<MovieHomeDTO> foreignMovies() {
		return movieMapper.foreignList();
	}

	@Override
	public List<MovieHomeDTO> animationMovies() {
		return movieMapper.animationList();
	}

	// 카테고리로 장르 선택해서 List 출력
	@Override
	public List<MovieHomeDTO> genreList(MovieSearchDTO dto) {
		return movieMapper.genreList(dto);
	}

	@Override
	public MovieDetailDTO movieDetail(String code) {

		return movieMapper.movieDetail(code);
	}

}

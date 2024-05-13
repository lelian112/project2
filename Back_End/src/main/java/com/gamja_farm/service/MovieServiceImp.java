package com.gamja_farm.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.gamja_farm.dto.MovieDetailDTO;
import com.gamja_farm.dto.MovieHomeDTO;
import com.gamja_farm.dto.MovieSearchDTO;
import com.gamja_farm.dto.RateDTO;
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
	@Cacheable("dailyList")
	public List<MovieHomeDTO> dailyBoxOffice() {
		List<MovieHomeDTO> dailyList = movieMapper.dailyList(boxat);
		return dailyList;
	}

	@CacheEvict(cacheNames = "dailyList", allEntries = true)
	public List<MovieHomeDTO> updateDailyBoxOffice() {
		List<MovieHomeDTO> dailyList = movieMapper.dailyList(boxat);
		return dailyList;
	}

	@Override
	@Cacheable("weekList")
	public List<MovieHomeDTO> weekBoxOffice() {
		List<MovieHomeDTO> weekList = movieMapper.weekList(weekat);
		return weekList;
	}

	@Override
	@Cacheable("domesticList")
	public List<MovieHomeDTO> domesticMovies() {
		List<MovieHomeDTO> domesticList = movieMapper.domesticList();
		return domesticList;

	}

	@Override
	@Cacheable("foreignList")
	public List<MovieHomeDTO> foreignMovies() {
		return movieMapper.foreignList();
	}

	@Override
	@Cacheable("animationList")
	public List<MovieHomeDTO> animationMovies() {
		return movieMapper.animationList();
	}

	// 카테고리로 장르 선택해서 List 출력
	@Override
	public int genreCount(String genre) {
		return movieMapper.genreCount(genre);
	}

	@Override
	public List<MovieHomeDTO> genreList(MovieSearchDTO dto) {
		return movieMapper.genreList(dto);
	}

	@Override
	public MovieDetailDTO movieDetail(String code) {

		return movieMapper.movieDetail(code);
	}

	@Override
	public MovieDetailDTO movieDetailUser(String code, String user_id) {
		MovieDetailDTO mdDto = movieMapper.movieDetailUser(code, user_id);
		String x = mdDto.getWish();
		if (x == null || x.equals("N")) {
			mdDto.setWish("0");
		} else {
			mdDto.setWish("1");
		}
		return mdDto;
	}

	@Override // 찜 상태 변경
	public int movieWished(String code, String user_id) {
		Map<String, Object> wishCount = movieMapper.checkWish(code, user_id);

		if (wishCount != null) {
			String wish = (String) wishCount.get("wish");
			System.out.println("wish == " + wish);
			movieMapper.toggleWishMovie(code, user_id);
			return (wish.equals("Y") ? 0 : 1);
		} else {
			movieMapper.hitWishMovie(code, user_id);
			return 1;
		}

	}

	@Override
	public void userMovieRate(RateDTO dto) {

		int checkRate = movieMapper.checkMovieRate(dto);

		if (checkRate == 0) {
			movieMapper.insertMovieRate(dto);
		} else {
			movieMapper.toggleMovieRate(dto);
		}

	}

}

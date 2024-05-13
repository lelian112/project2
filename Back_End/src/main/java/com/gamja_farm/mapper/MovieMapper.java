package com.gamja_farm.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.gamja_farm.dto.MovieDetailDTO;
import com.gamja_farm.dto.MovieHomeDTO;
import com.gamja_farm.dto.MovieSearchDTO;
import com.gamja_farm.dto.RateDTO;

@Mapper
public interface MovieMapper {

	// 해당 영화의 평균 평점을 불러오기 위한 Mapper

	public List<MovieHomeDTO> weekList(String weekat);

	public List<MovieHomeDTO> dailyList(String boxat);

	public List<MovieHomeDTO> domesticList();

	public List<MovieHomeDTO> foreignList();

	public List<MovieHomeDTO> animationList();

	public int genreCount(String genre);
	
	public List<MovieHomeDTO> genreList(MovieSearchDTO dto);

	public MovieDetailDTO movieDetail(String code);
	
	public MovieDetailDTO movieDetailUser(@Param("code") String code, @Param("user_id") String user_id);
	
	// 영화 찜 상태 확인
	public Map<String, Object> checkWish(@Param("code") String code, @Param("user_id") String user_id);

	// 영화 찜 기능
	public int hitWishMovie(@Param("code") String code, @Param("user_id") String user_id);

	// 영화 찜 수정
	public int toggleWishMovie(@Param("code") String code, @Param("user_id") String user_id);
	
	public int checkMovieRate (RateDTO dto);
 	
	public void insertMovieRate (RateDTO dto);	
	
	public void toggleMovieRate (RateDTO dto);  
	

}

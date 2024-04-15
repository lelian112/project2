package com.gamja_farm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.gamja_farm.dto.MovieDetailDTO;
import com.gamja_farm.dto.MovieHomeDTO;
import com.gamja_farm.dto.MovieSearchDTO;

@Mapper
public interface MovieMapper {

	// 해당 영화의 평균 평점을 불러오기 위한 Mapper

	public List<MovieHomeDTO> weekList(String weekat);

	public List<MovieHomeDTO> dailyList(String boxat);

	public List<MovieHomeDTO> domesticList();

	public List<MovieHomeDTO> foreignList();

	public List<MovieHomeDTO> animationList();

	public List<MovieHomeDTO> genreList(MovieSearchDTO dto);

	public MovieDetailDTO movieDetail(String code);

}

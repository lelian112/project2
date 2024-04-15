package com.gamja_farm.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.dto.MovieDetailDTO;
import com.gamja_farm.dto.MovieHomeDTO;
import com.gamja_farm.dto.MovieSearchDTO;
import com.gamja_farm.service.MovieService;

import io.swagger.v3.oas.annotations.Parameter;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin("*")
@RestController
public class MovieController {

	Date date = new Date();
	SimpleDateFormat targetDateFormat = new SimpleDateFormat("yyyy-MM-dd");
	String targetDateString = targetDateFormat.format(date);

	@Autowired
	private MovieService movieService;

	public MovieController() {
	}

	// 메인 홈페이지
	@GetMapping("/home")
	public ResponseEntity<Map<String, Object>> movielist() {

		// 박스 오피스 ( 주간 )
		List<MovieHomeDTO> dailyboxoffice = movieService.dailyBoxOffice();
		// 박스 오피스 ( 일일 )
		List<MovieHomeDTO> weekboxoffice = movieService.weekBoxOffice();
		// 국내영화
		List<MovieHomeDTO> domesticmovies = movieService.domesticMovies();
		// 해외영화
		List<MovieHomeDTO> foreignmovies = movieService.foreignMovies();
		// 애니메이션
		List<MovieHomeDTO> animationList = movieService.animationMovies();

		HashMap<String, Object> movieList = new HashMap<>();
		movieList.put("dailyboxoffice", dailyboxoffice);
		movieList.put("weekboxoffice", weekboxoffice);
		movieList.put("domesticmovies", domesticmovies);
		movieList.put("foreignmovies", foreignmovies);
		movieList.put("animationList", animationList);

		return ResponseEntity.ok(movieList);
	}

	// 카테고리 장르 조회
	@GetMapping("/home/movie/{genre}/{currentPage}")
	public ResponseEntity<List<MovieHomeDTO>> genrelist(@PathVariable("genre") String genre,
			@PathVariable("currentPage") int currentPage) {
		MovieSearchDTO msdto = new MovieSearchDTO(currentPage, genre);
		List<MovieHomeDTO> selectList = movieService.genreList(msdto);
		return ResponseEntity.ok(selectList);
	}

	// 영화 상세 페이지
	@GetMapping("/home/movie/detail/{code}")
	public ResponseEntity<MovieDetailDTO> daliylist(@PathVariable("code") String code) {
		MovieDetailDTO movieDetailDTO = movieService.movieDetail(code);		
		return ResponseEntity.ok(movieDetailDTO);
	}
}

//	//  일별 오피스 검색기능
//	@GetMapping("/home/select/{dailyoffice}")	
//	public ResponseEntity<List<MovieDTO>> daliylist(@PathVariable("chartnum") int num){
//		List<MovieDTO> selectList = movieService.genreList(num);
//		String genretest = "판타지";
//		List<MovieDTO> TestList = movieService.genreList(genretest);  
//		return ResponseEntity.ok(TestList);
//	}
//	
//	//  주간별 오피스 검색기능
//	@GetMapping("/home/select/{dailyoffice}")	
//	public ResponseEntity<List<MovieDTO>> daliylist(@PathVariable("chartnum") int num){
//		List<MovieDTO> selectList = movieService.genreList(num);
//		String genretest = "판타지";
//		List<MovieDTO> TestList = movieService.genreList(genretest);  
//		return ResponseEntity.ok(TestList);
//	}

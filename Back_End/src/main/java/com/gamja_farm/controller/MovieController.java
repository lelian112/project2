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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.dto.MovieDetailDTO;
import com.gamja_farm.dto.MovieHomeDTO;
import com.gamja_farm.dto.MovieSearchDTO;
import com.gamja_farm.dto.RateDTO;
import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.dto.WishDTO;
import com.gamja_farm.service.MovieService;

import io.swagger.v3.oas.annotations.Parameter;
import jakarta.servlet.http.HttpServletRequest;
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
	@GetMapping("/main")
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
	@GetMapping("/movie/{genre}/{currentPage}")
	public ResponseEntity<Map<String, Object>> genrelist(@PathVariable("genre") String genre,
			@PathVariable("currentPage") int currentPage) {

		String replacedGenre = genre.replace(", ", "/");

		int totalCount = movieService.genreCount(replacedGenre);
		MovieSearchDTO msdto = new MovieSearchDTO(currentPage, totalCount, replacedGenre);

		List<MovieHomeDTO> selectList = movieService.genreList(msdto);

		Map<String, Object> result = new HashMap<>();

		result.put("genreList", selectList);
		result.put("pageInfo", msdto);

		return ResponseEntity.ok(result);
	}

	// 영화 상세 페이지
	@GetMapping("/movie/detail/{code}")
	public ResponseEntity<MovieDetailDTO> daliylist(@PathVariable("code") String code) {
		MovieDetailDTO movieDetailDTO = movieService.movieDetail(code);
		return ResponseEntity.ok(movieDetailDTO);
	}

	// 영화 상세 페이지 - 로그인 시
	@GetMapping("/movie/detail/{code}/{user_id}")
	public ResponseEntity<MovieDetailDTO> daliylistuser(@PathVariable("code") String code,
			@PathVariable("user_id") String user_id) {
		MovieDetailDTO movieDetailDTO = movieService.movieDetailUser(code, user_id);
		return ResponseEntity.ok(movieDetailDTO);
	}

	// 영화 평점 남기기
	@PostMapping("/movie/detail/rate/{user_id}")
	public ResponseEntity<Double> userMovieRate(@PathVariable("user_id") String user_id, @RequestBody RateDTO dto) {
		dto.setUser_id(user_id);
		movieService.userMovieRate(dto);
		return ResponseEntity.ok(dto.getRate());
	}

	// 영화 찜 기능 추가
	@PostMapping("movie/detail/wish/{code}/{user_id}")
	public ResponseEntity<Integer> userMovieWish(@PathVariable("code") String code,
			@PathVariable("user_id") String user_id) {
		int result = movieService.movieWished(code, user_id);
		System.out.println("\n\n " + result + "\n\n");
		return ResponseEntity.ok(result);
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

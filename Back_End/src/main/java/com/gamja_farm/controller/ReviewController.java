package com.gamja_farm.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.dto.ReviewLikeDTO;
import com.gamja_farm.service.ReviewService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.constraints.AssertTrue;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin("*")
@RestController
public class ReviewController {

	@Autowired
	private ReviewService reviewService;

	@Autowired
	private PageDTO PageDTO;
	private ReviewDTO reviewDTO;

	public ReviewController() {

	}

	// 리뷰 작성
	@PostMapping("/review/write/{user_id}/{movie_code}")
	public ResponseEntity<String> writeReview(@PathVariable("user_id") String user_id,
			@PathVariable("movie_code") String movie_code, @RequestBody ReviewDTO reviewDTO) {
		reviewDTO.setUser_id(user_id);
		reviewDTO.setMovie_code(movie_code);
		reviewService.writeReivewProcess(reviewDTO);
		return ResponseEntity.ok("review saved");
	}

	// 전체 리뷰 리스트 뽑아오는거
	@GetMapping("/review/list/{currentPage}")
	public ResponseEntity<Map<String, Object>> viewList(@PathVariable("currentPage") int currentPage) {
		// PageDTO 객체 생성 및 초기화
		PageDTO pageDTO = new PageDTO(currentPage, reviewService.countpageProcess());

		// 서비스 계층에 PageDTO 전달하여 리뷰 목록 가져오기
		List<ReviewDTO> reviewList = reviewService.viewListProcess(pageDTO);

		// 페이징 정보와 리뷰 목록을 Map에 담아 반환
		Map<String, Object> result = new HashMap<>();
		result.put("pageInfo", pageDTO);
		result.put("reviewList", reviewList);

		return ResponseEntity.ok(result);
	}

	// ID로 리뷰 리스트 뽑아오는거 ( mypage )
	@GetMapping("/review/mypage/{user_id}/{currentPage}")
	public ResponseEntity<Map<String, Object>> getMyReview(@PathVariable("user_id") String user_id,
			@PathVariable("currentPage") int currentPage) {
		// PageDTO 객체 생성 및 초기화
		Map<String, Object> result = new HashMap<>();
		int totalcount = reviewService.countMyReview(user_id);
		
		PageDTO pageDTO = new PageDTO(currentPage, totalcount);
		if ( totalcount >= 1 ) {

			// 서비스 계층에 PageDTO 전달하여 리뷰 목록 가져오기
			List<ReviewDTO> reviewList = reviewService.showMyReviewProcess(user_id, pageDTO);
	
			// 페이징 정보와 리뷰 목록을 Map에 담아 반환
			
			result.put("pageInfo", pageDTO);
			result.put("reviewList", reviewList);
		}
		return ResponseEntity.ok(result);
	}

	// 리뷰 좋아요 누르기
	@PostMapping("/review/hitlike/{user_id}/{user_review_idx}")
	public ResponseEntity<Integer> toggleLike(@PathVariable("user_id") String user_id,
			@PathVariable("user_review_idx") int user_review_idx) {
		int result = reviewService.toggleLikeStatusPro(user_id, user_review_idx);

		return ResponseEntity.ok(result);
	}

	// 리뷰 좋아요 갯수 불러오기
	@GetMapping("/review/likecount/{idx}")
	public int getReviewWithLikesbyIdx(@PathVariable("idx") int idx) {
		return reviewService.getReviewWithLikeCntPro(idx);
	}

	// 좋아요 순으로 리뷰 정렬
	@GetMapping("/review/mostlike/{currentPage}")
	public ResponseEntity<Map<String, Object>> getReviewWithMostLike(@PathVariable("currentPage") int currentPage) {

		PageDTO pageDTO = new PageDTO(currentPage, reviewService.countReviewWithMostLike());

		// 서비스 계층에 PageDTO 전달하여 리뷰 목록 가져오기
		List<ReviewDTO> reviewList = reviewService.getReviewWithMostLikePro(pageDTO);

		reviewList = reviewService.getReviewWithMostLikePro(pageDTO);

		// 페이징 정보와 리뷰 목록을 Map에 담아 반환
		Map<String, Object> result = new HashMap<>();
		result.put("pageInfo", pageDTO);
		result.put("reviewList", reviewList);
		return ResponseEntity.ok(result);
	}

	// 좋아요 순으로 리뷰 정렬 - 로그인시 user_id 
	@GetMapping("/review/mostlike/{currentPage}/{user_id}")
	public ResponseEntity<Map<String, Object>> getReviewWithMostLikeUser(@PathVariable("currentPage") int currentPage,
			@PathVariable("user_id") String user_id) {
		
		PageDTO pageDTO = new PageDTO(currentPage, reviewService.countReviewWithMostLike());

		// 서비스 계층에 PageDTO 전달하여 리뷰 목록 가져오기
		List<ReviewDTO> reviewList = reviewService.getReviewWithMostLikeProUser(pageDTO, user_id);
		Map<String, Object> result = new HashMap<>();
		result.put("pageInfo", pageDTO);
		result.put("reviewList", reviewList);

		return ResponseEntity.ok(result);
	}

	// 최신 순으로 리뷰 정렬
	@GetMapping("/review/newreview/{currentPage}")
	public ResponseEntity<Map<String, Object>> getReviewWithNew(@PathVariable("currentPage") int currentPage) {
		PageDTO pageDTO = new PageDTO(currentPage, reviewService.countReviewWithNew());

		List<ReviewDTO> reviewList;

		// 서비스 계층에 PageDTO 전달하여 리뷰 목록 가져오기

		reviewList = reviewService.getReviewWithNewPro(pageDTO);

		// 페이징 정보와 리뷰 목록을 Map에 담아 반환
		Map<String, Object> result = new HashMap<>();
		result.put("pageInfo", pageDTO);
		result.put("reviewList", reviewList);

		return ResponseEntity.ok(result);

	}

	// 최신순 - 로그인
	@GetMapping("/review/newreview/{currentPage}/{user_id}")
	public ResponseEntity<Map<String, Object>> getReviewWithNewUser(@PathVariable("currentPage") int currentPage,
			@PathVariable("user_id") String user_id) {

		PageDTO pageDTO = new PageDTO(currentPage, reviewService.countReviewWithNew());

		List<ReviewDTO> reviewList;

		reviewList = reviewService.getReviewWithNewProUser(pageDTO, user_id);

		Map<String, Object> result = new HashMap<>();
		result.put("pageInfo", pageDTO);
		result.put("reviewList", reviewList);

		return ResponseEntity.ok(result);

	}

	// 인덱스로 리뷰 불러오기
	@GetMapping("/review/view/{idx}/{user_id}")
	public ResponseEntity<ReviewDTO> showContent(@PathVariable("idx") int idx,
			@PathVariable("user_id") String user_id) {
		ReviewDTO DTO = reviewService.contentProcess(idx, user_id);
		return ResponseEntity.ok(DTO);
	}

	// 리뷰 업데이트
	@PutMapping("/review/update/{idx}")
	public ResponseEntity<Object> updateReview(@PathVariable("idx") int idx, @RequestBody ReviewDTO dto,
			HttpServletRequest req) {
		dto.setIdx(idx);
		reviewService.updateReivewProcess(dto);
		return ResponseEntity.ok(null);
	}

	// 리뷰 삭제
	@DeleteMapping("/review/delete/{idx}")
	public ResponseEntity<Object> deleteReview(@PathVariable("idx") int idx) {
		reviewService.deleteReviewProcess(idx);
		return ResponseEntity.ok(null);
	}

	// 아이디로 리뷰 전체 삭제
	@DeleteMapping("/review/deleteById/{user_id}")
	public ResponseEntity<Void> deleteAllReview(@PathVariable("user_id") String user_id) {
		log.info(user_id);
		reviewService.deleteAllReviewPro(user_id);
		return ResponseEntity.ok(null);
	}

	// 무비 리뷰 리스트
	@GetMapping("/review/{movie_code}/{user_id}")
	public ResponseEntity<List<ReviewDTO>> moiveReviewList(@PathVariable("movie_code") String code,
			@PathVariable("user_id") String user_id) {
		List<ReviewDTO> movieReivew = reviewService.selectMovieReview(code, user_id);
		return ResponseEntity.ok(movieReivew);

	}

} // end class

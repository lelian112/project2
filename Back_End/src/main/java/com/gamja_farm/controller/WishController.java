package com.gamja_farm.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.dto.RateDTO;
import com.gamja_farm.dto.WishDTO;
import com.gamja_farm.service.WishServie;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin("*")
@RestController
public class WishController {

	@Autowired
	private WishServie wishServie;

	@Autowired
	private PageDTO pageDTO;
	private int currentPage;

	public WishController() {

	}

	@PostMapping("/wish/addlist/{user_id}/{movie_code}") // wish리스트에 추가
	public ResponseEntity<WishDTO> hitWish(WishDTO wishDTO) {
		wishServie.hitWishPro(wishDTO);
		return ResponseEntity.ok(wishDTO);
	}

	// 모든 wish list 반환
	@GetMapping("/wish/{currentPage}")
	public ResponseEntity<Map<String, Object>> getAllWishWithCount(
			@RequestParam(value = "page", defaultValue = "1") int currentPage) {
		// pageDTO객체 생성 및 초기화
		PageDTO pageDTO = new PageDTO(currentPage, wishServie.countallwish());

		System.out.println();

		// 서비스 계층에 PageDTO전달하여 wishList가지고 오기
		List<WishDTO> wishList = wishServie.getAllWishPro(pageDTO);

		Map<String, Object> result = new HashMap<>();
		result.put("pageInfo", pageDTO);
		result.put("WishList", wishList);

		return ResponseEntity.ok(result);
	}

	// user_id에 해당하는 wish list 반환
	@GetMapping("/wish/{user_id}/{currentPage}")
	public ResponseEntity<Map<String, Object>> getWishListById(@PathVariable("user_id") String user_id,
			@PathVariable("currentPage") int currentPage) {
		// pageDTO객체 생성 및 초기화
		Map<String, Object> result = new HashMap<>();
		int totalcount;
		totalcount = wishServie.countMyWishPro(user_id);
		
		if ( totalcount >= 1 ) {
			// 서비스 계층에 PageDTO전달하여 wishList가지고 오기
			List<WishDTO> wishList = wishServie.getWishListByIdPro(user_id, pageDTO);
			PageDTO pageDTO = new PageDTO(currentPage, totalcount);			
			result.put("pageInfo", pageDTO);
			result.put("WishList", wishList);			
		}
		return ResponseEntity.ok(result);
	}

	@GetMapping("/rating/{user_id}")
	public ResponseEntity<Map<String, Object>> getWishListById(@PathVariable("user_id") String user_id) {
		// pageDTO객체 생성 및 초기화
		PageDTO pageDTO = new PageDTO(currentPage, wishServie.countMyWishPro(user_id));

		// 서비스 계층에 PageDTO전달하여 wishList가지고 오기
		List<WishDTO> wishList = wishServie.getWishListByIdPro(user_id, pageDTO);

		Map<String, Object> result = new HashMap<>();
		result.put("pageInfo", pageDTO);
		result.put("WishList", wishList);

		return ResponseEntity.ok(result);
	}

	// userid, idx로 삭제
	@DeleteMapping("/wish/deletewish/{user_id}/{idx}") // 인덱스로 하나 삭제
	public ResponseEntity<Object> deleteOneWishPro(@PathVariable("user_id") String user_id,
			@PathVariable("idx") int idx) {
		int deletecount = wishServie.deleteOneWishPro(user_id, idx);
		if (deletecount > 0) {
			return ResponseEntity.ok().body("삭제되었습니다.");
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// 유저의 wish리스트 전체 삭제
	@DeleteMapping("/wish/deleteall/{user_id}")
	public ResponseEntity<Void> deleteWishPro(@PathVariable("user_id") String user_id) {
		wishServie.deleteAllbyUserIdPro(user_id);
		return ResponseEntity.ok(null);
	}

	@GetMapping("/wish/wishcheck/{user_id}/{movie_code}") // 이미 찜 했는지 확인
	public ResponseEntity<WishDTO> getByMovieCodeWithUserId(@PathVariable("user_id") String user_id,
			@PathVariable("movie_code") String moive_code) {
		WishDTO existingWish = wishServie.getByMovieCodeWithUserIdPro(user_id, moive_code);
		return ResponseEntity.ok(existingWish);
	}

	@GetMapping("/wish/rate/{user_id}")
	public ResponseEntity<List<RateDTO>> getRateUser(@PathVariable("user_id") String user_id) {
		List<RateDTO> rateList = wishServie.getRate(user_id);

		return ResponseEntity.ok(rateList);

	}

}// end class

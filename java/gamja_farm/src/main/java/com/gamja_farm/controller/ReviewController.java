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
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.dto.ReviewPageDTO;
import com.gamja_farm.service.ReviewService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PutMapping;

@Slf4j
@CrossOrigin("*")
@RestController
public class ReviewController {

	@Autowired
	private ReviewService reviewService;

	@Autowired
	private ReviewPageDTO reviewPageDTO;
	private int currentPage;

	public ReviewController() {

	}

	@GetMapping("/review/list/{currentPage}")
	public ResponseEntity<Map<String, Object>> listExcute(@PathVariable("currentPage") int currentPage) {
		Map<String,Object> map = new HashMap<>();
		int totalRecord =reviewService.countpageProcess();

		log.info("totalRecord:{}", totalRecord); 

		if (totalRecord >= 1) {
			this.currentPage = currentPage;
			this.reviewPageDTO = new ReviewPageDTO(this.currentPage = currentPage, totalRecord);
			List<ReviewDTO> reviewList = reviewService.viewListProcess(reviewPageDTO);
			map.put("viewList", reviewService.viewListProcess(reviewPageDTO));
			map.put("pageInfo", this.reviewPageDTO);
		}

		log.info("viewList:{}", map.get("viewList"));
		return ResponseEntity.ok(map);
	}

	// @GetMapping("/review/list")
	// public ResponseEntity<List<ReviewDTO>> showList(){
	//   List<ReviewDTO> reviewList = reviewServie.showListProcess();
	//   return ResponseEntity.ok(reviewList);
	//   }

	@PostMapping("/review/write")
	public ResponseEntity<String> writeReview (ReviewDTO dto,HttpServletRequest req, HttpSession session) {
		// String user_id = (String) session.getAttribute("user_id"); // session에 설정된 id값 가지고와서 user_id로 사용하는거
		dto.getUser_id();
		log.info("user_id:{}, content:{}",dto.getUser_id(), dto.getReview());
		reviewService.writeReivewProcess(dto);
		return ResponseEntity.ok(String.valueOf(1)); 
	}


	@GetMapping("/review/view/{idx}")
	public ResponseEntity<ReviewDTO> showContent(@PathVariable("num,idx") int num, int idx) {
		ReviewDTO DTO = reviewService.contentProcess(num, idx);
		return ResponseEntity.ok(DTO);
	}

	@PutMapping("/review/update/{idx}")
	public ResponseEntity<Object> updateReview(@PathVariable("idx") int idx, ReviewDTO dto,HttpServletRequest req) {
		// dto.getUser_id();    
		reviewService.updateReivewProcess(dto);
		return ResponseEntity.ok(null);
	}

	@DeleteMapping("/review/delete/{idx}")
	public ResponseEntity<Object> deleteReview(@PathVariable("idx") int idx) {
		reviewService.deleteReviewProcess(idx);
		return ResponseEntity.ok(null);
	}

} // end class

package com.gamja_farm.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.javassist.expr.NewArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.dto.CalendarDTO;
import com.gamja_farm.service.MypageSubService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin("*")
@Slf4j
@RestController
public class MypageSubController {

	@Autowired
	private MypageSubService mypageSubService;

	public MypageSubController() {

	}

	@PostMapping("/mypage/main/{id}")
	public ResponseEntity<Map<String, Object>> allExecute(@PathVariable("id") String id) {

		List<String> movieReviews = mypageSubService.movieReviewProcess(id);
		List<String> movieRatings = mypageSubService.movieRatingProcess(id);
		String moviePython = mypageSubService.moviePythonProcess(id);
		String movieWatchingTime = mypageSubService.movieWatchingTimeProcess(id);

		HashMap<String, Object> mypageSubData = new HashMap<>();
		mypageSubData.put("movieReviews", movieReviews != null ? movieReviews : new ArrayList<String>());
		mypageSubData.put("movieRatings", movieRatings != null ? movieRatings : new ArrayList<String>());
		mypageSubData.put("moviePython", moviePython != null ? moviePython : "");
		mypageSubData.put("movieWatchingTime", movieWatchingTime != null ? movieWatchingTime : "");

		return ResponseEntity.ok(mypageSubData);
	}

	@PostMapping("/mypage/calendar/{id}")
	public ResponseEntity<Map<String, Object>> calendarList(@PathVariable("id") String id) {

		HashMap<String, Object> calendarList = new HashMap<>();
		
		List<CalendarDTO> wishList = mypageSubService.wishList(id);
		List<CalendarDTO> rateList = mypageSubService.rateList(id);
		List<CalendarDTO> reviewList = mypageSubService.reviewList(id);
		
		
		calendarList.put("wishList", wishList != null ? wishList : new ArrayList<String>());
		calendarList.put("rateList", rateList != null ? rateList : new ArrayList<String>());
		calendarList.put("reviewList", reviewList != null ? reviewList : new ArrayList<String>());
		
		

		return ResponseEntity.ok(calendarList);
	}

}

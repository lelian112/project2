package com.gamja_farm.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<List<Object>> allExecute(@PathVariable("id") String id) {
        
        List<Object> mypageSubData = new ArrayList<>();

        List<String> movieReviews = mypageSubService.movieReviewProcess(id);
        mypageSubData.add(movieReviews != null ? movieReviews : new ArrayList<String>());

        List<String> movieRatings = mypageSubService.movieRatingProcess(id);
        mypageSubData.add(movieRatings != null ? movieRatings : new ArrayList<String>());

        // String moviePython = mypageSubService.moviePythonProcess(id);
        // mypageSubData.add(moviePython != null ? moviePython : "");

        String movieWatchingTime = mypageSubService.movieWatchingTimeProcess(id);
        mypageSubData.add(movieWatchingTime != null ? movieWatchingTime : "");

        return ResponseEntity.ok(mypageSubData);

    }

}

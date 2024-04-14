package com.gamja_farm.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.service.MypageMainService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin("*")
@Slf4j
@RestController
public class MypageMainController {

    @Autowired
    private MypageMainService mypageMainService;
    
    public MypageMainController() {
        
    }

    @PostMapping("/mypage/{id}")
    public ResponseEntity<List<Object>> allExecute(@PathVariable("id") String id) {
        
        List<Object> mypageMainData = new ArrayList<>();

        int visitDaily = mypageMainService.visitDailyProcess(id);
        mypageMainData.add(visitDaily != 0 ? visitDaily : "");

        int visitTotal = mypageMainService.visitTotalProcess(id);
        mypageMainData.add(visitTotal != 0 ? visitTotal : "");

        String userPic = mypageMainService.userPicProcess(id);
        mypageMainData.add(userPic != null ? userPic : "");

        String userMbtis = mypageMainService.userMbtiProcess(id);
        mypageMainData.add(userMbtis != null ? userMbtis : "");

        String userCaption = mypageMainService.userCaptionProcess(id);
        mypageMainData.add(userCaption != null ? userCaption : "");

        List<String> userfollowings = mypageMainService.followingListProcess(id);
        mypageMainData.add(userfollowings != null ? userfollowings : new ArrayList<String>());

        List<String> userfollowers = mypageMainService.followerListProcess(id);
        mypageMainData.add(userfollowers != null ? userfollowers : new ArrayList<String>());

        return ResponseEntity.ok(mypageMainData);
        
    }

    // @GetMapping("/userpage/{id}")
    // public ResponseEntity<String> anonExecute() {
    //  return ResponseEntity.ok(null);
    // }

}

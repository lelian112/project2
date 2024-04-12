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

    @GetMapping("/mypage/{id}")
    public ResponseEntity<List<Object>> allExecute(@PathVariable("id") String id) {
        
        List<Object> mypageData = new ArrayList<>();

        String userPics = mypageMainService.userPicProcess(id);
        mypageData.add(userPics != null ? userPics : "");

        String userMbtis = mypageMainService.userMbtiProcess(id);
        mypageData.add(userMbtis != null ? userMbtis : "");

        String userCaptions = mypageMainService.userCaptionProcess(id);
        mypageData.add(userCaptions != null ? userCaptions : "");

        List<String> userfollowings = mypageMainService.followingListProcess(id);
        mypageData.add(userfollowings != null ? userfollowings : new ArrayList<String>());

        List<String> userfollowers = mypageMainService.followerListProcess(id);
        mypageData.add(userfollowers != null ? userfollowers : new ArrayList<String>());

        return ResponseEntity.ok(mypageData);
    }

    // @GetMapping("/userpage/{id}")
    // public ResponseEntity<String> anonExecute() {
    //  return ResponseEntity.ok(null);
    // }

}

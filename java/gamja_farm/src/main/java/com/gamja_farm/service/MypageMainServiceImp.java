package com.gamja_farm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.mapper.MypageMainMapper;

@Service
public class MypageMainServiceImp implements MypageMainService {
    
	@Autowired
	private MypageMainMapper mypageMainMapper;
    
    public MypageMainServiceImp() {

    }

    @Override
    public int visitTotalProcess(String id) {
        return mypageMainMapper.visit_total(id);
    }

    @Override
    public String userPicProcess(String id) {
		return mypageMainMapper.user_pic(id);
    }

    @Override
    public String userMbtiProcess(String id) {
		return mypageMainMapper.user_mbti(id);
    }

    @Override
    public String userCaptionProcess(String id) {
		mypageMainMapper.visit_total(id);
		return mypageMainMapper.user_caption(id);
    }

    @Override
    public List<String> followingListProcess(String id) {
		return mypageMainMapper.user_following(id);
    }

    @Override
    public List<String> followerListProcess(String id) {
		return mypageMainMapper.user_follower(id);
    }

}

package com.gamja_farm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MypageMainMapper {

    // 당일 방문자수, 총 방문자수
    public int visit_total(String id);

    // 프로필사진, MBTI, 한줄소개
    public String user_pic(String id);
    public String user_mbti(String id);
    public String user_caption(String id);

    // 팔로워, 팔로잉
    public List<String> user_following(String id);
    public List<String> user_follower(String id);

}

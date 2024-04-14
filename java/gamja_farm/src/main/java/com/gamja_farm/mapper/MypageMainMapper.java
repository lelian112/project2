package com.gamja_farm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MypageMainMapper {

    // 당일 방문자수, 총 방문자수
    public int selectMypageVisitDaily(String id);
    public int updateMypageVisitDaily(String id);
	
    public int selectMypageVisitTotal(String id);
    public int updateMypageVisitTotal(String id);

    // 프로필사진, MBTI, 한줄소개
    public String selectUserPic(String id);
    public String selectUserMbti(String id);
    public String selectUserCaption(String id);

    // 팔로워, 팔로잉
    public List<String> selectUserFollowing(String id);
    public List<String> selectUserFollower(String id);

}

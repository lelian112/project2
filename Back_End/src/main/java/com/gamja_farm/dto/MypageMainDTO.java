package com.gamja_farm.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MypageMainDTO extends UserDTO {

	// 사용자 id
	// private String id;

	// 당일 방문자수, 총 방문자수
	private int visit_daily, visit_total;

	// 프로필사진, MBTI, 한줄소개
	private String user_pic;
	private String user_mbti;
	private String user_caption;

	// 팔로워, 팔로잉
	private String user_following, user_follower;

}

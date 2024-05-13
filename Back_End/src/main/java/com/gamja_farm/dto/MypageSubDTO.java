package com.gamja_farm.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MypageSubDTO extends UserDTO {

	// 사용자 id
	// private String id;

	// 최근 쓴 리뷰
	private String user_review;

	// 최근 쓴 평가
	private String user_rate;

	// 선호태그
	private String python_KoNLPy;

	// 총 감상시간
	private int watchingTime;

}

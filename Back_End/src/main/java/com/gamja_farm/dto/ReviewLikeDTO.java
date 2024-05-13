package com.gamja_farm.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewLikeDTO {

	private int idx; // PK
	private String user_id; // 작성자
	private int user_review_idx; // 리뷰 idx
	private int like_btn;

	private String movie_code; // 작성하는 영화
	private String review; // 리뷰 내용
	private Date regist_at;

	private String poster;
	private String name_kor;

	public ReviewLikeDTO() {

	}

}

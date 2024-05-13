package com.gamja_farm.dto;

import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewDTO {
	private int idx; // PK
	private int view_cnt = 0;
	private int like_btn;
	private int total_likes_cnt;
	private String user_id; // 작성자
	private String movie_code; // 작성하는 영화
	private String review; // 리뷰 내용
	private Timestamp regist_at;
	private String poster;
	private String name_kor;
	private int total_comment_cnt;

	public ReviewDTO() {

	}

}

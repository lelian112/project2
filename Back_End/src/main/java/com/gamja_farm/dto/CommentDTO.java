package com.gamja_farm.dto;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentDTO {
	private int idx;
	private String user_id;
	private int user_review_idx;
	private String comment;
	private Date regist_at;

	private String review;
	private String movie_code;
	private int view_cnt;
	private String name_kor;
	private String poster;

	public CommentDTO() {

	}

}// end class

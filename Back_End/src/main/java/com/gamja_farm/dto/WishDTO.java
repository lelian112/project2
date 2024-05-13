package com.gamja_farm.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WishDTO extends UserDTO {

	private int idx;
	private String user_id;
	private String movie_code;
	private WishStatus wish;
	private Date regist_at; // 추가
	// private UserDTO userDTO;

	private String poster;
	private String name_kor;

	public WishDTO() {

	}

	// public WishDTO(int idx, String user_id, String movie_code, WishStatus wish) {
	// this.idx = idx;
	// this.user_id = user_id;
	// this.movie_code = movie_code;
	// this.wish = wish;
	// }

	public enum WishStatus {
		Y, N;
	}

// public WishDTO(UserDTO userDTO) {
// 		this.user_id = userDTO.getId();
// 		this.userDTO = userDTO;
// 	}

}// end class

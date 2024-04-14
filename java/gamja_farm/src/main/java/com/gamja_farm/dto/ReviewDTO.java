package com.gamja_farm.dto;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Getter
@Setter
public class ReviewDTO {
	
	private int idx; //PK
	private int view_Cnt;
	private int like_Cnt;
	private String user_id; // 작성자
	private String movie_code; // 작성하는 영화
	private String review; // 리뷰 내용
	private LocalDateTime regist_at;
	private UserDTO userDTO;
  
	public ReviewDTO() {

	}
  
	public ReviewDTO(UserDTO userDTO) {
		this.user_id = userDTO.getId();
		this.userDTO = userDTO;
	}

}

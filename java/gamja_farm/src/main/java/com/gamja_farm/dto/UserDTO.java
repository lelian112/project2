package com.gamja_farm.dto;

import java.time.LocalDate;

import com.gamja_farm.common.exception.WrongIdPwException;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {

	private String id; // 아이디
	private String pw; // 비밀번호
	private String name; // 이름
	private String nick_name;
	private String email;
	private String pic;
	private LocalDate birth;
	private int gender;
	private String country_code;
	private String phone;
	private int mbti;
	private String caption;
	private int grade = 0; // 회원구분 일반회원 0, 관리자 1
	// private String python_konlpy;

	private String authRole;
	// private boolean reid; // 자동로그인

	public boolean matchPassword(String pw) {
		return this.pw.equals(pw);
	}

	public void changePassword(String oldPassword, String newPassword) {
		if (!this.pw.equals(oldPassword))
			throw new WrongIdPwException("비밀번호 불일치");
		this.pw = newPassword;
	}

}

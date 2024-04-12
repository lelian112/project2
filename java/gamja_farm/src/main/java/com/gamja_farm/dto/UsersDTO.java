package com.gamja_farm.dto;

import com.gamja_farm.common.exception.WrongIdPasswordException;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsersDTO {
	
	private String id;  // 아이디
	private String pw;   // 비밀번호
	private String name;   // 이름
	private String phone;  // 전화번호
	private int grade = 0;  // 회원구분 일반회원1, 관리자2
	// private boolean reid;  // 자동로그인
	private String authRole;
	
	public boolean matchPassword(String pw) {
		return this.pw.equals(pw);
	}

	public void changePassword(String oldPassword, String newPassword) {
		if (!this.pw.equals(oldPassword))
			throw new WrongIdPasswordException("비밀번호 불일치");
		this.pw = newPassword;
	}
	
}

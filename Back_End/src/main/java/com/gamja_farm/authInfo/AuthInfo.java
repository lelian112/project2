package com.gamja_farm.authInfo;

//로그인 성공 후 인증 상태 정보를 세션에 보관할 때 사용
public class AuthInfo {
	
	private String id;
	private String pw;
	private String name;
	private String nick_name;
	
	public AuthInfo() {
		// TODO Auto-generated constructor stub
	}
	
	public AuthInfo(String id,  String pw) {
		super();
		this.id = id;
		this.pw = pw;
	}
	
	public AuthInfo(String id, String pw, String name) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public String getPw() {
		return pw;
	}

	public String getName() {
		return name;
	}

}


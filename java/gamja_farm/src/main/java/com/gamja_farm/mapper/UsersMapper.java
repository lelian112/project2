package com.gamja_farm.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.gamja_farm.dto.UsersDTO;

@Mapper
public interface UsersMapper {
	
	// 회원가입
	public int insertUser(UsersDTO dto);
	// 회원정보 가져오기
	public UsersDTO selectById(String id);
	
	public void updateUser(UsersDTO dto);
	public void updateByPass(UsersDTO dto);
	
	public void deleteUser(String id);
	
}

package com.gamja_farm.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.gamja_farm.dto.UserDTO;

@Mapper
public interface UserMapper {
	
	public int insertUser(UserDTO dto);
	public void insertUserVisit(UserDTO dto);
	public int selectUserId(String id);

	public UserDTO selectUser(String id);
	
	public void updateUser(UserDTO dto);
	public void updateByPass(UserDTO dto);  // 이름 변경해야함
	
	public void deleteUser(String id);
	
}

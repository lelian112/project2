package com.gamja_farm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.gamja_farm.dto.UserDTO;

@Mapper
public interface UserMapper {
	
	public int insertUser(UserDTO dto);
	
	public List<String> selectGender();
	public List<String> selectMBTI();
	public List<String> selectCountry();
	
	public void insertUserVisit(UserDTO dto);
	public int selectUserId(String id);

	public UserDTO selectUser(String id);
	
	public void updateUser(UserDTO dto);
	public void updateByPass(UserDTO dto);  // 이름 변경해야함
	
	public void deleteUser(String id);
	public void deleteUserVisit(String id);
	
}

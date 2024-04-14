package com.gamja_farm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.authInfo.AuthInfo;
import com.gamja_farm.authInfo.ChangePwCommand;
import com.gamja_farm.dto.UserDTO;
import com.gamja_farm.mapper.UserMapper;

@Service
//implements UserService 입력 후 UserServiceImp에서 오류 발생, 모두 add
public class UserServiceImp implements UserService {

	@Autowired
	private UserMapper userMapper;
	
	public UserServiceImp() {
		
	}

	@Override
	public AuthInfo addUserProcess(UserDTO dto) {
		userMapper.insertUser(dto);
		return new AuthInfo(dto.getId(), dto.getPw(), dto.getName());
	}

	@Override
	public AuthInfo loginProcess(UserDTO dto) {
		return null;
	}

	@Override
	public void loginProcess2(UserDTO dto) {
		userMapper.insertUserVisit(dto);
	}

	@Override
	public UserDTO updateUserProcess(String id) {
		return userMapper.selectUser(id);
	}

	@Override
	public AuthInfo updateUserProcess(UserDTO dto) {
		userMapper.updateUser(dto);
		return new AuthInfo(dto.getId(), dto.getPw(), dto.getName());
	}

	@Override
	public void updatePassProcess(String id, ChangePwCommand changePw) {
		
	}
	
	@Override
	public void deleteUserProcess(String id) {
		userMapper.deleteUser(id);
	}

}
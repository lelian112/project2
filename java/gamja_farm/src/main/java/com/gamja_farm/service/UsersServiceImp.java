package com.gamja_farm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.authInfo.AuthInfo;
import com.gamja_farm.authInfo.ChangePwdCommand;
import com.gamja_farm.dto.UsersDTO;
import com.gamja_farm.mapper.UsersMapper;

@Service
//implements UsersService 입력 후 UsersServiceImp에서 오류 발생, 모두 add
public class UsersServiceImp implements UsersService {

	@Autowired
	private UsersMapper usersMapper;
	
	public UsersServiceImp() {
		
	}

	@Override
	public AuthInfo addUserProcess(UsersDTO dto) {
		usersMapper.insertUser(dto);
		return new AuthInfo(dto.getId(), dto.getPw(), dto.getName());
	}

	@Override
	public AuthInfo loginProcess(UsersDTO dto) {
		return null;
	}

	@Override
	public UsersDTO updateUserProcess(String id) {
		return usersMapper.selectById(id);
	}

	@Override
	public AuthInfo updateUserProcess(UsersDTO dto) {
		usersMapper.updateUser(dto);
		return new AuthInfo(dto.getId(), dto.getPw(), dto.getName());
	}

	@Override
	public void updatePassProcess(String id, ChangePwdCommand changePwd) {
		
	}
	
	@Override
	public void deleteUserProcess(String id) {
		usersMapper.deleteUser(id);
	}
	
	
}

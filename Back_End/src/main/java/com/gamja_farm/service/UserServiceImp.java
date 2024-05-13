package com.gamja_farm.service;

import java.util.List;

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
	public List<String> selectGenderProcess() {
		return (List<String>) userMapper.selectGender();
	}

	@Override
	public List<String> selectMBTIProcess() {
		return (List<String>) userMapper.selectMBTI();
	}

	@Override
	public List<String> selectCountryProcess() {
		return (List<String>) userMapper.selectCountry();
	}

	@Override
	public void insertUserVisitProcess(UserDTO dto) {
		userMapper.insertUserVisit(dto);
	}

	@Override
	public boolean selectUserId(String id) {

		if ( userMapper.selectUserId(id) == 0 ){
			return true;
		}else {
			return false;
		}		
	}

	@Override
	public UserDTO selectUserProcess(String id) {
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

	@Override
	public void deleteUserVisitProcess(String id) {
		userMapper.deleteUserVisit(id);
	}
	
}

package com.gamja_farm.service;

import com.gamja_farm.authInfo.AuthInfo;
import com.gamja_farm.authInfo.ChangePwdCommand;
import com.gamja_farm.dto.UsersDTO;

public interface UsersService {
	
	public AuthInfo addUserProcess(UsersDTO dto);
	public AuthInfo loginProcess(UsersDTO dto);

	public UsersDTO updateUserProcess(String id);
	public AuthInfo updateUserProcess(UsersDTO dto);
	public void updatePassProcess(String id, ChangePwdCommand changePwd);
	
	public void deleteUserProcess(String id);
	
}

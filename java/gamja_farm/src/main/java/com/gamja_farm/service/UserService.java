package com.gamja_farm.service;

import com.gamja_farm.authInfo.AuthInfo;
import com.gamja_farm.authInfo.ChangePwCommand;
import com.gamja_farm.dto.UserDTO;

public interface UserService {
	
	public AuthInfo addUserProcess(UserDTO dto);
	public AuthInfo loginProcess(UserDTO dto);
	public void loginProcess2(UserDTO dto);

	public UserDTO updateUserProcess(String id);
	public AuthInfo updateUserProcess(UserDTO dto);
	public void updatePassProcess(String id, ChangePwCommand changePw);
	
	public void deleteUserProcess(String id);
	
}

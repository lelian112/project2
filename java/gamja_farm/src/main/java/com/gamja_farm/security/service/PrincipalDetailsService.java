package com.gamja_farm.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.gamja_farm.dto.UserDTO;
import com.gamja_farm.mapper.UserMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class PrincipalDetailsService implements UserDetailsService {
	
	@Autowired
	private UserMapper userMapper; 
	
	// 1. AuthenticationProvider에서 loadUserByUsername(String id)을 호출한다.
	// 2. loadUserByUsername(String id)에서는 DB에서 id에 해당하는 데이터를 검색해서 UserDetails에 담아서 리턴해준다.
	// 3. AuthenticationProvider에서 UserDetailes받아서 Authentication에 저장을 함으로써 결국 Security Session에 저장을 한다.
	
	@Override
	public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
		
		log.info("PrincipalService id:{}", id);
		
		UserDTO userDTO = userMapper.selectUser(id);
		log.info("id:{} pw:{} name:{}",
				userDTO.getId(), userDTO.getPw(), userDTO.getName());
		
		if (userDTO == null) {
			throw new UsernameNotFoundException(id);
		}
		
		return new PrincipalDetails(userDTO);
		
	}

}

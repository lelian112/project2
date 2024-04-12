package com.gamja_farm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.authInfo.AuthInfo;
import com.gamja_farm.dto.UsersDTO;
import com.gamja_farm.service.UsersService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;

@Tag(name="회원관련", description="사용자관련 API")
@Slf4j
@CrossOrigin("*")
@RestController
public class UsersController {
	
	@Autowired
	private UsersService usersService;
	
	@Autowired
	private BCryptPasswordEncoder encodePassword;
	
	public UsersController() {
		
	}
	
	// 회원가입 처리
	@Operation(summary="회원가입하기", description="회원가입 API")
	@PostMapping("signup")  // http://localhost:8090/user/signup
	public ResponseEntity<AuthInfo> adduser(@RequestBody UsersDTO usersDTO) {
		log.info("usersDTO:{}:", usersDTO);
		usersDTO.setPw(encodePassword.encode(usersDTO.getPw()));
		
		AuthInfo authInfo = usersService.addUserProcess(usersDTO);  
		return ResponseEntity.ok(authInfo);
	}  // end adduser()
	
	
	// 회원정보 가져오기
	@Operation(summary="회원정보 보기", description="회원정보 보기 API")
	@GetMapping("/user/editinfo/{id}")  // http://localhost:8090/user/editinfo/{id}
	public ResponseEntity<UsersDTO> getUser(@PathVariable("id") String id) {
		return ResponseEntity.ok(usersService.updateUserProcess(id));
	}  // end getUser()
	
	
	// 회원정보 수정
	@Operation(summary="회원정보 수정", description="회원정보 수정 API")
	@PutMapping("/user/update")  // http://localhost:8090/user/update
	public ResponseEntity<AuthInfo> updateUser(@RequestBody UsersDTO usersDTO) {
		usersDTO.setPw(encodePassword.encode(usersDTO.getPw()));
		return ResponseEntity.ok(usersService.updateUserProcess(usersDTO));
	}  // end updateUser()
	
	
	// 회원탈퇴
	@Operation(summary="회원탈퇴", description="회원탈퇴 API")
	@DeleteMapping("/user/delete/{id}")  // http://localhost:8090/user/delete/{id}
	public ResponseEntity<Object> deleteUser(@PathVariable("id") String id) {
		usersService.deleteUserProcess(id);
		return ResponseEntity.ok(null);
	}
	
}  // end class

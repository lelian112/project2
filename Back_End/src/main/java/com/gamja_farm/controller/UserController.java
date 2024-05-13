package com.gamja_farm.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.authInfo.AuthInfo;
import com.gamja_farm.dto.UserDTO;
import com.gamja_farm.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;

@Tag(name="회원관련", description="사용자관련 API")
@Slf4j
@CrossOrigin("*")
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder encodePassword;
	
	public UserController() {
		
	}
	
	// 회원가입 처리
	@Operation(summary="회원가입하기", description="회원가입 API")
	@PostMapping("/signup")  // http://localhost:7080/user/signup
	public ResponseEntity<AuthInfo> adduser(@RequestBody UserDTO userDTO) {

		log.info("userDTO:{}:", userDTO);
		userDTO.setPw(encodePassword.encode(userDTO.getPw()));
		AuthInfo authInfo = userService.addUserProcess(userDTO);

		userService.insertUserVisitProcess(userDTO);

		return ResponseEntity.ok(authInfo);

	}  // end adduser()
	
		
	@GetMapping("/user/data")
	public ResponseEntity<Map<String, Object>> selectUserAll() {

		List<String> selectGender = userService.selectGenderProcess();
		List<String> selectMBTI = userService.selectMBTIProcess();
		List<String> selectCountry = userService.selectCountryProcess();

		HashMap<String, Object> userData = new HashMap<>();
		userData.put("Gender", selectGender);
		userData.put("MBTI", selectMBTI);
		userData.put("CountryCode", selectCountry);
		// userData.put(selectGender != null ? selectGender : new ArrayList<String>());
		// userData.put(selectMBTI != null ? selectMBTI : new ArrayList<String>());
		// userData.put(selectCountry != null ? selectCountry : new ArrayList<String>());

		return ResponseEntity.ok(userData);
	}

	

	@Operation(summary="아이디 중복 체크", description="아이디 중복 체크 API")
	@GetMapping("/api/users/check-duplicate")
	public ResponseEntity<Boolean> checkUserIdDuplicate(@RequestParam("id") String id) {
		boolean isDuplicate = userService.selectUserId(id);				
		return ResponseEntity.ok(isDuplicate);
	}


	// 회원정보 가져오기
	@Operation(summary="회원정보 보기", description="회원정보 보기 API")
	@GetMapping("/user/editinfo/{id}")  // http://localhost:7080/user/editinfo/{id}
	public ResponseEntity<UserDTO> getUser(@PathVariable("id") String id) {
		return ResponseEntity.ok(userService.selectUserProcess(id));
	}  // end getUser()
	
	
	// 회원정보 수정
	@Operation(summary="회원정보 수정", description="회원정보 수정 API")
	@PutMapping("/user/update")  // http://localhost:7080/user/update
	public ResponseEntity<AuthInfo> updateUser(@RequestBody UserDTO userDTO) {
		userDTO.setPw(encodePassword.encode(userDTO.getPw()));
		return ResponseEntity.ok(userService.updateUserProcess(userDTO));
	}  // end updateUser()
	
	
	// 회원탈퇴
	@Operation(summary="회원탈퇴", description="회원탈퇴 API")
	@DeleteMapping("/user/delete/{id}")  // http://localhost:7080/user/delete/{id}
	public ResponseEntity<Object> deleteUser(@PathVariable("id") String id) {
		userService.deleteUserProcess(id);
		userService.deleteUserVisitProcess(id);
		return ResponseEntity.ok(null);
	}
	
}  // end class

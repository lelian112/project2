package com.gamja_farm.security.jwt;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.gamja_farm.dto.UserDTO;
import com.gamja_farm.security.service.PrincipalDetails;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
// Authentication(인증)
// https://docs.spring.io/spring-security/reference/servlet/architecture.html
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	
	private AuthenticationManager authManager;
	private Authentication authentication;
	
	public JwtAuthenticationFilter(AuthenticationManager authManager) {
		this.authManager = authManager;
	}
	
	// http://localhost:7080/login 요청을 하면 실행되는 메소드
	// att 타이밍 후 자동완성
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		System.out.println("JwtAuthenticationFilter => login 요청 처리를 시작함");
		
		try {
//			BufferedReader br = request.getReader();
//			String input = null;
//			while ((input=br.readLine()) != null)
//				System.out.println(input);
			
			// {"id":"anibia@lol.com", "pw":"1234"}
			// 스트림을 통해서 읽어온 json을 UserDTO 객체로 변경해준다.
			ObjectMapper om = new ObjectMapper();
			UserDTO userDTO = om.readValue(request.getInputStream(), UserDTO.class);
			log.info("id:{}, pw:{}", userDTO.getId(), userDTO.getPw());
			
			UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDTO.getId(), userDTO.getPw());
			authentication = authManager.authenticate(authenticationToken);
			log.info("authentication:{}", authentication.getDetails());
			log.info("authentication:{}", authentication.getPrincipal());
			
			PrincipalDetails principalDetails = (PrincipalDetails)authentication.getPrincipal();
			log.info("로그인 완료됨(인증) : {}, {}", principalDetails.getUsername(), principalDetails.getPassword());
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		// return super.attemptAuthentication(request, response);
		return authentication;
		
	}
	
	
	// attemptAuthentication() 실행 후 인증이 정상적으로 완료되면 실행된다.
	// 여기에서 JWT(Json Web Token) 토큰을 만들어서 request요청한 사용자에게 JWT 토큰을 response 해준다. (https://jwt.io/)
	// success 자동완성
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		
		log.info("successfulAuthentication 실행됨");
		PrincipalDetails principalDetails = (PrincipalDetails)authResult.getPrincipal();
		
		String jwtToken = JWT.create()
				.withSubject("mycors")
				.withExpiresAt(new Date(System.currentTimeMillis()+(60*60*1000*1L)))  // 만료시간
				.withClaim("pw", principalDetails.getPassword())
				.withClaim("id", principalDetails.getUsername())
				.sign(Algorithm.HMAC512("mySecurityCos"));
		
		log.info("jwtToken:{}", jwtToken);
		
		// response 응답헤더에 jwtToken 추가
		response.addHeader("Authorization", "Bearer " + jwtToken);  // Bearer뒤에 꼭 1칸을 띄어야 한다. 안그러면 보기 힘듦
		
		final Map<String, Object> body = new HashMap<>();
		body.put("id", principalDetails.getUserDTO().getId());
		body.put("name", principalDetails.getUserDTO().getName());
		body.put("nickName", principalDetails.getUserDTO().getNick_name());
		
		ObjectMapper mapper = new ObjectMapper();
		mapper.writeValue(response.getOutputStream(), body);
		
	}
	
	
	// unsuccess 자동완성
	@Override
	protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException failed) throws IOException, ServletException {
		
		System.out.println("unsuccessfulAuthentication 실행됨");
		response.setStatus(HttpStatus.UNAUTHORIZED.value());
		response.setContentType(MediaType.APPLICATION_JSON_VALUE);  // MediaType은 springframework
		Map<String, Object> body = new LinkedHashMap<>();
		body.put("code", HttpStatus.UNAUTHORIZED.value());
		body.put("error", failed.getMessage());

		new ObjectMapper().writeValue(response.getOutputStream(), body);
		
	}
	
	
}  // end class()

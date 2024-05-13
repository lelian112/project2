package com.gamja_farm.security.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.gamja_farm.mapper.UserMapper;
import com.gamja_farm.security.jwt.JwtAuthenticationFilter;
import com.gamja_farm.security.jwt.JwtAuthorizationFilter;

// [1] POSTMAN에서 테스트
// POST http://localhost:7080/login
// body, raw , json  => {"id":"anibia@lol.com", "pw":"1234"}

@Configuration  // 해당 클래스를 Configuration으로 등록 
@EnableWebSecurity  // Spring Security가 Spring FileChain에 등록함 (즉 스프링 시큐리티를 활성화함)
public class SecurityConfig {

	@Autowired
	private UserMapper userMapper;
	
	@Bean
	public BCryptPasswordEncoder encodePw() {
		return new BCryptPasswordEncoder();
	}  // end encodePw()
	
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		// csrf() : Cross Site Request Forgery로 사이트간 위조 요청으로
		// 정상적인 사용자가 의도치 않은 위조 요청을 보내는 것을 의미한다.
		// http.csrf((csrf) -> csrf.disable());
		http.csrf(AbstractHttpConfigurer:: disable);  // Spring boot 3.xx에서 권장하는 방법임
		
		// 인증사용, Security Filter에 등록 , @CrossOrigin (인증X)
		// 세션끄기 : JWT를 사용하기 때문에 세션을 사용하지 않는다.
		http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		
		// 인증 및 인가를 사용하겠다. Security Filter에 등록
		http.apply(new MyCustomerFilter());
		
		// 요청에 의한 인가(권한)검사 시작
		// http.authorizeHttpRequests(authorize -> authorize.anyRequest().permitAll());
		http.authorizeHttpRequests(authorize -> authorize
									.requestMatchers("/**", "/image/**", "/movie/**", "/user/**", "/oauth2/**", "/login/**", "/api/**", "/main/**", "/signup", "/mypage/**", "/review/**", "/wish/**", "/swagger-ui/**", "/v3/api-docs/**").permitAll()  // 이거는 로그인 없이 접근가능
									.anyRequest().authenticated());  // 그외 모든 요청은 인증(로그인)이 필수이다.
		return http.build();
		
	}  // end filterChain()
	
	
	public class MyCustomerFilter extends AbstractHttpConfigurer<MyCustomerFilter, HttpSecurity> {
		
		@Override
		public void configure(HttpSecurity http) throws Exception {
			AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
			
			// addFilter() : FilterComparator에 등록되어 있는 Filter들을 활성화 할 때 사용
			// adddFilterBefore(), addFilterAfter() : CustomFilter를 등록 할 때 사용
			
			// 인증 필터 등록
			http.addFilter(new JwtAuthenticationFilter(authenticationManager));
			
			// 인가 필터 등록
			http.addFilter(new JwtAuthorizationFilter(authenticationManager, userMapper));
			
		}
		
	}  // end MyCustomerFilter()
	
	
}  // end class

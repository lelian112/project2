package com.gamja_farm.redis;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
	
@Service
	public class TokenService {

	    private final RedisTemplate<String, Object> redisTemplate;

	   
	    public TokenService(RedisTemplate<String, Object> redisTemplate) {
	        this.redisTemplate = redisTemplate;
	    }

	  //RedisTemplate을 이용한 데이터 저장
	    public void saveTokens(String id, String accessToken, String refreshToken) {
	        redisTemplate.opsForValue().set(id + ":accessToken", accessToken);
	        redisTemplate.opsForValue().set(id + ":refreshToken", refreshToken);
	    }
	    
	    //RedisTemplate을 이용한 데이터 조회
	    public Object getAccessToken(String id) {
	        return redisTemplate.opsForValue().get(id + ":accessToken");
	    }

	    public Object getRefreshToken(String id) {
	        return redisTemplate.opsForValue().get(id + ":refreshToken");
	    }

	    //RedisTemplate을 이용한 데이터 삭제
	    public void deleteTokens(String id) {
	        redisTemplate.delete(id + ":accessToken");
	        redisTemplate.delete(id + ":refreshToken");
	    }
	}

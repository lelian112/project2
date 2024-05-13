package com.gamja_farm.service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.dto.RateDTO;
import com.gamja_farm.dto.WishDTO;
import com.gamja_farm.mapper.WishMapper;

@Service
public class WishServieImp implements WishServie {
  
  @Autowired
  private WishMapper wishMapper;

  public WishServieImp() {

  }

  @Override //wishList에 추가합니다.
  public int hitWishPro(WishDTO wishDTO) {
    return wishMapper.hitWish(wishDTO);
  }

  @Override // 모든 wish 아이템 숫자 반환
  public int countallwish() {
    return wishMapper.countall();
  }
  
  @Override // 모든 wish 아이템 반환
  public List<WishDTO> getAllWishPro(PageDTO pageDTO) {
   return wishMapper.allWishList(pageDTO);
  }

  @Override // 유저의 wishList 반환
  public List<WishDTO> getWishListByIdPro(String user_id, PageDTO pageDTO) {
    List<WishDTO> wishList = wishMapper.getWishListById(user_id, pageDTO);
    // 사용자 wish목록에 아무것도 없으면 null반환
    return wishList != null? wishList : Collections.emptyList();
  }
  
  @Override // 유저 wishList페이징
  public int countMyWishPro(String user_id){
	if (wishMapper.countMyWish(user_id) == 0) {
				
	}
    return wishMapper.countMyWish(user_id);
  }

  @Override // idx로 아이템 삭제
  public int deleteOneWishPro(String user_id, int idx) {
    int deletecount= wishMapper.deletOneWish(user_id, idx);
    return deletecount;
  }

  @Override //찜 목록 전체 삭제
  public void deleteAllbyUserIdPro(String user_id){
    wishMapper.deleteAllbyUserId(user_id);
  }

  @Override // 이미 찜 한 영화인지 조회
  public WishDTO getByMovieCodeWithUserIdPro(String user_id, String movie_code) {
    WishDTO existingWish = wishMapper.getByMovieCodeWithUserId(user_id, movie_code);
    return existingWish != null ? existingWish : null;
  }

  @Override
  public List<RateDTO> getRate(String user_id) {
    
    return wishMapper.getRate(user_id);
  }



}// end class

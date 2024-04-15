package com.gamja_farm.service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

  @Override // wishList 반환
  public List<WishDTO> getWishListPro(String user_id) {
    List<WishDTO> wishList = wishMapper.getWishListById(user_id);
    // 사용자 wish목록에 아무것도 없으면 null반환
    if(Objects.isNull(wishList)){
      return null;
    }
      return wishList;
  }
  
  @Transactional
  @Override //찜 목록 한개 삭제
  public List<WishDTO> deleteWishPro(int idx, String user_id) {
    int deletedCount = wishMapper.deleteWishAndGetList(Map.of("idx", idx, "user_id", user_id));
    if (deletedCount > 0) {
        return wishMapper.getWishListById(user_id);
    } else {
        return Collections.emptyList();
    }
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

}// end class

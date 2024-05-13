package com.gamja_farm.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.dto.RateDTO;
import com.gamja_farm.dto.WishDTO;

public interface WishServie {
  public int countallwish(); // 전체 wish아이템 숫자 리턴//페이징 처리용

  public List<WishDTO> getAllWishPro(PageDTO pageDTO);

  public int hitWishPro(WishDTO wishDTO);

  public List<WishDTO> getWishListByIdPro(String user_id, PageDTO pageDTO);//회원이 찜한 아이템 확인 및 페이징

  public int countMyWishPro(String user_id);//id에 있는 wish아이템 숫자로 리턴//페이징

  public int deleteOneWishPro(@Param("user_id")String user_id, @Param("idx")int idx); //인덱스로 아이템 하나 삭제
  
  public void deleteAllbyUserIdPro(String user_id); // 아이템 전체 삭제

  public WishDTO getByMovieCodeWithUserIdPro(String user_id, String movie_code); //이미 찜했는지 확인

  public List<RateDTO> getRate(String user_id);

}

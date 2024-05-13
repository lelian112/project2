package com.gamja_farm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.dto.RateDTO;
import com.gamja_farm.dto.WishDTO;

import org.apache.ibatis.annotations.Param;

@Mapper
@Component
public interface WishMapper {

  //전체 아이템 페이징 용 (추후 어드민활용? > 가장 보고싶어하는 영화 순위)
  public int countall();

  //모든 wish리스트 반환
  public List<WishDTO> allWishList(PageDTO pageDTO);

  // 찜하기(추가)
  public int hitWish(WishDTO wishDTO);
  
  // 찜 목록 확인(id로 검색)
  public List<WishDTO> getWishListById(@Param("user_id") String user_id, @Param("pageDTO") PageDTO pageDTO);
  
  //내가 찜한 아이템 개수 리턴 // 페이징처리용
  public int countMyWish(String user_id);


  // 유저 찜 목록에서 아이템 한개만 삭제
  public int deletOneWish(@Param("user_id")String user_id, @Param("idx")int idx);

  // 찜 목록 전체삭제
  public boolean deleteAllbyUserId(String user_id);
  
  // 이미 찜한 영화인지 조회
  public WishDTO getByMovieCodeWithUserId(String user_id, String movie_code);

  public List<RateDTO> getRate(String user_id);
  
}

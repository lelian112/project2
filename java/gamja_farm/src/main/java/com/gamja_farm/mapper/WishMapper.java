package com.gamja_farm.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.gamja_farm.dto.WishDTO;

@Mapper
public interface WishMapper {

  // 찜하기(추가)
  public int hitWish(WishDTO wishDTO);
  // 찜 목록 확인(id로 검색)
  public List<WishDTO> getWishListById(String user_id);
    // 찜 목록 한개 삭제 및 조회
  public int deleteWishAndGetList(Map<String, Object> of);

  // public int deleteWishAndGetList( int idx, String user_id);
  // 찜 목록 전체삭제
  public boolean deleteAllbyUserId(String user_id);
  // 이미 찜한 영화인지 조회
  public WishDTO getByMovieCodeWithUserId(String user_id, String movie_code);
  
}

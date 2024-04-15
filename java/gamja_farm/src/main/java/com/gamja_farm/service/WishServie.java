package com.gamja_farm.service;

import java.util.List;

import com.gamja_farm.dto.WishDTO;

public interface WishServie {

  public int hitWishPro(WishDTO wishDTO);

  public List<WishDTO> getWishListPro(String user_id);

  public List<WishDTO> deleteWishPro(int idx, String user_id);
  
  public void deleteAllbyUserIdPro(String user_id);

  public WishDTO getByMovieCodeWithUserIdPro(String user_id, String movie_code);

}

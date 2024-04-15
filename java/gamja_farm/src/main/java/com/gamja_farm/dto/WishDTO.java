package com.gamja_farm.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WishDTO {

  private int idx;
  private String user_id;
  private String movie_code;
  private WishStatus wish;
  
  public WishDTO() {

  }

  public WishDTO(int idx, String user_id, String movie_code, WishStatus wish) {
    this.idx = idx;
    this.user_id = user_id;
    this.movie_code = movie_code;
    this.wish = wish;
  }

  public enum WishStatus {
    Y, N ;
  }

}// end class


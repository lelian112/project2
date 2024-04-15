package com.gamja_farm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.dto.WishDTO;
import com.gamja_farm.service.WishServie;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestParam;

@Slf4j
@CrossOrigin("*")
@RestController
public class WishController {

  @Autowired
  private WishServie wishServie;


  public WishController(){

  }

  @PostMapping("/wish/addlist/") //wish리스트에 추가
  public ResponseEntity<WishDTO> hitWish(WishDTO wishDTO) {
      wishServie.hitWishPro(wishDTO);
      return ResponseEntity.ok(wishDTO);
  }
  
  @GetMapping("/wish/wishlist/{user_id}") //id로 검색해서 찜 목록 확인
  public ResponseEntity<List<WishDTO>> getWishList(@PathVariable("user_id") String user_id) {
    List<WishDTO> wishList = wishServie.getWishListPro(user_id);
    return ResponseEntity.ok(wishList);
  }
  
  @DeleteMapping("/wish/deletewish/onebyone/{idx}/{user_id}") // 인덱스로 하나 삭제하고 재 조회
  public ResponseEntity<List<WishDTO>> deleteWishPro(@PathVariable ("idx") int idx , @PathVariable("user_id") String user_id){
    List<WishDTO> restList = wishServie.deleteWishPro(idx, user_id);
    return ResponseEntity.ok(restList);
  }


  @DeleteMapping("/wish/deletewish/deleteall/{user_id}")// wish리스트 전체 삭제
  public ResponseEntity<Void> deleteWishPro(@PathVariable("user_id") String user_id){
    wishServie.deleteAllbyUserIdPro(user_id);
    return ResponseEntity.ok(null);
  }

  @GetMapping("/wish/wishcheck/{user_id}/{movie_code}") // 이미 찜 했는지 확인
  public ResponseEntity<WishDTO> getByMovieCodeWithUserId(@PathVariable("user_id")String user_id, @PathVariable("movie_code") String moive_code){
    WishDTO existingWish = wishServie.getByMovieCodeWithUserIdPro(user_id, moive_code);
    return  ResponseEntity.ok(existingWish);
  }
  

}// end class

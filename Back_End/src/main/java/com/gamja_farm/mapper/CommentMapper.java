package com.gamja_farm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import com.gamja_farm.dto.CommentDTO;
import com.gamja_farm.dto.PageDTO;

@Mapper
@Component
public interface CommentMapper {
  //전체 코멘트 숫자 반환(페이징처리)//for Admin..?
  public int countComment(); 
  //전체 코멘트 리스트
  public List<CommentDTO> getAllComment(PageDTO pageDTO);

  //특정 리뷰에 달리는 코멘트 (페이지 처리용)
  public int countEachCommentByIndex(@Param("user_review_idx") int user_review_idx);

  //특정리뷰에 있는 코멘트 가지고 오기 및 페이징 처리를 위해 pageDTO 매개변수지정
  public List<CommentDTO> getTheComment(@Param("user_review_idx") int user_review_idx, @Param("pageDTO")PageDTO pageDTO);

  //유저가 남긴 코멘트 페이지처리용
  public int countEachCommentById(@Param("user_id") String user_id);

  //유저가 남긴 모든 코멘트 모아보기
  public List<CommentDTO> getMyAllCommentById(@Param("user_id") String user_id, @Param("pageDTO")PageDTO pageDTO);

  //저장
  public void saveComment(CommentDTO commentDTO);

  //수정
  public void updateComment(CommentDTO commentDTO);

  //유저아이디&인덱스로 해당 코멘트만 삭제
  public int deleteOneComment(@Param("user_id") String user_id, @Param("idx") int idx);

  //해당 유저가 작성한 모든 코멘트 삭제
  public void deleteAllComment(String user_id);
  
  public CommentDTO detailComment(int idx);


}//end class

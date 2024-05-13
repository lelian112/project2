package com.gamja_farm.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gamja_farm.dto.CommentDTO;
import com.gamja_farm.dto.PageDTO;

public interface CommentService {
  public int countCommentPro();

  public List<CommentDTO> getAllCommentPro(PageDTO pageDTO);

  public int countEachCommentPro(@Param("user_review_idx") int user_review_idx);

  public List<CommentDTO> getTheCommentPro(@Param("user_review_idx") int user_review_idx, @Param("pageDTO")PageDTO pageDTO);

  public int countEachCommentByIdPro(@Param("user_id") String user_id);

  public List<CommentDTO> getMyAllCommentByIdPro(@Param("user_id") String user_id,@Param("pageDTO")PageDTO pageDTO);

  public void saveCommentPro(CommentDTO commentDTO);

  public void updateCommentPro(CommentDTO commentDTO);

  public int deleteOneCommentPro(@Param("user_id")String user_id, @Param("idx") int idx);

  public void deleteAllCommentPro(String user_id);
  
  public CommentDTO detailComment (int idx);

}// end class

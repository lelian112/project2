package com.gamja_farm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.dto.CommentDTO;
import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.mapper.CommentMapper;

@Service
public class CommentServieImp implements CommentService {
  
  @Autowired
  private CommentMapper commentMapper;

  public CommentServieImp(){
  }

  @Override
  public int countCommentPro() {
    return commentMapper.countComment();
  }

  @Override
  public List<CommentDTO> getAllCommentPro(PageDTO pageDTO) {
    return commentMapper.getAllComment(pageDTO);
  }

  @Override
  public int countEachCommentPro(int user_review_idx) {
    return commentMapper.countEachCommentByIndex(user_review_idx);
  }

  @Override
  public List<CommentDTO> getTheCommentPro(int user_review_idx, PageDTO pageDTO) {
    List<CommentDTO> commentDTO = commentMapper.getTheComment(user_review_idx, pageDTO);
    return commentDTO != null? commentDTO : null;
  }


  @Override
  public int countEachCommentByIdPro(String user_id) {
    return commentMapper.countEachCommentById(user_id);
  }

  @Override
  public List<CommentDTO> getMyAllCommentByIdPro(String user_id,PageDTO pageDTO) {
    List<CommentDTO> commentDTO = commentMapper.getMyAllCommentById(user_id,pageDTO);
    return commentDTO !=null? commentDTO : null;
  }

  @Override
  public void saveCommentPro(CommentDTO commentDTO) {
    commentMapper.saveComment(commentDTO);
  }

  @Override
  public void updateCommentPro(CommentDTO commentDTO) {
    commentMapper.updateComment(commentDTO);
  }

  @Override
  public int deleteOneCommentPro(String user_id, int idx) {
    return commentMapper.deleteOneComment(user_id, idx);
  }

  @Override
  public void deleteAllCommentPro(String user_id) {
    commentMapper.deleteAllComment(user_id);
  }
  
  @Override
	public CommentDTO detailComment(int idx) {
	
		return commentMapper.detailComment(idx);
	}


}

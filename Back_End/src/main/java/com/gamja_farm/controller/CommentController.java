package com.gamja_farm.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.dto.CommentDTO;
import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.service.CommentService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin("*")
@RestController
public class CommentController {
	@Autowired
	private CommentService commentService;

	@Autowired
	private PageDTO pageDTO;
	private CommentDTO commentDTO;

	public CommentController() {

	}

	// 전체 코멘트 리스트 뽑아오기
	@GetMapping("/comment")
	public ResponseEntity<Map<String, Object>> getAllComment(
			@RequestParam(value = "page", defaultValue = "1") int currentPage) {
		// PageDTO 객체 생성 및 초기화
		PageDTO pageDTO = new PageDTO(currentPage, commentService.countCommentPro());

		log.info("\n\n Check \n\n");
		System.out.println(pageDTO.getStartRow());

		// 서비스 계층에 PageDTO 전달하여 리뷰 목록 가져오기
		List<CommentDTO> commentList = commentService.getAllCommentPro(pageDTO);

		log.info("\n\n Check page\n\n");

		// 페이징 정보와 리뷰 목록을 Map에 담아 반환
		Map<String, Object> result = new HashMap<>();
		result.put("pageInfo", pageDTO);
		result.put("commentList", commentList);

		return ResponseEntity.ok(result);
	}

	
	// 리뷰에 달리는 코멘트 id로 찾기
	@GetMapping("/comment/{user_review_idx}")
	public ResponseEntity<Map<String, Object>> getTheComment(@PathVariable("user_review_idx") int user_review_idx,
			@RequestParam(value = "page", defaultValue = "1") int currentPage) {
		// PageDTO 객체 생성 및 초기화
		PageDTO pageDTO = new PageDTO(currentPage, commentService.countEachCommentPro(user_review_idx));

		log.info("\n\n Check \n\n");
		System.out.println(pageDTO.getStartRow());

		// 서비스 계층에 PageDTO 전달하여 리뷰 목록 가져오기
		List<CommentDTO> commentList = commentService.getTheCommentPro(user_review_idx, pageDTO);

		log.info("\n\n Check page\n\n");

		// 페이징 정보와 리뷰 목록을 Map에 담아 반환
		Map<String, Object> result = new HashMap<>();
		result.put("pageInfo", pageDTO);
		log.info("\n\n page check \n\n");
		result.put("commentList", commentList);
		log.info("\n\n commentList check \n\n");

		return ResponseEntity.ok(result);
	}

	// id로 작성한 모든 코멘트 불러오기
	@GetMapping("/comment/find/{user_id}")
	public ResponseEntity<Map<String, Object>> countEachCommentByID(@PathVariable("user_id") String user_id,
			@RequestParam(value = "page", defaultValue = "1") int currentPage) {
		// PageDTO 객체 생성 및 초기화
		PageDTO pageDTO = new PageDTO(currentPage, commentService.countEachCommentByIdPro(user_id));

		log.info("\n\n Check page \n\n");
		System.out.println(pageDTO.getStartRow());

		// 서비스 계층에 PageDTO 전달하여 리뷰 목록 가져오기
		List<CommentDTO> commentList = commentService.getMyAllCommentByIdPro(user_id, pageDTO);

		// 페이징 정보와 리뷰 목록을 Map에 담아 반환
		Map<String, Object> result = new HashMap<>();
		result.put("pageInfo", pageDTO);
		result.put("commentList", commentList);

		return ResponseEntity.ok(result);
	}

	//코멘트 작성
	@PostMapping("/comment/write/{user_id}/{user_review_idx}")
	public ResponseEntity<Object> writeComment(@PathVariable("user_id") String user_id,
			@PathVariable("user_review_idx") int user_review_idx, @RequestBody CommentDTO commentDTO) {
		commentDTO.setUser_id(user_id);
		commentDTO.setUser_review_idx(user_review_idx);
		commentService.saveCommentPro(commentDTO);
		return ResponseEntity.ok("Comment saved");

	}

	//코멘트 수정
	@PutMapping("/comment/update/{user_id}/{idx}")
	public ResponseEntity<Object> updateComment(@PathVariable("user_id") String user_id, @PathVariable("idx") int idx,
			@RequestBody CommentDTO commentDTO, HttpServletRequest req) {
		commentDTO.setUser_id(user_id);
		commentDTO.setIdx(idx);
		commentService.updateCommentPro(commentDTO);
		return ResponseEntity.ok("Comment updated");
	}

	// userid, idx로 삭제
	@DeleteMapping("/comment/delete/{user_id}/{idx}") // 인덱스로 하나 삭제
	public ResponseEntity<Object> deleteOneComment(@PathVariable("user_id") String user_id,
			@PathVariable("idx") int idx) {
		int deletecount = commentService.deleteOneCommentPro(user_id, idx);
		if (deletecount > 0) {
			return ResponseEntity.ok().body("삭제되었습니다.");
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// 해당 유저가 쓴 코멘트 모두 삭제
	@DeleteMapping("/comment/deleteall/{user_id}")
	public ResponseEntity<Object> deleteReview(@PathVariable("user_id") String user_id) {
		commentService.deleteAllCommentPro(user_id);
		return ResponseEntity.ok("삭제되었습니다.");
	}
	
	
	
	// 리뷰 디테일 
	@GetMapping("/comment/detail/{idx}")
	public ResponseEntity<Map<String, Object>> detailComment(@PathVariable("idx") int idx){
		
		Map<String, Object> result = new HashMap<>();
		
		CommentDTO cdto = commentService.detailComment(idx);
		
		result.put("idx", cdto.getIdx());
		result.put("user_id", cdto.getUser_id());
		result.put("comment", cdto.getComment());
		result.put("regist_at", cdto.getRegist_at());
		
		return ResponseEntity.ok(result);
	}

}// end class

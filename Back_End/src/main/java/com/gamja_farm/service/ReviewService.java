package com.gamja_farm.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.dto.ReviewDTO;

public interface ReviewService {

	public int countpageProcess();

	public List<ReviewDTO> viewListProcess(PageDTO pageDTO);

	public int countMyReview(String user_id);

	public List<ReviewDTO> showMyReviewProcess(String user_id, PageDTO pageDTO);

	// 작성한 리뷰 보여주기
	public ReviewDTO contentProcess(int idx, String user_id);

	// 특정 게시물 좋아요 수
	public int getReviewWithLikeCntPro(int idx);

	// 좋아요 개수순으로 리뷰 가지고 오기
	public List<ReviewDTO> getReviewWithMostLikePro(PageDTO pageDTO);
	
	public List<ReviewDTO> getReviewWithMostLikeProUser(PageDTO pageDTO, String user_id);

	public int countReviewWithMostLike();

	// 최신 순으로 리뷰 가지고 오기
	public List<ReviewDTO> getReviewWithNewPro(PageDTO pageDTO);
	
	public List<ReviewDTO> getReviewWithNewProUser(PageDTO pageDTO, String user_id);
	

	public int countReviewWithNew();

	// 좋아요 토글기능
	public int toggleLikeStatusPro(@Param("user_id") String user_id, @Param("user_review_idx") int user_review_idx);

	public void writeReivewProcess(ReviewDTO dto);

	public void updateReivewProcess(ReviewDTO dto);

	public void deleteReviewProcess(int idx);

	public void deleteAllReviewPro(String user_id);// 아이디로 전체삭제(회원탈퇴의 경우?)
	
	// 무비 리뷰 리스트 출력
	public List<ReviewDTO> selectMovieReview(String code, String user_id);
	
	// 해당 유저가 리뷰에 좋아요를 눌렀는지 확인하는 Service
	public int isLiked (String user_id, int user_review_idx);  
	
	

}

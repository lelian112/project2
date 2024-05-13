package com.gamja_farm.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.dto.ReviewDTO;

@Mapper
@Component
public interface ReviewMapper {

	// 전체 리스트 페이징처리
	public int countpage();

	// 전체 리스트 반환
	public List<ReviewDTO> viewList(PageDTO pageDTO);

	// 내가쓴 리뷰 카운트//마이리뷰 페이징에 필요
	public int countMyReview(String user_id);

	// id로 내가쓴거 가지고 오기
	public List<ReviewDTO> getMyReview(@Param("user_id") String user_id, @Param("pageDTO") PageDTO pageDTO);

	// 리뷰 좋아요 눌렀는지 확인
	public Map<String, Integer> checkLikedReview(@Param("user_id") String user_id,
			@Param("user_review_idx") int user_review_idx);

	// 리뷰 좋아요 누르기
	public int hitLikeReview(@Param("user_id") String user_id, @Param("user_review_idx") int user_review_idx);

	// 리뷰 좋아요 토글키
	public int toggleLikeStatus(@Param("user_id") String user_id, @Param("user_review_idx") int user_review_idx);

	// 특정 게시물에 좋아요 개수
	public int getReviewWithLikeCnt(int idx);

	// 좋아요 개수순으로 리뷰 가지고 오기 & 페이징
	public List<ReviewDTO> getReviewWithMostLike(PageDTO pageDTO);
	public List<ReviewDTO> getReviewWithMostLikeUser(@Param("pageDTO") PageDTO pageDTO, @Param("user_id") String user_id);

	public int countReviewWithMostLike();

	// 최신 순으로 리뷰 가지고 오기
	public List<ReviewDTO> getReviewWithNew(PageDTO pageDTO);
	public List<ReviewDTO> getReviewWithNewUser(@Param("pageDTO") PageDTO pageDTO, @Param("user_id") String user_id);
	
	public int countReviewWithNew();

	// 조회수 카운트
	public void addViewCount(int idx);

	public ReviewDTO showContent(@Param("idx")int idx, @Param("user_id")String user_id);// 상세페이지

	public void saveReview(ReviewDTO dto);// 저장

	public void updateReview(ReviewDTO dto);// 수정

	public void deleteAllReview(String user_id);// 아이디로 전체삭제(회원탈퇴의 경우?)

	public void deleteReview(int idx);// 삭제
	
	public List<ReviewDTO> movieReview (@Param("code")String code, @Param("user_id")String user_id); // 무비 리뷰 리스트
}

package com.gamja_farm.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.mapper.ReviewMapper;

@Service
public class ReviewServiceImp implements ReviewService {

	@Autowired
	private ReviewMapper reviewMapper;

	public ReviewServiceImp() {
	}

	@Override // 리뷰 리스트 보여주기
	public List<ReviewDTO> viewListProcess(PageDTO pageDTO) {
		return reviewMapper.viewList(pageDTO);
	}

	@Override // 내가 쓴 리뷰만 가지고와서 보여주기
	public List<ReviewDTO> showMyReviewProcess(String user_id, PageDTO pageDTO) {

		return reviewMapper.getMyReview(user_id, pageDTO);
	}

	@Override // 내가 작성한 총 리뷰 개수 반환
	public int countMyReview(String user_id) {
		return reviewMapper.countMyReview(user_id);
	}

	@Override // 좋아요 상태변경
	public int toggleLikeStatusPro(String user_id, int user_review_idx) {
		Map<String, Integer> likeCountMap = reviewMapper.checkLikedReview(user_id, user_review_idx);

		int count, like_btn;
		if (likeCountMap != null) {
			count = likeCountMap.getOrDefault("count", 0);
			like_btn = likeCountMap.getOrDefault("like_btn", 0);
		} else {
			count = 0;
			like_btn = 0;
		}

		if (count == 0) {
			reviewMapper.hitLikeReview(user_id, user_review_idx);
			return 1;
		} else {
			reviewMapper.toggleLikeStatus(user_id, user_review_idx);
			return (like_btn == 1 ? 0 : 1);
		}

	}

	@Override // 특정 게시물 좋아요 반환
	public int getReviewWithLikeCntPro(int idx) {
		return reviewMapper.getReviewWithLikeCnt(idx);
	}

	@Override // 리뷰 좋아요 순으로 정렬
	public List<ReviewDTO> getReviewWithMostLikePro(PageDTO pageDTO) {
		return reviewMapper.getReviewWithMostLike(pageDTO);
	}

	@Override // 리뷰 좋아요 순으로 정렬 - 로그인 시
	public List<ReviewDTO> getReviewWithMostLikeProUser(PageDTO pageDTO, String user_id) {
		return reviewMapper.getReviewWithMostLikeUser(pageDTO, user_id);
	}

	@Override // 리뷰 좋아요 정렬 페이징
	public int countReviewWithMostLike() {
		return reviewMapper.countReviewWithMostLike();
	}

	@Override // 리뷰 최신순 정렬
	public List<ReviewDTO> getReviewWithNewPro(PageDTO pageDTO) {
		return reviewMapper.getReviewWithNew(pageDTO);
	}

	@Override // 리뷰 최신순 정렬 - 로그인 시
	public List<ReviewDTO> getReviewWithNewProUser(PageDTO pageDTO, String user_id) {
		return reviewMapper.getReviewWithNewUser(pageDTO, user_id);
	}

	@Override // 리뷰 최신순 정렬 페이징
	public int countReviewWithNew() {
		return reviewMapper.countReviewWithNew();
	}

	@Override // 리뷰 작성 & 저장
	public void writeReivewProcess(ReviewDTO dto) {
		reviewMapper.saveReview(dto);
	}

	@Override // 리뷰 수정
	public void updateReivewProcess(ReviewDTO dto) {
		reviewMapper.updateReview(dto);
	}

	@Override // 리뷰 삭제
	public void deleteReviewProcess(int idx) {
		reviewMapper.deleteReview(idx);
	}

	@Override // id로 작성한 리뷰 모두 삭제
	public void deleteAllReviewPro(String user_id) {
		reviewMapper.deleteAllReview(user_id);
	}

	@Override // 총 페이지 숫자 카운팅
	public int countpageProcess() {
		return reviewMapper.countpage();
	}

	@Override // 작성한 리뷰 보여주기 & 조회수 증가
	public ReviewDTO contentProcess(int idx, String user_id) {
		reviewMapper.addViewCount(idx);
		return reviewMapper.showContent(idx, user_id);
	}

	@Override // 무비 리스트 출력
	public List<ReviewDTO> selectMovieReview(String code, String user_id) {

		return reviewMapper.movieReview(code, user_id);
	}

	@Override
	public int isLiked(String user_id, int user_review_idx) {

		Map<String, Integer> likeCountMap = reviewMapper.checkLikedReview(user_id, user_review_idx);

		int count = likeCountMap.getOrDefault("count", 0);
		int like_btn = likeCountMap.getOrDefault("like_btn", 0);

		if (count == 0) {
			return 0;
		} else {
			return (like_btn == 1 ? 1 : 0);
		}

	}

}

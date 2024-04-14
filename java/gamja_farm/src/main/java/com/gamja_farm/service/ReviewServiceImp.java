package com.gamja_farm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.dto.ReviewPageDTO;
import com.gamja_farm.mapper.ReviewMapper;

@Service
public class ReviewServiceImp implements ReviewService {
	
	@Autowired
	private ReviewMapper reviewMapper;
  
	public ReviewServiceImp() {
	}
  
	@Override //리뷰 리스트 보여주기
	public List<ReviewDTO> viewListProcess(ReviewPageDTO viewList) {
		return reviewMapper.viewList(viewList);
	}
  
	@Override //리뷰 작성 & 저장
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
  
	@Override // 총 페이지 숫자 카운팅
	public int countpageProcess() {
		return reviewMapper.countpage();
	}
  
	@Override // 작성한 리뷰 보여주기 & 조회수 증가
	public ReviewDTO contentProcess(int num ,int idx) {
		reviewMapper.readCount(num);
		return reviewMapper.showContent(idx);
	}

}

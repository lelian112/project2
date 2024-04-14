package com.gamja_farm.service;

import java.util.List;

import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.dto.ReviewPageDTO;

public interface ReviewService {

	public int countpageProcess();
	public List<ReviewDTO> viewListProcess(ReviewPageDTO viewList);
	// public List<ReviewDTO> showListProcess();
	public ReviewDTO contentProcess(int num, int idx);
	public void writeReivewProcess(ReviewDTO dto);
	public void updateReivewProcess(ReviewDTO dto);
	public void deleteReviewProcess(int idx);

}

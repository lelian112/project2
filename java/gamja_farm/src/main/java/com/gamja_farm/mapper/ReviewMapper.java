package com.gamja_farm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import com.gamja_farm.dto.ReviewDTO;
import com.gamja_farm.dto.ReviewPageDTO;

@Mapper
@Component
public interface ReviewMapper {

	public int countpage();
	public List<ReviewDTO> viewList(ReviewPageDTO viewList);//페이징
	public void readCount(int num); //조회수 카운트
  
	public List<ReviewDTO> showList(); //게시글 리스트 반환
	public ReviewDTO showContent(int idx);
	public void saveReview(ReviewDTO dto);
	public void updateReview(ReviewDTO dto);
	public void deleteReview(int idx);

}

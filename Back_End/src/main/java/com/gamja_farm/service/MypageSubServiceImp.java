package com.gamja_farm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.dto.CalendarDTO;
import com.gamja_farm.dto.UserDTO;
import com.gamja_farm.mapper.MypageSubMapper;

@Service
public class MypageSubServiceImp implements MypageSubService {

	@Autowired
	private MypageSubMapper mypageSubMapper;

	public MypageSubServiceImp() {

	}

	@Override
	public List<String> movieReviewProcess(String id) {
		return mypageSubMapper.user_review(id);
	}

	@Override
	public List<String> movieRatingProcess(String id) {
		return mypageSubMapper.user_rate(id);
	}

	@Override
	public String moviePythonProcess(String id) {
		return mypageSubMapper.python_konlpy(id);
	}

	@Override
	public String movieWatchingTimeProcess(String id) {
		return mypageSubMapper.watching_time(id);
	}

	@Override
	public List<CalendarDTO> rateList(String id) {
		return mypageSubMapper.rateList(id);
	}

	@Override
	public List<CalendarDTO> reviewList(String id) {
		return mypageSubMapper.reviewList(id);
	}

	@Override
	public List<CalendarDTO> wishList(String id) {
		return mypageSubMapper.wishList(id);
	}

}

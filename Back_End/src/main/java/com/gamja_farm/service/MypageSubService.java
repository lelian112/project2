package com.gamja_farm.service;

import java.util.List;

import com.gamja_farm.dto.CalendarDTO;
import com.gamja_farm.dto.UserDTO;

public interface MypageSubService {

	public List<String> movieReviewProcess(String id);
	public List<String> movieRatingProcess(String id);
	public String moviePythonProcess(String id);
	public String movieWatchingTimeProcess(String id);
	
	public List<CalendarDTO> wishList (String id);
	public List<CalendarDTO> rateList (String id);
	public List<CalendarDTO> reviewList (String id);

}

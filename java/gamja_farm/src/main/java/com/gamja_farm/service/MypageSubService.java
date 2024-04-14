package com.gamja_farm.service;

import java.util.List;

public interface MypageSubService {
    
    public List<String> movieReviewProcess(String id);
    public List<String> movieRatingProcess(String id);
    public String moviePythonProcess(String id);
    public String movieWatchingTimeProcess(String id);

}

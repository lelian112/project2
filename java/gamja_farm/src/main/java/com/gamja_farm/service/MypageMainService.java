package com.gamja_farm.service;

import java.util.List;

public interface MypageMainService {

    public int visitTotalProcess(String id);

	public String userPicProcess(String id);
	public String userMbtiProcess(String id);
	public String userCaptionProcess(String id);

    public List<String> followingListProcess(String id);
    public List<String> followerListProcess(String id);
	// public String userFollowingProcess(String id);
	// public String userFollowerProcess(String id);

}

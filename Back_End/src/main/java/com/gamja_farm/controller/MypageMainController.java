package com.gamja_farm.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.service.MypageMainService;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin("*")
@Slf4j
@RestController
public class MypageMainController {

	@Autowired
	private MypageMainService mypageMainService;

	public MypageMainController() {

	}

	@PostMapping("/mypage/{id}")
	public ResponseEntity<Map<String, Object>> allExecute(@PathVariable("id") String id) {

		int visitDaily = mypageMainService.visitDailyProcess(id);
		int visitTotal = mypageMainService.visitTotalProcess(id);
		String userPic = mypageMainService.userPicProcess(id);
		String userMbti = mypageMainService.userMbtiProcess(id);
		String userCaption = mypageMainService.userCaptionProcess(id);
		List<String> userfollowings = mypageMainService.followingListProcess(id);
		List<String> userfollowers = mypageMainService.followerListProcess(id);

		HashMap<String, Object> mypageMainData = new HashMap<>();
		mypageMainData.put("daliyCnt", visitDaily != 0 ? visitDaily : "");
		mypageMainData.put("totalCnt", visitTotal != 0 ? visitTotal : "");
		mypageMainData.put("userPic", userPic != null ? userPic : "");
		mypageMainData.put("userMbti", userMbti != null ? userMbti : "");
		mypageMainData.put("userCaption", userCaption != null ? userCaption : "");
		mypageMainData.put("userfollowings", userfollowings != null ? userfollowings : new ArrayList<String>());
		mypageMainData.put("userfollowers", userfollowers != null ? userfollowers : new ArrayList<String>());


		String webServerAddress = "http://localhost:7080";
		String imagePath = "/profile";
		List<String> imageFiles = getImageFilesFromDirectory("C:\\Users\\EZEN\\Desktop\\절대 삭제하지마\\Project_final\\Back_End\\src\\main\\resources\\static\\profile");
		String randomImage = getRandomImage(imageFiles);
		String profilePicUrl = webServerAddress + imagePath + "/" + new File(randomImage).getName();
		mypageMainData.put("userPic", userPic != null ? userPic : profilePicUrl);
		
		return ResponseEntity.ok(mypageMainData);
	}

	// 디렉토리에서 사진 목록 가져오기
	private List<String> getImageFilesFromDirectory(String directoryPath) {
		List<String> imageFiles = new ArrayList<>();
		File directory = new File(directoryPath);
		File[] files = directory.listFiles();
		if (files != null) {
			for (File file : files) {
				if (file.isFile() && (file.getName().endsWith(".jpg") || file.getName().endsWith(".png"))) {
					imageFiles.add(file.getAbsolutePath());
				}
			}
		}
		return imageFiles;
	}

	// 랜덤으로 사진 선택
	private String getRandomImage(List<String> imageFiles) {
		if (imageFiles.isEmpty()) {
			return ""; // 사진이 없을 경우 빈 문자열 반환 또는 기본 이미지 경로 설정
		}
		Random random = new Random();
		int randomIndex = random.nextInt(imageFiles.size());
		return imageFiles.get(randomIndex);
	}


	// 추가
	@GetMapping("/mypage/check/{id}/{follow_id}")
	public ResponseEntity<Boolean> checkFollow(@PathVariable("id") String id,
			@PathVariable("follow_id") String follow_id) {
		boolean check = mypageMainService.checkFollow(id, follow_id);
		return ResponseEntity.ok(check);
	}

	@PostMapping("/mypage/follow/{id}/{follow_id}")
	public ResponseEntity<String> following(@PathVariable("id") String id,
			@PathVariable("follow_id") String follow_id) {
		mypageMainService.following(id, follow_id);
		return ResponseEntity.ok(follow_id);
	}

	@DeleteMapping("/mypage/unfollow/{id}/{follow_id}")
	public ResponseEntity<String> unfollowing(@PathVariable("id") String id,
			@PathVariable("follow_id") String follow_id) {
		mypageMainService.unfollowing(id, follow_id);
		return ResponseEntity.ok(follow_id);
	}

	// @GetMapping("/userpage/{id}")
	// public ResponseEntity<String> anonExecute() {
	// return ResponseEntity.ok(null);
	// }

}

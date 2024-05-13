package com.gamja_farm.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieSearchDTO {
	private int currentPage; // 현재페이지
	private int totalCount; // 총 레코드수
	private int blockCount = 20; // 한 페이지에 보여줄 레코드 수
	private int blockPage = 5; // 한 블록에 보여줄 페이지 수
	private int totalPage; // 총 페이지수
	private int startRow; // 시작 레코드 번호
	private int endRow; // 끝 레코드 번호
	private int startPage; // 한 블록의 시작 페이지 번호
	private int endPage; // 한 블록의 끝 페이지 번호
	private int number;
	private String genre;  // 유저가 조회 요청한 장르
	
	public MovieSearchDTO() {
		
	}
	
	public MovieSearchDTO(int currentPage, int totalCount, String genre) {
		this.currentPage = currentPage;
		this.totalCount = totalCount;
		this.genre = genre;
		// 총 페이지수
		totalPage = totalCount / blockCount + (totalCount % blockCount == 0 ? 0 : 1);
		if(totalPage<currentPage)
		  this.currentPage = totalPage;

		// 시작레코드 (게시글 번호)
		startRow = (this.currentPage - 1) * blockCount;

		// 끝레코드 
		endRow = startRow + blockCount-1;


		// 시작 페이지
		startPage = (int) ((this.currentPage - 1) / blockPage) * blockPage + 1;

		// 끝 페이지
		endPage = startPage + blockPage - 1;
		if (totalPage < endPage)
			endPage = totalPage;

		// 리스트에서에 출력번호
		number = totalCount - (this.currentPage - 1) * blockCount;
	}
	


}

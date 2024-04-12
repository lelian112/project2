package com.gamja_farm.service;

import java.util.List;

import com.gamja_farm.dto.BoardDTO;
import com.gamja_farm.dto.PageDTO;

public interface BoardService {
	public int countProcess();
	
	public List<BoardDTO> listProcess(PageDTO pv);
	
	public void insertProcess(BoardDTO dto);
	
	public BoardDTO contentProcess(int num);
	
	public void updateProcess(BoardDTO dto, String urlpath);
	
	public void deleteProcess(int num, String urlpath);
	
	// 필요없음
//	public String fileSelectprocess(int num);
	
}

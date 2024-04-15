package com.gamja_farm.z_exist;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.gamja_farm.z_exist.BoardDTO;
import com.gamja_farm.z_exist.PageDTO;

@Mapper
public interface BoardMapper {
	public int count();
	public List<BoardDTO> list(PageDTO pv);
	public void readCount(int num);
	public BoardDTO content(int num);
	public void reStepCount(BoardDTO dto);
	
	// INSERT 추가
	public int refPlus();
	public void save(BoardDTO dto);
	public void update(BoardDTO dto);
	public void delete(int num);
	public String getFile(int num);
	
}

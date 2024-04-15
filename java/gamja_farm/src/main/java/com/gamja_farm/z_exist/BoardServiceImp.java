package com.gamja_farm.z_exist;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.z_exist.BoardDTO;
import com.gamja_farm.z_exist.PageDTO;
import com.gamja_farm.z_exist.BoardMapper;

// implements BoardService 입력 후 BoardServiceImp에서 오류 발생, 모두 add
//@Service
//public class BoardServiceImp implements BoardService {
//	
//	@Autowired
//	private BoardMapper boardMapper;
//	public BoardServiceImp() {
//		
//	}
//}

@Service
public class BoardServiceImp implements BoardService {
	
	@Autowired
	private BoardMapper boardMapper;
	
	public BoardServiceImp() {
		
	}
	
	@Override
	public int countProcess() {
		return boardMapper.count();
	}
	
	@Override
	public List<BoardDTO> listProcess(PageDTO pv) {
		return boardMapper.list(pv);
	}
	
	@Override
	public void insertProcess(BoardDTO dto) {
		// 제목글이면
		if (dto.getRef() == 0) {
			int refPlus = boardMapper.refPlus();
			dto.setRef(refPlus);
		} else {
			// 답변글이면
			boardMapper.reStepCount(dto);
			dto.setRe_step(dto.getRe_step() + 1);
			dto.setRe_level(dto.getRe_level() + 1);
		}
		boardMapper.save(dto);
	}
	
	// 조회수 증가
	@Override
	public BoardDTO contentProcess(int num) {
		boardMapper.readCount(num);
		return boardMapper.content(num);
	}
	
	@Override
	public void updateProcess(BoardDTO dto, String urlpath) {
		String filename = dto.getUpload();
		// 수정 할 첨부파일이 있으면
		if (filename != null) {
			String path = boardMapper.getFile(dto.getNum());
			// 기존에 저장된 첨부파일이 있으면
			if (path != null) {
				File file = new File(urlpath, path);
					file.delete();
			}
		}
		
		boardMapper.update(dto);
		
	}
	
	@Override
	public void deleteProcess(int num, String urlpath) {
		String path = boardMapper.getFile(num);
		// 첨부파일이 있으면
		if (path != null) {
			File file = new File(urlpath, path);
			file.delete();
		}
		
		boardMapper.delete(num);
		
	}
	
	// 필요없음
//	@Override
//	public String fileSelectprocess(int num) {
//		return null;
//	}
	
}

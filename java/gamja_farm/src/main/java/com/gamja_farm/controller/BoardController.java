package com.gamja_farm.controller;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gamja_farm.dto.BoardDTO;
import com.gamja_farm.dto.PageDTO;
import com.gamja_farm.service.BoardService;
import com.gamja_farm.common.file.FileUpload;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@CrossOrigin("*")
@Slf4j
@RestController
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	@Autowired
	private PageDTO pdto;
	
	private int currentPage;
	
	@Value("${spring.servlet.multipart.location}")
	private String filePath;
	
	public BoardController() {
		
	}
	
	
	// 페이지 입력받아서 페이지당 리스트 가져오기 3페이지 (0 5 10)
	@GetMapping("/board/list/{currentPage}")  // http://localhost:8090/board/list/1
	// public Map<String, Object> listExecute(@PathVariable("currentPage") int currentPage) {
	public ResponseEntity<Map<String, Object>> listExecute(@PathVariable("currentPage") int currentPage) {
		
		Map<String, Object> map = new HashMap<>();
		
		// 전체 리스트갯수
		int totalRecord = boardService.countProcess();
		log.info("totalRecord:{}", totalRecord);
		
		// 전체 리스트 갯수가 1보다크면(보유한 리스트가 있으면) 그걸 가져와서 map객체에 넣고
		if (totalRecord >= 1) {
			// React하면서 아래 2줄 추가
			this.currentPage = currentPage;
			// 총 페이지 수를 계산할 때 사용
			this.pdto = new PageDTO(this.currentPage, totalRecord);
			
			map.put("boardList", boardService.listProcess(pdto));
			// React하면서 아래 1줄 추가
			map.put("pv", this.pdto);
			
		}
		log.info("boardList:{}", map.get("boardList"));
		
		// return map;
		return ResponseEntity.ok(map);
		
	}  // end listExecute()
	
	
	@PostMapping("/board/write")  // http://localhost:8090/board/write
	// 답변글일때 ref, re_step, re_level을 담아서 넘겨야한다.
	// @RequestBody는 첨부파일이 없을 경우 사용 
	// public String writeProExecute(@RequestBody BoardDTO dto, PageDTO pv, HttpServletRequest req, HttpSession session) {
	// public String writeProExecute(BoardDTO dto, PageDTO pv, HttpServletRequest req, HttpSession session) {
	public ResponseEntity<String> writeProExecute(BoardDTO dto, PageDTO pv, HttpServletRequest req, HttpSession session) {
		
		MultipartFile file = dto.getFilename();
		log.info("subject:{}", "content:{}", dto.getSubject(), dto.getContent());
		
		// postman에서 첨부파일 넣는 부분
		// log.info("file:{}", file.getOriginalFilename());
		
		// 첨부파일이 있으면
		if (file != null && !file.isEmpty()) {
			UUID random = FileUpload.saveCopyFile(file, filePath);
			dto.setUpload(random + "_" + file.getOriginalFilename());
		}
		
		dto.setIp(req.getRemoteAddr());
		boardService.insertProcess(dto);
		
		return ResponseEntity.ok(String.valueOf(1));
		
	}  // end writeProExecute()
	
	
	@GetMapping("/board/view/{num}")  // http://localhost:8090/board/view/1
	public ResponseEntity<BoardDTO> viewExecute(@PathVariable("num") int num) {
		
		BoardDTO boardDTO = boardService.contentProcess(num);
		return ResponseEntity.ok(boardDTO);
		
	}  // end viewExecute()
	
	
	@PutMapping("/board/update")  // http://localhost:8090/board/update
	public ResponseEntity<Object> updateExecute(BoardDTO dto, HttpServletRequest req) {
		
		MultipartFile file = dto.getFilename();
		if (file != null && !file.isEmpty()) {
			UUID random = FileUpload.saveCopyFile(file, filePath);
			dto.setUpload(random + "_" + file.getOriginalFilename());
		}
		
		boardService.updateProcess(dto, filePath);
		return ResponseEntity.ok(null);
		
	}  // end updateExecute()
	
	
	@DeleteMapping("/board/delete/{num}")  // http://localhost:8090/board/delete/9
	public ResponseEntity<Object> deleteExecute(@PathVariable("num") int num) {
		
		boardService.deleteProcess(num, filePath);
		return ResponseEntity.ok(null);
		
	}  // end deleteExecute()
	
	
	@GetMapping("/board/contentdownload/{filename}")  // http://localhost:8090/board/contentdownload/0481d65f1e6a_file_rev2.txt
	// Resource = springframework.core.io
	public ResponseEntity<Resource> downloadExecute(@PathVariable("filename") String filename) throws IOException {
		// 1d7197ab-53d3-4547-94e8-0481d65f1e6a_file_rev2.txt
		String fileName = filename.substring(filename.indexOf("_") + 1);
		
		// 파일명이 한글일경우 인코딩 작업을 한다. 
		String str = URLEncoder.encode(fileName, "UTF-8");  // URLEncoder = java.net  // throws로 예외처리
		
		// 원본파일명에 공백이 있을 때, '+' 표시가 되므로 공백으로 처리해준다.
		str = str.replaceAll("\\+", "%20");
		
		Path path = Paths.get(filePath + "\\" + filename);
		Resource resource = new InputStreamResource(Files.newInputStream(path));  // throws로 예외처리
		log.info("resource:{}", resource);
		
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_TYPE, "application/octet-stream")
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + str + ";")
				.body(resource);
		
	}
	
	
}  // end class

package com.gamja_farm.crawler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
public class ImageController {

    private final PythonExecutor pythonExecutor;

    @Autowired
    public ImageController(PythonExecutor pythonExecutor) {
        this.pythonExecutor = pythonExecutor;
    }

    @GetMapping(value = "/image", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<Resource> konlpy_image() throws IOException {
        try {
            String imagePath = "C:\\Users\\EZEN\\Desktop\\절대 삭제하지마\\Project_final\\Image\\wordcloud.png";
            Path imagePathFile = Paths.get(imagePath);
            // if (!Files.exists(imagePathFile)) {
			pythonExecutor.executePythonScriptAndSaveImage();
            // }

            Resource resource = new UrlResource(imagePathFile.toUri());
            return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(resource);
        } catch (MalformedURLException e) {
            throw new RuntimeException("Failed to load image: " + e.getMessage());
        }
    }
}

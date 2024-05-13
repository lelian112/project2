package com.gamja_farm.crawler;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Component;

@Component
public class PythonExecutor {

    public void executePythonScriptAndSaveImage() {
        try {
            // Python 스크립트 실행
            String pythonScriptPath = "C:\\Users\\EZEN\\Desktop\\절대 삭제하지마\\Project_final\\Python_DB\\movie_konlpy.py";
            ProcessBuilder processBuilder = new ProcessBuilder("python", pythonScriptPath);
            Process process = processBuilder.start();
            int exitCode = process.waitFor();

            if (exitCode == 0) {
                // 이미지 저장 경로 설정
                String imagePath = "C:\\Users\\EZEN\\Desktop\\절대 삭제하지마\\Project_final\\Image\\wordcloud.png";

                // 이미지 저장
                Path source = Paths.get("C:\\Users\\EZEN\\Desktop\\절대 삭제하지마\\Project_final\\Image\\wordcloud.png");
                Path destination = Paths.get(imagePath);
                Files.move(source, destination);

                System.out.println("Python script executed successfully and image saved.");
            } else {
                System.err.println("Failed to execute Python script. Exit code: " + exitCode);
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}

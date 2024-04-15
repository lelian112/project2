package com.gamja_farm.crawler;

import java.io.IOException;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@EnableScheduling
@SpringBootApplication
public class db_scheduler {

    // @Scheduled(cron = "0 3 17 * * ?") // test실행
	public void runPythonScript0() {
        runPythonScript("C:\\Users\\CWPARK\\Documents\\ai_chatbot\\프로젝트\\2nd_java_web\\pyhton_db\\test.py");
    }

    // @Scheduled(cron = "0 0 0 * * ?") // 매일 0시 실행 (초, 분, 시, 일, 월, 요일 순서)
    public void runPythonScript1() {
        runPythonScript("C:\\Users\\CWPARK\\Documents\\ai_chatbot\\프로젝트\\2nd_java_web\\pyhton_db\\movie_box_20240412.py");
    }

	// @Scheduled(cron = "0 5 0 * * ?") // 매일 0시 5분에 실행
    public void runPythonScript2() {
        runPythonScript("C:\\Users\\CWPARK\\Documents\\ai_chatbot\\프로젝트\\2nd_java_web\\pyhton_db\\movie_all_20240412.py");
    }

	private void runPythonScript(String scriptPath) {

        try {
            ProcessBuilder processBuilder = new ProcessBuilder("python", scriptPath);
            Process process = processBuilder.start();
            int exitCode = process.waitFor();

            if (exitCode == 0) {
                System.out.println("Python script executed successfully");
            } else {
                System.err.println("Failed to execute Python script. Exit code: " + exitCode);
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }

    }

}

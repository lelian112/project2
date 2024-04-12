package com.gamja_farm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude={SecurityAutoConfiguration.class})
public class GamjaFarmApplication {

	public static void main(String[] args) {
		SpringApplication.run(GamjaFarmApplication.class, args);
	}

}

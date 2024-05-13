package com.gamja_farm.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RateDTO {

	private String user_id;
	private String movie_code;
	private double rate;	
	private String poster;

	public RateDTO() {

	}
}
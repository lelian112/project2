package com.gamja_farm.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieHomeDTO {	
	
	private String code;
	private String name_kor;
	private String name_eng;
	private Date release_at;
	private String country;
	private String poster;
	private String ranking;
	private double rate_avg;

}

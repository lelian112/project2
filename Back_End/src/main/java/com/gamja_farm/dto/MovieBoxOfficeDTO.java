package com.gamja_farm.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieBoxOfficeDTO {

	private String type;
	private Date box_at;
	private String box_week;
	private String movie_code;
	private String ranking;
	private String name_kor;
	private Date release_at;
	private int total_audience;
	
}

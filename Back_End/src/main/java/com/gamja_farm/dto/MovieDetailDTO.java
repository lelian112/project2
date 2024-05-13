package com.gamja_farm.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieDetailDTO {
	
	private String code;
	private String name_kor;
	private String name_eng;
	private Date release_at;
	private int running_time;
	private String country;
	private String director_1;
	private String director_2;
	private String actor_1;
	private String actor_2;
	private String actor_3;
	private String actor_4;
	private String actor_5;
	private String watch_type;
	private String age_type;
	private String poster;
	private String stillcut_1;
	private String stillcut_2;
	private String stillcut_3;
	private String teaser;
	private String award_1;
	private String award_2;  
	private String plot;
	private String genre_1;
	private String genre_2;
	private double rate;
	private double rate_avg;
	private String total_audience;
	private String wish;

}

package com.gamja_farm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MypageMainSubMapper {

    // 최근 쓴 리뷰
    public List<String> user_review(String id);

    // 최근 쓴 평가
    public List<String> user_rate(String id);

    // 선호태그
    public String python_KoNLPy(String id);

    // 총 감상시간
    public int watching_time(String id);

}

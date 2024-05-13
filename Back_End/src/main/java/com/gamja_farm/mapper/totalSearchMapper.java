package com.gamja_farm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.gamja_farm.dto.TotalSearchDTO;

@Mapper

public interface totalSearchMapper {
  
  public List<TotalSearchDTO> titleSearch (@Param("name_kor")String name_kor);

}

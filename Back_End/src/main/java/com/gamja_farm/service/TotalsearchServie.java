package com.gamja_farm.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gamja_farm.dto.TotalSearchDTO;

public interface TotalsearchServie {
  public List<TotalSearchDTO> titleSearchPro (@Param("name_kor")String name_kor);

}

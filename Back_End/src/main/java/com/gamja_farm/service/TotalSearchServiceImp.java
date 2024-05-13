package com.gamja_farm.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gamja_farm.dto.TotalSearchDTO;
import com.gamja_farm.mapper.totalSearchMapper;

@Service
public class TotalSearchServiceImp implements TotalsearchServie{

  @Autowired
  private totalSearchMapper totalSearchMapper;

  public TotalSearchServiceImp (){

  }



  @Override
  public List<TotalSearchDTO> titleSearchPro (@Param("name_kor")String name_kor) {
  return totalSearchMapper.titleSearch(name_kor);
}


}
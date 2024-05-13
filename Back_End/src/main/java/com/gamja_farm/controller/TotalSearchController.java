package com.gamja_farm.controller;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.gamja_farm.dto.TotalSearchDTO;
import com.gamja_farm.service.TotalsearchServie;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@CrossOrigin("*")
@RestController
public class TotalSearchController {
  
  @Autowired
  private TotalsearchServie totalsearchServie;

  @GetMapping("/search/title/{name_kor}")
  public ResponseEntity<List<TotalSearchDTO>> titleSearchPro(@PathVariable("name_kor") String name_kor) {
        log.info("Searching for movies with title: {}", name_kor);

        Pattern pattern = Pattern.compile("\\b제목\\b\\s*");
        Matcher matcher = pattern.matcher(name_kor);
        String filteredTitle = matcher.replaceAll("");

        List<TotalSearchDTO> movies = totalsearchServie.titleSearchPro(filteredTitle);
        if (movies.isEmpty()) {
            log.info("No movies found with the title: {}", filteredTitle);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(movies);
    }


}

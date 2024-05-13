package com.gamja_farm;
import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.stereotype.Component;

import com.gamja_farm.dto.MovieHomeDTO;
import com.gamja_farm.service.MovieService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//http://localhost:7080/actuator/cached-lists
@Component
@Endpoint(id = "cached-lists")
public class CachedListsEndpoint {

    private final MovieService movieService;

    public CachedListsEndpoint(MovieService movieService) {
        this.movieService = movieService;
    }

    @ReadOperation
    public Map<String, List<MovieHomeDTO>> getCachedLists() {
        Map<String, List<MovieHomeDTO>> cachedLists = new HashMap<>();
        cachedLists.put("dailyList", movieService.dailyBoxOffice());
        cachedLists.put("weekList", movieService.weekBoxOffice());
        cachedLists.put("domesticList", movieService.domesticMovies());
        cachedLists.put("foreignList", movieService.foreignMovies());
        cachedLists.put("animationList", movieService.animationMovies());
        return cachedLists;
    }
}
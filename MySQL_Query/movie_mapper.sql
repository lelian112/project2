SELECT count(*)
FROM movie_boxoffice
WHERE type = "주간 박스오피스" AND box_week = "20230102~20230108";

-- 주간 박스오피스  1. inner join을 사용해서 날짜에 대한 영화 code와 ranking을 받아오고,
--              2. 해당 code에 대한 값으로 user_movie_rate에서 해당 code의 평균값 계산 후, avg_rating 가져오고 
--              3. 필요한 값들 정리해서 출력
--              ROUND(IFNULL(SUM(rate) / IFNULL(COUNT(*), 1), 0), 1) 
--   			IFNULL(COUNT(*), 1) COUNT가 0일 경우 1로 대체해서 0으로 나누지 못하게 값을 지정
-- 				IFNULL(SUM(rate) / IFNULL(COUNT(*), 1), 0) 이 부분은 sum / count 가 null 일 경우 0으로 값을 지정
--              그 이후 round 로 소수점 1번째 자리까지 출력
SELECT m.code, m.name_kor, m.name_eng, m.release_at, m.country, m.poster, b.ranking,
	 (
     SELECT ROUND(IFNULL(SUM(rate) / IFNULL(COUNT(*), 1), 0), 1)
     FROM user_movie_rate umr
     WHERE umr.movie_code = m.code
     ) AS avg_rating
FROM movie m
INNER JOIN (
    SELECT movie_code, ranking
    FROM movie_boxoffice
    WHERE type = "주간 박스오피스" AND box_week = "20230102~20230108"
) b ON m.code = b.movie_code;

-- 일별 박스오피스 
SELECT m.code, m.name_kor, m.name_eng, m.release_at, m.country, m.poster, b.ranking,
	 (SELECT ROUND(IFNULL(SUM(rate) / IFNULL(COUNT(*), 1), 0), 1)
	 FROM user_movie_rate umr
	 WHERE umr.movie_code = m.code) AS avg_rating
FROM movie m
INNER JOIN (
	SELECT movie_code, ranking
	FROM movie_boxoffice
	WHERE type = "일별 박스오피스" AND box_at = "2024-04-11"
) b ON m.code = b.movie_code;


-- 국내영화 최신순 20개 출력	1. movie에서 country를 한국으로 지정 후, 
--       			 	2. code값으로 rate_avg 구하고
--       				3. 필요한 값들 출력
SELECT m.code, m.name_kor, m.name_eng, m.release_at, m.country, m.poster,
       ROUND(IFNULL(SUM(umr.rate) / IFNULL(COUNT(umr.rate), 1), 0), 1) AS rate_avg
FROM movie m
LEFT JOIN user_movie_rate umr ON m.code = umr.movie_code
WHERE m.country = "한국"
GROUP BY m.code, m.idx
ORDER BY m.release_at DESC, RAND()
LIMIT 20;

--  해외영화
SELECT m.code, m.name_kor, m.name_eng, m.release_at, m.country, m.poster,
       ROUND(IFNULL(SUM(umr.rate) / IFNULL(COUNT(umr.rate), 1), 0), 1) AS rate_avg
FROM movie m
LEFT JOIN user_movie_rate umr ON m.code = umr.movie_code
WHERE m.country != "한국"
GROUP BY m.code, m.name_kor, m.name_eng, m.release_at, m.country, m.poster
ORDER BY m.release_at DESC, RAND()
LIMIT 20;

-- 애니메이션 영화
-- 						1. movie_genre에서 genre가 애니메이션인 영화들의 movie_code를 mg로 가져온다
--   					2. mg.movie_code = m.code로 movie에서 애니메이션인 영화들의 code 20개를 받아 온 후
--                      3. 해당 movie_code 값으로 movie_rate 까지 조회 후 필요한 컬럼값들 출력
SELECT m.code, m.name_kor, m.name_eng, m.release_at, m.country, m.poster,
       ROUND(IFNULL(SUM(umr.rate) / IFNULL(COUNT(umr.rate), 1), 0), 1) AS rate_avg
FROM movie m
LEFT JOIN user_movie_rate umr ON m.code = umr.movie_code
INNER JOIN (
    SELECT movie_code
    FROM movie_genre
    WHERE genre_1 = "애니메이션" OR genre_2 = "애니메이션"
    LIMIT 20
) AS mg ON m.code = mg.movie_code
GROUP BY m.code, m.name_kor, m.name_eng, m.release_at, m.country, m.poster;

-- 장르검색
SELECT m.code, m.name_kor, m.name_eng, m.release_at, m.country, m.poster,
	ROUND(IFNULL(SUM(umr.rate) / IFNULL(COUNT(umr.rate), 1), 0), 1) AS rate_avg
from movie m
LEFT JOIN user_movie_rate umr ON m.code = umr.movie_code
INNER JOIN (
	SELECT movie_code
    FROM movie_genre
    WHERE genre_1 = "드라마" or genre_2 = "드라마"
    ORDER BY idx ASC
    LIMIT 0, 20
    ) AS mg ON m.code = mg.movie_code
GROUP BY m.idx;

-- 영화 상세정보
SELECT m.*, p.plot, g.genre_1, g.genre_2,
	(
    SELECT total_audience
    FROM movie_boxoffice
    WHERE movie_code = 20190324
    ORDER BY COALESCE(box_at, box_week) ASC
    LIMIT 1
) as total_audience,     
	ROUND(IFNULL(SUM(umr.rate) / IFNULL(COUNT(umr.rate), 1), 0), 1) AS rate_avg
FROM movie m
LEFT JOIN movie_plot p ON m.code = p.movie_code
LEFT JOIN movie_genre g ON m.code = g.movie_code
LEFT JOIN user_movie_rate umr ON m.code = umr.movie_code
WHERE m.code = 20236181
GROUP BY m.idx, p.idx, g.idx;




SELECT * FROM gamja_farm.user_review;



SELECT r.*, m.poster, m.name_kor,
(
SELECT count(like_btn)
FROM user_review_like l
WHERE l.user_review_idx = r.idx AND like_btn = 1
) AS review_like_cnt
FROM user_review r
JOIN movie m ON m.code = r.movie_code
WHERE r.idx = 11;


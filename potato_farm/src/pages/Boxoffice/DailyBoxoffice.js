import React, { useEffect, useState } from "react";
import axios from "axios";
import prevButton from "../../images/arrow-left.png";
import nextButton from "../../images/arrow-right.png";
import checkedButton from "../../images/checked.png";
import * as m from "../../Styles/Boxoffice/DailyBoxofficeStyle";

const DailyBoxoffice = () => {
  const [dailyboxofficeData, setDailyboxofficeData] = useState([]);

  useEffect(() => {
    const fetchDailyBoxoffice = async () => {
      try {
        const dailyboxofficeResponse = await axios
          .get(`/home`)
          .then((response) => response.data.dailyboxoffice); // 코드로부터 영화 정보 가져오기

        setDailyboxofficeData(dailyboxofficeResponse); // 받아온 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchDailyBoxoffice(); // 영화 정보를 가져오는 함수 호출
  }, []);
  return (
    <>
      <m.DailyBoxofficeContainer>
        <m.WrapDailyBoxoffice>
          <m.BoxofficeTitleContainer>
            <m.BoxofficeTitle>박스오피스 순위 </m.BoxofficeTitle>
            <m.BoxofficeToggleButton>
              <m.DailyBoxofficeButton>
                <m.DailyBoxofficeButtonIcon
                  to
                  src={checkedButton}
                  alt="체크 버튼"
                ></m.DailyBoxofficeButtonIcon>
                <m.DailyBoxofficeButtonLink to="/boxoffice">
                  일간
                </m.DailyBoxofficeButtonLink>
              </m.DailyBoxofficeButton>
              <m.MonthlyBoxofficeButton to="/boxoffice/monthly">
                월간
              </m.MonthlyBoxofficeButton>
            </m.BoxofficeToggleButton>
          </m.BoxofficeTitleContainer>

          <m.DailyBoxofficeDate>
            <m.PrevButton>
              <m.PrevButtonIcon
                to
                src={prevButton}
                alt="이전 버튼"
              ></m.PrevButtonIcon>
            </m.PrevButton>
            <m.BoxAt>boxAt&nbsp;기준</m.BoxAt>
            <m.NextButton>
              <m.NextButtonIcon
                to
                src={nextButton}
                alt="다음 버튼"
              ></m.NextButtonIcon>
            </m.NextButton>
          </m.DailyBoxofficeDate>
          <m.WrapMovie>
            {dailyboxofficeData &&
              dailyboxofficeData.map((movie, index) => (
                <m.Movie>
                  <m.MovieRanking>
                    <m.Ranking>{movie.ranking}</m.Ranking>
                  </m.MovieRanking>
                  <m.PosterLink to={`/movie/${movie.code}`}>
                    <m.Poster to src={movie.poster} alt="poster"></m.Poster>
                  </m.PosterLink>
                  <m.MovieNameKor>{movie.name_kor}</m.MovieNameKor>
                  <m.MovieInfo>
                    <m.MovieReleaseAt>
                      {" "}
                      {movie.release_at.slice(0, movie.release_at.indexOf("T"))}
                    </m.MovieReleaseAt>
                    <m.MovieCountry>{movie.country}</m.MovieCountry>
                  </m.MovieInfo>
                  <m.Rate>평균★ {movie.rate_avg}</m.Rate>
                </m.Movie>
              ))}
          </m.WrapMovie>
        </m.WrapDailyBoxoffice>
      </m.DailyBoxofficeContainer>
    </>
  );
};

export default DailyBoxoffice;

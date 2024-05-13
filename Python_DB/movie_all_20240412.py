import requests
import xml.etree.ElementTree as ET
import time
import datetime
import pymysql
import re

# kobis_api_key = "ee2360d11c3c58e7a5e9568e75f1949d"  # 우리팀
kobis_api_key = "f5eef3421c602c6cb7ea224104795888"
kmdb_api_key = "BL056Z3VS04LV4MH6M58"


########### 영화코드 저장 ###########
def movie_code():
    start_time = time.time()

    movie_all =[]  # 특정 장르 제외 영화정보 저장
    url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.xml"

    # 21~23년 curPage : 52개, 20~23년 71개, 20~24년 76개(4월10일 기준)
    for i in range(1, 77):
        header={ 'User-Agent' : ('Mozilla/5.0 (Windows NT 10.0;Win64; x64)\
                AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98\
                Safari/537.36'), }
        params = {
            "key": kobis_api_key,
            "itemPerPage": 100,
            "openStartDt": 2020,
            "openEndDt": 2024,
            "curPage": i
        }
        response = requests.get(url, headers=header, params=params)
        kobis_data = ET.fromstring(response.text).findall(".//movie")

        for j in range(len(kobis_data)):
            movie_cd = kobis_data[j].find(".//movieCd").text
            if movie_cd:
                movie_cd = movie_cd.strip()
                
            genre_alt = kobis_data[j].find(".//repGenreNm").text
            if genre_alt:
                genre_alt = genre_alt.strip()
                if genre_alt != "성인물(에로)":
                    movie_all.append(movie_cd)

    end_time = time.time()
    print(f"movie_code: {len(movie_all)} / {round((end_time - start_time), 3)}초 소요됨")
    
    # 리턴값 처리
    return movie_all


########### movieCd를 for문 돌려서 movieDetail 값 저장 ###########
def movie_detail():
    start_time = time.time()

    db_movie = []
    db_movie_genre = []
    db_movie_plot = []

    movie_all = movie_code()
    # movie_all = [20247294, 20231089]

    for code in movie_all:
        url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.xml"
        header={ 'User-Agent' : ('Mozilla/5.0 (Windows NT 10.0;Win64; x64)\
                AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98\
                Safari/537.36'), }
        params = {
            "key": kobis_api_key,
            "movieCd": code
        }
        response = requests.get(url, headers=header, params=params)
        kobis_data = ET.fromstring(response.text)

        age_types = kobis_data.findall(".//watchGradeNm")
        if age_types:
            age_type = age_types[0].text
            if age_type:
                age_type = age_type.strip()
        else:
            print(f"연령없음 : {code}")
            continue

        # 장르 2개
        genre = []
        genre_all = kobis_data.findall(".//genreNm")
        for i in range(2):
            if i < len(genre_all):
                genres = genre_all[i].text
                if genres:
                    genre.append(genres.strip())
            else:
                genre.append(None)

        if not (age_type == "청소년관람불가" and genre[0] == "멜로/로맨스"):

            name_kors = kobis_data.findall(".//movieNm")
            if name_kors:
                name_kor = name_kors[0].text
                if name_kor:
                    name_kor = name_kor.strip()
            else:
                print(f"이름없음 : {code}")
                continue
            
            name_engs = kobis_data.findall(".//movieNmEn")
            if name_engs:
                name_eng = name_engs[0].text
                if name_eng:
                    name_eng = name_eng.strip()
            else:
                name_eng = None
            
            running_times = kobis_data.findall(".//showTm")
            if running_times:
                running_time = running_times[0].text
                if running_time:
                    running_time = running_time.strip()
            else:
                running_time = None
            
            release_ats = kobis_data.findall(".//openDt")
            if release_ats:
                release_at = release_ats[0].text
                if release_at:
                    if release_at != "" or release_at != " ":
                        release_at = release_at.strip()[:4] + "-" + release_at.strip()[4:6] + "-" + release_at.strip()[6:8]
                    else:
                        release_at = None
            else:
                release_at = None
            
            countrys = kobis_data.findall(".//nationNm")
            if countrys:
                country = countrys[0].text
                if country:
                    country = country.strip()
            else:
                country = None
            
            watch_types = kobis_data.findall(".//typeNm")
            if watch_types:
                watch_type = watch_types[0].text
                if watch_type:
                    watch_type = watch_type.strip()
            else:
                watch_type = None

            # 감독은 2명까지
            director = []
            director_all = kobis_data.findall(".//directors/director/peopleNm")
            for i in range(2):
                if i < len(director_all):
                    directors = director_all[i].text
                    if directors:
                        director.append(directors.strip())
                else:
                    director.append(None)

            # 배우는 5명까지
            actor = []
            actor_all = kobis_data.findall(".//actors/actor/peopleNm")
            for i in range(5):
                if i < len(actor_all):
                    actors = actor_all[i].text
                    if actors:
                        actor.append(actors.strip())
                else:
                    actor.append(None)

            kobis_audits = kobis_data.findall(".//auditNo")  # kobis_data 심의번호
            if kobis_audits:
                kobis_audit = kobis_audits[0].text
                if kobis_audit:
                    kobis_audit = kobis_audit.strip()
            else:
                print(f"심의없음 : {code} {name_kor}")
                continue

            # ========== KMDB 맵핑 ==========
            # 위에서 가져온 영화리스트의 갯수만큼 제목으로 검색
            url = "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2.jsp?collection=kmdb_new2"
            header={ 'User-Agent' : ('Mozilla/5.0 (Windows NT 10.0;Win64; x64)\
                    AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98\
                    Safari/537.36'), }
            params = {
                "title": name_kor,
                "ServiceKey": kmdb_api_key
            }

            try:
                response = requests.get(url, headers=header, params=params)
                kmdb_data = ET.fromstring(response.text).findall(".//Row")
            except:
                print(f"검색안됨 : {code} / {name_kor}")
                continue
            
            for i in range(len(kmdb_data)):
                kmdb_audit_1 = kmdb_data[i].findall(".//ratingNo")
                for j in range(len(kmdb_audit_1)):
                    kmdb_audit_2 = kmdb_audit_1[j].text
                    if kmdb_audit_2:
                        kmdb_audit = kmdb_audit_2.strip()

                        if kobis_audit == kmdb_audit:
                            plots = kmdb_data[i].findall(".//plotText")
                            if plots:
                                plot = plots[0].text
                                if plot:
                                    plot = plot.strip()
                            else:
                                plot = None

                            posters = kmdb_data[i].findall(".//posters")
                            if posters:
                                poster = posters[0].text.split('|')[0]
                                if poster:
                                    poster = poster.strip()
                            else:
                                poster = None

                            stillcut = []
                            stillcut_all = kmdb_data[i].findall(".//stlls")
                            if stillcut_all:
                                stillcuts = stillcut_all[0].text.strip()
                                for k in range(3):
                                    if k < len(stillcuts.split('|')):
                                        stillcut.append(stillcuts.split('|')[k])
                                    else:
                                        stillcut.append(None)

                            teasers = kmdb_data[i].findall(".//vodUrl")
                            if teasers:
                                teaser = teasers[0].text
                                if teaser:
                                    teaser = teaser.strip()
                            else:
                                teaser = None

                            award_1s = kmdb_data[i].findall(".//Awards1")
                            if award_1s:
                                award_1 = award_1s[0].text
                                if award_1:
                                    award_1 = award_1.strip()
                            else:
                                award_1 = None

                            award_2s = kmdb_data[i].findall(".//Awards2")
                            if award_2s:
                                award_2 = award_2s[0].text
                                if award_2:
                                    award_2 = award_2.strip()
                            else:
                                award_2 = None

                            db_movie.append([code, name_kor, name_eng, release_at, running_time, country, director[0], director[1], actor[0], actor[1], actor[2], actor[3], actor[4], watch_type, age_type, poster, stillcut[0], stillcut[1], stillcut[2], teaser, award_1, award_2])
                            db_movie_genre.append([code, genre[0], genre[1]])
                            db_movie_plot.append([code, plot])

                            time.sleep(0.2)

    end_time = time.time()
    print(f"movie_total: {len(db_movie_plot)} / {round(((end_time - start_time) / 60), 3)}분 소요됨")

    return db_movie, db_movie_genre, db_movie_plot


########### DB에 저장 ###########
def mysql_insert():
    start_time = time.time()

    # MySQL 서버 연결
    connection = pymysql.connect(
        host="112.169.231.62",
        port = 7070,
        user="colin",
        password="1234",
        # db="potato_farm"
        db="gamja_farm"
        # charset="utf8mb4",
        # cursorclass=pymysql.cursors.DictCursor
    )
    conn = connection.cursor()

    db_movie, db_movie_genre, db_movie_plot = movie_detail()
    
    # 데이터 입력
    for movie in db_movie:
        sql = "INSERT INTO movie (code, name_kor, name_eng, release_at, running_time, country, director_1, director_2, actor_1, actor_2, actor_3, actor_4, actor_5, watch_type, age_type, poster, stillcut_1, stillcut_2, stillcut_3, teaser, award_1, award_2) "\
            + "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        conn.execute(sql, movie)
        connection.commit()

    for genre in db_movie_genre:
        sql = "INSERT INTO movie_genre (movie_code, genre_1, genre_2) VALUES (%s, %s, %s)"
        conn.execute(sql, genre)
        connection.commit()
        
    for plot in db_movie_plot:
        sql = "INSERT INTO movie_plot (movie_code, plot) VALUES (%s, %s)"
        conn.execute(sql, plot)
        connection.commit()

    # 연결 종료
    connection.close()

    end_time = time.time()
    print(f"DB업데이트 {round(((end_time - start_time) / 60), 3)}분 소요됨")


########### main 실행 ###########
if __name__ == "__main__":
    mysql_insert()
else:
   print("실패!!!")


import requests
import xml.etree.ElementTree as ET
import time
import datetime
import pymysql
import re

# kobis_api_key = "ee2360d11c3c58e7a5e9568e75f1949d"  # 우리팀
kobis_api_key = "f5eef3421c602c6cb7ea224104795888"
kmdb_api_key = "BL056Z3VS04LV4MH6M58"


########### boxoffice 저장하기 ###########
def movie_boxoffice():
    start_time = time.time()
    today = datetime.date.today()

    db_boxoffice_daily = []
    db_boxoffice_weekly = []

    # ===== 일간 (1년 365일 간 + 1~3월) =====
    for i in range(365+91):
        today += datetime.timedelta(-1)
        boxoffice_date = today.strftime('%Y%m%d')

        url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml"
        header={ 'User-Agent' : ('Mozilla/5.0 (Windows NT 10.0;Win64; x64)\
                AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98\
                Safari/537.36'), }
        params = {
            "key": kobis_api_key,
            "targetDt": boxoffice_date
        }
        response = requests.get(url, headers=header, params=params)
        kobis_daily = ET.fromstring(response.text)

        box_types = kobis_daily.findall("boxofficeType")
        if box_types:
            box_type = box_types[0].text
            if box_type:
                box_type = box_type.strip()
        else:
            box_type = None

        box_ats = kobis_daily.findall("showRange")
        if box_ats:
            box_at = box_ats[0].text
            if box_at:
                box_at = box_at.strip()[:8]
        else:
            box_at = None

        boxoffice_daily = kobis_daily.findall(".//dailyBoxOffice")
        for j in range(len(boxoffice_daily)):
            movie_codes = boxoffice_daily[j].findall(".//movieCd")
            if movie_codes:
                movie_code = movie_codes[0].text
                if movie_code:
                    movie_code = movie_code.strip()
            else:
                movie_code = None

            rankings = boxoffice_daily[j].findall(".//rank")
            if rankings:
                ranking = rankings[0].text
                if ranking:
                    ranking = ranking.strip()
            else:
                ranking = None

            name_kors = boxoffice_daily[j].findall(".//movieNm")
            if name_kors:
                name_kor = name_kors[0].text
                if name_kor:
                    name_kor = name_kor.strip()
            else:
                name_kor = None

            release_ats = boxoffice_daily[j].findall(".//openDt")
            if release_ats:
                release_at = release_ats[0].text.strip() if release_ats[0].text.strip() else None
            else:
                release_at = None

            total_audiences = boxoffice_daily[j].findall(".//audiAcc")
            if total_audiences:
                total_audience = total_audiences[0].text
                if total_audience:
                    total_audience = total_audience.strip()
            else:
                total_audience = None

            db_boxoffice_daily.append([box_type, box_at, movie_code, ranking, name_kor, release_at, total_audience])


    # ===== 주간 =====
    for i in range(12+52):
        sunday = today - datetime.timedelta(days=(today.weekday()+1)) - datetime.timedelta(weeks=i)
        box_week = sunday.strftime("%Y%m%d")

        url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.xml"
        header={ 'User-Agent' : ('Mozilla/5.0 (Windows NT 10.0;Win64; x64)\
                AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98\
                Safari/537.36'), }
        params = {
            "key": kobis_api_key,
            "targetDt": box_week,
            "weekGb" : "0"
        }
        response = requests.get(url, headers=header, params=params)
        kobis_weekly = ET.fromstring(response.text)

        box_types = kobis_weekly.findall("boxofficeType")
        if box_types:
            box_type = box_types[0].text
            if box_type:
                box_type = box_type.strip()
        else:
            box_type = None

        box_weeks = kobis_weekly.findall("showRange")
        if box_weeks:
            box_week = box_weeks[0].text
            if box_week:
                box_week = box_week.strip()
        else:
            box_week = None

        boxoffice_weekly = kobis_weekly.findall(".//weeklyBoxOffice")
        for j in range(len(boxoffice_weekly)):
            movie_codes = boxoffice_weekly[j].findall(".//movieCd")
            if movie_codes:
                movie_code = movie_codes[0].text
                if movie_code:
                    movie_code = movie_code.strip()
            else:
                movie_code = None
            
            rankings = boxoffice_weekly[j].findall(".//rank")
            if rankings:
                ranking = rankings[0].text
                if ranking:
                    ranking = ranking.strip()
            else:
                ranking = None
            
            name_kors = boxoffice_weekly[j].findall(".//movieNm")
            if name_kors:
                name_kor = name_kors[0].text
                if name_kor:
                    name_kor = name_kor.strip()
            else:
                name_kor = None

            release_ats = boxoffice_weekly[j].findall(".//openDt")
            if release_ats:
                release_at = release_ats[0].text.strip() if release_ats[0].text.strip() else None
            else:
                release_at = None

            total_audiences = boxoffice_weekly[j].findall(".//audiAcc")
            if total_audiences:
                total_audience = total_audiences[0].text
                if total_audience:
                    total_audience = total_audience.strip()
            else:
                total_audience = None

            db_boxoffice_weekly.append([box_type, box_week, movie_code, ranking, name_kor, release_at, total_audience])
    
    end_time = time.time()
    print(f"box_office: {len(db_boxoffice_daily + db_boxoffice_weekly)} / {round(((end_time - start_time) / 60), 3)}분 소요됨")
    
    return db_boxoffice_daily, db_boxoffice_weekly


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

    db_boxoffice_daily, db_boxoffice_weekly = movie_boxoffice()
    
    # 데이터 입력
    for daily in db_boxoffice_daily:
        sql = "INSERT INTO movie_boxoffice (type, box_at, movie_code, ranking, name_kor, release_at, total_audience) "\
            + "VALUES (%s, %s, %s, %s, %s, %s, %s)"
        conn.execute(sql, daily)
        connection.commit()

    for weekly in db_boxoffice_weekly:
        sql = "INSERT INTO movie_boxoffice (type, box_week, movie_code, ranking, name_kor, release_at, total_audience) "\
            + "VALUES (%s, %s, %s, %s, %s, %s, %s)"
        conn.execute(sql, weekly)
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


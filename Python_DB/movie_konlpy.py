from konlpy.tag import Okt
from collections import Counter
from wordcloud import WordCloud
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from tqdm import tqdm
from wordcloud import WordCloud
import matplotlib.pyplot as plt
from PIL import Image
import pymysql

# MySQL 연결 설정
connection = pymysql.connect(host='112.169.231.62',
							 port=7070,
                             user='colin',
                             password='1234',
                             db='gamja_farm',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

try:
    with connection.cursor() as cursor:
        # sql = "SELECT * FROM movie_genre"
        sql = "SELECT DISTINCT mg.keyword_1, mg.keyword_2, mg.keyword_3, mg.keyword_4, mg.keyword_5, mg.keyword_6, mg.keyword_7, mg.keyword_8, mg.keyword_9, mg.keyword_10 " +\
			"FROM movie_genre mg " +\
			"JOIN ( " +\
			"	SELECT movie_code FROM user_movie_rate WHERE user_id = 'zoe_4054' AND rate >= 4 " +\
			"	UNION ALL " +\
			"	SELECT movie_code FROM user_movie_wish WHERE user_id = 'zoe_4054' AND wish = 'Y' " +\
			") AS combined_table ON mg.movie_code = combined_table.movie_code"
        cursor.execute(sql)
        result = cursor.fetchall()
        movie_data = pd.DataFrame(result)

finally:
    connection.close()

columns = ['keyword_1', 'keyword_2', 'keyword_3', 'keyword_4', 'keyword_5', 
           'keyword_6', 'keyword_7', 'keyword_8', 'keyword_9', 'keyword_10']

# for column in columns:
#     movie_data[column] = movie_data[column].fillna('Nan').astype(str)

combined_data = ''
for column in columns:
    combined_data += movie_data[column] + ' '

combined_data = combined_data.str.replace("[^ㄱ-ㅎㅏ-ㅣ가-힣 ]", "", regex=True)
combined_data = combined_data.str.replace("^ +", "", regex=True)
combined_data = combined_data.replace('', np.nan).dropna()

# ================================================================================

# # 데이터 로드
# movie_data = pd.read_csv('C:\\Users\\CWPARK\\Documents\\ai_chatbot\\project\\2nd_java_web\\project\\Python_DB\\movie_test.csv', delimiter=',', encoding="UTF-8")

# # 'plot' 열 선택 후 NaN 값 제거
# plot_data = movie_data['plot'].fillna('Nan').astype(str)
# genre_data= movie_data['genre_1'].fillna('Nan').astype(str)

# # 두 컬럼의 내용을 합치기
# combined_data= plot_data+ " " + genre_data


# # 한글 외 문자 제거 및 공백 처리
# combined_data = combined_data.str.replace("[^ㄱ-ㅎㅏ-ㅣ가-힣 ]", "", regex=True)
# combined_data = combined_data.str.replace("^ +", "", regex=True)
# combined_data = combined_data.replace('', np.nan).dropna()

# print(combined_data)


# KoNLPy 토크나이저 초기화
okt = Okt()

# 불용어 정의
stop_words = {'하다', '있다', '하다', '것이', '되다', '못하다', '않다', '그녀', '그의', '저의', '그들', '우리', '조금', '너무', '지금', '년대',
            '여기', '거기', '오늘', '내일', '위해', '때문에', '그래서', '하지만', '그러나', '감독', '그러던', '대한', '사이', '많은', '불륜', '성적',
            '누구', '하나', '이자', '있을까' ,'한철', '명의', '자살', '과연', '젝트', '마주', '있어', '어떤', '마약', '도박', '불법', '남자', '여자', '온라인',
            '마리화나', '에로', '코카인', '히로뽕', '물뽕', '납치', '살인', '연쇄살인', '아내', '죽음', '일본', '남편', '사람', '인간', '대하', '가지'}

# 명사와 형용사 추출 및 빈도 계산
words = []
for sentence in tqdm(combined_data, desc="processing"):
    words += [word for word, tag in okt.pos(sentence) if tag in ['Noun'] and word not in stop_words and len(word)>=2]

word_counts = Counter(words)

# 참고
# https://noanswercode.tistory.com/8

# icon = Image.open('C:\\Users\\CWPARK\\Documents\\ai_chatbot\\project\\2nd_java_web\\project\\Python_DB\\image_mov.png')    # 마스크가 될 이미지 불러오기 
# mask = Image.new("RGB", icon.size, (255,255,255))
# mask.paste(icon,icon)
# mask = np.array(mask)

# 가장 많이 사용된 상위 100개 단어 선택
top_100_words = word_counts.most_common(100)

# 워드 클라우드 생성 및 출력
font_path = 'c:\\WINDOWS\\FONTS\\HMKMRHD.TTF'
# wordcloud = WordCloud(font_path=font_path, background_color='white', width=1000, height=600, min_font_size=40, mask=mask, contour_color='black', contour_width=2)
wordcloud = WordCloud(font_path=font_path, background_color='white', width=1000, height=1000, min_font_size=30, max_font_size=250)
wordcloud = wordcloud.generate_from_frequencies(dict(top_100_words))

plt.figure(figsize=(8, 8))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.subplots_adjust(left=0.05, right=0.95, top=0.95, bottom=0.05)

#plt.show()
plt.savefig('C:\Users\EZEN\Desktop\절대 삭제하지마\Project_final\Image\\wordcloud.png')

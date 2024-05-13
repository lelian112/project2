# Potato Farm

이 앱은 유저간의 소통도 가능한 영화 추천 웹사이트 입니다. 유저들이 본 영화를 평가하고 보고싶은 영화를 찜할수 있고, 싸이월드 형식의 마이페이지에서 파도타기와, 다른유저들의 영화목록을 확인 할 수 있습니다. 

## 주요 기능

- 영화 상세 페이지: 영화 상세페이지 안에서 찜기능과, 리뷰달기 기능을 구현 했습니다.
- 마이페이지: 내가 찜하거나 리뷰를 한 영화를 토대로 wordcloud가 생성 됩니다.
- 마이페이지(달력): 내가 어느날에 찜하거나 리뷰를 달았는지가 확인 가능 합니다.
- 마이페이지(파도타기): 유저간의 파도타기가 가능합니다. 다른 유저의 마이페이지의 가서 그 사람의 찜하거나 리뷰 달았던 영화를 볼 수 있습니다.

## 사용 기술 및 라이브러리
### 프론트엔드
- React (18.2.0)
  - Styled-component
  - React-chatbot-kit
  - Font Awesome
  - React-redux
  - React-dom

### 벡엔드
- DBMS > MySQL
- Sql mapping > MyBatis(3.0.3)
- Lombok > 1.1.0
- Server > SpringBoot/ Tomcat-apache
- Java > JDK 17
- Python > 3.9.13
- Machine-Learning: WordCloud

## 외부 API 및 데이터
- 영화진흥위원회 OPEN API 활용

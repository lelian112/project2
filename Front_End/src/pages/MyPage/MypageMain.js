import React, { useState } from "react";
import styled from "styled-components";
import userImage from "../../images/userImage.png";
import ticketImage from "../../images/ticketImage.png";
import filmIcon from "../../images/filmIcon.png";
import { Link } from "react-router-dom";

//마이메뉴(상단)
const MyMenu = styled.div`
  background-color: #ffd49478;
  width: 70%;
  height: 250px;
  margin: 20px auto;
  align-items: center;
  min-width: 600px;
`;

const ProfileFrame = styled.div`
  display: flex;
`;

const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  margin: 40px 20px 20px 50px;
`;

const UserInfo = styled.div`
  margin: 40px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const UserName = styled.div`
  width: 280px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: solid;
  padding: 5px;
`;

const UserPref = styled.div`
  width: 270px;
  font-size: 15px;
  padding: 5px;
`;

const Shortcut = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  margin: 20px 80px;
`;

const ShortcutMenu = styled(Link)`
  text-decoration: none;
  background-color: #ffffffbb;
  border: solid;
  margin: 10px;

  &:hover {
    font-weight: bold;
  }
`;

// 예매내역(티켓)(하단)
const BookingDetails = styled.div``;

const BookingDetailsBarFrame = styled.div`
  width: 70%;
  min-width: 600px;
  display: flex;
  justify-content: center; /* 가로 방향 가운데 정렬 */
  align-items: center;
  margin-left: auto; /* 왼쪽 여백을 자동으로 설정하여 가운데 정렬 */
  margin-right: auto; /* 오른쪽 여백을 자동으로 설정하여 가운데 정렬 */
`;

const BookingDetailsTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
`;

const BookingDetailsMenu = styled.div`
  margin: 0px 10px;
  font-size: 18px;
  font-weight: bold;
`;

const BookingDetailsButton = styled(Link)`
  font-size: 12px;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
`;

const BookingDetailsFrame = styled.div`
  width: 70%;
  min-width: 600px;
  margin: 10px auto;
  margin-bottom: 70px;
  align-items: center;
  border-bottom: solid #00000028;
`;

const BookingDetailsBar = styled.div`
  background-color: #00000028;
  /* border: solid; */
  display: grid;
  grid-template-columns: 0.6fr 1.3fr 1.2fr;
  padding: 8px 0;
`;

const BookingDetailsCol = styled.div`
  margin: 5px 0;
  min-width: 600px;
`;

const BookingDetailsContents = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.3fr 1.2fr;
  padding: 15px 5px;
`;
const Col = styled.div`
  font-weight: bold;
  color: #353535;
  margin: 0 20px;
`;

const PosterLink = styled(Link)`
  display: flex;
  justify-content: center; /* 좌우 중앙 정렬 */
  align-items: center; /* 상하 중앙 정렬 */
`;
const Poster = styled.img`
  max-width: 90%;
  width: 80%;
  height: 90%; /* RowContents의 90% 높이를 차지하도록 */
  object-fit: contain; /* 이미지가 너무 크면 축소하여 보여주기 */
  margin: auto;
`;

const BookingInfo = styled.div`
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* text-align: center; */
  margin: 0 20px;
`;

const BookingTitle = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`;

const BookingText = styled.div`
  font-size: 14px;
`;

const TicketButton = styled.button`
  /* position: absolute; */
  /* top: 10px; */
  /* right: 10px; */
  cursor: pointer;
  width: 18%;
  min-width: 80px;
`;

const PayInfo = styled.div`
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* text-align: center; */
  margin: 0 20px;
`;

// 팝업 창 스타일
const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 38%;
  height: 35%;
  min-width: 610px;
  border: 1px solid #ccc;
  padding: 32px 50px;
  z-index: 999;
  font-weight: bold;
  font-size: 20px;
`;

// 팝업 닫기 버튼 스타일
const CloseButton = styled.button`
  position: absolute;
  top: 38px;
  right: 50px;
  font-size: 11px;
  font-weight: bold;
  color: white;
  background: black;
  border-radius: 7px;
`;

const Ticket = styled.div`
  /* border: solid black; */
  width: 90%;
  height: 70%;
  position: relative;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: solid black; */
  /* border-radius: 30px; */
  display: flex;
`;

const Ticketleft = styled.div`
  width: 70%;
  height: 100%;
  color: white;
  background: linear-gradient(
    to right,
    #070b0e,
    black,
    #252424,
    #626161,
    #8a8888
  );
  /* border: solid #060a0d; */
  border-radius: 30px 0 0 30px;
`;

const TicketName = styled.div`
  text-align: center;
  text-shadow: 5px white;
  font-size: 50px;
  color: #ffffffe8;
  margin: 9px 20px 5px 20px;
`;

const MovieTitle = styled.div`
  margin: 2px 30px;
  display: flex;
`;

const FilmIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const MovieName = styled.div`
  font-size: 22px;
`;

const ShowTimeDate = styled.div`
  font-size: 14px;
  font-weight: lighter;
  margin: 0px 30px;
`;

const ShowTime = styled.div`
  font-size: 14px;
  font-weight: lighter;
  margin: 0px 30px;
`;

const CinemaId = styled.div`
  font-size: 14px;
  font-weight: lighter;
  margin: 0px 30px;
`;

const TheaterId = styled.div`
  font-size: 14px;
  font-weight: lighter;
  margin: 0px 30px;
`;

const SeatNo = styled.div`
  font-size: 14px;
  font-weight: lighter;
  margin: 0px 30px;
`;

const Ticketright = styled.div`
  width: 30%;
  height: 100%;
  /* border: solid #060a0d; */
  background: linear-gradient(
    to right,
    #d7d4b887,
    #dedccc2d,
    #fcfbefa5,
    #ffffff,
    #fffef7be,
    #fcfbf0b1
  );
  border-radius: 0 30px 30px 0;
  border-left: dotted #626161;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TicketImage = styled.img`
  width: 80%;
`;

const MovieBookingNum = styled.div`
  font-size: 14px;
  text-align: center;
  margin: 0px 30px;
`;

const MypageMain = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  // 팝업 열기 함수
  const openPopup = () => {
    setPopupOpen(true);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <MyMenu>
        <ProfileFrame>
          <ProfilePic src={userImage} alt="프로필 이미지"></ProfilePic>
          <UserInfo>
            <UserName>userName</UserName>
            <UserPref>userPreference</UserPref>
          </UserInfo>
        </ProfileFrame>
        <Shortcut>
          <Grid>
            <ShortcutMenu to="/mypage/mvwntsee">보고 싶은 영화</ShortcutMenu>
            <ShortcutMenu to="/mypage/mvisaw">내가 본 영화</ShortcutMenu>
            <ShortcutMenu to="/mypage/mycomments">내가 쓴 코멘트</ShortcutMenu>
          </Grid>
        </Shortcut>
      </MyMenu>

      <BookingDetails>
        <BookingDetailsBarFrame>
          <BookingDetailsTitle>
            <BookingDetailsMenu>최근 예매내역 (티켓)</BookingDetailsMenu>
            <BookingDetailsButton to="/mypage/mytickets">
              {">>"}더보기
            </BookingDetailsButton>
          </BookingDetailsTitle>
        </BookingDetailsBarFrame>

        <BookingDetailsFrame>
          <BookingDetailsBar>
            <Col></Col>
            <Col>예매내역</Col>
            <Col>결제정보</Col>
          </BookingDetailsBar>

          <BookingDetailsCol>
            <BookingDetailsContents>
              <PosterLink to="http://www.cgv.co.kr/movies/detail-view/?midx=87947">
                <Poster
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87947/87947_1000.jpg"
                  alt="poster"
                />
              </PosterLink>

              <BookingInfo>
                <BookingTitle to="http://www.cgv.co.kr/movies/detail-view/?midx=87947">
                  듄-파트2
                </BookingTitle>
                <br />
                <BookingText>관람일시 2024.03.25(월)</BookingText>
                <BookingText>상영시간 16:45~19:41</BookingText>
                <BookingText>관람극장 CGV 강남</BookingText>
                <BookingText>상영관 1관 좌석 G-14</BookingText>
                <dBookingText>인원 일반 2명</dBookingText>
                <br />
                <BookingText>예매 번호 </BookingText>
                <BookingText>0012-3344-5566-789</BookingText>
                <br />
                <TicketButton onClick={openPopup}>나의 티켓</TicketButton>
              </BookingInfo>

              <PayInfo>
                <BookingText>신용카드</BookingText>
                <br />
                <BookingText>카드사명 신한카드</BookingText>
                <BookingText>카드번호 1234-1234-****-1234</BookingText>
                <br />
                <BookingText>결제일 2024-03-14</BookingText>
                <BookingText>총 결제금액 14,000원</BookingText>
              </PayInfo>
            </BookingDetailsContents>
          </BookingDetailsCol>

          <BookingDetailsCol>
            <BookingDetailsContents>
              <PosterLink to="http://www.cgv.co.kr/movies/detail-view/?midx=88092">
                <Poster
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88092/88092_1000.jpg"
                  alt="poster"
                />
              </PosterLink>

              <BookingInfo>
                <BookingTitle to="http://www.cgv.co.kr/movies/detail-view/?midx=88092">
                  유미의 세포들
                </BookingTitle>
                <br />
                <BookingText>관람일시 2024.03.25(월)</BookingText>
                <BookingText>상영시간 16:45~19:41</BookingText>
                <BookingText>관람극장 CGV 강남</BookingText>
                <BookingText>상영관 1관 좌석 G-14</BookingText>
                <dBookingText>인원 일반 2명</dBookingText>
                <br />
                <BookingText>예매 번호 </BookingText>
                <BookingText>0012-3344-5566-789</BookingText>
                <br />
                <TicketButton onClick={openPopup}>나의 티켓</TicketButton>
              </BookingInfo>

              <PayInfo>
                <BookingText>신용카드</BookingText>
                <br />
                <BookingText>카드사명 신한카드</BookingText>
                <BookingText>카드번호 1234-1234-****-1234</BookingText>
                <br />
                <BookingText>결제일 2024-03-14</BookingText>
                <BookingText>총 결제금액 14,000원</BookingText>
              </PayInfo>
            </BookingDetailsContents>
          </BookingDetailsCol>

          <BookingDetailsCol>
            <BookingDetailsContents>
              <PosterLink to="http://www.cgv.co.kr/movies/detail-view/?midx=88077">
                <Poster
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88077/88077_1000.jpg"
                  alt="poster"
                />
              </PosterLink>

              <BookingInfo>
                <BookingTitle to="http://www.cgv.co.kr/movies/detail-view/?midx=88077">
                  댓글부대
                </BookingTitle>
                <br />
                <BookingText>관람일시 2024.03.25(월)</BookingText>
                <BookingText>상영시간 16:45~19:41</BookingText>
                <BookingText>관람극장 CGV 강남</BookingText>
                <BookingText>상영관 1관 좌석 G-14</BookingText>
                <dBookingText>인원 일반 2명</dBookingText>
                <br />
                <BookingText>예매 번호 </BookingText>
                <BookingText>0012-3344-5566-789</BookingText>
                <br />
                <TicketButton onClick={openPopup}>나의 티켓</TicketButton>
              </BookingInfo>

              <PayInfo>
                <BookingText>신용카드</BookingText>
                <br />
                <BookingText>카드사명 신한카드</BookingText>
                <BookingText>카드번호 1234-1234-****-1234</BookingText>
                <br />
                <BookingText>결제일 2024-03-14</BookingText>
                <BookingText>총 결제금액 14,000원</BookingText>
              </PayInfo>
            </BookingDetailsContents>
          </BookingDetailsCol>
        </BookingDetailsFrame>
      </BookingDetails>

      {/* 팝업을 팝업 상태에 따라 렌더링 */}
      {popupOpen && (
        <Popup>
          {/* 팝업 닫기 버튼 */}
          <CloseButton onClick={closePopup}>X 닫기</CloseButton>
          {/* 팝업 내용 */}
          Your Ticket
          <Ticket>
            <Ticketleft>
              <TicketName>MOVIE TICKET</TicketName>
              <MovieTitle>
                <FilmIcon src={filmIcon} alt="필름 아이콘"></FilmIcon>
                <MovieName>movieName</MovieName>
              </MovieTitle>

              <ShowTimeDate>관람일시 showTimeDate</ShowTimeDate>
              <ShowTime>상영시간 showTime</ShowTime>
              <CinemaId>관람극장 cinemaId</CinemaId>
              <TheaterId>상영관 theaterId</TheaterId>
              <SeatNo>좌석 seatNo</SeatNo>
            </Ticketleft>
            <Ticketright>
              <TicketImage src={ticketImage} alt="티켓 이미지"></TicketImage>
              <MovieBookingNum>예매 번호 bookingNum</MovieBookingNum>
            </Ticketright>
          </Ticket>
        </Popup>
      )}
    </>
  );
};

export default MypageMain;

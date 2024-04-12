import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import searchIcon from "../images/searchIcon.png";
import userImage from "../images/userImage.png";
import { Link } from "react-router-dom";

const HeadersContainers = styled.div`
  background-color: #000000;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ededed40;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 25px;
  width: 1320px;
`;

const LogoLink = styled(Link)``;

const Logo = styled.img`
  width: 148px;
  height: 21px;
`;

const Dropdown = styled.div`
  width: 400px;
  min-width: 280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin-left: 10px;
`;
const MenuBar = styled.div`
  position: relative;
  padding: 5px 10px;
  /* display: flex; */
  justify-content: space-between;
  align-items: center; /* 세로 가운데 정렬 추가 */
`;

const Dropbtn = styled.button`
  font-size: 14px;
  border: none;
  color: #a5a5aa;
  font-weight: bold;
  background-color: inherit;
  cursor: pointer;

  ${MenuBar}:hover & {
    color: #ededed;
  }
`;

const DropdownBox = styled.div`
  display: none;
  position: absolute;
  top: 27px;
  left: 50%;
  transform: translate(-50%, 5px); /* 가로와 세로 모두 중앙으로 이동 */
  width: 105px;
  background-color: black;
  box-shadow: 5px 5px 10px rgba(180, 180, 180, 0.2);
  border-radius: 3px;
  z-index: 1;
  padding: 5px 5px;
  animation: slideDown 1s ease forwards;

  ${MenuBar}:hover & {
    display: block;
  }
`;

const ColumnLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: center;
  font-size: 13px;
  color: #ededed;
  padding: 5px 0;

  &:hover {
    font-weight: bolder;
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SearchContainer = styled.div`
  position: relative;
  opacity: 0.4;
`;

// 검색 아이콘
const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #555; /* 아이콘 색상 */
`;

// 스타일링된 검색 입력란
const SearchInput = styled.input`
  padding: 8px 12px;
  padding-left: 35px; /* 아이콘과 겹치지 않게 왼쪽 패딩 추가 */
  background-color: #ededed;
  border: none;
  border-radius: 2px;
  font-size: 12px;
  width: 290px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: #a0a0a0;
  }
`;

const UserImage = styled.img`
  border: 1.5 solid #ededed;
  border-radius: 50%;
  background-color: #b9babe;
  margin-left: 10px;
  opacity: 0.4;
`;

const BeforeLogIn = styled.div``;

const LogInButton = styled.button`
  background-color: inherit;
  border: none;
  color: #a5a5aa;
  padding: 8px 18px;
  text-decoration-color: #342222;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  background-color: black;
  border: solid 1px #b9b9bd;
  border-radius: 5px;
  padding: 5px 11px;
  color: white;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
`;

// 이미지를 클릭 가능한 링크로 감싸는 컴포넌트
const UserImageLink = styled(Link)``;

const Headers = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <HeadersContainers>
        <Navbar>
          <LogoLink to="">
            <Logo src={logo} alt="로고"></Logo>
          </LogoLink>
          <Dropdown>
            <MenuBar>
              <Dropbtn>영화</Dropbtn>
              <DropdownBox>
                <ColumnLink>장르</ColumnLink>
                <ColumnLink>다큐</ColumnLink>
                <ColumnLink>스릴</ColumnLink>
              </DropdownBox>
            </MenuBar>

            <MenuBar>
              <Dropbtn>박스오피스</Dropbtn>
              <DropdownBox>
                <ColumnLink to="/boxoffice/daily">일간</ColumnLink>
                <ColumnLink to="/boxoffice/monthly">주간</ColumnLink>
              </DropdownBox>
            </MenuBar>

            <MenuBar>
              <Dropbtn>플레이그라운드</Dropbtn>
              <DropdownBox>
                <ColumnLink to="/playground/comments">
                  지금 뜨는 코멘트
                </ColumnLink>
                <ColumnLink>공지사항</ColumnLink>
                <ColumnLink>이벤트</ColumnLink>
              </DropdownBox>
            </MenuBar>
          </Dropdown>

          <UserMenu>
            <SearchContainer>
              <SearchIcon src={searchIcon} alt="검색 아이콘" />
              <SearchInput
                type="search"
                placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
              />
            </SearchContainer>
            {isLoggedIn ? (
              <UserImageLink onClick={handleLogout}>
                {/* <UserImageLink to="/user-profile"> */}
                <UserImage src={userImage} alt="유저 이미지" />
              </UserImageLink>
            ) : (
              <BeforeLogIn>
                <LogInButton onClick={handleLogin}>로그인</LogInButton>
                <SignUpButton>회원가입</SignUpButton>
              </BeforeLogIn>
            )}
          </UserMenu>
        </Navbar>
      </HeadersContainers>
    </>
  );
};

export default Headers;

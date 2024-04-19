import React from "react";
import styled from "styled-components";
import grayLogo from "../images/grayLogo.png";
import kakaotalkIcon from "../images/kakaotalk.png";
import instagramIcon from "../images/instagram.png";
import facebookIcon from "../images/facebook.png";
import twitterIcon from "../images/twitter.png";

const Footer = styled.div`
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  justify-content: center;
`;

const UpperFooter = styled.div`
  background-color: #101113;
  color: white;
  font-size: 19px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Em = styled.em`
  color: rgb(255, 5, 88); /* 원하는 색상으로 변경 */
  font-size: 19px;
  font-weight: 500px;
  font-style: normal;
  margin: 0 8px;
`;

const LowerFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #1c1d1f;
`;

const FootersContainer = styled.div`
  height: 180px;
  /* justify-content: space-between;
  align-items: center;   */
  display: flex; /* 하단 정렬을 위해 flex로 변경 */
  flex-direction: column; /* 아래로 쌓이도록 컬럼 방향 설정 */
  justify-content: flex-end; /* 하단 정렬 */
  width: 1320px;
`;

const Slogan = styled.div`
  color: #98989a;
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  margin-bottom: 5px;
`;

const MainFooters = styled.div`
  display: flex;
  justify-content: space-between; /* 양쪽 정렬 */
  margin-bottom: 30px;
`;

const FooterElements = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Logo = styled.img`
  width: 80px;
  height: 13px;
  margin-right: 10px;
`;

const Copyright = styled.div`
  color: #848485;
  font-size: 11px;
  text-align: left;
`;

const SocialFlatform = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  /* align-items: center; */
  align-items: flex-end;
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const Footers = () => {
  return (
    <Footer>
      <UpperFooter>
        지금까지 <Em>★userCommentCnt개의 평가가 </Em>쌓였어요.
      </UpperFooter>

      <LowerFooter>
        <FootersContainer>
          <Slogan>나만을 위한 영화 추천 플랫폼, 감자밭</Slogan>
          <MainFooters>
            <FooterElements>
              <Logo className="grayLogo" src={grayLogo} alt="흑백 로고"></Logo>
              <Copyright>&copy; 2024 감자밭. All Rights Reserved.</Copyright>
            </FooterElements>
            <SocialFlatform>
              <SocialIcon
                className="kakaotalk"
                src={kakaotalkIcon}
                alt="카카오톡"
              />
              <SocialIcon
                className="instagram"
                src={instagramIcon}
                alt="인스타그램"
              />
              <SocialIcon
                className="facebook"
                src={facebookIcon}
                alt="페이스북"
              />
              <SocialIcon className="twitter" src={twitterIcon} alt="트위터" />
            </SocialFlatform>
          </MainFooters>
        </FootersContainer>
      </LowerFooter>
    </Footer>
  );
};

export default Footers;

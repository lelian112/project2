import styled from "styled-components";
import { Link } from "react-router-dom";

export const Movie = styled.div`
  width: 100%;
  background-color: #212529;
  color: #ededed;
  display: flex;
  justify-content: center;
`;

export const MoviePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

export const MovieInfoContainer = styled.div`
  width: 100%;
  height: 550px;
  border-bottom: 1px solid white;
`;

export const MovieBackgroundImg = styled.div`
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  /* background-position: center; */
  background-size: cover;
  background-repeat: no-repeat;
`;

export const MovieBackground = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  /* background: url(https://an2-img.amz.wtchn.net/image/v2/kL7WfkLDBmHsazMm3ofR6Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1Ua3lNSGd4TURnd2NUZ3dJbDBzSW5BaU9pSXZkakl2YzNSdmNtVXZhVzFoWjJVdk1UazRNamMwTmpZeE5UWXpORGN6SW4wLlNpRFZ6WVMyUXBfNEhKZFBoblBEZUZxZ2lEaFlVdTdCb3NTRE04VDZHams)     center center / cover no-repeat;*/

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const WrapMovieInfo = styled.div`
  width: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 32.47%,
    rgba(0, 0, 0, 0.6) 67.36%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const MovieTitle = styled.div`
  width: 1320px;
  padding-bottom: 60px;
`;

export const MovieNameKor = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 700;
`;
export const MovieNameEng = styled.div`
  font-size: 14px;
  margin-top: 16px;
`;
export const MovieInfo1 = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 8px;
`;
export const MovieReleaseAt = styled.div`
  margin-right: 6px;
`;
export const MovieGenre = styled.div`
  margin-right: 6px;
`;
export const MovieCountry = styled.div`
  margin-right: 6px;
`;
export const MovieInfo2 = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 8px;
`;
export const RunningTime = styled.div`
  margin-right: 6px;
`;
export const MovieAgeType = styled.div`
  margin-right: 6px;
`;
export const MovieInfo3 = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 16px;
`;
export const Ranking = styled.div`
  margin-right: 6px;
`;
export const TotalAudience = styled.div`
  margin-right: 6px;
`;

export const MovieContents = styled.div`
  width: 1320px;
`;

export const MovieContentsContainer = styled.div`
  background-color: #7a7a7a77;
  display: flex;
  padding: 30px 0 60px;
`;
export const LeftMovieContentsContainer = styled.div``;
export const Poster = styled.img`
  width: 280px;
  height: 400px;
  background-color: #ffffff7c;
`;
export const RightMovieContentsContainer = styled.div`
  flex-direction: column; /* 세로 방향으로 요소들을 배치 */
  flex: 1;
  margin-left: 32px;
`;
export const TopContents = styled.div`
  display: flex;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
`;
export const UserMovieRate = styled.div``;
export const Rate = styled.div``;
export const UserMovieWish = styled.div``;
export const UserComment = styled.div`
  cursor: pointer;
`;
export const BottomContents = styled.div``;
export const MoviePlot = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin: 20px 0 30px;
  line-height: 22px;
  /* white-space: pre-line */
  /* white-space: pre-wrap; */
`;
export const MoviePeople = styled.div`
  margin-top: 60px;
  /* height: 276px; */
`;
export const MoviePeopleTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const MoviePeopleName = styled.ul`
  padding-left: 22px;
`;
export const MovieDirector = styled.li``;
export const MovieActor = styled.li``;
export const UserReview = styled.div`
  margin-top: 60px;
`;

export const UserReviewTitleContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapUserReviewTitle = styled.div`
  display: flex;
`;

export const UserReviewTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const UserReviewCnt = styled.div`
  color: rgb(255, 47, 110);
  font-size: 24px;
  font-weight: 400;
  margin-left: 8px;
`;

export const MoreBtn = styled(Link)`
  background-color: inherit;
  color: rgb(255, 47, 110);
  text-decoration: none;
  font-size: 15px;
`;
export const UserReviewContentsContainer = styled.ul`
  column-gap: 8px;
  display: grid;
  grid-template-columns: 324px 324px 324px 324px;
  padding: 0;
`;
export const WrapUserReviewContents = styled.li`
  list-style-type: none;
  padding: 0 12px;
  background-color: black;
  border-radius: 6px;
`;
export const UserReviewContentsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
`;
export const WrapUserReviewContentsTitle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  margin: 11px 8px 11px 0px;
`;
export const UserName = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: white;
`;
export const MovieRate = styled.div`
  display: flex;
  align-items: center;
  color: #ededed;
  background-color: rgb(74, 74, 74);
  border: solid 1px rgb(234, 234, 234);
  border-radius: 13px;
  height: 26px;
  padding: 0 8px;
`;
export const RateImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 3px;
`;
export const UserRate = styled.div`
  font-size: 14px;
`;

export const UserReviewContents = styled.div`
  height: 120px;
  margin: 12px 0px 15px;
  overflow: hidden;
`;

export const UserReviewContentsMain = styled(Link)`
  white-space: normal;
  word-break: break-word;
  text-decoration: none;
  color: inherit;
`;

export const ActiveArea = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  border-top: 1px solid #ededed;
`;
export const Like = styled.div`
  display: flex;
  align-items: center;
`;
export const LikeImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 3px;
`;

export const LikeCnt = styled.div`
  font-size: 14px;
`;
export const UserCommentComment = styled.div`
  display: flex;
  align-items: center;
`;
export const UserCommentCommentImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 0px 3px 0px 13px;
`;
export const UserCommentCommentCnt = styled.div`
  font-size: 14px;
`;

export const Stillcut = styled.div`
  margin-top: 60px;
`;
export const StillcutTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const StillcutContentsContainer = styled.div`
  position: relative;
  /* padding: 0 5px; */
  height: 320px;
`;

export const WrapStillcutContents = styled.ul`
  padding: 0;
  margin-top: 5px;
  margin-bottom: 25px;
  display: flex;
  overflow-x: scroll;
  -webkit-scrollbar: no-button;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  column-gap: 4px;
  scroll-behavior: smooth;
`;
export const StillcutContents = styled.li`
  width: calc(33.3333%);
  height: 258px;
  padding: 0 5px;
  list-style-type: none;
  border: 1px solid black;
  border-radius: 3px;
  background-image: url(${(props) => props.imageUrl}),
    linear-gradient(black, black);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Teaser = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
`;
export const TeaserTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const TeaserContentsContainer = styled.div`
  position: relative;
  /* padding: 0 5px; */
  height: 320px;
`;

export const WrapTeaserContents = styled.ul`
  padding: 0;
  margin-top: 5px;
  margin-bottom: 25px;
  display: flex;
  overflow-x: scroll;
  -webkit-scrollbar: no-button;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  column-gap: 4px;
  scroll-behavior: smooth;
`;

export const TeaserLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const TeaserContents = styled.li`
  width: 440px;
  flex-shrink: 0;
  height: 258px;
  padding: 0 5px;
  list-style-type: none;
  border: 1px solid black;
  border-radius: 3px;

  background-color: black;
  text-align: center;
  align-content: center;
  font-size: 25px;

  /* background-image: url(${(props) => props.imageUrl}); */
  /* background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */
`;

// 팝업 창 스타일
export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #212529;
  width: 480px;
  min-height: 460px;
  border: 1px solid #ededed;
  border-top-left-radius: 16px;
  padding: 16px 20px 18px;
  z-index: 999;
`;

// 팝업 닫기 버튼 스타일
export const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 11px;
  font-weight: bold;
  color: white;
  background: black;
  border-radius: 7px;
`;

export const CommentMenu = styled.div`
  /* width: 423px; */
  font-weight: bold;
  font-size: 17px;
  color: #ededed;
  margin-bottom: 15px;
`;

export const TextContainer = styled.div`
  /* width: 423px; */
  height: auto;
  display: flex;
  overflow-y: scroll;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 360px;
  padding: 2px;
  margin: 1px 0;
  border: 1px solid none;
  border-radius: 5px;
  font-size: 17px;
  resize: none;
  background-color: #ededed40;

  /* Placeholder styling */
  &::placeholder {
    font-size: 17px;
    color: #999;
  }
`;

export const WrapSave = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const SaveBtn = styled.button`
  background-color: rgb(255, 47, 110);
  height: 38px;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 400;
  padding: 0px 40px;
  border-radius: 7px;
  border: 0px none rgb(255, 255, 255);
  opacity: 0.5;
  margin-left: auto;
`;

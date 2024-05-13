import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const navigate = useNavigate();

  const [movies, setMovies] = React.useState([]);
  const [visibleCount, setVisibleCount] = React.useState(5);

  const gamjaFarmMeaning = () => {
    const messageContent = (
      <span>
        감: 감자는 맛이 좋고
        <br />
        자: 자기계발에 좋습니다
      </span>
    );
    const botMessage = createChatBotMessage(messageContent, {
      withAvatar: true,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const searchtitle = () => {
    const messageContent = (
      <span>
        검색하고 싶은 영화를 제목 뒤에 적어주세요! <br /> 예시: 제목 쿵푸팬더
      </span>
    );
    const botMessage = createChatBotMessage(messageContent, {
      withAvatar: true,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSearch = (message) => {
    const searchText = message.replace("제목 ", "");
    axios
      .get(`/search/title/${searchText}`)
      .then((response) => {
        console.log("API Response:", response.data); // 응답 데이터 로깅
        // 영화 데이터가 있는지 확인
        if (response.data.length > 0) {
          setMovies(response.data);
          setVisibleCount(5); // 초기에는 5개만 표시
          displayMovies(response.data.slice(0, 5));
        } else {
          // 데이터가 없을 경우의 처리
          const noDataMessage = createChatBotMessage(
            "검색된 영화가 없습니다. 영화 제목을 다시한번 입력해주세요."
          );
          setState((prev) => ({
            ...prev,
            messages: [...prev.messages, noDataMessage],
          }));
        }
      })
      .catch((error) => {
        console.error("Search failed:", error);
        const errorMessage = createChatBotMessage(
          "검색에 실패했습니다. 제목을 입력하고 한칸 띄고 검색하고싶은 영화의 제목을 입력해주세요"
        );
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, errorMessage],
        }));
      });
  };

  const displayMovies = (movies) => {
    const messages = movies.map((item) => {
      const messageContent = (
        <div onClick={() => window.open(`/movie/${item.code}`, "_blank")}>
          <img
            src={item.poster}
            alt={item.name_kor}
            style={{ cursor: "pointer", width: "100px" }}
          />
          <br />
          <strong>{item.name_kor}</strong>
          <p>{item.release_at}</p>
        </div>
      );
      return createChatBotMessage(messageContent);
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, ...messages],
    }));
  };

  // const handleShowMore = () => {
  //   const nextVisibleCount = visibleCount + 5;
  //   if (nextVisibleCount < movies.length) {
  //     const additionalMovies = movies.slice(visibleCount, nextVisibleCount);
  //     displayMovies(additionalMovies);
  //     setVisibleCount(nextVisibleCount); // 상태 업데이트
  //   } else {
  //     console.log("No more movies to display, hence no 'show more' button.");
  //   }
  // };

  // const addShowMoreButton = () => {
  //   const showMoreButton = createChatBotMessage("더 보기", {
  //     widget: "showMoreButton",
  //   });

  //   setState((prev) => ({
  //     ...prev,
  //     messages: [...prev.messages, showMoreButton],
  //   }));
  // };

  const movieName = () => {
    searchtitle("/");
    // navigate("/login");
  };

  const movieNew = () => {
    navigate("/boxoffice/daily");
  };

  const movieLike = () => {
    const userId = localStorage.getItem("id");
    if (userId) {
      navigate(`/mypage/${userId}/wish/1`);
    } else {
      alert("로그인 후 확인해주세요.");
      navigate(`/login`);
    }
  };

  const pythonAi = () => {
    navigate("/mypage");
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage("저도 반가워요");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOptions = () => {
    const botMessage = createChatBotMessage(
      "당첨되셨습니다. 팀장을 찾아주세요."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUnknownMessage = () => {
    const botMessage = createChatBotMessage(
      "죄송해요 무슨 말씀이신지 잘 모르겠어요 ㅜㅜ"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            gamjaFarmMeaning,
            movieName,
            movieNew,
            movieLike,
            pythonAi,
            handleHello,
            handleOptions,
            handleUnknownMessage,
            handleSearch,
            // handleShowMore,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

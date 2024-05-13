import { createChatBotMessage } from "react-chatbot-kit";
import userAvatar from "../images/logoImage.png";
import botAvatar from "../images/potato_admin.png";
import Buttons from "./Buttons";

const MyAvatar = (props) => {
  return (
    <img
      src={botAvatar}
      alt="Farm Owner"
      style={{ width: "15%", height: "15%" }}
    />
  );
};

const MyCustomAvatar = (props) => {
  return (
    <img src={userAvatar} alt="User" style={{ width: "20%", height: "20%" }} />
  );
};

const ChatConfig = {
  botName: '"감자밭 파수꾼"',
  // initialMessages: [createChatBotMessage(`안녕하세요!!! 저는 ${botName}입니다.`)],
  initialMessages: [
    createChatBotMessage(
      <span>
        안녕하세요 파수꾼 '왕감자' 입니다! <br /> 무엇을 도와드릴까요?
      </span>,
      {
        withAvatar: true,
        delay: 500,
        widget: "widgetButtons",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "widgetButtons",
      widgetFunc: (props) => <Buttons {...props} />,
      props: {
        buttons: [
          {
            text: <span>&ensp;&ensp;감자밭이란?&ensp;&ensp;</span>,
            action: "gamjaFarmMeaning",
          },
          { text: <span>&nbsp;제목검색&nbsp;</span>, action: "movieName" },
          { text: <span>최신영화</span>, action: "movieNew" },
          { text: <span>찜한영화</span>, action: "movieLike" },
          // { text: <span>맟춤영화</span>, action: `pythonAi` },
        ],
      },
    },
    {
      widgetName: "showMoreButton",
      widgetFunc: ({ actionProvider }) => (
        <button
          className="show-more-button"
          onClick={actionProvider.handleShowMore}
        >
          더 보기
        </button>
      ),
    },
  ],
  customComponents: {
    botAvatar: (props) => <MyAvatar {...props} />,
    userAvatar: (props) => <MyCustomAvatar {...props} />,
  },
};

export default ChatConfig;

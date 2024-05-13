import React from "react";
import "./Buttons.css";

const Buttons = ({ buttons, actionProvider }) => {
  const handleClick = (action) => {
    actionProvider[action]();
  };

  return (
    <div className="options-container">
      {buttons.map((button, index) => (
        <button
          className="options-button"
          key={index}
          onClick={() => handleClick(button.action)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

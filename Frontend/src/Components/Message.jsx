import React from "react";
import user from "../assets/pro7.svg";
const Message = () => {
  return (
    <div className={`chat-bubble`}>
      <img className="chat-bubble__left" src={user} alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">Timothy Kimani</p>
        <p className="user-message">Hello, I would like a bag potatoes.</p>
      </div>
    </div>
  );
};

export default Message;

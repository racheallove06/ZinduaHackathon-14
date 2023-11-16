import React from "react";

const Message = () => {
  return (
    <div className={`chat-bubble`}>
      <img className="chat-bubble__left" src="" alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">Timothy Kimani</p>
        <p className="user-message">Hello, I would like a bag potatoes.</p>
      </div>
    </div>
  );
};

export default Message;

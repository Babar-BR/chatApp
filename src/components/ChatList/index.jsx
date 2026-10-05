import React from "react";
import "./index.css";
import ChatMessage from "../ChatMessage";
const ChatList = ({messages, likeMessage}) => {
  return (
    <div className="chat-list">
      {messages.map(eachMessage => (
        <ChatMessage
          key={eachMessage.id}
          message={eachMessage}
          likeMessage={likeMessage}
        />
      ))}
    </div>
  );
};

export default ChatList;
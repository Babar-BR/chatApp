import React from "react";
import "./index.css";

const ChatMessage = ({message, likeMessage}) => {
  return (
    <div className="chat-message">
      <div className="avatar">{message.username.charAt(0).toUpperCase()}</div>
      <div>
        <h3>{message.username}</h3>
        <p>{message.message}</p>
      </div>

      <button onClick={() => likeMessage(message.id)}>
        👍 {message.likes}
      </button>
    </div>
  );
};

export default ChatMessage;
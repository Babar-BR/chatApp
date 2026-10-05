import React, {useState} from "react";
import "./index.css";

const ChatInput = ({addMessage}) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    addMessage(message);

    setMessage("");
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={message}
        placeholder="Type a message..."
        onChange={event => setMessage(event.target.value)}
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
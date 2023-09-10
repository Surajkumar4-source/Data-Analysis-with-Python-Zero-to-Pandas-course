// src/components/ChatMessage.js
import React from 'react';

function ChatMessage({ message }) {
    return (
        <div className="ChatMessage">
            <span className="UserName">{message.user}:</span>
            <p className="MessageText">{message.text}</p>
        </div>
    );
}

export default ChatMessage;

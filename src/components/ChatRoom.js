// src/components/ChatRoom.js
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import UserList from './UserList';

function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    return (
        <div className="ChatRoom">
            <div className="ChatContainer">
                <div className="ChatMessages">
                    {messages.map((message, index) => (
                        <ChatMessage key={index} message={message} />
                    ))}
                </div>
                <ChatInput addMessage={addMessage} />
            </div>
            <UserList users={users} />
        </div>
    );
}

export default ChatRoom;

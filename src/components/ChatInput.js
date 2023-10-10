
import React, { useState } from 'react';

function ChatInput({ addMessage }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addMessage({ text, user: 'Jack'  }); // You can replace 'User' with the actual username
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Type your message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
}

export default ChatInput;

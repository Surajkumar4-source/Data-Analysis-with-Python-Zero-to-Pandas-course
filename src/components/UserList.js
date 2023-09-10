// src/components/UserList.js
import React from 'react';

function UserList({ users }) {
    return (
        <div className="UserList">
            {/* <h2>Ram</h2>
            <h2>Sham</h2> */}
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;

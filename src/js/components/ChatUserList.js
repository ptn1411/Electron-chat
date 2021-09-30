import React from "react";
export default function ChatUserList({users = []}) {
    return(  <div className="chat-container">
        <ul className="chat-box chatContainerScroll">
            { users.map(user => (
                <li
                    key={user.uid}
                    className="item">
                    <div className="item-status">
                        <img
                            src={user.avatar}
                            alt="Retail Admin" />
                        <span className={`status ${user.state}`}></span>
                    </div>
                    <p className="name-time">
                        <span className="name mr-2">{user.username}</span>
                    </p>
                </li>
            ))
            }
        </ul>
    </div>)
}
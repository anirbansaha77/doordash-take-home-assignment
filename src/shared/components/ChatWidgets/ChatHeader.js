import React from 'react';
import './UserInfo.css';


function ChatHeader({Chat}) {
    console.log('chat header',Chat)
    if(!Chat.selectedRoom.users) {
        return null;
    }
    return (
        <div className="headerContainer">
            <div className="userName">
                {Chat.selectedRoom.name}
            </div>
            <div className="userOnlineText">
                {console.log(Chat.selectedRoom.users && Chat.selectedRoom.users)}
                {Chat.selectedRoom.users && Chat.selectedRoom.users.map((user, index) => {
                    const isSelected = user === Chat.loggedInUser;
                    let userName = user;
                    if(Chat.selectedRoom.users.length-1 > index ) {
                        userName += ' ,';
                    }
                    return(
                        <span className={isSelected ? 'selectedUser' : ''} key={`user${index}`}>{userName}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default ChatHeader;

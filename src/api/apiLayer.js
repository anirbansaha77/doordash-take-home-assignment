
import MockChatRoomData from './Data/ChatRoomData';
export function getRooms() {
    return new Promise((resolve, reject) => {
        const chatRooms = [];
        MockChatRoomData.forEach(item => {
            chatRooms.push({
                id: item.id,
                name: item.name,
            });
        });
        resolve(chatRooms);
    });
}

export function getRoomDetails(id) {
    return new Promise((resolve, reject) => {
        let chatRoomDetails = {};
        MockChatRoomData.forEach(item => {
            if(item.id === id) {
                chatRoomDetails=item;
            }
        });
        resolve(chatRoomDetails);
    });
}

export function getMessages(roomId) {
    return new Promise((resolve, reject) => {
        let messages = [];
        MockChatRoomData.forEach(item => {
            if(item.id === roomId) {
                messages = item.messages;
            }
        });
        resolve(messages);
    });
}

export function postMessage(roomId, name, message ) {
    return new Promise((resolve, reject) => {
        MockChatRoomData.forEach(item => {
            if(item.id === roomId) {
                item.messages.push({ name, message});
            }
        });
        resolve({message: "ok"});
    });
}


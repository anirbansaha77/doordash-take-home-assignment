import { getRooms, getRoomDetails, postMessage, getMessages } from '../../api/apiLayer';

export function updateChat(payload) {
    return((dispatch, getState) => {
        dispatch({type: 'UPDATE_CHAT', payload });
    });
}

export function userLogin(history) {
    return((dispatch, getState) => {
        getRooms().then(res => {
            const payload = {};
            payload.chatRooms = res;
            payload.selectedRoom = res[0];
            dispatch({type: 'UPDATE_CHAT', payload });
            dispatch(fetchRoomDetails(res[0].id))
            history.push(`/ChatRooms`);
        });
    });
}

export function fetchRoomDetails(roomid) {
    return((dispatch, getState) => {
        let contact = getState().Chat.loggedInUser;
        getRoomDetails(roomid).then(res => {
            const payload = {};
            payload.selectedRoom = res;
            if(!payload.selectedRoom.users.includes(contact)) {
                payload.selectedRoom.users.push(contact);
            }
            dispatch({type: 'UPDATE_CHAT', payload });
            const element = document.getElementById('chatWindow').lastChild;
            element && element.scrollIntoView();
        });
    });
}

export function sendChat() {
    return((dispatch, getState) => {
        const message = getState().Chat.inputTempChat;
        const user = getState().Chat.loggedInUser;
        const roomid = getState().Chat.selectedRoom.id;
        postMessage(roomid, user, message).then(res => {
            getMessages(roomid).then(messages => {
                console.log(messages);
                // update messages
                // reset temp chat
                const payload = {};
                payload.inputTempChat = '';
                dispatch({type: 'UPDATE_CHAT', payload });
                const element = document.getElementById('chatWindow').lastChild;
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                console.log('element', element);
            });
        });
    });
}
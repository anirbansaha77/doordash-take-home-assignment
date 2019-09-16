import ActionTypes from '../actiontypes/ActionTypes';

const initialState = {
    loggedInUser: '',
    chatRooms: [],
    messages: [],
    users:[],
    selectedRoom: {},
    inputTempChat: '',
};

// default reducer function
export default function ContactsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.USER_LOGIN:
            return Object.assign({}, state, {loggedInUser: action.loggedInUser});
        case ActionTypes.UPDATE_CHAT:
            return Object.assign({}, state, action.payload);
        case ActionTypes.UPDATE_MESSAGES:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
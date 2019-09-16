import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ChatActions from '../../../redux/actions/ChatActions';
import './Chat.css';

class Messages extends React.Component {
    selectRoom=(roomid)=> {
        console.log("room details called", roomid)
        this.props.actions.fetchRoomDetails(roomid);
    }
    render() {
        const rooms = this.props.Chat.chatRooms;
        return (
            <div>
                <div>
                    {
                        rooms && rooms.map(item => {
                            // const invoiceColor = item.status === 0 ? "red" : "green";
                            // console.log(item, invoiceColor)
                            const isSelected = item.id === this.props.Chat.selectedRoom.id;
                            return(
                                <div
                                    onClick={() => this.selectRoom(item.id)}
                                    className={`chatroom ${isSelected ? 'selectedRoom' : ''}`}
                                    key={`chatroomItem${item.id}`}>
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Chat: state.Chat,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
    actions: bindActionCreators(Object.assign( {}, ChatActions), dispatch ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

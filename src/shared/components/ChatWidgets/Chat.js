import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ChatActions from '../../../redux/actions/ChatActions';
import './Chat.css';

class Messages extends React.Component {
    onChange=(event)=> {
        const payload={};
        payload[event.target.name] = event.target.value;
        this.props.actions.updateChat(payload);
    }
    sendChat= (event) => {
        if(this.props.Chat.inputTempChat.length > 0) {
            event && event.preventDefault();
            this.props.actions.sendChat();
        }
    }

    onKeyDown= (event)=> {
        if (event.key === 'Enter') {
            this.sendChat();
            // this.props.history.push('/ChatRooms');
          }
    }

    render() {
        console.log(this.props.Chat)
        const messages = this.props.Chat.selectedRoom.messages;
        return (
            <div style={{"minHeight":"100%"}}>
                <div className="chatHistory" id="chatWindow">
                    {
                        messages && messages.map((item, index)=>{
                            const isCurrentUserChat = item.name === this.props.Chat.loggedInUser;
                            const messagebubbleclass = isCurrentUserChat ? "bubbleMe" : "bubbleOther";

                            return(
                                <div style={{"width": "100%"}}>
                                    <div className={messagebubbleclass}>
                                        {item.message}
                                    </div>
                                    {!isCurrentUserChat && <div  className="userOther">
                                        {item.name}
                                    </div>}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="sendChatContainer">
                    <div className="sendChatInput">
                        <input
                            name="inputTempChat"
                            className="sendChatInputButton"
                            placeholder="Type a message....."
                            type='text'
                            onKeyDown={this.onKeyDown}
                            onChange={this.onChange}
                            value={this.props.Chat.inputTempChat} />
                    </div>
                    <div >
                        <a className="sendChatInputLink" href='/' onClick={this.sendChat} >Send</a>
                    </div>
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

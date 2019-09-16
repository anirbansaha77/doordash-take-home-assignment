import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ChatActions from '../../redux/actions/ChatActions';
import UserInfo from '../../shared/components/ChatWidgets/UserInfo';
import ChatRooms from '../../shared/components/ChatWidgets/ChatRooms';
import ChatHeader from '../../shared/components/ChatWidgets/ChatHeader';
import Chat from '../../shared/components/ChatWidgets/Chat';
import './Home.css';

class Home extends React.Component {
    componentDidMount() {
        if(!this.props.Chat.loggedInUser) {
            this.props.history.push('/');
        }
    }
    onEditClick= (id)=> {
        console.log(id)
        this.props.actions.selectContact(id);
        this.props.history.push(`/EditContact?id=${id}`)
    }
    render() {
        return (
            <div className="chatContainer">
                <div className="leftContainer">
                    <div>
                        <UserInfo user={this.props.Chat.loggedInUser}/>
                    </div>
                    <div>
                        <ChatRooms  />
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="chatHeaderContainer">
                        <ChatHeader Chat={this.props.Chat} />
                    </div>
                    <div className="chatBodyContainer">
                        <Chat />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);



    
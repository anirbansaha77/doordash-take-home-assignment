import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ChatActions from '../../redux/actions/ChatActions';
import './LogInForm.css';

class LogInForm extends React.Component {
    onChange=(event)=> {
        const payload={};
        payload[event.target.name] = event.target.value;
        this.props.actions.updateChat(payload);
    }

    onSubmit= (event) => {
        this.props.actions.userLogin(this.props.history);
    }

    onKeyDown= (event)=> {
        if (event.key === 'Enter') {
            this.onSubmit();
            // this.props.history.push('/ChatRooms');
          }
    }

    render() {
        return (
            <div className="parent">
                <div className="formcontainer">
                    <div className="inputContainer">
                        <input onKeyDown={this.onKeyDown} className="usernameInput" name="loggedInUser" placeholder="Type your username..." type="text" onChange={this.onChange} />
                    </div>
                    <input className="inputButton" type="submit"  value="Join the DoorDash Chat!" onClick={this.onSubmit} />
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);

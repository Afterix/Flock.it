import React, { Component, PropTypes } from 'react';
import MessageButtonBar from './MessageButtonBar';
import logo from '../logo.svg';
import './Message.css'; 


class Message extends Component {
  render() {
    return (
      <div className='messageContainer'>
          <img className='profilePicture' src={logo}/>
          <div className='message-timestamp'>{this.props.timestamp.toLocaleString('en-US')}</div>
          <div className='message'>{this.props.message}</div>
          <MessageButtonBar messageId={this.props.messageId} />
      </div>
    );
  }
}

Message.propTypes = {
    messageId : PropTypes.number.isRequired,
    userId : PropTypes.string.isRequired,
    timestamp : PropTypes.object.isRequired,
    message : PropTypes.string.isRequired
};

export default Message;
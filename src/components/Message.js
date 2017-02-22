import React, { Component, PropTypes } from 'react';
import './Message.css'; 


class Message extends Component {
  render() {
    return (
      <div className='messageContainer'>
          <img className='profilePicture' src={this.props.profilePictureSource}/>
          <div className='message'>{this.props.message}</div>
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  profilePictureSource: PropTypes.string.isRequired
};

export default Message;
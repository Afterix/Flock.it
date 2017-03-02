import React, { Component, PropTypes } from 'react';
import {MessageButtonBar , MessageButtonBarEditView } from './MessageButtonBar';
import logo from '../logo.svg';
import './Message.css'; 


class Message extends Component {
    
//Reference to the textarea when on message edit mode
textarea = {}

state = {
    isEditMode : false
}

componentDidUpdate = () => {
    if (this.state.isEditMode) {
        this.textarea.focus();
    }
}

onDeleteClick = () => {
    this.props.sendDeleteMessageAction();
}

onEditMessageReady = () => {
     this.setState({ isEditMode : false});
     this.props.sendEditMessageAction(this.textarea.value);
}
onCancelClick = () => {
    this.setState({ isEditMode : false});
}

 onEditClick = () =>  {
     this.setState({ isEditMode : true});
 }

 messageReadView = () => {
    return (
      <div className='messageContainer'>
          <img className='profilePicture' src={logo}/>
          <div className='message-timestamp'>{this.props.timestamp.toLocaleString('en-US')}</div>
          <div className='message'>{this.props.message}</div>
          <MessageButtonBar messageId={this.props.messageId} onDeleteClick={this.onDeleteClick} onEditClick={this.onEditClick}/>
      </div>
    );
 }

 messageEditView = () => {
    return (
      <div className='messageContainer'>
          <img className='profilePicture' src={logo}/>
          <div className='message-timestamp'>{this.props.timestamp.toLocaleString('en-US')}</div>
          <textarea className='message' ref={node => {this.textarea = node}} defaultValue={this.props.message}></textarea>
          <MessageButtonBarEditView messageId={this.props.messageId} onEditMessageClick={this.onEditMessageReady} onCancelClick={this.onCancelClick} />
      </div>
    );

 }

  render() {
      if (!this.state.isEditMode) {
          return this.messageReadView();
      } else {
          return this.messageEditView();
      }
  }
}

Message.propTypes = {
    messageId : PropTypes.number.isRequired,
    userId : PropTypes.string.isRequired,
    timestamp : PropTypes.object.isRequired,
    message : PropTypes.string.isRequired,
    sendDeleteMessageAction : PropTypes.func.isRequired,
    sendEditMessageAction : PropTypes.func.isRequired
};

export default Message;
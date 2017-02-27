import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { addNewMessage } from '../actions/actions'
import './NewMessageBox.css'; 


let NewMessageBox = ({dispatch}) => {
  let textarea;
    return (
      <div className="NewMessageBox">
          <textarea ref={node => {textarea = node}} placeholder="What's up?"></textarea>
          <button onClick={event => {
            dispatch(addNewMessage(textarea.value, "1"))
            textarea.value = ''
            }
          }>Send</button>
      </div>
    );
}

NewMessageBox = connect()(NewMessageBox);

export default NewMessageBox;
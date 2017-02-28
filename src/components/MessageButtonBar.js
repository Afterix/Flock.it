import React, {Component} from "react";
import { connect } from 'react-redux';
import { deleteMessage } from '../actions/actions';
import './MessageButtonBar.css';

let MessageButtonBar = ({dispatch, messageId}) => {
    return (
        <div className="message-button-container">
            <button onClick={event => {
                dispatch(deleteMessage(messageId))
                }
            }>
                <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
            </button>
            <button onClick={console.log('edit clicked!')}>
                <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
            </button>
        </div>
    );
}

MessageButtonBar = connect()(MessageButtonBar);

export default MessageButtonBar; 
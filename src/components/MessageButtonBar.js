import React, {Component} from "react";
import { connect } from 'react-redux';
import './MessageButtonBar.css';

let MessageButtonBar = ({dispatch, messageId, onDeleteClick, onEditClick}) => {
    return (
        <div className="message-button-container">
            <button className="message-button" onClick={onDeleteClick}>
                <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
            </button>
            <button className="message-button" onClick={onEditClick}>
                <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
            </button>
        </div>
    );
}

MessageButtonBar = connect()(MessageButtonBar);

let MessageButtonBarEditView = ({dispatch, messageId, onEditMessageClick, onCancelClick}) => {
    return (
        <div className="message-button-container">
            <button className="ok-button message-button" onClick={onEditMessageClick}>
                <i className="fa fa-check fa-2x" aria-hidden="true"></i>
            </button>
            <button className="cancel-button message-button" onClick={onCancelClick}>
                <i className="fa fa-ban fa-2x" aria-hidden="true"></i>
            </button>
        </div>
    );

} 

module.exports = {
    MessageButtonBar,
    MessageButtonBarEditView
}
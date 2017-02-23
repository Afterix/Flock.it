import React, {Component} from "react";
import NewMessageBox from './NewMessageBox.js';
import Message from './Message.js';
import logo from '../logo.svg';

class MainPage extends Component{
    render(){
        return (
            <div>
                <NewMessageBox />
                <Message message="test message" profilePictureSource={logo} />
            </div>
        );
    }
}

export default MainPage
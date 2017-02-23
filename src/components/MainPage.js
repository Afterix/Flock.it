import React, {Component} from "react";
import NewMessageBox from './NewMessageBox.js';
import MessageTimeLine from './MessageTimeLine.js';
import logo from '../logo.svg';
import './MainPage.css'; 

class MainPage extends Component{
    render(){
        const messages = [
            {
                text : "test message one", 
                profilePicSrc : logo
            },
            {
                text : "test message two", 
                profilePicSrc : logo
            },
        ];
        return (
            <div className="mainContainer">
                <NewMessageBox />
                <MessageTimeLine messages={messages}/>
            </div>
        );
    }
}

export default MainPage
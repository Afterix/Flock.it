import React, {Component} from "react";
import NewMessageBox from './NewMessageBox';
import MessageTimeLineContainer from './containers/MessageTimeLineContainer';
import logo from '../logo.svg';
import './MainPage.css'; 

class MainPage extends Component{
    render(){
        return (
            <div className="mainContainer">
                <NewMessageBox/>
                <MessageTimeLineContainer />
            </div>
        );
    }
}

export default MainPage
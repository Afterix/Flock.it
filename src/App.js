import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css'; 
import NewMessageBox from './components/NewMessageBox.js';
import Message from './components/Message.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>flock.it</h2>
        </div>
        <NewMessageBox/> 
        <Message message="test message" profilePictureSource={logo}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

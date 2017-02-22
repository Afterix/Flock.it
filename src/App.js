import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css'; 
import NewMessageBox from './components/NewMessageBox.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>flock.it</h2>
        </div>
        <NewMessageBox/> 
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

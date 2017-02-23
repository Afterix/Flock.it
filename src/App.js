import React, { Component, PropTypes } from 'react';
import MainPage from './components/MainPage.js';
import './App.css'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>flock.it</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

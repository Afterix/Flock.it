import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
<<<<<<< HEAD
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lok.it</h2>
          
        </div>

        {this.props.children}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
          <h2>flock.it</h2>
          {/*{this.props.children}*/}
        </div>
>>>>>>> fd57a4f70152006bf5fed3bc8cddf4ba84944352
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

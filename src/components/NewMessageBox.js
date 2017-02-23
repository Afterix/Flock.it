import React, { Component, PropTypes } from 'react';
import './NewMessageBox.css'; 


class NewMessageBox extends Component {

  handleSendClick = () => {
    console.log("click!");
  }

  render() {
    return (
      <div className="NewMessageBox">
          <textarea placeholder="What's up?"></textarea>
          <button onClick={this.handleSendClick}>Send</button>
      </div>
    );
  }
}

NewMessageBox.propTypes = {
};

export default NewMessageBox;
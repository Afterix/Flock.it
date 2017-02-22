import React, { Component, PropTypes } from 'react';
import './NewMessageBox.css'; 


class NewMessageBox extends Component {
  render() {
    return (
      <div className="NewMessageBox">
          <textarea placeholder="What's up?"></textarea>
      </div>
    );
  }
}

NewMessageBox.propTypes = {
};

export default NewMessageBox;
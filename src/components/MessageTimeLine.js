import React, {Component} from "react";
import Message from './Message.js';

class MessageTimeLine extends Component{
    render(){
        const messages = this.props.messages.map((message) =>
            <Message message={message.text} profilePictureSource={message.profilePicSrc} />
        );

        return (
            <div>
                {messages}
            </div>
        );
    }
}

MessageTimeLine.propTypes = {
    messages : React.PropTypes.array
};

export default MessageTimeLine; 
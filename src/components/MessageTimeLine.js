import React, {Component} from "react";
import MessageContainer from './containers/MessageContainer';

class MessageTimeLine extends Component{
    render(){
        let messages = this.props.messages.map((message) =>
            <MessageContainer message={message.text} messageId={message.messageId} 
            timestamp={message.timestamp} userId={message.userId}/>
        );

        //Sort the messages descending order based on timestamp 
        messages = messages.sort(function(message, other) {
            return other.props.timestamp.getTime() - message.props.timestamp.getTime();
        });

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
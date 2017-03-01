import { connect } from 'react-redux';
import Message from '../Message';
import { deleteMessage, editMessage } from '../../actions/actions';


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch, props) => {
    return ({
        sendDeleteMessageAction: () => {
            dispatch(deleteMessage(props.messageId))
        },
        sendEditMessageAction: (newText) => {
            dispatch(editMessage(props.messageId, newText))
        }
    })
};

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);

export default MessageContainer;
import { connect } from 'react-redux';
import MessageTimeLine from '../MessageTimeLine';


const mapStateToProps = (state) => {
  return {
    messages : state.messages
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    }
};

const MessageTimeLineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageTimeLine);

export default MessageTimeLineContainer;
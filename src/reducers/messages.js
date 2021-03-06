let MESSAGE_ID = 0;


const message = (state ={}, action) => {
    switch(action.type) {
        case 'ADD_MESSAGE':
            return {
                messageId : MESSAGE_ID++,
                timestamp : new Date(),
                userId : action.userId,
                text: action.text
            }
        default: 
            return state;
    }
};

const messages =  (state = [], action) => {
    switch(action.type) {
        case 'ADD_MESSAGE':
            return [
                ...state,
                message(undefined, action)
            ]
        case 'DELETE_MESSAGE':
            return state.filter((val) => {
                return val.messageId !== action.messageId;
            });
        case 'EDIT_MESSAGE': 
            state.map(function(msg) {
                if (msg.messageId === action.messageId) {
                    msg.text = action.text;
                }
            });
            return [...state];
        default: 
            return state;
    }
};
export default messages;
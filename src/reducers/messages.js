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
        default: 
            return state;
    }
};
export default messages;
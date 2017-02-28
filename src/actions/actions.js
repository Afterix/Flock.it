var generatedMsgId= 0;

export const addNewMessage = (text, userId) => {
  return {
    type: 'ADD_MESSAGE',
    userId : userId,
    text : text
  }
}

export const deleteMessage = (messageId) => {
  return {
    type: 'DELETE_MESSAGE',
    messageId : messageId 
  }
}
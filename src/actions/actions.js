var generatedMsgId= 0;

export const addNewMessage = (text, userId) => {
  return {
    type: 'ADD_MESSAGE',
    userId : userId,
    text : text
  }
}
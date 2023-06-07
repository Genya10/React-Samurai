const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE,
  body: body,
});
export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      state.addNewMessage = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.addNewMessage;
      state.addNewMessage = "";
      state.messagesData.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;

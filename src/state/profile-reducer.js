import { type } from "@testing-library/user-event/dist/type";

const ADD_TEXT = "ADD-TEXT";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
export const addTextCreator = () => ({ type: ADD_TEXT });
export const updateNewPostCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});

const profileReducer=(state,action)=>{
switch(action.type){
    case ADD_TEXT:
        let newPost = {
            id: 4,
            message:state.addNewText,
            like: 0,
          };
          state.postData.push(newPost);
          state.addNewText = "";
          return state;
          case UPDATE_NEW_POST:
            state.addNewText = action.newText;
            return state;
            default:
                return state;
}
}
export default profileReducer;



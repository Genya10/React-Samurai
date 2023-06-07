import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addTextCreator,updateNewPostCreator } from "../../../state/profile-reducer";

const MyPosts = (props) => {
let postElements = props.postData.map((post)=>{
  return <Post  message={post.message} like={post.like}/>
})

let createNewPost=React.createRef();

const buttonClick=()=>{
 props.dispatch(addTextCreator());
}
  
let onChangePost=()=>{
  let text = createNewPost.current.value;
  let action= updateNewPostCreator(text);
  props.dispatch(action);
}

  return (
    <div className={cl.myPosts}>
      My posts
      <div>
        <textarea onChange={onChangePost}
          ref={createNewPost} value={props.addNewText}/>
      </div>
      <button onClick={buttonClick}>Add post</button>
      <div className={cl.posts}>
        {postElements}
             </div>   
    </div>
  );
};

export default MyPosts;

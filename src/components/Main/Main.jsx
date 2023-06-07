import React from "react";
import cl from "./Main.module.css";
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Main = (props) => {
  return (
    <div className={cl.main}>
      <ProfileInfo/>
      <MyPosts postData={props.profilePage.postData} dispatch={props.dispatch}
       addNewText={props.profilePage.addNewText}/>
    </div>
  );
};

export default Main;

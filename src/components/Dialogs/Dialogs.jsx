import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import MessagesItem from "./MessagesItem";
import Textarea from "./Textarea/Textarea";

const Dialogs = (props) => {

  let dialogsElements = props.store._state.dialogsPage.dialogsData.map((dialog) =>{
    return  <DialogItem name={dialog.name} id={dialog.id} />});  
  let messagesElements = props.store._state.dialogsPage.messagesData.map((message) =>
      <MessagesItem message={message.message} id={message.id} />);
     

  return (
    <div className={cl.dialogs} >
      <div className={cl.dialogsItems}>{dialogsElements}</div>  

      <div className={cl.messages}>{messagesElements}
      <Textarea store={props.store}/></div>
    </div>
  );
};

export default Dialogs;

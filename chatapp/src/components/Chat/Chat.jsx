import React from 'react'
import Cam from "../../assets/cam.png";
import Add from "../../assets/add.png";
import More from "../../assets/more.png";
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Nome</span>
        <div className="chaticons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <Messages />
        <div className="inputContainer">
        <Input/>
        </div>
    </div>
  )
}

export default Chat
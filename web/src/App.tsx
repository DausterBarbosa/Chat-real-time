import React, {useState, useMemo, useEffect} from "react";

import io from "socket.io-client";

import {FiPaperclip, FiMoreVertical} from "react-icons/fi";
import {GrEmoji} from "react-icons/gr";
import {FaMicrophone} from "react-icons/fa"
import {MdSend} from "react-icons/md";

import "./assets/styles/global.css";

import "./styles.css";

interface MessagesProps{
  user_id: number;
  message: string;
}

function App(){
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState<Array<MessagesProps>>([]);

  const socket = useMemo(() => io("http://localhost:3333", {
    query: {
      user_id: 1
    }
  }), []);

  useEffect(() => {
    socket.on("menssageReceived",(data:MessagesProps) => {
      setMessagesList((messagesList) => [...messagesList, data]);
    });
  }, [socket]);

  const listMessages = useMemo(() => (
    <div className="boxMessage">
        {messagesList.map((message, index) => {
          console.log(message)
          return (
            <div key={index} className={"messageLine " + (message.user_id === 2 ? "lineReceived" : "lineSend")}>
              <p className={"messageBox " + (message.user_id === 2 ? "receivedMessage" : "sendMessage")}>{message.message}</p>
            </div>
          );
        })}
    </div>
  ), [messagesList]);

  function handleMessage(e:any){
    e.preventDefault();
    
    if(message !== ""){
      setMessagesList([...messagesList, {
        user_id: 1,
        message,
      }]);
      socket.emit('sendMessage', {from: 1, to: 2, message});
      setMessage("");
    }
  }

  return (
    <div id="app">
      <header/>
      <div className="panel">
        <div className="header">
          <div className="profile">
            <img src="https://i0.wp.com/temalguemassistindo.com.br/wp-content/uploads/2019/11/Melissa-Benoist-supergirl.jpg?fit=1200%2C801&ssl=1" alt=""/>
            <p>Melissa</p>
          </div>
          <div>
            <FiPaperclip size={20} color="#999"/>
            <FiMoreVertical size={20} color="#999" className="icon"/>
          </div>
        </div>
        {listMessages}
        <form className="footer" onSubmit={handleMessage}>
          <GrEmoji size={30} color="#999"/>
          <input
            type="text"
            className="input"
            placeholder="Type a message"
            value={message}
            onChange={e => setMessage(e.target.value)}/>
          {message === ""
          ? <FaMicrophone size={20} color="#999"/>
          : <MdSend size={20} color="#999" onClick={handleMessage}/>}
        </form>
      </div>
    </div>
  );
}

export default App;
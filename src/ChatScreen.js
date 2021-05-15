import React from 'react';
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {

    const[input,setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Tracy",
            image: 'https://images.unsplash.com/photo-1581084353717-c0ddd74a1478?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            message: 'Whats up'
        },
        {
            name: "Tracy",
            image: 'https://images.unsplash.com/photo-1581084353717-c0ddd74a1478?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            message: 'I ll eat your ass'
        },
        // {
        //     name:"user",
        //     image:'',
        //     message:'Ey'
        // },
        {
            image: "https://images.unsplash.com/photo-1611069648374-733e7bb73e5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            message: 'Hello'
        }
    ])

    const handleSend= e=>{
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput("");
    }
    return (
        <div className="chatScreen">

            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN </p>
            {messages.map(message => (
                message.name ? (

                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>


                ) : (

                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )



            ))}
       
       
           <form className="chatScreen__input">
               <input 
               value={input}
               onChange={(e)=>setInput(e.target.value)}
               className='chatScreen__inputField'
               placeholder="Type a message..."
               type="text" />
               <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
           </form>
       
       
        </div>
    


    );
}

export default ChatScreen
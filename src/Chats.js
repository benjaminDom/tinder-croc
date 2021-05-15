import React from 'react';
import "./Chats.css"
import Chat from "./Chat"


function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Tracy"
                message="Yo  whats  Up give me your number or I'll bite your ass "
                timestamp="40 sec ago"
                profilePic="https://images.unsplash.com/photo-1581084353717-c0ddd74a1478?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />

            <Chat
                name="Bruno"
                message="Hey wanna go in to the water ?"
                timestamp="20 sec ago"
                profilePic="https://images.unsplash.com/photo-1594059443568-fa0126d966ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />

            <Chat
                name="Marta"
                message="Hey"
                timestamp="10 sec ago"
                //profilePic="https://images.unsplash.com/photo-1594059443568-fa0126d966ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />


        </div>
    );
}

export default Chats;
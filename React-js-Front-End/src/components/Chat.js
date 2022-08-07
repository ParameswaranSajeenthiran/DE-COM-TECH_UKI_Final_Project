
import React from 'react';

import { ChatEngine } from 'react-chat-engine';
import ChatFeeds from './ChatFeeds';
import LoginForm from './LoginForm';
import axios from "axios";

import { addPerson } from 'react-chat-engine';

import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'


const projectID = '6d6599eb-dc9f-4feb-a2e0-90b67aaf9a37';
const authObject = {'Project-ID': projectID, 'User-Name': 'sajeenthiran', 'User-Secret': 'sajee123'}
const chatID ='13493'
const username = 'adam'
const callback = (chatID, data) => console.log(chatID, data)
addPerson(authObject, chatID, username, callback)
const ChatApp = () => {

  
      
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      
                 // Optional
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeeds {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()} 
      
      />
  );
};



// infinite scroll, logout, more customizations...

export default ChatApp;

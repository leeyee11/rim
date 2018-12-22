import React from 'react';
import './History.css';
import { connect } from 'react-redux'
import Message from './Message.js';
import { newMessage } from '../redux/actions';
import socket from '../services/socket';
import store from '../redux/store';

socket.on('serverMessage',serverMessage=>{
  store.dispatch(newMessage({sid:'000',...serverMessage}));
})


const History = ({messages})=>(
  <div className="History">
    {
      messages.map(message=>{
        return <Message key={message.mid} uid={message.uid} time={message.time} content={message.content}/>
      })
    }
  </div>
);

const mapStateToProps = state => {
  return (state.currSid===null)
    ? { messages : [] }
    : { messages : [...state.sessions.filter(session=>state.currSid===session.sid)[0].messages] }
  
};

export default connect(mapStateToProps)(History);
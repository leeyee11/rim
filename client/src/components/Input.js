import React from 'react';
import { connect } from 'react-redux'
import socket from '../services/socket';
import './Input.css';


const formatter=(d)=>{
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
const sendMessage=(ref,{uid,content})=>{
  socket.emit('clientMessage',{
    'uid':uid,
    'time':formatter(new Date()),
    'content':content
  },(res)=>{
    if(res===200){
      ref.value='';
    }
  })
}
const inputHandler=(e)=>{
  if(!e.ctrlKey&&!e.altKey&&e.key==='Enter'){
    e.preventDefault()
    if(e.target.value===''){
      alert("cannot send empty message");
      return false;
    }
    const uid=e.target.getAttribute('currUid');
    const content=e.target.value;
    const ref=e.target;
    sendMessage(ref,{uid,content});
  }
}

const Input = ({currUid}) => (
  <div className="Input">
    <textarea className="InputArea" currUid={currUid} onKeyPress={inputHandler}/>
  </div>
);

const mapStateToProps = state => {
  const { currUid } = state;
  return { currUid };
};

export default connect(mapStateToProps)(Input);
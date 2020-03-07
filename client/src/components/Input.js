import React from 'react';
import socket from '../services/socket';
import './Input.css';
import { getClient } from '../services/client';

const inputHandler = (e, sid) => {
  if (!e.ctrlKey && !e.altKey && e.key === 'Enter') {
    e.preventDefault()
    if (e.target.value === '') {
      alert("cannot send empty message");
      return false;
    }

    const ref = e.target;
    const client = getClient();
    const uid = client.getUid();
    const content = e.target.value;
    const res = client.send({ uid, sid, content });

    if (res.isSent === 1) {
      ref.value = '';
    }
  }
}

const Input = ({ uid, sid }) => (
  <div className="Input">
    <textarea
      className="InputArea"
      onKeyPress={(event) => inputHandler(event,sid)}
    />
  </div>
);

export default Input;
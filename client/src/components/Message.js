import React from 'react';
import './Message.css'
import { getClient } from '../services/client';

const Message = ({ uid, time, content}) => (
  <div className="Message">
    <div
      className={
        uid === getClient().getUid() 
          ? 'RightMessage' 
          : 'LeftMessage'
      }
    >
      <div className="MessageSender">
        {uid}
      </div>
      <div className="MessageTime">
        {time}
      </div>
      <div className="MessageContent">
        {
          content.split('\n')
            .map((item, index) => (
              <span key={index}>
                <i>{item}</i><br />
              </span>
            )
          )
        }
      </div>
    </div>
  </div>
);

export default Message;
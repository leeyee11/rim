import React from 'react';
import './Message.css'
import { getClient } from '../services/client';
import { timeLabel } from '../util/dt';
import { suffix } from '../util/usr';

const msgStyle = (uid) => (
  uid === getClient().getUid() 
    ? 'RightMessage' 
    : 'LeftMessage'
)

const Message = ({ uid, alias, ts, content}) => (
  <div className="Message">
    <div className={msgStyle(uid)}>
      <div className="MessageSender">
        <span className="MessageSenderAlias">
          {alias}
        </span>
        <span className="MessageSenderSuffix">
          {suffix(uid)}
        </span>
      </div>
      <div className="MessageContent">
        <span dangerouslySetInnerHTML={{__html:content}}>
        </span>
      </div>
      <div className="MessageTime">
        {timeLabel(ts)}
      </div>
    </div>
  </div>
);

export default Message;
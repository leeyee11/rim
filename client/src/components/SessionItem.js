import React from 'react';
import { timeLabel } from '../util/dt';
import './SessionItem.css'

const isHTML = function(str) {
  var tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = str;
  return tmp.body.children.length > 0;
};

const SessionItem = ({sid, name, active, message, setSid})=>(
  <div
    onClick={()=>setSid(sid)}
    className={`SessionItem ${active && 'Active'}`}
    >
    <div className="SIHeader">
      <span className="SITitle">
        {name}
      </span>
      <span className="SIDateTime">
        {timeLabel(message.ts)}
      </span>
    </div>
    <div className="SIBody">
      <span className="SISender">
        {message.alias && `${message.alias}:`}
      </span>
      <span className="SIContent">
        {
          isHTML(message.content) 
            ? '[Rich Text]' 
            : message.content
        }
      </span>
    </div>
  </div>
);

export default SessionItem;
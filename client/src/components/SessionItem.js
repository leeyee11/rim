import React from 'react';
import './SessionItem.css'
const SessionItem = ({sid, name, active, message})=>(
  <div className={`SessionItem ${active && 'Active'}`}>
    <div className="SIHeader">
      <span className="SITitle">{name}</span>
      <span className="SIDateTime">{message.dt}</span>
    </div>
    <div className="SIBody">
      {message.content}
    </div>
  </div>
);

export default SessionItem;
import React from 'react';
import SidePanel from './SidePanel';
import SessionPanel from './SessionPanel';
import './Body.css';

const Body = ({ sid, sessions, setSid }) => (
  <div className="Body Container">
    <div className="Panel">
      <SidePanel sessions={sessions} sid={sid} setSid={setSid} />
    </div><div className="Content">
      <SessionPanel session={sessions[sid]} />
    </div>
  </div>
)

export default Body;

import React from 'react';
import SessionItem from './SessionItem';
import './SidePanel.css';

const EMPTY_MSG = {dt:'', content:'',alias:''}
const EMPTY_MSGS = [EMPTY_MSG]
const SidePanel = ({ sessions, sid, setSid}) => (
  <div className="SidePanel">
    {
      Object.keys(sessions).map(id => {
        const { name, messages } = sessions[id];
        const msgs = (messages||EMPTY_MSGS)
        const last = msgs[msgs.length - 1];
        return (
            <SessionItem
              key={id}
              sid={id}
              name={name}
              active={sid === id}
              message={last||EMPTY_MSG}
              setSid={setSid}
            />);
        })
    }
  </div>
)

export default SidePanel;
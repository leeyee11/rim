import React from 'react';
import SessionItem from './SessionItem';
import './SidePanel.css';

const EMPTY_MSGS = [{dt:'', content:''}]
const SidePanel = ({ sessions, sid}) => {
  return (
  <div className="SidePanel">
    {
      Object.keys(sessions).map(id => {
        const { name, message } = sessions[id];
        const [lastMessage, ..._] = message||EMPTY_MSGS;
        return (
            <SessionItem
              key={id}
              sid={id}
              name={name}
              active={sid === id}
              message={lastMessage}
            />);
        })
    }
  </div>);
}

export default SidePanel;
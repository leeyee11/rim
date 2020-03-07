import React from 'react';
import Input from './Input';
import History from './History';
import Tools from './Tools';
import './SessionPanel.css'

const SessionPanel = ({session}) =>(
      <div className="SessionPanel">
        <div className="SessionHistory">
          <History
            sid={session.id}
            messages={session.messages}
          />
        </div>
        <div className="SessionInput">
          <Tools/>
          <Input
            sid={session.id}
          />
        </div>
      </div>
);

export default SessionPanel;

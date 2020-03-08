import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { getClient } from './services/client';
import './App.css';

const PUBLIC_CHANNEL = {
  ID: 'Public',
  NAME: 'Public'
}
const OFFICIAL_CHANNEL = {
  ID: 'Official',
  NAME: 'Official'
}

const APP_STATUS = {
  ONLINE: 1,
  OFFLINE: 0,
}

const updateMessage = (sessions, msg) => (
  {
    ...sessions,
    [msg.sid]: {
      ...sessions[msg.sid],
      messages: [...sessions[msg.sid].messages, msg],
    }
  }
)

const App = () => {
  const [status, setStatus] = useState(APP_STATUS.OFFLINE);
  const [sid, setSid] = useState(PUBLIC_CHANNEL.ID);
  const [sids, setSids] = useState([PUBLIC_CHANNEL.ID, OFFICIAL_CHANNEL.ID]);
  const [msg, setMsg] = useState(null);
  const [sessions, setSessions] = useState({
    [PUBLIC_CHANNEL.ID]: {
      id: PUBLIC_CHANNEL.ID,
      name: PUBLIC_CHANNEL.NAME,
      messages: []
    },
    [OFFICIAL_CHANNEL.ID]: {
      id: OFFICIAL_CHANNEL.ID,
      name: OFFICIAL_CHANNEL.NAME,
      messages: []
    }
  });

  useEffect(() => {
    if (status === APP_STATUS.ONLINE) {
      getClient()
        .listen(sids
          , (msg) => {
            setMsg(msg);
          }
        )
      return () => {
        getClient()
          .off(sids);
      }
    } else {
      getClient()
        .off(sids);
    }
  }, [sids, status])

  useEffect(() => {
    if (msg) {
      setSessions(
        updateMessage(sessions, msg)
      )
    }
  }, [msg])

  return (
    <div className="App">
      <Header
        status={status}
        setStatus={setStatus}
      />
      <Body
        sid={sid}
        sessions={sessions}
        setSid={setSid}
        setSessions={setSessions}
      />
    </div>
  );
}

export default App;

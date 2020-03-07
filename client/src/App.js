import React,{ useState, useEffect }  from 'react';
import Header from './components/Header';
import Body from './components/Body';
import {getClient} from './services/client';
import './App.css';

const PUBLIC_CHANNEL = {
  ID : 'Public',
  NAME : 'Public'
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
  const [sid, setSid] = useState(PUBLIC_CHANNEL.ID);
  const [sids, setSids] = useState([PUBLIC_CHANNEL.ID]);
  const [msg, setMsg] = useState(null);
  const [sessions, setSessions] = useState({
    [PUBLIC_CHANNEL.ID]: {
      id: PUBLIC_CHANNEL.ID,
      name: PUBLIC_CHANNEL.NAME,
      messages: []
    }
  });
  useEffect(()=>{
    getClient()
      .listen(sids
        ,(msg)=>{
          setMsg(msg);
        }
      )
    return () => {
      getClient()
        .off(sids);
    }
  },[sids])
  
  useEffect(()=>{
    if(msg){ 
      setSessions(
        updateMessage(sessions, msg)
      )
    }
  },[msg])

  return (
    <div className="App">
      <Header />
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

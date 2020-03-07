import React, {useEffect} from 'react';
import './History.css';
import Message from './Message.js';

const History = ({ sid, messages }) => {
  const history = React.createRef();
  
  useEffect(()=>{
    history.current.scrollTop = history.current.scrollHeight;
    console.log('scroll')
  },[messages])
  
  return (
    <div
      className="History"
      ref={history}
    >
      {
        messages.map(msg => {
          return (
            <Message
              key={msg.mid}
              uid={msg.uid}
              time={msg.time}
              content={msg.content}
            />
          );
        })
      }
    </div>
  );
}



export default History;
import React from 'react';
import { connect } from 'react-redux'
import './Message.css'
const Message = ({ currUid,uid, time, content})=>(
  <div className="Message">
    <div className={currUid===uid?'RightMessage':'LeftMessage'}>
      <div className="MessageSender">{`${uid}`}</div>
      <div className="MessageTime">{`${time}`}</div>
      <div className="MessageContent">
      {
        content.split('\n').map(item=>{
          return (<span><i>{item}</i><br/></span>)
        })
      }
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  const { currUid } = state;
  return { currUid };
};

export default connect(mapStateToProps)(Message);
import React, { Component } from 'react';
import SessionItem from './SessionItem';
import { connect } from 'react-redux';
import './SessionList.css';

const SessionList =({sessions})=>(
      <div className="SessionList">
        {
          sessions.map(item=>{
             return <SessionItem key={sessions.sid}/>
          })
        }
      </div>
);

const mapStateToProps = state => {
  const { sessions } = state;
  return { sessions };
};

export default connect(mapStateToProps)(SessionList);
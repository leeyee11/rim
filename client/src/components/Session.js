import React from 'react';
import Input from './Input';
import History from './History';
import Tools from './Tools';
import { connect } from 'react-redux'
import './Session.css'

const Session = () =>(
      <div className="Session">
        <div className="SessionHistory">
          <History/>
        </div>
        <div className="SessionInput">
          <Tools/>
          <Input/>
        </div>
      </div>
);

export default connect()(Session);

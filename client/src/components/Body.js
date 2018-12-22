import React from 'react';
import SessionList from './SessionList';
import Session from './Session';
import { connect } from 'react-redux'
import './Body.css'

const Body = () =>(
      <div className="Body Container">
        <div className="Panel">
            <SessionList/>
        </div><div className="Content">
            <Session/>
        </div>
      </div>
);

export default connect()(Body);

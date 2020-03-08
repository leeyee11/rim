import React from 'react';
import { getClient } from '../services/client';
import './Header.css';

const APP_STATUS = {
  ONLINE: 1,
  OFFLINE: 0,
}

const register = (msg, callback) => {
  const alias = prompt(msg);
  if (alias) {
    getClient()
      .register(alias)
      .catch(({ msg }) => {
        register(msg, callback)
      })
      .then(({ msg }) => {
        callback()
      })
  } else {
    register('Alias cannot be empty.', callback);
  }
}
const login = (setStatus) => {
  register('Please enter your alias', ()=>{
    setStatus(APP_STATUS.ONLINE)
  })
}

const Header = ({status, setStatus})=>(
  <div className="Header">
    <div className="Container">
      <div className="HeaderPlaceHolder">

      </div>
      <div className="HeaderAlias">
        {
          status === APP_STATUS.OFFLINE
          ? (
            <div
              className="HeaderStatus"
              onClick={()=>login(setStatus)}
            >
              [ offline ]
            </div>
          )
          : (
            <div
              className="HeaderMenu"
            >
              {`Hello, ${getClient().getAlias()}`}
            </div>
          )
        }
      </div>
    </div>
  </div>
)

export default Header;
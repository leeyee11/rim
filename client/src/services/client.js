import socket from './socket';

class Client {
  constructor(props) {
    this.socket = socket;
    this.uid = Math.random().toString(16).slice(2);
    this.online = false;
    this.alias = null;
  }
  getUid() {
    return this.uid;
  }
  getAlias() {
    return this.alias;
  }
  subscribe(event, callback) {
    this.socket.on(event, callback);
  }
  register(alias) {
    return new Promise((resolve, reject) => {
      this.socket.emit('clientRegister', { uid: this.uid, alias });
      this.socket.on(`clientRegister:${this.uid}`, ({ isRegistered, msg, alias }) => {
        if (isRegistered) {
          this.online = true;
          this.alias = alias;
          console.log(alias);
          resolve({ isRegistered, msg, alias })
        } else {
          reject({ isRegistered, msg, alias })
        }
      })
    });
  }
  send({ sid, content }) {
    if (this.online) {
      this.socket.emit('clientMessage', { uid: this.uid, sid, content })
      return { isSent: 1, msg: null }
    } else {
      return { isSent: 0, msg: 'Please login.' }
    }
  }
  listen(sids, updateMethod) {
    if(this.online){
      sids.forEach((sid) => {
        this.socket.on(
          `clientMessage:${sid}`,
          (msg) => updateMethod(msg)
        )
      })
    }
  }
  off(sids) {
    sids.forEach((sid) => {
      this.socket.off(`clientMessage:${sid}`)
    });
  }
}

function closure(clazz) {
  let instance;
  function getInstance() {
    instance = instance || new clazz();
    return instance;
  }
  return { getInstance }
}

export const getClient = closure(Client).getInstance;



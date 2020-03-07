import socket from './socket';

class Client {
  constructor(props) {
    this.socket = socket;
    this.uid = Math.random().toString(16).slice(2);
    this.online = true;
  }
  getUid() {
    return this.uid;
  }
  subscribe(event, callback) {
    this.socket.on(event, callback);
  }
  register() {
    this.socket.emit('register', { uid:this.uid });
    this.socket.on(`register:${this.uid}`, () => {
      this.status = 200;
    })
  }
  send({uid, sid, content}) {
    if( this.online ){
      this.socket.emit('clientMessage',{uid, sid, content})
      return {isSent:1}
    } else {
      return {isSent:0}
    }
  }
  listen(sids, updateMethod) {
    sids.forEach((sid)=>{
      this.socket.on(
        `clientMessage:${sid}`,
        (msg) => updateMethod(msg)
      )
    })
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



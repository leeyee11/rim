const ROOM = {
  PATH : '/Default'
}
const PUBLIC_CHANNEL = {
  ID : 'Public',
  NAME : 'Public'
}

const io = require('socket.io')({
  path: ROOM.PATH,
  serverClient: false
});

let mcnt = 1000;

io.attach(5000, {
  pingInterval: 1000,
  pingTimeout: 5000,
  cookie: false
});

io.on('connect', socket => {
  console.log('connected');
  
  socket.on('clientMessage', (msg, fn) => {

    console.log('received', msg);

    const mid = (new Date().getTime().toString(16)) +
      (Math.random().toString(16).slice(2));

    const message = {
      mid: mid,
      uid: msg.uid,
      sid: msg.sid,
      content: msg.content,
      dt: new Date().getTime()
    }

    io.emit(`clientMessage:${msg.sid}`, message);
  })
})

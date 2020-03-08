const ROOM = {
  PATH: '/Default'
}
const PUBLIC_CHANNEL = {
  ID: 'Public',
  NAME: 'Public'
}

const aliasMap = new Map();

const io = require('socket.io')({
  path: ROOM.PATH,
  serverClient: false
});


io.attach(5000, {
  pingInterval: 1000,
  pingTimeout: 5000,
  cookie: false
});

io.on('connect', socket => {
  console.log('connected');
  socket.on('clientRegister', (msg, fn) => {
    console.log('register', msg);

    if (aliasMap.has(msg.uid)) {
      io.emit(`clientRegister:${msg.uid}`,
        {
          isRegistered: false,
          alias: msg.alias,
          msg: 'Alias already exists.'
        }
      )
    } else {
      aliasMap.set(msg.uid, msg.alias)
      io.emit(`clientRegister:${msg.uid}`,
        {
          isRegistered: true,
          alias: msg.alias,
          msg: 'Registered successfully.'
        }
      )
    }

  })

  socket.on('clientMessage', (msg, fn) => {

    console.log('received:', msg , 'sender:', aliasMap.get(msg.uid));

    const mid = (new Date().getTime().toString(16)) +
      (Math.random().toString(16).slice(2));

    
    const message = {
      mid: mid,
      uid: msg.uid,
      sid: msg.sid,
      alias: aliasMap.get(msg.uid),
      content: msg.content,
      ts: new Date().getTime()
    }

    io.emit(`clientMessage:${msg.sid}`, message);
  })
})

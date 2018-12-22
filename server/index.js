const io = require('socket.io')({
  path:'/000',
  serverClient:false
});

let mcnt=1000;

io.attach(5000, {
  pingInterval: 1000,
  pingTimeout: 5000,
  cookie: false
});

io.on('connect',socket=>{
    socket.on('clientMessage',(clientMessage,fn)=>{
        fn(200);
        mcnt++;
        console.log(clientMessage);
        serverMessage={
            'mid':mcnt,
            ...clientMessage
        }
        socket.emit('serverMessage',serverMessage);
        console.log("emited");
    })
})

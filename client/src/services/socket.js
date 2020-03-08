import io from 'socket.io-client'

const ROOM = {
    PATH : '/Default'
}
const socket=io('http://127.0.0.1:5000',{
    path: ROOM.PATH
})

export default socket;
import io from 'socket.io-client'

const ROOM = {
    PATH : '/Default'
}
const socket=io('http://localhost:5000',{
    path: ROOM.PATH
})

export default socket;
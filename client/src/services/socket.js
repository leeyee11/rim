import io from 'socket.io-client'

const socket=io('http://localhost:5000',{
    path:'/000'
})

export default socket;
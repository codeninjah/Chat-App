const net = require('net')
require('dotenv').config()

const socket = net.connect(
    {port: 8000, host: process.env.LOCAL_IP},
    function(){
        console.log("CLIENT: Ready Player 2 connected!")
        socket.write("CLIENT: Ready Player 2 here, testing connection")
        //socket.end()
    }
)

socket.on('data', (data) => {
    console.log(data.toString())
    //socket.end();
})
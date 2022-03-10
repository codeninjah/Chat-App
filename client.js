const net = require('net')
require('dotenv').config()

const socket = net.connect(
    {port: 8000, host: process.env.LOCAL_IP},
    function(){
        console.log("Connected")
        socket.write("Code Ninjah")
        socket.end()
    }
)
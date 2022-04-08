const net = require('net')
require('dotenv').config()

const socket = net.connect(
    {port: 8000, host: process.env.LOCAL_IP},
    function(){
        console.log("CLIENT:Code Ninjah just connected")
        socket.write('CLIENT: CodeNinjah is in the HOUSE!')
        //socket.end()
    }
)

socket.on('data', (data) => {
    console.log(data.toString())
    //socket.end();
})

socket.on('end', () => {
    console.log('CLIENT: I disconnect')
})
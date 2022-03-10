const express = require("express")
const net = require('net')

const app = express()

app.set("view engine", "ejs")
app.use( express.urlencoded({extended: true}))

const messages = []

const server = net.createServer(function (socket){
    console.log("Client connected")

    socket.setEncoding('utf8')

    socket.on('data', function(data){
        console.log(data)

        app.post("/messages", (req, res) => {
            messages.push(data)
        })

        messages.push(data)
        
        socket.write("DATA: " + data)
        socket.write("MESSAGES: " + messages)

        //console.log("DATA: " + data)
        //console.log("MESSAGES: " + messages[0])

        return messages

    })

    socket.on('error', function(error){
        console.log(error)
    })

    socket.pipe(socket)
})

app.get("/messages", (req, res) => {
    res.render("messages", {messages: messages})
})

app.listen(8002, () => {
    console.log("App running!")
})

server.listen(8000, () => {
    console.log("Server up an running!")
})
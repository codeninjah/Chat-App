const express = require("express")
const { listen } = require("express/lib/application")
const net = require('net')

const app = express()

app.set("view engine", "ejs")
app.use( express.urlencoded({extended: true}))

let messages = []

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

        return messages

    })

    socket.write('SERVER: Hello from SERVER!')

    

    socket.on('error', function(error){
        console.log(error)
    })

    socket.pipe(socket)
})

app.get("/messages", (req, res) => {
    res.render("messages", {messages: messages})
    //const jsonData = fs.readFileSync()
})

app.listen(8002, () => {
    console.log("App running!")
})

server.listen(8000, () => {
    console.log("Server up an running!")
})
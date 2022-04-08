const express = require("express")

const app = express()

app.set("view engine", "ejs")
app.use( express.urlencoded( {extended: true}) )

/*
app.get("/messages", (req, res) =>{
    res.render("messages", {messages: "Alex"})
})
*/

app.get("/", (req, res) => {
    res.render("index")
    console.log("Well done!")
})


app.listen(8002, () => {
    console.log("App up and running!")
})
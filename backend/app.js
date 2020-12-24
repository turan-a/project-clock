// const app = require('express')()
// const http = require('http').createServer(app)
// const io = require("socket.io")(http)
const server = require("http").createServer()
const options={
    cors:true,
    origins:["http://localhost:4000"],
   }
const io = require("socket.io")(server,options)


io.on("connection", socket => {
  console.log("New client connected")
  setInterval(() => {
    const today = new Date()
    const response = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    socket.emit("time", response)
  }, 1000)
  socket.on("disconnect", () => {
    console.log("Client disconnected")
  })
})

server.listen(4000, () => console.log("Listening on port 4000"))
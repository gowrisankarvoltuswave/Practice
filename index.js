let app = require('express')() // Express initializes app to be a function handler that you can supply to an HTTP server
let http = require('http').createServer(app)
let io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {

  console.log('A user Connected')
  console.log(socket.id)
  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
  socket.on('sendMessage', (data) => {
    console.log(data)
    // io.emit==> sending message to everyone including sender
    io.emit('sendMessage', data)
    // socket.broadcast.emit ==> sending message to everyone except certain socket(sender)
    // socket.broadcast.emit('sendMessage', data) 
  })
})

http.listen(3000, () => {
  console.log('listening on 3000')
})

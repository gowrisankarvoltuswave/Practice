let app = require('express')()
let http = require('http').createServer(app)


app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// app.get('/index.html', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

http.listen(3002, () => {
    console.log('listening on 3002')
})
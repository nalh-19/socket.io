const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http)

app.get('/', (req, res) => res.send('hi server!'));

io.on('connection', (socket) => {
    console.log('a user connected');
    // socket.on('message', (msg) => {
    //     console.log(msg);
    //     socket.broadcast.emit('message-broadcast', msg);
    // });
});

http.listen(3000, () => {
    console.log('Listening on 3000');
});
const express = require('express');
const socket = require('socket.io');
//App
const app = express();
const server = app.listen(4000, () => {
  console.log('listening to requests on port 4000')
});
//Static files
app.use(express.static('public'));

//socket setup

const io = socket(server);
io.on('connection', (socket) => {
  console.log("made socket connection")
})
const express = require('express');
const socket = require('socket.io');

var app = express();
var server = app.listen(4000,()=>console.log("Listening to requests on port 4000"));

app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection',function(socket){
  console.log('Made socket connection',socket.id);

  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  });

  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data);
  });

});

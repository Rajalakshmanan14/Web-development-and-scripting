const express = require('express');
const app = express();
const port = 4200;
const socketio = require('socket.io');
var io;

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html');
});

//app.use(express.static(__dirname + '/public'));

io = socketio.listen(app.listen(port));
		
//event handling   ipaddress socket.handshake.address

io.on('connection', (socket) =>{
	console.log('connected');
       
	socket.emit('smsg','i am a server');
	
	socket.on('message', (data)=>{
		console.log(data);
		socket.emit('smsg','hello client');
	});
	
		
});
		
		
		
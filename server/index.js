// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// // io.set('origins', 'http://127.0.0.1:8080');
// io.set('origins', 'http://127.0.0.1:8080');
// const cors = require('cors');
// app.use(cors());
// app.options('*', cors());

// app.listen(8080,()=>{
// 	app.get('/', function(req, res){
// 		res.location('http://localhost:8080');
// 	});
// 	io.on('connection',function(socket) {
// 		socket.on('disconnect', () => {
// 		});
// 		//接收数据
// 		setInterval(() => {
// 			let date = new Date();
// 			// socket.emit('currentTime',{
// 			// 	data:date,
// 			// 	code:200
// 			// })
// 		}, 1000);
	
// 	});
// })
 
// http.listen(8081, function(){
//   console.log('listening on *:8081');
// });
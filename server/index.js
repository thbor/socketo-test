var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// io.set('origins', 'http://127.0.0.1:8080');
io.set('origins', 'http://127.0.0.1:8082');

// var server = app.listen(8080);   
// var io = require('socket.io').listen(server);
// io.sockets.on('connection', (socket) => {
//   console.log('123',socket)
// });

// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.listen(8080,()=>{
	console.log("66666")
	app.get('/', function(req, res){
		res.send('<h1>你好web秀</h1>');
	});
	io.on('connection',function(socket) {
		console.log("1,listening on *:3000connction")
		socket.on('disconnect', () => {
			console.log('user disconnected');
		});
		//接收数据
		socket.on('login', function (obj) {                
				console.log("login",obj.username);
				// 发送数据
				socket.emit('relogin', {
					msg: `你好relogin，${obj.username}`,
					code: 200
				});
				socket.emit('reflog2',{
					msg:'第二次reflog',
					code:200
				})  
		});
		socket.on('join',function(obj){
			console.log(`${obj.username}加入房間${obj.groupId}成功`)
			socket.emit('joinSuccess',{
				msg:`${obj.username}加入房間${obj.groupId}成功`,
				code:200
			})
		})
		setInterval(() => {
			let date = new Date();
			socket.emit('currentTime',{
				data:date,
				code:200
			})
		}, 1000);
	
		socket.emit('test', {
			msg: `test測試信息`,
			code: 200
		}); 
	
	});
})

// const port = 8081;
// http.listen(port, () => {
//   console.log( `running http at port ${port}`);
// });


// var io = require('socket.io').listen("3000",{origins:'*'});

 
http.listen(8081, function(){
  console.log('listening on *:8081');
});
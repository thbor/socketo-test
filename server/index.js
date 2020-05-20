var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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
 
http.listen(3000, function(){
  console.log('listening on *:3000');
});
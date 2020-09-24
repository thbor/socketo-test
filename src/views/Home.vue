<template>
  <div>
    <button @click="login">login</button>
    <button @click="join">join</button>
    <button @click="test">test</button>
   當前時間： {{current}}
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      current:""
    }
  },
  mounted(){
    this.init()
  },
  watch:{
    sockets(){
      // console.log("sockets",this.sockets)
    }
  },
  methods:{
    init(){
      // console.log("initsockets",this.sockets)
      // console.log("initsocketsIo",this.sockets.io)
      
      //接收服务端的信息
      // this.sockets.subscribe('relogin', (data) => {
      // console.log("subscribe,relogin",data)
      // })
    },
    login(){
      //发送信息给服务端
      this.$socket.emit('login',{
      username: 'bobo',
      password: '1234'
      });
      this.$socket.emit('join',{
        groupId:'房間123',
        username:'bobo'
      })
    },

    join(){
       let token = "用戶"+parseInt(Math.random()*100000)
       let joinRequest = {
        userId: token,
        groupId: "666"
        };
      this.$socket.emit('join', joinRequest);
    },
  },
  // sockets:{
  //   join(data){
  //     console.log("join",data)
  //   },
  //   test(data){
  //     console.log("test",data)
  //   },
  //   connect(){
  //     // 获取每台客服端生成的id
  //     // this.websocketid = this.$socket.id;
  //     console.log('链接服务器');
  //   },
  //   disconnect(){
  //     console.log("断开服务器链接")
  //   },
  //   relogin(data){
  //     console.log("login data",data)
  //   },
  //   reflog2(data){
  //     console.log("測試後台同時發送的兩個事件",data)
  //   },
  //   currentTime(data){
	// 		this.current = data.data
	// 		let all = new Date(data.data)
	// 		let y = all.getFullYear()
	// 		let m = all.getMonth()+1
	// 		let d = all.getDate()
	// 		let h = all.getHours()
	// 		let min = all.getMinutes()
	// 		let second = all.getSeconds()
	// 		console.log("年",y)
	// 		console.log("月",m)
	// 		console.log("日",d)
	// 		console.log("時",h)
	// 		console.log("分",min)
	// 		console.log("秒",second)
	// 	},
	// 	test1233(){
	// 		console.log("11111")
	// 	},
	// 	getTime(){},
	// 	addZero(num){
	// 		return (num<10?'0'+num:num)
	// 	}
 
  // }
}
</script>

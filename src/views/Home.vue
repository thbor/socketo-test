<template>
  <div>

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

    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      //发送信息给服务端
      this.$socket.emit('login',{
      username: 'bobo',
      password: '1234'
      });
      
      //接收服务端的信息
      // this.sockets.subscribe('relogin', (data) => {
      // console.log("subscribe,relogin",data)
      // })
    }
  },
  sockets:{
    connect:function(){
      // 获取每台客服端生成的id
      this.websocketid = this.$socket.id;
      console.log('链接服务器');
    },
    disconnect(){
      console.log("断开服务器链接")
    },
    msg(){

    },
    relogin(data){
      console.log("login data",data)
    },
   

  }
}
</script>

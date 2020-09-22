import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client'
// import '@/plugins/socketIo'
Vue.config.productionTip = false
// const token = 'user' + Math.floor((Math.random() * 1000) + 1);
// const url = `http://127.0.0.1:8081?token=${token}`;
const url = `http://127.0.0.1:8081`;
Vue.use(new VueSocketio({
  debug: true,
  // 服务器端地址
  connection: socketio(url),
//   vuex: {
//     store,
//     actionPrefix: 'SOCKET_',
//     mutationPrefix: 'SOCKET_'
// },
// options: { path: "/my-app/" } //Optional options
  // options: { path: '/my-project/socket.io' }
}))
// Vue.use(VueSocketio, socketio('http://localhost:3000'), store);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

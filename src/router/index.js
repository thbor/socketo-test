import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client'
const token = 'user' + Math.floor((Math.random() * 1000) + 1);
const url = `http://127.0.0.1:8081?token=${token}`;
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeRouteEnter(to, from, next) {
      next();
      Vue.use(new VueSocketio({
        debug: true,
        connection: socketio(url) 
      }));
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router

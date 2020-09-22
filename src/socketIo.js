import VueSocketIo from 'vue-socket.io';
import Vue from 'vue';

const option = { connection: '127.0.0.1:8081' };
const client = new VueSocketIo(option);

Vue.use(client);
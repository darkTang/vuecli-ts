import { createApp } from 'vue';
import App from './Vue3App.vue'
import router from './router/index';
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import Vue from "vue";
// import App from "./Vue2App.vue";

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

createApp(App).use(router).mount('#app')
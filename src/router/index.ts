import { createRouter, createWebHistory } from "vue-router";

const Home = () =>
  import(/* webpackChunkName: "Home" */ "../pages/Home/index.vue");
const About = () =>
  import(/* webpackChunkName: "About" */ "../pages/About/index.vue");

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

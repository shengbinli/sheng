import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/Index.vue"),
      },
    ],
  },
  {
    path: "/logup",
    name: "Logup",
    component: () => import("../views/Logup/Logup.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/Login.vue"),
  },
  {
    path: "/my",
    name: "My",
    component: () => import("../views/My/My.vue"),
  },
  {
    path: "/show",
    name: "Show",
    component: () => import("../views/Show/Show.vue"),
  },
  {
    path: "/cont",
    name: "Cont",
    component: () => import("../views/Cont/Cont.vue"),
  },
  {
    path: "/book",
    name: "Book",
    component: () => import("../views/Book/Book.vue"),
  },
  {
    path: "/book/bookcont",
    name: "Bookcont",
    component: () => import("../views/Book/Bookcont.vue"),
  },
  {
    path: "/bookstack",
    name: "Bookstack",
    component: () => import("../views/Bookstack/Bookstack.vue"),
  },
  {
    path: "/nowrite",
    name: "Nowrite",
    component: () => import("../views/Nowrite/Nowrite.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "@/firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {requiresAuth: true}
  },
  {
    path: "/ingreso",
    name: "ingreso",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Ingreso.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Admin.vue"),
    meta: {requiresAuth: true}
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (user) {
      next();
    } else {
      next({ name: "ingreso" });
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;

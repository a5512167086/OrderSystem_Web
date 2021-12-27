import Vue from "vue";
import VueRouter from "vue-router";
import SignPage from "../views/pages/SignPage.vue";
import CustomerPage from "../views/pages/CustomerPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/signin",
  },
  {
    path: "/signin",
    component: SignPage,
    props: { signState: "signIn" },
  },
  {
    path: "/signup",
    component: SignPage,
    props: { signState: "signUp" },
  },
  {
    path: "/order",
    component: CustomerPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

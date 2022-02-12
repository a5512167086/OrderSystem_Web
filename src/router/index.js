import Vue from "vue";
import VueRouter from "vue-router";
import SignPage from "../views/pages/SignPage.vue";
import CustomerPage from "../views/pages/CustomerPage.vue";
import CompanyPage from "../views/pages/CompanyPage.vue";

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
  {
    path: "/product_manage",
    component: CompanyPage,
    props: { currentPage: "product" },
  },
  {
    path: "/user_manage",
    component: CompanyPage,
    props: { currentPage: "user" },
  },
  {
    path: "/order_manage",
    component: CompanyPage,
    props: { currentPage: "order" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

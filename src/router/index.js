import Vue from "vue";
import VueRouter from "vue-router";
import SignPage from "../views/pages/SignPage.vue";
import CustomerPage from "../views/pages/CustomerPage.vue";
import CompanyPage from "../views/pages/CompanyPage.vue";
import store from "../store/index";

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
    beforeEnter: (to, from, next) => {
      const currentUser = store.state.user.currentUser;
      if (currentUser.rank === "admin" || currentUser.rank === "user") {
        const nextRoute =
          currentUser.rank === "admin" ? "/product_manage" : "/order";
        next(nextRoute);
        return;
      }

      next();
    },
  },
  {
    path: "/signup",
    component: SignPage,
    props: { signState: "signUp" },
    beforeEnter: (to, from, next) => {
      const currentUser = store.state.user.currentUser;
      if (currentUser.rank === "admin" || currentUser.rank === "user") {
        const nextRoute =
          currentUser.rank === "admin" ? "/product_manage" : "/order";
        next(nextRoute);
        return;
      }

      next();
    },
  },
  {
    path: "/order",
    component: CustomerPage,
    props: { currentPage: "order" },
    beforeEnter: (to, from, next) => {
      const currentUser = store.state.user.currentUser;
      if (currentUser.rank == "admin") {
        next("/product_manage");
        return;
      }
      if (currentUser.rank == "user") {
        next();
        return;
      }

      next("/signin");
    },
  },
  {
    path: "/order_cart",
    component: CustomerPage,
    props: { currentPage: "order_cart" },
    beforeEnter: (to, from, next) => {
      const currentUser = store.state.user.currentUser;
      if (currentUser.rank == "admin") {
        next("/product_manage");
        return;
      }
      if (currentUser.rank == "user") {
        next();
        return;
      }

      next("/signin");
    },
  },
  {
    path: "/product_manage",
    component: CompanyPage,
    props: { currentPage: "product" },
    beforeEnter: (to, from, next) => {
      const currentUser = store.state.user.currentUser;
      if (currentUser.rank == "admin") {
        next();
        return;
      }
      if (currentUser.rank == "user") {
        next("/order");
        return;
      }

      next("/signin");
    },
  },
  {
    path: "/user_manage",
    component: CompanyPage,
    props: { currentPage: "user" },
    beforeEnter: (to, from, next) => {
      const currentUser = store.state.user.currentUser;
      if (currentUser.rank == "admin") {
        next();
        return;
      }
      if (currentUser.rank == "user") {
        next("/order");
        return;
      }

      next("/signin");
    },
  },
  {
    path: "/order_manage",
    component: CompanyPage,
    props: { currentPage: "order" },
    beforeEnter: (to, from, next) => {
      const currentUser = store.state.user.currentUser;
      if (currentUser.rank == "admin") {
        next();
        return;
      }
      if (currentUser.rank == "user") {
        next("/order");
        return;
      }

      next("/signin");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

<template>
  <el-header class="header">
    <el-menu
      :default-active="activeIndex"
      :router="true"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div class="navbarBox">
        <div class="navbarTitle">
          <img src="../../assets/images/logo.png" alt="" />
          Order System
        </div>
        <div class="navbarLink">
          <template v-if="userState == 'user'">
            <el-menu-item index="/order">點餐</el-menu-item>
            <el-menu-item index="/order_cart">購物車</el-menu-item>
            <el-menu-item @click="signOut">登出</el-menu-item>
          </template>
          <template v-else-if="userState == 'admin'">
            <el-menu-item disabled>
              歡迎 - {{ currentUser.user_name }}
            </el-menu-item>
            <el-menu-item index="/product_manage">產品管理</el-menu-item>
            <el-menu-item index="/user_manage">用戶管理</el-menu-item>
            <el-menu-item index="/order_manage">訂單管理</el-menu-item>
            <el-menu-item @click="signOut">登出</el-menu-item>
          </template>
          <template v-else>
            <el-menu-item index="/signin">登入</el-menu-item>
            <el-menu-item index="/signup">註冊</el-menu-item>
          </template>
        </div>
      </div>
    </el-menu>
  </el-header>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import _ from "lodash";

export default {
  data() {
    return {
      activeIndex: this.$route.path,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user.currentUser;
    },
    userState() {
      if (_.isEmpty(this.currentUser)) {
        return "guest";
      }
      if (this.currentUser.rank === "admin") {
        return "admin";
      }
      if (this.currentUser) {
        return "user";
      }
      return null;
    },
  },
  methods: {
    signOut() {
      this.$store.dispatch("user/signOut");
      this.$router.push({ path: "/signin" });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0;
}

.navbarBox {
  display: flex;
  justify-content: space-between;
  .navbarTitle {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.25rem;

    img {
      width: 50px;
      height: 50px;
    }
  }
  .navbarLink {
    display: flex;
  }
}

@media screen and (max-width: 405px) {
  .navbarBox {
    .navbarTitle {
      margin-left: 5px;
      font-size: 1rem;
    }
  }
}
</style>

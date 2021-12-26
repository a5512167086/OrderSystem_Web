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
          <el-menu-item index="/signin">登入</el-menu-item>
          <el-menu-item index="/signup">註冊</el-menu-item>
        </div>
      </div>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
    };
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
</style>

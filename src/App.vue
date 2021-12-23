<template>
  <div id="app">
    <el-container direction="vertical">
      <the-header />
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import TheHeader from "./views/components/TheHeader.vue";

export default {
  name: "app",
  components: { TheHeader },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

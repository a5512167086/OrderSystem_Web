<template>
  <el-main class="company_page">
    <template v-if="currentPage === 'product'">
      <the-product-form></the-product-form>
      <the-product-list class="product_list"></the-product-list>
    </template>
    <template v-else-if="currentPage === 'user'">
      <the-user-form></the-user-form>
      <the-user-list></the-user-list>
    </template>
  </el-main>
</template>

<script>
import TheProductForm from "../components/TheProductForm.vue";
import TheProductList from "../components/TheProductList.vue";
import TheUserForm from "../components/TheUserForm.vue";
import TheUserList from "../components/TheUserList.vue";

export default {
  components: { TheProductForm, TheProductList, TheUserForm, TheUserList },
  props: ["currentPage"],
};
</script>

<style lang="scss" scoped>
.company_page {
  height: 100%;
  display: flex;
  justify-content: space-evenly;

  .product_list {
    margin-left: 20px;
  }
}
</style>

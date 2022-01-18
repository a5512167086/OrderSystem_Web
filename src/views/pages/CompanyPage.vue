<template>
  <el-main class="company_page">
    <the-product-form></the-product-form>
    <the-product-list class="product_list"></the-product-list>
  </el-main>
</template>

<script>
import TheProductForm from "../components/TheProductForm.vue";
import TheProductList from "../components/TheProductList.vue";

export default {
  components: { TheProductForm, TheProductList },
};
</script>

<style lang="scss" scoped>
.company_page {
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;

  .product_list {
    margin-left: 20px;
  }
}
</style>

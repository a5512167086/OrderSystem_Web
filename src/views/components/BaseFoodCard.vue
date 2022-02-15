<template>
  <el-card class="foodCard" shadow="always">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="foodImage"
    />
    <div class="foodContent">
      <div>
        <h1>{{ name }}</h1>
        <div>${{ price }}</div>
      </div>
      <el-button @click="setAddCartDialog" round icon="el-icon-shopping-cart-2"
        >加入訂單
      </el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["name", "img_url", "price"],
  methods: {
    setAddCartDialog() {
      this.$emit("setAddCartDialog", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.foodCard {
  width: 100%;

  .foodImage {
    width: 100%;
  }
  .foodContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

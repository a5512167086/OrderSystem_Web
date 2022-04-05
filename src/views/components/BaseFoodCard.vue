<template>
  <el-card class="foodCard" shadow="always">
    <img :src="img_url" class="foodImage" />
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
  props: ["id", "name", "img_url", "price"],
  computed: {
    tmpOrderFood() {
      return {
        id: this.id,
        name: this.name,
        price: this.price,
      };
    },
  },
  methods: {
    setAddCartDialog() {
      this.$emit("setAddCartFood", this.tmpOrderFood);
      this.$emit("setAddCartDialog", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.foodCard {
  width: 100%;
  margin: 10px;

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

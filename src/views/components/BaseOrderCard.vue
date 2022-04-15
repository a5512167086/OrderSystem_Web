<template>
  <el-card class="order_card">
    <div slot="header" class="order_header">
      <span>訂單編號 : {{ orderId }} - {{ orderStatus }}</span>
      <div>
        <el-button type="text">編輯</el-button>
        <el-button type="text" class="button">取消訂單</el-button>
        <el-button type="text" class="button">確認付款</el-button>
      </div>
    </div>
    <div class="order_time">
      <time class="time">{{ orderTime }}</time>
    </div>
    <div v-for="food in orderFoods" :key="food.id" class="text item">
      <div>{{ food.name }} ${{ food.price }}</div>
      <div>{{ food.amount }}</div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["orderId", "orderFoods", "orderTime", "orderStatus"],
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 16px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  margin: 15px 0;
}

.time {
  font-size: 24px;
}

.order_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order_time {
  text-align: center;
}

.order_card {
  width: 400px;
}
</style>

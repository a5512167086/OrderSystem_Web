<template>
  <el-container>
    <div class="order_btn_box">
      <div class="block">
        <el-date-picker v-model="searchTime" type="date" placeholder="選擇日期">
        </el-date-picker>
      </div>
      <el-button class="option_btn" type="primary" icon="el-icon-refresh-right">
        清除日期
      </el-button>
      <el-button class="option_btn" type="primary" icon="el-icon-refresh-right">
        刷新訂單
      </el-button>
      <el-button class="option_btn" type="primary" icon="el-icon-refresh-right">
        重製編號
      </el-button>
    </div>
    <div class="order_list_box">
      <base-order-card
        class="order_item"
        v-for="order in orderTest"
        :key="order.orderNum"
        :orderNum="order.orderNum"
        :orderStatus="order.orderStatus"
        :orderTime="order.orderTime"
      >
      </base-order-card>
    </div>
  </el-container>
</template>

<script>
import BaseOrderCard from "./BaseOrderCard.vue";

export default {
  components: { BaseOrderCard },
  data() {
    return {
      searchTime: "",
      orderTest: [
        { orderNum: 1, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 2, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 3, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 4, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 1, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 2, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 3, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 4, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 1, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 2, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 3, orderStatus: "待處理", orderTime: "2022-01-01" },
        { orderNum: 4, orderStatus: "待處理", orderTime: "2022-01-01" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.order_btn_box {
  display: flex;
  flex-direction: column;

  .option_btn {
    margin: 10px 0;
  }
}

.order_list_box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .order_item {
    margin: 0 10px 15px;
  }
}
</style>

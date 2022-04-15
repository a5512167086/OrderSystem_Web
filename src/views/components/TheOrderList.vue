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
        v-for="order in orderData"
        :key="order.orderNum"
        :orderId="order.id"
        :orderStatus="order.status"
        :orderFoods="order.order_foods"
        :orderTime="order.created_at"
      >
      </base-order-card>
    </div>
  </el-container>
</template>

<script>
import BaseOrderCard from "./BaseOrderCard.vue";
import { getAllOrders } from "../../helpers/api";

export default {
  components: { BaseOrderCard },
  beforeMount() {
    this.getAllOrders();
  },
  data() {
    return {
      searchTime: "",
      orderData: [],
    };
  },
  methods: {
    getAllOrders() {
      getAllOrders().then((res) => {
        this.orderData = res.data;
      });
    },
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
    max-height: 400px;
    margin: 0 10px 15px;
  }
}
</style>

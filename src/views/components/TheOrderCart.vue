<template>
  <el-card class="order_cart">
    <div slot="header" class="order_cart_header">
      <div>{{ currentUser.user_name }} - 總金額${{ totalCost }}</div>
      <div>
        <el-button @click="clearCart" type="warning" size="mini">
          清空
        </el-button>
        <el-button
          @click="submitOrder"
          :disabled="orderCart.length <= 0"
          type="primary"
          size="mini"
        >
          送出
        </el-button>
      </div>
    </div>
    <div class="order_item" v-for="item in orderCart" :key="item.id">
      <div>{{ item.name }} - ${{ item.price }}</div>
      <div>
        <input
          @change="updateCart"
          v-model="item.amount"
          type="number"
          class="item_amount"
          min="1"
          max="10"
        />
        <el-button
          @click="deleteCartItem(item)"
          type="danger"
          icon="el-icon-delete"
          circle
        ></el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import { createNewOrder } from "../../helpers/api";

export default {
  data() {
    return { totalCost: 0 };
  },
  beforeMount() {
    this.updateCart();
  },
  computed: {
    currentUser() {
      return this.$store.state.user.currentUser;
    },
    orderCart() {
      return this.$store.state.cart.userCart;
    },
  },
  methods: {
    updateCart() {
      this.$store.dispatch("cart/setCart", this.orderCart);
      this.updateTotalCost();
    },
    deleteCartItem(deleteItem) {
      this.$store.dispatch("cart/deleteCartItem", deleteItem);
      this.updateTotalCost();
    },
    clearCart() {
      this.totalCost = 0;
      this.$store.dispatch("cart/clearCart");
    },
    updateTotalCost() {
      let result = null;
      this.orderCart.forEach((item) => {
        result += item.amount * item.price;
      });
      if (this.totalCost === null) {
        result = 0;
      }
      this.totalCost = result;
    },
    async submitOrder() {
      const newOrder = {
        user: this.currentUser.user_name,
        foodList: this.orderCart,
      };

      await createNewOrder(newOrder);
      this.$store.dispatch("cart/clearCart");
      this.$router.push({ path: "/order" });
    },
  },
};
</script>

<style lang="scss" scoped>
.order_cart {
  height: 100%;
  position: relative;

  .order_cart_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
  }

  .order_item {
    border: 1px solid rgb(184, 184, 184);
    padding: 10px;
    width: 100%;
    font-size: 20px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item_amount {
      text-align: center;
      font-size: 20px;
      width: 50%;
      margin-right: 10px;
    }
  }
}
</style>

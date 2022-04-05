<template>
  <el-main>
    <template v-if="currentPage == 'order'">
      <el-tabs type="border-card" @tab-click="handleClick">
        <el-tab-pane v-for="type in foodType" :key="type.id" :label="type.name">
          <div>
            <h2>
              {{ type.name }}
            </h2>
            <div class="foodList">
              <base-food-card
                v-for="food in foodClass"
                :key="food.id"
                :id="food.id"
                :name="food.name"
                :price="food.price"
                :img_url="food.img_url"
                @setAddCartFood="setAddCartFood"
                @setAddCartDialog="setAddCartDialog"
              />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
    <template v-else-if="currentPage == 'order_cart'">
      <the-order-cart />
    </template>
    <el-backtop class="backTopBtn"></el-backtop>
    <the-order-dialog
      :addCartDialog="addCartStatus"
      @setAddCartFood="setAddCartFood"
      @setAddCartDialog="setAddCartDialog"
      @addCartConfirm="addCartConfirm"
    />
  </el-main>
</template>

<script>
import BaseFoodCard from "../components/BaseFoodCard.vue";
import TheOrderDialog from "../components/TheOrderDialog.vue";
import TheOrderCart from "../components/TheOrderCart.vue";
import { getAllFoodClass } from "../../helpers/api";

export default {
  components: { BaseFoodCard, TheOrderDialog, TheOrderCart },
  data() {
    return {
      addCartStatus: false,
      foodType: [
        { id: 1, name: "全部" },
        { id: 2, name: "烤串" },
        { id: 3, name: "炸物" },
        { id: 4, name: "熟食" },
        { id: 5, name: "蔬食" },
        { id: 6, name: "飲料" },
      ],
      foodClass: [],
      tmpFood: null,
    };
  },
  props: ["currentPage"],
  mounted() {
    this.getAllFoodClass();
  },
  methods: {
    setAddCartDialog(status) {
      this.addCartStatus = status;
    },
    setAddCartFood(food) {
      this.tmpFood = food;
    },
    addCartConfirm(amount) {
      this.tmpFood.amount = amount;
      this.$store.dispatch("cart/addCart", this.tmpFood);
      this.addCartStatus = false;
    },
    async getAllFoodClass() {
      getAllFoodClass().then((res) => {
        this.foodClass = res.data;
      });
    },
    handleClick(test) {
      console.log(test);
    },
  },
};
</script>

<style lang="scss" scoped>
.foodList {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.backTopBtn {
  opacity: 0.7;
}
</style>

<template>
  <el-main>
    <template v-if="currentPage == 'order'">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane
          v-for="type in foodType"
          :key="type.id"
          :label="type.name"
          :name="type.name"
        >
          <div>
            <h2>
              {{ type.name }}
            </h2>
            <div class="foodList">
              <base-food-card
                v-for="food in sortedFoodClass"
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
import { getAllFoodClass, getAllFoodType } from "../../helpers/api";

export default {
  components: { BaseFoodCard, TheOrderDialog, TheOrderCart },
  data() {
    return {
      addCartStatus: false,
      activeName: "全部",
      foodType: [],
      foodClass: [],
      sortedFoodClass: [],
      tmpFood: null,
    };
  },
  props: ["currentPage"],
  created() {
    this.initialFoodData();
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
    async initialFoodData() {
      await getAllFoodClass().then((res) => {
        this.foodClass = res.data;
      });
      await getAllFoodType()
        .then((res) => {
          this.foodType = res.data;
        })
        .then(() => {
          this.foodType.unshift({ name: "全部" });
        });
      this.sortedFoodClass = this.foodClass;
    },
    handleClick(e) {
      if (e.name !== "全部") {
        this.sortedFoodClass = this.foodClass.filter((food) => {
          return food.type === e.name;
        });

        return;
      }

      this.sortedFoodClass = this.foodClass;
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

<template>
  <el-main>
    <el-tabs type="border-card" @tab-click="handleClick">
      <el-tab-pane v-for="food in foodClass" :key="food.id" :label="food.name">
        <div>
          <h2>
            {{ food.name }}
          </h2>
          <div class="foodList">
            <base-food-card
              name="烤雞肉串"
              img_url="https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=1200&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F263772%2Fc0f92259311cb883.jpg&width=1200"
              price="35"
              @setAddCartDialog="setAddCartDialog"
            />
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-backtop class="backTopBtn"></el-backtop>
    <the-order-dialog
      :AddCartDialog="AddCartStatus"
      @setAddCartDialog="setAddCartDialog"
    />
  </el-main>
</template>

<script>
import BaseFoodCard from "../components/BaseFoodCard.vue";
import TheOrderDialog from "../components/TheOrderDialog.vue";

export default {
  components: { BaseFoodCard, TheOrderDialog },
  data() {
    return {
      AddCartStatus: false,
      foodClass: [
        { id: 1, name: "全部" },
        { id: 2, name: "烤串" },
        { id: 3, name: "炸物" },
        { id: 4, name: "熟食" },
        { id: 5, name: "蔬食" },
        { id: 6, name: "飲料" },
      ],
    };
  },
  methods: {
    setAddCartDialog(status) {
      this.AddCartStatus = status;
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

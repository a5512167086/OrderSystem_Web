<template>
  <el-dialog
    class="order_dialog"
    title="加入購物車"
    :visible.sync="addCartDialog"
    :show-close="false"
    :close-on-click-modal="false"
    width="85%"
    center
  >
    <div class="input_box">
      <el-input-number v-model="orderNum" :min="1" :max="10" />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="setAddCartDialog">關閉</el-button>
      <el-button type="primary" @click="addCartConfirm"> 送出 </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return { orderNum: 0 };
  },
  props: ["addCartDialog"],
  methods: {
    setAddCartDialog() {
      this.$emit("setAddCartDialog", false);
      this.$emit("setAddCartFood", null);
    },
    addCartConfirm() {
      this.$emit("addCartConfirm", this.orderNum);
    },
    resetIncrement() {
      this.orderNum = 1;
    },
  },
  watch: {
    addCartDialog() {
      setTimeout(() => {
        this.resetIncrement();
      }, 150);
    },
  },
};
</script>

<style lang="scss" scoped>
.order_dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .input_box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

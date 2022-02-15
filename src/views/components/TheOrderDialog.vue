<template>
  <el-dialog
    class="order_dialog"
    title="加入購物車"
    :visible.sync="AddCartDialog"
    :show-close="false"
    width="85%"
    center
  >
    <div class="input_box">
      <el-input-number v-model="orderNum" :min="0" :max="10" />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="setAddCartDialog">關閉</el-button>
      <el-button type="primary" @click="centerDialogVisible = false">
        送出
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return { orderNum: 0 };
  },
  props: ["AddCartDialog"],
  methods: {
    setAddCartDialog() {
      this.$emit("setAddCartDialog", false);
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

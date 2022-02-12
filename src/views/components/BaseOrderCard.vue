<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>訂單編號 : {{ orderNum }} - {{ orderStatus }}</span>
      <el-button style="float: right; padding: 3px 0" type="text">
        編輯
      </el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{ "列表内容 " + o }}
    </div>
    <div class="bottom clearfix">
      <time class="time">{{ orderTime }}</time>
      <el-button type="text" class="button">取消訂單</el-button>
      <el-button type="text" class="button">確認付款</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["orderNum", "orderTime", "orderStatus"],
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>

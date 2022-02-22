<template>
  <el-container class="product_list">
    <div>
      <el-button @click="resetDateFilter">清除日期篩選</el-button>
      <el-button @click="clearFilter">清除所有篩選</el-button>
    </div>
    <el-table
      class="product_list_box"
      height="200"
      border
      :data="userData"
      style="width: 100%"
    >
      <el-table-column
        prop="created_at"
        label="日期"
        sortable
        width="180"
        column-key="date"
      >
      </el-table-column>
      <el-table-column prop="user_name" label="姓名"></el-table-column>
      <el-table-column prop="user_email" label="姓名" width="200">
      </el-table-column>
      <el-table-column prop="account" label="帳戶"></el-table-column>
      <el-table-column prop="password" label="密碼"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >編輯
          </el-button>
          <el-button type="text" size="small">刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
import { getUsers } from "../../helpers/api";

export default {
  data() {
    return {
      userData: [],
    };
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    async getAllUser() {
      await getUsers().then((res) => {
        this.userData = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product_list {
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <el-container class="product_list">
    <div>
      <el-button @click="resetDateFilter">重新整理</el-button>
      <el-button @click="resetDateFilter">清除日期篩選</el-button>
      <el-button @click="clearFilter">清除所有篩選</el-button>
    </div>
    <el-table
      height="200"
      border
      :data="productTableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column
        prop="created_at"
        label="新增日期"
        width="180"
        column-key="date"
        sortable
      >
      </el-table-column>
      <el-table-column prop="name" label="商品名稱" width="180">
      </el-table-column>
      <el-table-column prop="price" label="商品價格" sortable></el-table-column>
      <el-table-column prop="type" label="商品分類" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">
            編輯
          </el-button>
          <el-button type="text" size="small">刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
import { getAllFoodClass } from "../../helpers/api";

export default {
  data() {
    return {
      productTableData: [],
    };
  },
  mounted() {
    this.getAllFoodClass();
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
    async getAllFoodClass() {
      await getAllFoodClass().then((res) => {
        this.productTableData = res.data;
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

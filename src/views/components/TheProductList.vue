<template>
  <el-container class="product_list">
    <div>
      <el-button @click="refresh">重新整理</el-button>
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
          <el-button
            @click="openEditDialog(scope.row.id)"
            type="text"
            size="small"
          >
            編輯
          </el-button>
          <el-button
            type="text"
            size="small"
            @click="openDeleteConfirmDialog(scope.row.id)"
          >
            刪除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="警告"
      :visible.sync="deleteDialogVisible"
      width="30%"
      :before-close="handleDeleteDialogVisible"
    >
      <span>確定要刪除{{ deleteFood.name }}嗎?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleDeleteDialogVisible">取消</el-button>
        <el-button type="primary" @click="deleteConfirm">確定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="編輯"
      :visible.sync="editDialogVisible"
      width="20%"
      :before-close="handleEditDialogVisible"
    >
      <el-form :model="tmpFood" ref="ruleForm" label-width="100px">
        <el-form-item label="商品名稱" prop="name">
          <el-input v-model="tmpFood.name"></el-input>
        </el-form-item>
        <el-form-item label="商品種類">
          <el-select
            style="width: 100%"
            v-model="tmpFood.type"
            placeholder="請選擇"
          >
            <el-option
              v-for="item in productClass"
              :key="item.index"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品價格" prop="name">
          <el-input v-model="tmpFood.price"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleEditDialogVisible">取消</el-button>
        <el-button type="primary" @click="updateConfirm">確定</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import {
  getAllFoodClass,
  getAllFoodType,
  deleteFoodClassById,
  getFoodClassById,
  updateFoodClassById,
} from "../../helpers/api";

export default {
  data() {
    return {
      productTableData: [],
      productClass: [],
      deleteDialogVisible: false,
      editDialogVisible: false,
      deleteFood: "",
      tmpFood: {},
    };
  },
  mounted() {
    this.getAllFoodClass();
    this.getAllFoodType();
  },
  methods: {
    refresh() {
      this.getAllFoodClass();
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    async getAllFoodClass() {
      await getAllFoodClass().then((res) => {
        this.productTableData = res.data;
      });
    },
    async getAllFoodType() {
      await getAllFoodType().then((res) => {
        this.productClass = res.data;
      });
    },
    async updateFoodClassById() {
      const updateFood = {
        id: this.tmpFood.id,
        name: this.tmpFood.name,
        price: this.tmpFood.price,
        type: this.tmpFood.type,
      };
      await updateFoodClassById(updateFood);
    },
    openDeleteConfirmDialog(id) {
      this.deleteDialogVisible = true;

      const filterDeleteFood = this.productTableData.filter(
        (item) => item.id === id
      );

      this.deleteFood = filterDeleteFood[0];
    },
    handleDeleteDialogVisible() {
      this.deleteDialogVisible = false;
    },
    handleEditDialogVisible() {
      this.editDialogVisible = false;
    },
    async deleteConfirm() {
      await deleteFoodClassById(this.deleteFood.id);
      await this.getAllFoodClass();
      this.deleteDialogVisible = false;
    },
    async updateConfirm() {
      await this.updateFoodClassById();
      await this.getAllFoodClass();
      this.editDialogVisible = false;
    },
    async openEditDialog(id) {
      await getFoodClassById(id).then((res) => {
        this.tmpFood = res.data.food;
      });
      this.editDialogVisible = true;
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

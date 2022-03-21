<template>
  <el-container class="product_list">
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
            @click="deleteUserDialog(scope.row.id)"
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
      <span>確定要刪除嗎?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleDeleteDialogVisible">取消</el-button>
        <el-button type="primary" @click="deleteConfirm">確定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="編輯"
      :visible.sync="editDialogVisible"
      width="35%"
      :before-close="handleEditDialogVisible"
    >
      <el-form :model="tmpUser" ref="ruleForm" label-width="100px">
        <el-form-item label="商品名稱" prop="name">
          <el-input v-model="tmpUser.user_name"></el-input>
        </el-form-item>
        <el-form-item label="商品價格" prop="name">
          <el-input v-model="tmpUser.user_email"></el-input>
        </el-form-item>
        <el-form-item label="商品價格" prop="name">
          <el-input v-model="tmpUser.account"></el-input> </el-form-item
        ><el-form-item label="商品價格" prop="name">
          <el-input v-model="tmpUser.password"></el-input>
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
  getUsers,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../../helpers/api";

export default {
  data() {
    return {
      userData: [],
      deleteDialogVisible: false,
      editDialogVisible: false,
      deleteUser: {},
      tmpUser: {},
    };
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    deleteUserDialog(id) {
      this.deleteDialogVisible = true;

      const filterDeleteUser = this.userData.filter((item) => item.id === id);

      this.deleteUser = filterDeleteUser[0];
    },
    async getAllUser() {
      await getUsers().then((res) => {
        this.userData = res.data;
      });
    },
    async updateUserById() {
      const updateUser = {
        id: this.tmpUser.id,
        user_name: this.tmpUser.user_name,
        user_email: this.tmpUser.user_email,
        account: this.tmpUser.account,
        password: this.tmpUser.password,
      };
      await updateUserById(updateUser);
    },
    handleDeleteDialogVisible() {
      this.deleteUser = null;
      this.deleteDialogVisible = false;
    },
    handleEditDialogVisible() {
      this.editDialogVisible = false;
    },
    async deleteConfirm() {
      await deleteUserById(this.deleteUser.id);
      await this.getAllUser();
      this.deleteDialogVisible = false;
    },
    async openEditDialog(id) {
      await getUserById(id).then((res) => {
        this.tmpUser = res.data;
      });

      this.editDialogVisible = true;
    },
    async updateConfirm() {
      await this.updateUserById();
      await this.getAllUser();
      this.editDialogVisible = false;
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

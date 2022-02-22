<template>
  <el-container>
    <el-card class="product_form_card">
      <div slot="header">
        <h1>新增使用者</h1>
      </div>
      <el-form
        label-position="left"
        label-width="100px"
        :model="userForm"
        :rules="rules"
      >
        <el-form-item label="使用者帳號" prop="account">
          <el-input v-model="userForm.account"></el-input>
        </el-form-item>
        <el-form-item label="使用者密碼" prop="password">
          <el-input type="password" v-model="userForm.password"></el-input>
        </el-form-item>
        <el-form-item label="使用者名稱" prop="userName">
          <el-input v-model="userForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="使用者信箱" prop="userEmail">
          <el-input v-model="userForm.userEmail"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="submitUserForm">
            新增使用者
          </el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-container>
</template>

<script>
import { signUpUser } from "../../helpers/api";

export default {
  data() {
    return {
      userForm: {
        account: "",
        password: "",
        userName: "",
        userEmail: "",
      },
      rules: {
        account: [
          { required: true, message: "請輸入帳號" },
          { min: 6, message: "帳戶長度須超過六個數字", trigger: "blur" },
        ],
        password: [
          { required: true, message: "請輸入密碼" },
          { min: 6, message: "密碼長度須超過六個數字", trigger: "blur" },
        ],
        userName: [{ required: true, message: "請輸入用戶名稱" }],
        userEmail: [
          { required: true, message: "請輸入用戶信箱" },
          { type: "email", message: "請輸入正確的信箱格式", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitUserForm() {
      signUpUser(this.userForm);
    },
  },
};
</script>

<style lang="scss" scoped>
.product_form_card {
  height: fit-content;
}
</style>

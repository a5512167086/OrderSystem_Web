<template>
  <el-container>
    <el-card class="product_form_card">
      <div slot="header">
        <h1>新增使用者</h1>
      </div>
      <el-form label-position="left" label-width="100px" :model="userForm">
        <el-form-item label="使用者帳號">
          <el-input v-model="userForm.account"></el-input>
        </el-form-item>
        <el-form-item label="使用者密碼">
          <el-input type="password" v-model="userForm.password"></el-input>
        </el-form-item>
        <el-form-item label="使用者名稱">
          <el-input v-model="userForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="使用者信箱">
          <el-input v-model="userForm.userEmail"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="submitForm('ruleForm')">
            新增使用者
          </el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        account: "",
        password: "",
        userName: "",
        userEmail: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.product_form_card {
  height: fit-content;
}
</style>

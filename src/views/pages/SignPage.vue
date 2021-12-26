<template>
  <el-main class="mainBox">
    <el-card class="signForm">
      <div slot="header" class="formTitle">
        {{ isSignIn ? "登入頁面" : "註冊頁面" }}
      </div>
      <el-form
        ref="userInfo"
        label-position="left"
        label-width="80px"
        :model="userInfo"
        :rules="rules"
      >
        <el-form-item class="formItem" label="帳戶" prop="account">
          <el-input v-model="userInfo.account"></el-input>
        </el-form-item>
        <el-form-item class="formItem" label="密碼" prop="password">
          <el-input
            type="password"
            v-model="userInfo.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item
          v-if="!isSignIn"
          class="formItem"
          label="用戶名稱"
          prop="userName"
        >
          <el-input v-model="userInfo.userName"></el-input>
        </el-form-item>
        <el-form-item
          v-if="!isSignIn"
          class="formItem"
          label="用戶信箱"
          prop="userEmail"
        >
          <el-input v-model="userInfo.userEmail"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button v-if="isSignIn" type="info" @click="submitForm(true)">
            登入
          </el-button>
          <el-button v-else type="info" @click="submitForm()">註冊</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-main>
</template>

<script>
import { signUpUser, signInUser } from "../../helpers/api";

export default {
  data() {
    return {
      isSignIn: true,
      userInfo: {
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
  props: ["signState"],
  watch: {
    signState(state) {
      this.$refs["userInfo"].resetFields();
      state === "signIn" ? (this.isSignIn = true) : (this.isSignIn = false);
    },
  },
  methods: {
    submitForm(isSignIn) {
      this.$refs["userInfo"].validate((valid) => {
        if (valid) {
          if (isSignIn) {
            this.signIn();
          } else {
            this.signUp();
          }
        } else {
          return false;
        }
      });
    },
    async signUp() {
      await signUpUser(this.userInfo);
    },
    async signIn() {
      await signInUser(this.userInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
.mainBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.formTitle {
  font-size: 1.25rem;
}
.signForm {
  width: 100%;
}

@media (min-width: 400px) {
  .signForm {
    width: 400px;
  }
}
</style>

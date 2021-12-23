<template>
  <el-main class="mainBox">
    <el-card class="signForm">
      <div slot="header" class="formTitle">登入</div>
      <el-form label-position="left" label-width="80px">
        <el-form-item class="formItem" label="帳戶">
          <el-input></el-input>
        </el-form-item>
        <el-form-item class="formItem" label="密碼">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="submitForm('dynamicValidateForm')">
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-main>
</template>

<script>
export default {};
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

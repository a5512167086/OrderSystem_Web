<template>
  <el-container>
    <el-card class="product_form_card">
      <div slot="header">
        <h1>新增商品</h1>
      </div>
      <el-form label-position="left" label-width="100px" :model="productForm">
        <el-form-item label="商品名稱">
          <el-input v-model="productForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品種類">
          <el-select style="width: 100%"></el-select>
        </el-form-item>
        <el-form-item label="商品價格">
          <el-input v-model="productForm.price"></el-input>
        </el-form-item>
        <el-form-item label="商品圖片">
          <el-alert
            v-if="imgUploading"
            title="上傳圖片中"
            type="warning"
            effect="dark"
          >
          </el-alert>
          <input v-else @change="onFileChange" type="file" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="submitForm('ruleForm')">
            新增商品
          </el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      imgUploading: false,
      productForm: {
        name: "",
        class: "",
        price: "",
        img_url: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.productForm);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    async onFileChange(e) {
      this.imgUploading = true;
      let body = new FormData();
      body.set("key", "cb5a47f73fb1180bbb9ec2962aa93b1b");
      body.append("image", e.target.files[0]);

      return await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        data: body,
      })
        .then((res) => {
          this.imgUploading = false;
          this.productForm.img_url = res.data.data.display_url;
        })
        .catch((err) => {
          this.imgUploading = false;

          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.product_form_card {
  height: fit-content;
}
</style>

<template>
  <el-container>
    <el-card class="product_form_card">
      <div slot="header">
        <h1>新增商品</h1>
      </div>
      <el-form
        ref="productForm"
        label-position="left"
        label-width="100px"
        :model="productForm"
        :rules="rules"
      >
        <el-form-item label="商品名稱" prop="name">
          <el-input v-model="productForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品種類" prop="type">
          <el-select style="width: 100%" v-model="productForm.type">
            <el-option
              v-for="item in productClass"
              :key="item.index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品價格" prop="price">
          <el-input v-model.number="productForm.price"></el-input>
        </el-form-item>
        <el-form-item label="商品圖片" prop="img_url">
          <el-alert
            v-if="imgUploading"
            title="上傳圖片中"
            type="warning"
            :closable="false"
            effect="dark"
          >
          </el-alert>
          <el-alert
            v-if="productForm.img_url != null"
            title="上傳成功"
            type="success"
            :closable="false"
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
import { createFoodClass } from "../../helpers/api";

export default {
  data() {
    return {
      imgUploading: false,
      rules: {
        name: [{ required: true, message: "請輸入商品名稱" }],
        type: [{ required: true, message: "請輸入商品種類" }],
        price: [
          { required: true, message: "請輸入商品價錢" },
          { type: "number", message: "請輸入正確的價錢", trigger: "blur" },
        ],
        img_url: [{ required: true, message: "請上傳商品圖片" }],
      },
      productForm: {
        name: "",
        type: "",
        price: null,
        img_url: null,
      },
      productClass: ["test", "test"],
    };
  },
  methods: {
    submitForm() {
      console.log(this.productForm);
      this.$refs["productForm"].validate((valid) => {
        if (valid) {
          this.createFoodClass();
        } else {
          return false;
        }
      });
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
    async createFoodClass() {
      await createFoodClass(this.productForm).then((res) => {
        console.log(res.data);
        this.$refs["productForm"].resetFields();
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

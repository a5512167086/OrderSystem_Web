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
        :rules="productRules"
      >
        <el-form-item label="商品名稱" prop="name">
          <el-input v-model="productForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品種類" prop="type">
          <el-select style="width: 100%" v-model="productForm.type">
            <el-option
              v-for="item in productClass"
              :key="item.index"
              :label="item.name"
              :value="item.name"
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
          <el-button type="primary" @click.prevent="submitForm('product')">
            新增商品
          </el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="type_form_card">
      <div slot="header">
        <h1>新增種類</h1>
      </div>
      <el-form
        ref="typeForm"
        label-position="left"
        label-width="100px"
        :model="typeForm"
        :rules="typeRules"
      >
        <el-form-item label="商品種類" prop="name">
          <el-input v-model="typeForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.prevent="submitForm('type')">
            新增種類
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-container>
</template>

<script>
import axios from "axios";
import {
  createFoodClass,
  createFoodType,
  getAllFoodType,
} from "../../helpers/api";

export default {
  data() {
    return {
      imgUploading: false,
      productRules: {
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
      typeRules: { name: [{ required: true, message: "請輸入種類名稱" }] },
      typeForm: {
        name: "",
      },
      productClass: [],
    };
  },
  mounted() {
    this.getAllFoodType();
  },
  methods: {
    submitForm(formType) {
      switch (formType) {
        case "product":
          this.$refs["productForm"].validate(async (valid) => {
            if (valid) {
              await this.createFoodClass();
              this.$emit("reRenderTrigger");
            } else {
              return false;
            }
          });
          break;
        case "type":
          this.$refs["typeForm"].validate(async (valid) => {
            if (valid) {
              await this.createFoodType();
              this.getAllFoodType();
            } else {
              return false;
            }
          });
          break;
      }
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
        .catch(() => {
          this.imgUploading = false;
        });
    },
    async createFoodClass() {
      await createFoodClass(this.productForm).then(() => {
        this.$refs["productForm"].resetFields();
      });
    },
    async createFoodType() {
      await createFoodType(this.typeForm).then(() => {
        this.$refs["typeForm"].resetFields();
      });
    },
    async getAllFoodType() {
      await getAllFoodType().then((res) => {
        this.productClass = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  display: flex;
  flex-direction: column;
}

.product_form_card {
  height: fit-content;
}

.type_form_card {
  margin-top: 10px;
}
</style>

<template>
  <h1>管理页面</h1>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="书单表" name="first">
      <Book />
    </el-tab-pane>
    <el-tab-pane label="书籍表" name="second">
      <BookList/>
      <!-- <el-upload
        class="avatar-uploader"
        action="'http://124.221.168.57:8099' + '/root/file/fileup'"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload> -->
    </el-tab-pane>
    <el-tab-pane label="关注表" name="third">
      <Attentiontable/>
    </el-tab-pane>
    <el-tab-pane label="商品表" name="fourth">
      <Commoditylist/>
    </el-tab-pane>
    <el-tab-pane label="广播剧" name="five"><RadioDrama/></el-tab-pane>
    <!-- <el-tab-pane label="" name="fourth">定时任务补偿</el-tab-pane> -->
  </el-tabs>
</template>

<script>
import Book from "../components/admin/Book.vue";
import BookList from "../components/admin/BookList.vue";
import Attentiontable from "../components/admin/Attentiontable.vue"
import Commoditylist from "../components/admin/Commoditylist.vue"
import RadioDrama from "../components/admin/RadioDrama.vue"
export default {
  name: "Admin",
  components: { Book,BookList,Attentiontable,Commoditylist,RadioDrama },
  data() {
    return {
      activeName: "five",
      imageUrl:""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res);
      // if (res.code) return this.$message.error(res.message); //上传失败
      this.imageUrl = URL.createObjectURL(file.raw); //设置缩略图的路径
      // this.imageUrl = URL.createObjectURL(file.raw);
      console.log(this.imageUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style>
</style>
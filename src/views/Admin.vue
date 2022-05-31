<template>
  <h1>管理页面</h1>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="书单表" name="first">
      <Book />
    </el-tab-pane>
    <el-tab-pane label="书籍表" name="second">
      <BookList />
    </el-tab-pane>
    <el-tab-pane label="关注表" name="third">
      <Attentiontable />
    </el-tab-pane>
    <el-tab-pane label="商品表" name="fourth">
      <Commoditylist />
    </el-tab-pane>
    <el-tab-pane label="广播剧" name="five"><RadioDrama /></el-tab-pane>
    <el-tab-pane label="上传文件" name="teng">
      <!-- <van-button type="danger">危险按钮</van-button> -->
      <el-tooltip
        class="item"
        effect="dark"
        :content="tag.name"
        placement="top-start"
        v-for="(tag, index) in fileList"
        :key="index"
      >
        <el-tag
          style="margin-right: 10px; display: flex"
          :disable-transitions="false"
          @close="handleClose(index)"
          closable
          @click="downloadFile(tag)"
          ><i class="el-icon-paperclip"></i
          ><span class="tagtext">{{ tag.name }}</span></el-tag
        >
      </el-tooltip>
      <el-upload
        class="upload-demo"
        action
        :http-request="uploadFile"
        ref="upload"
        :limit="fileLimit"
        :on-remove="handleRemove"
        :file-list="fileList"
        :on-exceed="handleExceed"
        :before-upload="beforeUpload"
        :show-file-list="false"
        :headers="headers"
      >
        <!-- action="/api/file/fileUpload" -->
        <el-button class="btn"
          ><i class="el-icon-paperclip"></i>上传附件</el-button
        >
      </el-upload>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Book from "../components/admin/Book.vue";
import BookList from "../components/admin/BookList.vue";
import Attentiontable from "../components/admin/Attentiontable.vue";
import Commoditylist from "../components/admin/Commoditylist.vue";
import RadioDrama from "../components/admin/RadioDrama.vue";
export default {
  name: "Admin",
  components: { Book, BookList, Attentiontable, Commoditylist, RadioDrama },
  data() {
    return {
      activeName: "teng",
      //上传后的文件列表
      fileList: [],
      // 允许的文件类型
      fileType: [
        "pdf",
        "doc",
        "docx",
        "xls",
        "xlsx",
        "txt",
        "png",
        "jpg",
        "bmp",
        "jpeg",
      ],
      // 运行上传文件大小，单位 M
      fileSize: 50,
      // 附件数量限制
      fileLimit: 5,
      //请求头
      headers: { "Content-Type": "multipart/form-data" },
    };
  },
  methods: {
    //上传文件之前
    beforeUpload(file) {
      if (file.type != "" || file.type != null || file.type != undefined) {
        //截取文件的后缀，判断文件类型
        const FileExt = file.name.replace(/.+\./, "").toLowerCase();
        //计算文件的大小
        const isLt5M = file.size / 1024 / 1024 < 50; //这里做文件大小限制
        //如果大于50M
        if (!isLt5M) {
          this.$showMessage("上传文件大小不能超过 50MB!");
          return false;
        }
        //如果文件类型不在允许上传的范围内
        if (this.fileType.includes(FileExt)) {
          return true;
        } else {
          this.$message.error("上传文件格式不正确!");
          return false;
        }
      }
    },
    //上传了的文件给移除的事件，由于我没有用到默认的展示，所以没有用到
    handleRemove() {},
    //这是我自定义的移除事件
    handleClose(i) {
      this.fileList.splice(i, 1); //删除上传的文件
      if (this.fileList.length == 0) {
        //如果删完了
        this.fileflag = true; //显示url必填的标识
        this.$set(this.rules.url, 0, {
          required: true,
          validator: this.validatorUrl,
          trigger: "blur",
        }); //然后动态的添加本地方法的校验规则
      }
    },
    //超出文件个数的回调
    handleExceed() {
      this.$message({
        type: "warning",
        message: "超出最大上传文件数量的限制！",
      });
      return;
    },
    //上传文件的事件
    async uploadFile(item) {
      console.log("item", item.file);
      // this.$showMessage("文件上传中........");
      //上传文件的需要formdata类型;所以要转
      let formDatas = new FormData();
      Object.keys(item.file).forEach((key) => {
        formDatas.append(key, item.file[key]);
      });
      formDatas.append("file", item.file);
    //  console.log(formDatas.get('file'))
     let a = formDatas.get('file')
      console.log(a);
      let { data } = await this.$axios({
        method: "POST",
        url: "/root/file/fileup",
        // headers: this.headers,
        data: {
          multipartFile: {...a}
        },
      });
      console.log(data);

    },
  },
};
</script>

<style>
</style>
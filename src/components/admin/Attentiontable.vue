<template>
  <div class="book">
    <input type="text" v-model="book.bookname" placeholder="请输入书单名" />
    <input type="text" v-model="book.booknr" placeholder="请输入书单内容" />
  </div>
  <el-button type="success" @click="submitbok">提交表单</el-button>
  <el-table :data="bookdata" style="width: 100%">
    <el-table-column label="关注名" width="110">
      <template #default="scope">
        <el-input v-model="scope.row.gzex"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="作者" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.gzname"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="mini"
          @click="
            updataActice(scope.row.id, {
              bookName: scope.row.gzname,
              bookUser: scope.row.gzex,
            })
          "
          type="primary"
          >修改</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)"
          id="button"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Attentiontable",
  data() {
    return {
      bookdata: [],
      book: {
        bookname: "",
        booknr: "",
      },
    };
  },
  created() {
    this.getdata();
  },
  methods: {
      //全查
    async getdata() {
      let { data } = await this.$axios({
        method: "POST",
        url: "/root/guanzhu/Find",
      });
      this.bookdata = data;
      // console.log(this.bookdata);
    },
    //修改
   async updataActice(id, doc) {
      const {bookName,bookUser}= doc
     let {data} = await this.$axios({
       method:"PUT",
       url:`/root/guanzhu?gzex=${bookName}&gzname=${bookUser}&id=${id}`
     })
     console.log(data);
    },
    //添加
    async submitbok() {
      const { bookname, booknr, } = this.book;
      let { data } = await this.$axios({
        method: "POST",
        url: `/root/guanzhu?gzex=${bookname}&gzname=${booknr}`,
      });
      console.log(data);
    },
    //删除
    async handleDelete(id) {
      console.log(id);
      let { data } = await this.$axios({
        methods: "DELETE",
        url: `/root/guanzhu?id=${id}`,
      });
      console.log(data);
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.cell {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}
#button {
  margin-left: -1px;
}
.book {
  display: flex;
  flex-direction: column;
  input {
    height: 30px;
    width: 70%;
    margin-top: 10px;
    border-radius: 8px;
  }
}
</style>
<template>
  <div class="book">
    <input type="text" v-model="book.bookname" placeholder="请输入书单名" />
    <input type="text" v-model="book.booknr" placeholder="请输入书单内容" />
    <input type="text" v-model="book.bookUser" placeholder="请输入作者" />
    <input type="text" v-model="book.bookLx" placeholder="请输入作者" />
    <input type="text" v-model="book.bookFeiy" placeholder="请输入作者" />
    <input type="text" v-model="book.bookPf" placeholder="请输入作者" />
  </div>
  <el-button type="success" @click="submitbok">提交表单</el-button>
  <el-table :data="bookdata" style="width: 100%">
    <el-table-column label="书单名" width="110">
      <template #default="scope">
        <el-input v-model="scope.row.bookName"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="书单内容" width="120">
      <template #default="scope">
        <el-input v-model="scope.row.bookZt"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="	书籍类型" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.bookPx"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="	评分" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.bookFeiy"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="作者" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.bookUser"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="bookZt" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.bookPf"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="mini"
          @click="
            updataActice(scope.row.id, {
              bookName: scope.row.bookName,
              bookLx: scope.row.bookPx,
              bookUser: scope.row.bookUser,
              bookFeiy: scope.row.bookFeiy,
              bookPf: scope.row.bookPf,
              bookZt: scope.row.bookZt,
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
  name: "BookList",
  data() {
    return {
      bookdata: [],
      book: {
        bookname: "",
        booknr: "",
        bookUser: "",
        bookLx: "",
        bookFeiy: "",
        bookPf: "",
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
        url: "/root/bookuser/Find",
      });
      this.bookdata = data;
      // console.log(this.bookdata);
    },
    //修改
    async updataActice(id, doc) {
      const { bookName, bookLx, bookUser, bookFeiy, bookPf, bookZt } = doc;
      let { data } = await this.$axios({
        method: "PUT",
        url: `/root/bookuser?bookName=${bookName}&bookUser=${bookUser}&bookPf=${bookPf}&bookFeiy=${bookFeiy}&bookLx=${bookLx}&bookZt=${bookZt}&id=${id}`,
      });
      console.log(data);
    },
    //添加
    async submitbok() {
      const { bookname, booknr, bookUser, bookLx, bookFeiy, bookPf } =
        this.book;
      let { data } = await this.$axios({
        method: "POST",
        url: `/root/bookuser?bookName=${bookname}&bookUser=${bookUser}&bookPf=${booknr}&bookFeiy=${bookFeiy}&bookLx=${bookLx}&bookZt=${bookPf}`,
      });
      console.log(data);
    },
    //删除
    async handleDelete(id) {
    //   console.log(id);
      let { data } = await this.$axios({
        method: "DELETE",
        url: `/root/bookuser?id=${id}`,
      });
          if (data == true) {
        this.$message.success("删除成功");
      }
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
<template>
  <div class="book">
    <input type="text" v-model="book.bookname" placeholder="请输入书单名" />
    <input type="text" v-model="book.booknr" placeholder="请输入书单内容" />
    <input type="text" v-model="book.bookUser" placeholder="请输入作者" />
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
        <el-input v-model="scope.row.bookNr"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="作者" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.bookUser"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="mini"
          @click="
            updataActice(scope.row.bookid, {
              bookName: scope.row.bookName,
              bookNr: scope.row.bookNr,
              bookUser: scope.row.bookUser,
            })
          "
          type="primary"
          >修改</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.bookid)"
          id="button"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Book",
  data() {
    return {
      bookdata: [],
      book: {
        bookname: "",
        booknr: "",
        bookUser: "",
      },
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    async getdata() {
      let { data } = await this.$axios({
        method: "POST",
        url: "/root/book/Find",
      });
      this.bookdata = data;
    },
    //修改http://124.221.168.57:8099/root/book?bookName=12122121111&bookNr=1&bookUser=1&bookid=15
    async updataActice(id, doc) {
      const { bookName, bookNr, bookUser } = doc;
      let { data } = await this.$axios({
        method: "PUT",
        url: `/root/book?bookName=${bookName}&bookNr=${bookNr}&bookUser=${bookUser}&bookid=${id}`,
      });
      //  console.log(data);
    },
    async submitbok() {
      const { bookname, booknr, bookUser } = this.book;
      let { data } = await this.$axios({
        method: "POST",
        url: `/root/book?bookName=${bookname}&bookNr=${booknr}&bookUser=${bookUser}`,
      });
      // console.log(data);
    },
    async handleDelete(id) {
      console.log(id);
      let { data } = await this.$axios({
        method: "DELETE",
        url: `/root/book?id=${id}`,
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
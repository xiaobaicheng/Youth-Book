<template>
  <div class="book">
    <input type="text" v-model="book.bookname" placeholder="请输入链接" />
    <input type="text" v-model="book.je" placeholder="请输入类型" />
    <input type="text" v-model="book.booknr" placeholder="请输入名称" />
  </div>
  <el-button type="success" @click="submitbok">提交表单</el-button>
  <el-table :data="bookdata" style="width: 100%">
    <el-table-column label="链接" width="110">
      <template #default="scope">
        <el-input v-model="scope.row.gbLj"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="类型" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.gbLx"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="名称" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.gbName"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="mini"
          @click="
            updataActice(scope.row.id, {
              gbLj: scope.row.gbLj,
              gbLx: scope.row.gbLx,
              gbName: scope.row.gbName,
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
  name: "RadioDrama",
  data() {
    return {
      bookdata: [],
      book: {
        bookname: "",
        booknr: "",
        je: "",
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
        url: "/root/radio/Find",
      });
      this.bookdata = data;
      // console.log(this.bookdata);
    },
    //修改
    async updataActice(id, doc) {
      const { gbLj, gbLx, gbName } = doc;
      let { data } = await this.$axios({
        method: "PUT",
        url: `/root/radio?gbLj=${gbLj}&gbLx=${gbLx}&gbName=${gbName}&id=${id}`,
      });
      console.log(data);
    },
    //添加
    async submitbok() {
      const { bookname, booknr, je } = this.book;
      let { data } = await this.$axios({
        method: "POST",
        url: `/root/radio?gbName=${bookname}&gbLx=${booknr}&gbLj=${je}`,
      });
      console.log(data);
    },
    //删除
    async handleDelete(id) {
      console.log(id);
      let { data } = await this.$axios({
        method: "DELETE",
        url: `/root/radio?id=${id}`,
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
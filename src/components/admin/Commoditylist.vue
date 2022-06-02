<template>
  <div class="book">
    <input type="text" v-model="book.bookname" placeholder="请输入名" />
    <input type="text" v-model="book.booknr" placeholder="请输入价格" />
  </div>
  <el-button type="success" @click="submitbok">提交表单</el-button>
  <el-table :data="bookdata" style="width: 100%">
    <el-table-column label="价格" width="110">
      <template #default="scope">
        <el-input v-model="scope.row.jiage"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="名称" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.name"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="mini"
          @click="
            updataActice(scope.row.id, {
              name: scope.row.name,
              jiage: scope.row.jiage,
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
  name: "Commoditylist",
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
        url: "/root/commodity/Find",
      });
      this.bookdata = data;
      // console.log(this.bookdata);

    },
    //修改
   async updataActice(id, doc) {
      const {name,
jiage}= doc
     let {data} = await this.$axios({
       method:"PUT",
       url:`/root/commodity?jiage=${jiage}&name=${name}&id=${id}`
     })
     console.log(data);

    },
    //添加
    async submitbok() {
      const { bookname, booknr, } = this.book;
      let { data } = await this.$axios({
        method: "POST",
        url: `/root/commodity?jiage=${bookname}&name=${booknr}`,
      });
    },
    //删除
    async handleDelete(id) {
      console.log(id);
      let { data } = await this.$axios({
        method: "DELETE",
        url: `/root/commodity?id=${id}`,
      });
          if (data == true) {
        this.$message.success("删除成功");
            this.getdata();

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
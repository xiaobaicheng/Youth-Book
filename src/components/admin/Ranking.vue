<template>
  
 <div class="book">
    <input type="text" v-model="book.bookname" placeholder="请输入板块" />
    <input type="text" v-model="book.booknr" placeholder="请输入简介" />
    <input type="text" v-model="book.bookUser" placeholder="请输入名称" />
    <input type="text" v-model="book.bookLx" placeholder="请输入图片" />
    <input type="text" v-model="book.bookFeiy" placeholder="请输入日期" />
  </div>
  <el-button type="success" @click="submitbok">提交表单</el-button>
  <el-table :data="bookdata" style="width: 100%">
    <el-table-column label="板块" width="110">
      <template #default="scope">
        <el-input v-model="scope.row.hotDz"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="简介" width="120">
      <template #default="scope">
        <el-input v-model="scope.row.hotJs"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="	名称" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.hotName"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="图片" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.hotPoto"></el-input>
      </template>
    </el-table-column>
    <el-table-column label="日期" width="80">
      <template #default="scope">
        <el-input v-model="scope.row.hotSj"></el-input>
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
  name: "Ranking",
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
        url: "/root/hot/Find",
      });
      this.bookdata = data;
      console.log(this.bookdata);
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
        // http://124.221.168.57:8099/root/hot?hotDz=1&hotJs=1&hotName=1&hotPh=&hotPoto=212
      let { data } = await this.$axios({
        method: "POST",
        url: `/root/hot?hotDz=${bookname}&hotJs=${booknr}&hotName=${bookUser}&hotPoto=${bookFeiy}&hotSj=${bookLx}`,
      });
      if (data.id){
        this.$message.success("添加成功");
            this.getdata();
      }   
      console.log(data);
    },
    //删除
    async handleDelete(id) {
    //   console.log(id);
      let { data } = await this.$axios({
        method: "DELETE",
        url: `/root/hot?id=${id}`,
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
<template>
  <div class="wrap">
        <el-input v-model="input" placeholder="请输入内容" @click="Search"></el-input>
    <header>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="图书" name="first"></el-tab-pane>
        <el-tab-pane label="推荐" name="second">
          <Recommend></Recommend>
        </el-tab-pane>
        <el-tab-pane label="男生" name="third">未完结</el-tab-pane>
        <el-tab-pane label="女生" name="fourth">全一期</el-tab-pane>
      </el-tabs>
    </header>
  </div>
  <div class="content"></div>
</template>

<script>
import Recommend from "../components/bookshelfe/Recommend.vue";
export default {
  name: "Bookshelf",
  components: { Recommend },
  data() {
    return {
      activeName: "second",
      input:""
    };
  },
  methods: {
        Search(){
      this.$router.push("/Search")
    }
  },
};
</script>
<style lang="less" scoped>
// .content {
//   background-color: #4f9684;
//   height: 67px;
//   position: relative;
//   top: -993px;
// }
/deep/.el-tabs__nav-scroll {
  margin-top: -10px;
  width: 190%;

}
/deep/.el-tabs__item {
  color: #333333;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    color: #333333;
    font-size: 1.1875rem;
    font-weight: 600;
  }
}
/deep/.el-tabs__active-bar {
  background-color: #5fcbb0;
  height: 4px;
}

header {
  margin-left: 4%;
  margin-right: 4%;

}
  /deep/.el-input__inner {
    border: 1px #5fcbb0 solid;
    // margin-top: 28px;
    // position: fixed;
    margin-left: 74%;
    width: 70px;
    height: 20px;
    border-radius: 15px;
  }
</style>
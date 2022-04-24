<template>
  <div class="wrap">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="图书" name="first"></el-tab-pane>
      <el-tab-pane label="推荐" name="second">
        <Recommend></Recommend>
      </el-tab-pane>
      <el-tab-pane label="男生" name="third">未完结</el-tab-pane>
      <el-tab-pane label="女生" name="fourth">全一期</el-tab-pane>
    </el-tabs>
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
      input: "",
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>

// /deep/.el-tabs__content {
//   margin-left: 4%;
//   margin-right: 4%;
// }
/deep/.el-tabs__nav-wrap {
  height: 70px;
  background-color: #4f9684;
}
/deep/.el-tabs__nav-scroll {
  margin-top: 10px;
  width: 190%;
}
/deep/.el-tabs__item {
  color: #333333;
  font-size: 1rem;
  margin-top: 18px;
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
/deep/.el-input__inner {
  border: 1px #5fcbb0 solid;
  margin-left: 74%;
  width: 70px;
  height: 20px;
  border-radius: 15px;
}
</style>
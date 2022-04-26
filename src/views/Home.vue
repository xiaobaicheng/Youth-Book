<template>
  <header>
    <div class="logo">
      <img src="../assets/img/home/time.png" alt="" />
    </div>
    <input type="text" placeholder="搜索框" @click="Search" />
    <div class="button">
      <img src="../assets/img/home/男生女生.png" alt="" />
    </div>
  </header>

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="直播" name="first">直播</el-tab-pane>
    <el-tab-pane label="推荐" name="second"
      ><Recommend></Recommend>
    </el-tab-pane>
    <el-tab-pane label="广播剧" name="third"></el-tab-pane>
    <el-tab-pane label="声音恋人" name="fourth">声音恋人</el-tab-pane>
    <el-tab-pane label="相声评书" name="five">相声评书</el-tab-pane>
  </el-tabs>
  <hr>
</template>

<script>
import Recommend from "../components/apphome/Recommend.vue";
export default {
  name: "Home",
  components: {
    Recommend,
  },
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    Search() {
      this.$router.push("/Search");
    },
    handleClick(tab, event) {
      if ((tab.props.name == "third")) {
        this.$router.push("/Radio");
      }
      else{
        return
      }
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.el-carousel__button {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
}
header {
  height: 3.125rem;
  width: 100%;
  display: flex;
  align-items: center;
  .logo {
    margin-left: 3%;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    img {
      height: 100%;
    }
  }
  input {
    height: 1.75rem;
    width: 64%;
    margin-left: 4%;
    border-radius: 0.9375rem;
    background-color: #f5f5f5;
    border: 0.0625rem #f5f5f5 solid;
    text-align: center;
  }
  .button {
    height: 1.75rem;
    width: 1.75rem;
    margin-left: 5%;
    img {
      width: 100%;
    }
  }
}
.is-active {
  color: red;
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
  height: 0.25rem;
}
</style>

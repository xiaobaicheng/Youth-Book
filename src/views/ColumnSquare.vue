<template>
  <header>
    <span class="big" @click="returnfound">&lt;</span>
    <span>专栏广场</span>
    <span class="big">···</span>
  </header>
  <div class="wrap">
    <div>神创作</div>
    <div class="two">神配音</div>
    <div>神同人</div>
  </div>
  <div class="banner">
    <img src="../assets/img/found/banner1.png" alt="" />
  </div>
  <div class="banner">
    <img src="../assets/img/found/banner2.png" alt="" />
  </div>
  <div class="banner">
    <img src="../assets/img/found/banner3.png" alt="" />
  </div>
  <div class="banner">
    <img src="../assets/img/found/banner4.png" alt="" />
  </div>
  <div class="banner">
    <img src="../assets/img/found/banner5.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "ColumnSquare",
  data() {
    return {};
  },
  created() {
    this.getdata();
  },
  methods: {
   async getdata() {
    console.log(1);

      let { data } = await this.$axios({
        url: "/home/groups",
        methods: "GET",
      });
      console.log(data);
    },
    returnfound() {
      this.$router.push("/Found");
    },
  },
};
</script>
<style lang="less" scoped>
header {
  font-size: 20px;
  align-content: center;
  line-height: 50px;
  margin-left: 3%;
  margin-right: 3%;
  display: flex;
  justify-content: space-between;
  .big {
    font-size: 30px;
  }
}
.wrap {
  margin-top: 27px;
  margin-left: 10%;
  margin-right: 10%;
  height: 30px;
  display: flex;
  .two {
    border-bottom: 3px solid #85e0c8;
  }
  justify-content: space-around;
}
.banner {
  margin-top: 10px;

  height: 125px;
  margin-left: 3%;
  margin-right: 3%;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
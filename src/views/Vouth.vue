<template>
  <el-carousel height="900px" :loop="loop" :autoplay="autoplay">
    <el-carousel-item>
      <button @click="skipopen">跳过</button>
      <div class="Listening">
        <h1>阅读</h1>
        <p>读书之法，在于循序渐进，熟读而精思</p>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <button @click="skipopen">跳过</button>
      <div class="Listening">
        <h1>聆听</h1>
        <p>所谓的耳语，也就是聆听</p>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <button @click="skipopen">跳过</button>
      <div class="Listening">
        <h1>相伴</h1>
        <p>行到水穷处，坐看云起时</p>
      </div>
    </el-carousel-item>
    <el-carousel-item>
      <button class="Skip" @click="skipopen">跳过</button>
      <div class="Listening">
        <h1>精彩</h1>
        <button class="poen" @click="skipopen">开启美妙世界</button>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: "Vouth",
  data() {
    return { autoplay: false, loop: false };
  },
  methods: {
    skipopen(){
      this.$router.push("/")
    }
  },
};
</script>

<style lang="less" scoped>
// /deep/.el-carousel__indicator--horizontal{
//   display: flex;
//   width: 2px;
// }
/deep/ .el-carousel__button {
  top: -40px;
  width: 6px;
  // display: flex;
  // padding-left: 10px;
  position: absolute;
  background-color: #ebd3bf;
  height: 6px;
  // padding: 10px;
  border-radius: 50%;
}
/deep/.el-carousel__container {
  background-color: #d17b5d;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
/deep/.el-carousel__item {
  // background-color: red;
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  background: url(../assets/img/beew.png) no-repeat center;
  background-size: 100% 94%;
  position: absolute;
  /deep/&:nth-child(4) {
    background: url(../assets/img/wqwq.png) no-repeat center;
    background-size: 100% 94%;
  }
  /deep/&:nth-child(5) {
    background: url(../assets/img/yingdao.png) no-repeat center;
    background-size: 100% 94%;
  }
  /deep/&:nth-child(6) {
    background: url(../assets/img/wqwqwqw.png) no-repeat center;
    background-size: 100% 94%;
    .Skip{
      // margin-left: 15%;
    }
    h1{
      margin-left: 27%;
    }
    .poen{
      border: 2px #E6B08A solid;
      margin-left: -65%;
      height: 47px;
      width: 180px;
      margin-top: 23px;
      border-radius: 23px;
      font-size: 20px;
      color: #111010;
      font-weight: 500;
    }
  }
  button {
    position: relative;
    outline: 1px black solid;
    left: 80%;
    top: 7%;
    width: 50px;
    border: 1px #cbb28d solid;
    border-radius: 15px;
    color: #cbb28d;
    background-color: transparent;
  }
  .Listening {
    position: relative;
    top: 74%;
    left: 14%;
    h1 {
      font-size: 40px;
      color: #531c13;
    }
    p {
      margin-top: 24px;
      color: #531c13;
      font-size: 18px;
    }
  }
}
// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n+1) {
//   background-color: #d3dce6;
// }
</style>
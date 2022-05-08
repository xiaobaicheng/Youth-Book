<template>
  <header>
    <div class="purue" @click="returnHome">
      <img src="../assets/img/setup.png" alt="" />
    </div>
    <el-input v-model="Searchinput" placeholder="请输入内容"></el-input>
  </header>
  <div class="content">
    <h1>大家都在听</h1>
    <div class="title">
      <div class="title-one">
        <div class="one"><span>不二之橙</span></div>
        <div class="one"><span>诛仙</span></div>
        <div><span>二哈和他的白猫世尊</span></div>
      </div>
      <div class="title-one">
        <div><span>盘龙</span></div>
        <div><span>武动乾坤</span></div>
        <div><span>神兵图谱</span></div>
      </div>
      <div class="title-one">
        <div><span>元尊</span></div>
        <div><span>斗破苍穹</span></div>
        <div><span>太古神皇</span></div>
      </div>
      <div class="title-one">
        <div><span>从荒古圣体开始无敌</span></div>
      </div>
    </div>
    <p>搜索历史</p>
    <div class="history">
        <div class="history-one"><span>🕓</span><span>绝世武神</span><span>x</span></div>
        <div class="history-one"><span>🕓</span><span>绝世武神</span><span>x</span></div>
        <div class="history-one"><span>🕓</span><span>绝世武神</span><span>x</span></div>
        <div class="history-one"><span>🕓</span><span>绝世武神</span><span>x</span></div>
        <div class="history-one"><span>🕓</span><span>绝世武神</span><span>x</span></div>
        <div class="history-one"><span>🕓</span><span>绝世武神</span><span>x</span></div>
        <div class="history-one"><span>🕓</span><span>绝世武神</span><span>x</span></div>
        <div class="history-one"><span>🕓</span><span>绝世武神</span><span>x</span></div>
        <div class="history-one"><span>🕓</span><span>绝世武神</span><span>x</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      Searchinput: "",
    };
  },
  methods:{
    returnHome(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
/deep/.el-input__inner {
  width: 89%;
  margin-left: 20px;
  border: none;
  border-radius: 14px;
  background-color: #f5f5f5;
}
header {
  display: flex;
  align-items: center;
  margin-left: 7%;
  margin-top: 40px;
}
.purue {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  margin-left: 4%;
  margin-right: 4%;
  p {
    margin-top: 27px;
    font-size: 20px;
  }
  h1 {
    margin-top: 30px;
    font-size: 20px;
  }
  .title {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    .title-one {
      display: flex;
      align-items: center;
      .one {
        background-color: #fdefee;
        color: #fc001b;
      }
      div {
        background-color: #ebebeb;
        margin-left: 10px;
        font-size: 14px;
        border-radius: 10px;
        padding-top: 7px;
        span {
          padding: 10px;
        }
        margin-top: 10px;
        height: 16px;
        border: none;
      }
    }
  }
  .history{
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      .history-one{
          height: 46px;
          font-size: 14px;
          color: #333333;
          span:nth-child(2){
              margin-left: 10%;
          }
              span:nth-child(3){
              margin-left: 64%;
          }
      }
  }
}
</style>
<template>
  <div class="broder">
    <div class="enroll" @click="isShow">
      <span> 关注</span>
      <div class="oneLine" v-show="show"></div>
    </div>
    <div class="logn" @click="isShow">
      <span> 广场</span>
      <div class="Line" v-show="!show"></div>
    </div>
    <div class="purse" v-show="!show">
      <img src="../assets/img/found/sousuo.png" alt="">
    </div>
    <div v-show="show" class="two">
      <div class="purse1" ></div>
      <div class="purse1"></div>
    </div>
  </div>
  <div class="centent">
    <div v-show="loginShow"><Concern></Concern></div>
    <div v-show="!loginShow"><Square></Square></div>
  </div>
  <hr>
</template>


<script>
import Concern from "../components/found/Concern.vue";
import Square from "../components/found/Square.vue";
export default {
  name: "Appphonelogin",
  components: { Concern, Square },
  data() {
    return {
      show: false,
      loginShow: false,
    };
  },
  methods: {
    isShow() {
      this.show = !this.show;
      this.loginShow = !this.loginShow;
    },
  },
};
</script>

<style lang="less" scoped>
.broder {
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  display: flex;
  height: 120px;
  align-items: center;
  font-size: 18px;
  .enroll {
    margin-left: 35%;
    font-size: 15px;
    font-weight: 600;
    height: 20%;
    .oneLine {
      background-color: #333333;
      height: 4px;
      width: 30px;
      margin: auto;
      margin-top: 6px;
    }
  }
  .logn {
    margin-left: 10%;
    height: 20%;
    font-size: 15px;
    font-weight: 600;
    .Line {
      background-color: #333333;
      height: 4px;
      width: 30px;
      margin: auto;
      margin-top: 6px;
    }
  }
  .purse {
    height: 25px;
    width: 25px;
    margin-right: -7%;
    border-radius: 50%;
    margin-left: 26%;
    img{
      height: 100%;
    }
  }
  .two{
    display: flex;
    width: 35%;
    margin-right: -7%;
    justify-content: space-around;
  }
  .purse1 {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-left: 10%;
    // margin-right: 2%;
    background-color: aliceblue;
    outline: 1px black solid;
    &:nth-child(2) {
      // margin-left: 10px;
    }
  }
}
.centent {
  margin-top: -11%;
  margin-left: 4%;
  margin-right: 4%;
  width: 92%;
}
</style>
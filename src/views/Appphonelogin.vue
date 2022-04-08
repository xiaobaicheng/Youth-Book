<template>
  <div class="broder">
    <div class="enroll" @click="isShow">
      <span> 手机号注册</span>
      <div class="oneLine" v-show="!show"></div>
    </div>
    <div class="logn" @click="isShow">
      <span> 密码登录</span>
      <div class="Line" v-show="show"></div>
    </div>
  </div>
  <div class="centent">
    <div v-show="!loginShow"><Enroll></Enroll></div>
    <div v-show="loginShow"><PossLogin></PossLogin></div>
  </div>
</template> 

<script>
import Enroll from "../components/Applogin/Enroll.vue";
import PossLogin from "../components/Applogin/PossLogin.vue";

export default {
  name: "Appphonelogin",
  components: { Enroll, PossLogin },
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
  margin-top: 20%;
  width: 100%;
  display: flex;
  .enroll {
    span {
      font-family: "PingFangSC-Regular";
      font-size: 17px;
      font-weight: 600;
    }
    margin-left: 18%;
    text-align: center;
    .oneLine {
      background-color: #333333;
      height: 4px;
      width: 36px;
      margin: auto;
      margin-top: 10px;
    }
  }
  .logn {
    margin-left: 18%;
    span {
      font-family: "PingFangSC-Regular";
      font-size: 17px;
      font-weight: 600;
    }
    .Line {
      background-color: #333333;
      height: 4px;
      width: 36px;
      margin: auto;
      margin-top: 10px;
    }
  }
}
</style>
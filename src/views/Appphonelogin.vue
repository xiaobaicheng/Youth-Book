<template>
  <span class="back" @click="back">&lt;</span>

  <div class="broder">
    <div class="enroll" @click="isShow">
      <span> 手机号注册</span>
      <div class="oneLine" v-show="!show"></div>
    </div>
    <div class="logn" @click="isShow2">
      <span> 密码登录</span>
      <div class="Line" v-show="show"></div>
    </div>
  </div>
  <div class="centent">
    <div v-show="!show"><Enroll></Enroll></div>
    <div v-show="show"><PossLogin></PossLogin></div>
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
    };
  },
  methods: {
    isShow() {
      this.show = false;
    },
    isShow2() {
      this.show = true;
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.back {
  font-size: 30px;
  line-height: 60px;
  margin-left: 4%;
}
.broder {
  margin-top: 14%;
  width: 100%;
  display: flex;
  .enroll {
    span {
      font-family: "PingFangSC-Regular";
      font-size: 1.0625rem;
      font-weight: 600;
    }
    margin-left: 18%;
    text-align: center;
    .oneLine {
      background-color: #333333;
      height: 0.25rem;
      width: 2.25rem;
      margin: auto;
      margin-top: 0.625rem;
    }
  }
  .logn {
    margin-left: 18%;
    span {
      font-family: "PingFangSC-Regular";
      font-size: 1.0625rem;
      font-weight: 600;
    }
    .Line {
      background-color: #333333;
      height: 0.25rem;
      width: 2.25rem;
      margin: auto;
      margin-top: 0.625rem;
    }
  }
}
</style>
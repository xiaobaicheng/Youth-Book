<template>
  <div class="broder">
    <div class="enroll" @click="isShow">
      <span> 关注</span>
      <div class="oneLine" v-show="!show"></div>
    </div>
    <div class="logn" @click="isShow">
      <span> 广场</span>
      <div class="Line" v-show="show"></div>
    </div>
    <div class="purse"></div>
  </div>
  <div class="centent">
    <div v-show="!loginShow"><Concern></Concern></div>
    <div v-show="loginShow"><Square></Square></div>
  </div>
</template>


<script>
import Concern from "../components/found/Concern.vue"
import Square from "../components/found/Square.vue"
export default {
  name: "Appphonelogin",
  components: {Concern,Square},
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
  justify-content: space-around;
  font-size: 18px;
  .enroll {
    margin-left: 22%;
    height: 20%;
    .oneLine{
            background-color: #333333;
      height: 4px;
      width: 30px;
      margin: auto;
      margin-top: 6px;
    }
  }
  .logn {
    margin-left: -18%;
    height: 20%;

  .Line {
      background-color: #333333;
      height: 4px;
      width: 30px;
      margin: auto;
      margin-top: 6px;
    }
  }
  .purse {
    height: 39px;
    width: 39px;
    margin-right: -10%;
    border-radius: 50%;
    background-color: aliceblue;
  }
}
.centent{
    margin-left: 4%;
    margin-right: 4%;
    width: 92%;
}
</style>
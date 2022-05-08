<template>
  <div class="nav">
    <div class="naw-one">
      <router-link to="/" @click="isShow(0)">
        <div class="imgbox">
          <img
            :src="taBarActive[0].isshow ? taBarActive[0].img : taBar[0]"
            alt=""
          />
        </div>
        <p
          :style="
            taBarActive[0].isshow ? { color: '#3DA9E1' } : { color: '#33336E' }
          "
        >
          首页
        </p>
      </router-link>
    </div>
    <div class="naw-one">
      <router-link to="/bookshelf" @click="isShow(1)">
        <div class="imgbox">
          <img
            :src="taBarActive[1].isshow ? taBarActive[1].img : taBar[1]"
            alt=""
          />
        </div>
        <p
          :style="
            taBarActive[1].isshow ? { color: '#3DA9E1' } : { color: '#33336E' }
          "
        >
          书架
        </p></router-link
      >
    </div>
    <div class="naw-one">
      <router-link to="/listenbooks" @click="isShow(2)">
        <div class="imgbox">
          <img
            :src="taBarActive[2].isshow ? taBarActive[2].img : taBar[2]"
            alt=""
          />
        </div>
        <p
          :style="
            taBarActive[2].isshow ? { color: '#3DA9E1' } : { color: '#33336E' }
          "
        >
          听书
        </p></router-link
      >
    </div>
    <div class="naw-one">
      <router-link to="/found" @click="isShow(3)">
        <div class="imgbox">
          <img
            :src="taBarActive[3].isshow ? taBarActive[3].img : taBar[3]"
            alt=""
          />
        </div>
        <p
          :style="
            taBarActive[3].isshow ? { color: '#3DA9E1' } : { color: '#33336E' }
          "
        >
          发现
        </p></router-link
      >
    </div>
    <div class="naw-one">
      <router-link to="/about" @click="isShow(4)">
        <div class="imgbox">
          <img
            :src="taBarActive[4].isshow ? taBarActive[4].img : taBar[4]"
            alt=""
          />
        </div>
        <p
          :style="
            taBarActive[4].isshow ? { color: '#3DA9E1' } : { color: '#33336E' }
          "
        >
          我的
        </p></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Appnaw",
  data() {
    return {
      taBar: [
        require("../../assets/img/home.png"),
        require("../../assets/img/书架.png"),
        require("../../assets/img/listen.png"),
        require("../../assets/img/faxian.png"),
        require("../../assets/img/me.png"),
      ],
      taBarActive: [
        { img: require("../../assets/img/home/首页.png"), isshow: false },
        { img: require("../../assets/img/home/书架.png"), isshow: false },
        { img: require("../../assets/img/home/耳机.png"), isshow: false },
        { img: require("../../assets/img/home/发现2.png"), isshow: false },
        { img: require("../../assets/img/home/我的.png"), isshow: false },
      ],
    };
  },

  methods: {
    isShow(index) {
      this.taBarActive.forEach((v) => {
        v.isshow = false;
        this.taBarActive[index].isshow = true;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.router-link-exact-active {
  color: hotpink;
}
hr {
  background-color: #85e0c8;
}
.nav {
  justify-content: space-between;
  display: flex;
  // margin-left: 1%;
  height: 100px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  // margin-right: 7%;
  .naw-one {
    padding-left: 2%;
    padding-bottom: 20px;
    // height: 60px;
    align-items: center;
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    p {
      font-size: 14px;
      color: #333333;
      padding-top: 10px;
    }
    .imgbox {
      height: 34px;
      width: 34px;
      // border-radius: 50%;
      padding-top: 20px;
      img {
        width: 100%;
        // height: 100%;
      }
    }
  }
}
</style>
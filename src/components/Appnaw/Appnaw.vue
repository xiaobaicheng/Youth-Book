<template>
  <div class="nav">
    <div class="naw-one">
      <router-link to="/">
        <div class="imgbox">
          <img src="../../assets/img/home.png" alt="" />
        </div>
        <p>首页</p>
      </router-link>
    </div>
    <div class="naw-one">
      <router-link to="/bookshelf">
        <div class="imgbox">
          <img src="../../assets/img/shujia1.png" alt="" />
        </div>
        <p>书架</p></router-link
      >
    </div>
    <div class="naw-one">
      <router-link to="/listenbooks">
        <div class="imgbox">
          <img src="../../assets/img/listen.png" alt="" />
        </div>
        <p>听书</p></router-link
      >
    </div>
    <div class="naw-one">
      <router-link to="/found">
        <div class="imgbox">
          <img src="../../assets/img/faxian.png" alt="" />
        </div>
        <p>发现</p></router-link
      >
    </div>
    <div class="naw-one">
      <router-link to="/about">
        <div class="imgbox">
          <img src="../../assets/img/me.png" alt="" />
        </div>
        <p>我的</p></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Appnaw",
};
</script>

<style lang="less" scoped>
hr{
background-color: #85E0C8;
}
.nav {
  justify-content: space-between;
  display: flex;
  margin-left: 1%;
  height: 100px;
  position: fixed;
  bottom: 0;
  width: 98%;
  background-color: #fff;
  margin-right: 7%;
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
    p{
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
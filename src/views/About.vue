<template>
  <div class="contant">
    <header>
      <div class="logo"></div>
      <button>夜间</button>
      <div class="logo1"></div>
    </header>
    <div class="avater-box">
      <div class="avatar"></div>
      <div class="name">
        <p>张万森的林北星</p>
        <span>北极星永远指向森林的方向</span>
      </div>
    </div>
    <div class="purchase">
      <div>已购</div>
      <div>音频</div>
      <div>关注</div>
      <div>粉丝</div>
    </div>
    <div class="abountme">
      <div class="my">
        <div class="myimg"></div>
        <span>我的发布</span>
      </div>
      <div class="my">
        <div class="myimg"></div>
        <span>收藏中心</span>
      </div>
      <div class="my">
        <div class="myimg"></div>
        <span>活动中心</span>
      </div>
      <div class="my">
        <div class="myimg"></div>
        <span>阅读福利</span>
      </div>
      <div class="my">
        <div class="myimg"></div>
        <span>我的装扮</span>
      </div>
      <div class="my">
        <div class="myimg"></div>
        <span>我的鱼干</span>
      </div>
      <div class="my">
        <div class="myimg"></div>
        <span>徽章/称号</span>
      </div>
      <div class="my">
        <div class="myimg"></div>
        <span>浏览记录</span>
      </div>
    </div>
     <div class="blac-o">
    <div class="block">
      <el-carousel height="90px">
        <el-carousel-item v-for="(item, index) in imgtwo" :key="index">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  <div class="purse-box">
    <div class="purse">
      <div class="imgbox"></div>
      <span>我的钱包</span>
    </div><div class="purse">
      <div class="imgbox"></div>
      <span>点亮小世界</span>
    </div><div class="purse">
      <div class="imgbox"></div>
      <span>我的藏品</span>
    </div><div class="purse">
      <div class="imgbox"></div>
      <span>成为小说家</span>
    </div><div class="purse">
      <div class="imgbox"></div>
      <span>我的游戏</span>
    </div><div class="purse">
      <div class="imgbox"></div>
      <span>积分商城</span>
    </div><div class="purse">
      <div class="imgbox"></div>
      <span>主题切换</span>
    </div><div class="purse">
      <div class="imgbox"></div>
      <span>联系客服</span>
    </div><div class="purse">
      <div class="imgbox"></div>
      <span>青少年模式</span>
    </div>
  </div>
  </div>
</template>

<script>
// import Appphonelogin from "../components/Appphonelogin.vue"
export default {
  name: "About",
  // components:{Appphonelogin}
  data(){
    return{
        imgtwo: [
        require("../assets/img/home/one.png"),
        require("../assets/img/home/图层 4.png"),
      ],
    }
  }
};
</script>

<style lang="less" scoped>
.contant {
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  .purse-box{
    // height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .purse{
      display: flex;
      height: 65px;
      align-items: center;
      display: flex;
      border-bottom: 1px rgb(191, 180, 180) solid;
      .imgbox{
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: rgb(73, 65, 54);
        margin-left: 7%;
      }
      span{
        // outline: 1px black solid;
        color: rgb(196, 182, 182);
        padding-left: 7%;
      }
    }
  }
  header {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    .logo {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: aqua;
    }
    .logo1 {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: aqua;
      margin-left: 4%;
    }
    button {
      height: 35px;
      width: 70px;
      border-radius: 16px;
      background-color: aqua;
      margin-left: 57%;
    }
  }
  .avater-box {
    width: 100%;
    display: flex;
    height: 100px;
    margin-top: 30px;
    align-items: center;
    .avatar {
      height: 70px;
      width: 70px;
      border-radius: 50%;
      background-color: aquamarine;
    }
    .name {
      margin-left: 6%;
      height: 60px;
      line-height: 27px;

      p {
        padding-top: 7px;
      }
      span {
      }
    }
  }
  .purchase {
    margin-top: 10px;
    height: 120px;
    width: 100%;
    border-radius: 14px;
    background-color: beige;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .abountme {
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 30px;
    .my{
      width: 25%;
      .myimg{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: aliceblue;
        padding-left: 8%;
      }
      span{
        // outline: 1px black solid;
        line-height: 40px;
      }
    }
  }
  .blac-o{
    margin-top: 20px;
  }
}
</style>
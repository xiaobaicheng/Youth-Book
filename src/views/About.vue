<template>
  <div class="contant">
    <div class="wrap">
      <header>
        <div class="logo" @click="setup">
          <img src="../assets/img/about/设置、.png" alt="" />
        </div>
        <button>
          <img src="../assets/img/about/月亮.png" alt="" />
          <span>夜间</span>
        </button>
        <div class="logo1">
          <img src="../assets/img/about/信封.png" alt="" />
        </div>
      </header>
      <div class="avater-box">
        <div class="avatar">
          <img src="../assets/img/touxiang.png" alt="" />
        </div>
        <div class="name">
          <p>北极星fsqyzcd</p>
          <div class="grade">
            <div class="dnegji">Lv.11</div>
            <span class="star">星级用户></span>
          </div>
        </div>
      </div>
      <div class="purchase">
        <div class="nubmberbox">
          <p>57</p>
          <p>已购</p>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="nubmberbox">
          <p>369</p>
          <p>音频</p>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="nubmberbox">
          <p>647</p>
          <p>月票</p>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="nubmberbox">
          <p>7829</p>
          <p>阅读</p>
        </div>
      </div>
    </div>
    <div class="vip">
      <div class="vip-box">
        <h1>VIP</h1>
        <span>限时优惠</span>
      </div>
      <p>尊享免广告、无限下载等多种权益</p>
      <button>立即领取</button>
    </div>
    <div class="warp-one">
      <div class="abountme">
        <div class="my">
          <div class="myimg">
            <img src="../assets/img/about/feiji.png" alt="" />
          </div>
          <span>我的发布</span>
        </div>
        <div class="my">
          <div class="myimg">
            <img src="../assets/img/about/wujiaoxing.png" alt="" />
          </div>
          <span>收藏中心</span>
        </div>
        <div class="my">
          <div class="myimg">
            <img src="../assets/img/about/shoucnag.png" alt="" />
          </div>
          <span>活动中心</span>
        </div>
        <div class="my">
          <div class="myimg">
            <img src="../assets/img/about/hongbao.png" alt="" />
          </div>
          <span>阅读福利</span>
        </div>
        <div class="my">
          <div class="myimg">
            <img src="../assets/img/about/zhuti.png" alt="" />
          </div>
          <span>我的装扮</span>
        </div>
        <div class="my">
          <div class="myimg">
            <img src="../assets/img/about/biaoqian.png" alt="" />
          </div>
          <span>我的鱼干</span>
        </div>
        <div class="my">
          <div class="myimg">
            <img src="../assets/img/about/huizhang.png" alt="" />
          </div>
          <span>徽章/称号</span>
        </div>
        <div class="my">
          <div class="myimg">
            <img src="../assets/img/about/liulan.png" alt="" />
          </div>
          <span>浏览记录</span>
        </div>
      </div>
    </div>
    <div class="blac-o">
      <div class="block">
        <el-carousel height="70px" loop="false">
          <el-carousel-item>
            <div class="imgbox">
              <img src="../assets/img/about/maomi.png" alt="" />
            </div>
            <span>一起【娱乐】，沉侵式阅读礼放送中！</span>
          </el-carousel-item>
          <el-carousel-item>
            <div class="imgbox">
              <img src="../assets/img/about/maomi.png" alt="" />
            </div>
            <span>一起【娱乐】，沉侵式阅读礼放送中！</span>
          </el-carousel-item>
          <el-carousel-item>
            <div class="imgbox">
              <img src="../assets/img/about/maomi.png" alt="" />
            </div>
            <span>一起【娱乐】，沉侵式阅读礼放送中！</span>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="purse-box">
      <div class="purse">
        <div class="imgbox">
          <img src="../assets/img/about/xaopng.png" alt="" />
        </div>
        <span>我的钱包</span>
        <span class="jiantou">></span>
      </div>
      <div class="purse">
        <div class="imgbox">
          <img src="../assets/img/about/xaopng.png" alt="" />
        </div>
        <span>点亮小世界</span>
        <span class="jiantou">></span>
      </div>
      <div class="purse">
        <div class="imgbox">
          <img src="../assets/img/about/xaopng.png" alt="" />
        </div>
        <span>我的藏品</span>
        <span class="jiantou">></span>
      </div>
      <div class="purse">
        <div class="imgbox">
          <img src="../assets/img/about/xaopng.png" alt="" />
        </div>
        <span>成为小说家</span>
        <span class="jiantou">></span>
      </div>
      <div class="purse">
        <div class="imgbox">
          <img src="../assets/img/about/xaopng.png" alt="" />
        </div>
        <span>我的游戏</span>
        <span class="jiantou">></span>
      </div>
      <div class="purse">
        <div class="imgbox">
          <img src="../assets/img/about/xaopng.png" alt="" />
        </div>
        <span>积分商城</span>
        <span class="jiantou">></span>
      </div>
      <div class="purse">
        <div class="imgbox">
          <img src="../assets/img/about/xaopng.png" alt="" />
        </div>
        <span>主题切换</span>
        <span class="jiantou">></span>

      </div>
      <div class="purse">
        <div class="imgbox">
          <img src="../assets/img/about/xaopng.png" alt="" />
        </div>
        <span>联系客服</span>
        <span class="jiantou">></span>
      </div>
      <div class="purse" @click="jvenver">
        <div class="imgbox">
          <img src="../assets/img/about/xaopng.png" alt="" />
        </div>
        <span>青少年模式</span>
        <span class="jiantou">></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      imgtwo: [
        require("../assets/img/home/one.png"),
        require("../assets/img/home/图层 4.png"),
      ],
    };
  },
  methods:{
    setup(){
      this.$router.push("/Setup")
    },
    jvenver(){
      this.$router.push("/Juvenile")

    }
  }
};
</script>

<style lang="less" scoped>
/deep/.el-carousel__item {
  display: flex;
  align-items: center;
  span {
    margin-top: -10px;
    margin-left: 9px;
    font-size: 13px;
  }
  .imgbox {
    height: 50px;
    margin-left: 10%;
    width: 50px;
    border-radius: 50%;
    margin-top: -10px;
    img {
      width: 100%;
    }
  }
}
.warp-one {
  background-color: #ffffff;
}
.vip {
  position: relative;
  top: -42px;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  border-radius: 12px;
  height: 100px;
  background-color: #e2be82;
  p {
    position: absolute;
    top: 60px;
    left: 22px;
    font-size: 12px;
  }
  button {
    position: absolute;
    width: 110px;
    font-size: 17px;
    height: 40px;
    right: 16px;
    color: #ffffff;
    top: 30%;
    border: none;
    border-radius: 17px;
    background-color: #c39e67;
  }
  .vip-box {
    display: flex;
    position: absolute;
    top: 19px;
    left: 22px;
    align-items: center;
    h1 {
      font-size: 36px;
      color: #64491e;
      font-weight: 600;
    }
    span {
      height: 20px;
      width: 70px;
      background-color: #c39e67;
      color: #ffffff;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      border-radius: 6px;
      margin-left: 14px;
    }
  }
}
/deep/.el-divider--vertical {
  height: 2em;
  margin-top: -48px;
  background-color: #333333;
}
/deep/.el-carousel__button {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.wrap {
  background-color: #4f9684;
}
.contant {
  height: 100%;
  background-color: #f4f3f3;

  .purse-box {
    // height: 100%;
    margin-right: 3%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    .purse {
      display: flex;
      height: 65px;
      align-items: center;
      display: flex;
        .jiantou{
        margin-right: 0px;
        text-align:center;
        left: 76px;
        position: relative;
        // outline: 1px black solid;
      }
      .imgbox {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin-left: 7%;
        img {
          width: 100%;
        }
      }
    
      span {
        // outline: 1px black solid;
        color: #333333;
        width: 100px;
        padding-left: 7%;
      }
    }
  }
  header {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
    .logo {
      height: 25px;
      width: 25px;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    .logo1 {
      height: 40px;
      margin-top: 6px;
      width: 40px;
      border-radius: 50%;
      margin-left: 4%;
      img {
        width: 100%;
      }
    }
    button {
      height: 25px;
      width: 80px;
      border-radius: 16px;
      border: none;
      background-color: #b9d5ce;
      margin-left: 57%;
      display: flex;
      img {
        height: 75%;
        width: 24%;
        margin: 3px;
      }
      span {
        margin-top: 3px;
        margin-left: 6px;
        // line-height: -40px;
        color: #333333;
        font-size: 14px;
      }
    }
  }
  .avater-box {
    width: 100%;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    display: flex;
    height: 100px;
    margin-top: 5px;
    align-items: center;
    .avatar {
      height: 70px;
      width: 70px;
      border-radius: 50%;
      img {
        width: 100%;
        border-radius: 50%;

        height: 100%;
      }
    }
    .name {
      margin-left: 6%;
      height: 60px;
      line-height: 27px;

      p {
        padding-top: 7px;
        font-size: 21px;
      }
      .grade {
        display: flex;
        align-items: center;
        margin-top: 5px;
        .dnegji {
          width: 40px;
          height: 17px;
          background-color: #a8a8a8;
          border-radius: 13px;
          font-size: 5px;
          text-align: center;
          line-height: 17px;
          color: #ffffff;
        }
        .star {
          margin-left: 10px;
          color: #c39e67;
          font-size: 13px;
          font-family: "PingFangSC-Regular";
        }
      }
    }
  }
  .purchase {
    margin-top: -2px;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    height: 135px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .nubmberbox {
      display: flex;
      flex-direction: column;
      margin-top: -60px;
      p {
        margin-top: 14px;
        font-size: 16px;
      }
    }
  }
  .abountme {
    height: 240px;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-top: -27px;
    .my {
      width: 25%;
      .myimg {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        padding-left: 18%;
        img {
          width: 100%;
        }
      }
      span {
        // outline: 1px black solid;
        line-height: 40px;
        font-size: 13px;
        padding-left: 13%;
      }
    }
  }
  .blac-o {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
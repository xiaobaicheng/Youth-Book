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
        <div class="my" @click="welfare">
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

    },
    welfare(){
      this.$router.push("/Welfare")
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.el-carousel__item {
  display: flex;
  align-items: center;
  span {
    margin-top: -0.625rem;
    margin-left: 0.5625rem;
    font-size: 16px;
  }
  .imgbox {
    height: 3.125rem;
    margin-left: 10%;
    width: 3.125rem;
    border-radius: 50%;
    margin-top: -0.625rem;
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
  top: -2.625rem;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  border-radius: 0.75rem;
  height: 6.25rem;
  background-color: #e2be82;
  p {
    position: absolute;
    top: 3.75rem;
    left: 1.375rem;
    font-size: 0.75rem;
  }
  button {
    position: absolute;
    width: 6.875rem;
    font-size: 1.0625rem;
    height: 2.5rem;
    right: 1rem;
    color: #ffffff;
    top: 30%;
    border: none;
    border-radius: 1.0625rem;
    background-color: #c39e67;
  }
  .vip-box {
    display: flex;
    position: absolute;
    top: 1.1875rem;
    left: 1.375rem;
    align-items: center;
    h1 {
      font-size: 2.25rem;
      color: #64491e;
      font-weight: 600;
    }
    span {
      height: 1.25rem;
      width: 4.375rem;
      background-color: #c39e67;
      color: #ffffff;
      font-size: 0.9375rem;
      line-height: 1.125rem;
      text-align: center;
      border-radius: 0.375rem;
      margin-left: 0.875rem;
    }
  }
}
/deep/.el-divider--vertical {
  height: 2em;
  margin-top: -3rem;
  background-color: #333333;
}
/deep/.el-carousel__button {
  width: 0.375rem;
  height: 0.375rem;
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
      height: 4.0625rem;
      align-items: center;
      display: flex;
        .jiantou{
        margin-right: 0rem;
        text-align:center;
        left: 4.75rem;
        position: relative;
        // outline: 0.0625rem black solid;
      }
      .imgbox {
        height: 1.875rem;
        width: 1.875rem;
        border-radius: 50%;
        margin-left: 7%;
        img {
          width: 100%;
        }
      }
    
      span {
        // outline: 0.0625rem black solid;
        color: #333333;
        width: 6.25rem;
        padding-left: 7%;
      }
    }
  }
  header {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    height: 5rem;
    display: flex;
    align-items: center;
    .logo {
      height: 1.5625rem;
      width: 1.5625rem;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    .logo1 {
      height: 2.5rem;
      margin-top: 0.375rem;
      width: 2.5rem;
      border-radius: 50%;
      margin-left: 4%;
      img {
        width: 100%;
      }
    }
    button {
      height: 1.5625rem;
      width: 5rem;
      border-radius: 1rem;
      border: none;
      background-color: #b9d5ce;
      margin-left: 57%;
      display: flex;
      img {
        height: 75%;
        width: 24%;
        margin: 0.1875rem;
      }
      span {
        margin-top: 0.1875rem;
        margin-left: 0.375rem;
        // line-height: -2.5rem;
        color: #333333;
        font-size: 0.875rem;
      }
    }
  }
  .avater-box {
    width: 100%;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    display: flex;
    height: 6.25rem;
    margin-top: 0.3125rem;
    align-items: center;
    .avatar {
      height: 4.375rem;
      width: 4.375rem;
      border-radius: 50%;
      img {
        width: 100%;
        border-radius: 50%;

        height: 100%;
      }
    }
    .name {
      margin-left: 6%;
      height: 3.75rem;
      line-height: 1.6875rem;

      p {
        padding-top: 0.4375rem;
        font-size: 1.3125rem;
      }
      .grade {
        display: flex;
        align-items: center;
        margin-top: 0.3125rem;
        .dnegji {
          width: 2.5rem;
          height: 1.0625rem;
          background-color: #a8a8a8;
          border-radius: 0.8125rem;
          font-size: 0.3125rem;
          text-align: center;
          line-height: 1.0625rem;
          color: #ffffff;
        }
        .star {
          margin-left: 0.625rem;
          color: #c39e67;
          font-size: 0.8125rem;
          font-family: "PingFangSC-Regular";
        }
      }
    }
  }
  .purchase {
    margin-top: -0.125rem;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    height: 8.4375rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .nubmberbox {
      display: flex;
      flex-direction: column;
      margin-top: -3.75rem;
      p {
        margin-top: 0.875rem;
        font-size: 1rem;
      }
    }
  }
  .abountme {
    height: 15rem;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-top: -1.6875rem;
    .my {
      width: 25%;
      .myimg {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        padding-left: 18%;
        img {
          width: 100%;
        }
      }
      span {
        // outline: 0.0625rem black solid;
        line-height: 2.5rem;
        font-size: 0.8125rem;
        padding-left: 13%;
      }
    }
  }
  .blac-o {
    width: 100%;
    margin-top: 1.25rem;
  }
}
</style>
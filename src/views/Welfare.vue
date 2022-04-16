<template>
  <div class="wrap">
    <header>
      <div class="ruounter">
        <div class="purue" @click="returnabount">
          <img src="../assets/img/setup.png" alt="" />
        </div>
        <span>福利中心</span>
      </div>
      <div class="loginbox">
        <span>我的金币：<span>--</span></span>
        <span class="login" @click="applogin">登录查看></span>
      </div>
    </header>
  </div>
  <div class="vip">
    <div class="vip-box">
      <h1>您已连续签到1天</h1>
      <span
        >登录绑定新账号，即可领取签到金币 奖励，并同步签到天数，<span
          class="nowlogin"
          @click="applogin"
          >立即登录 ></span
        ></span
      >
    </div>
    <button>签到详情 ></button>
  </div>
  <div class="banner">
    <img src="../assets/img/about/fuli.png" alt="" />
  </div>
  <div class="content">
    <h1 class="greenhorn">新手福利</h1>
    <div class="Withdrawals">
      <div class="left">
        <div class="left-one">
          <div class="redenvelope">
            <span>1元提现</span>
            <div class="hongbao">
              <img src="../assets/img/about/hongbao1.png" alt="" />
            </div>
            <span class="one">提现一元</span>
          </div>
        </div>
        <p>点击查看<span>《活动规则》</span></p>
      </div>
      <button>提现一元</button>
    </div>
    <div class="Withdrawals">
      <div class="left">
        <div class="left-one">
          <div class="redenvelope">
            <span>绑定微信/手机号</span>
            <div class="hongbao">
              <img src="../assets/img/about/金币.png" alt="" />
            </div>
            <span class="one">+200金币</span>
          </div>
        </div>
        <p>绑定微信/手机号注册为完整帐号</p>
      </div>
      <button>去绑定</button>
    </div>
    <div class="Withdrawals">
      <div class="left">
        <div class="left-one">
          <div class="redenvelope">
            <span>天天领金币</span>
            <div class="hongbao">
              <img src="../assets/img/about/金币.png" alt="" />
            </div>
            <span class="one">最高1666金币</span>
          </div>
        </div>
        <p>注册起前七天天天都可领取最高1666金币</p>
      </div>
      <button>领红包</button>
    </div>
    <div class="hongbao">
      <div class="hbimg">
        <img src="../assets/img/about/bighb.png" alt="" />
      </div>
      <div class="hbimg">
        <img src="../assets/img/about/bighb.png" alt="" />
      </div>
      <div class="hbimg">
        <img src="../assets/img/about/bighb.png" alt="" />
      </div>
      <div class="hbimg">
        <img src="../assets/img/about/bighb.png" alt="" />
      </div>
      <div class="hbimg">
        <img src="../assets/img/about/bighb.png" alt="" />
      </div>
      <div class="hbimg">
        <img src="../assets/img/about/bighb.png" alt="" />
      </div>
      <div class="hbimg">
        <img src="../assets/img/about/bighb.png" alt="" />
      </div>
    </div>
    <div class="Steps">
      <el-steps :active="1" finish-status="success">
        <el-step title="可领取"></el-step>

        <el-step title="2天"></el-step>
        <el-step title="3天"></el-step>
        <el-step title="4天"></el-step>
        <el-step title="5天"></el-step>
        <el-step title="6天"></el-step>
        <el-step title="7天"></el-step>
      </el-steps>
    </div>
    <div class="erelayday">
      <h2>每日阅读福利</h2>
      <span>今日已经读：0分钟</span>
    </div>
    <div class="goread">
      <span>阅读可达到10分钟</span>
             <div class="hongbao">
              <img src="../assets/img/about/金币.png" alt="" />
            </div>
            <span>+70金币</span>
    <button>去阅读</button>

    </div>
        <div class="goread">
      <span>阅读可达到10分钟</span>
             <div class="hongbao">
              <img src="../assets/img/about/金币.png" alt="" />
            </div>
            <span>+70金币</span>
    <button>去阅读</button>

    </div>
        <div class="goread">
      <span>阅读可达到10分钟</span>
             <div class="hongbao">
              <img src="../assets/img/about/金币.png" alt="" />
            </div>
            <span>+70金币</span>
    <button>去阅读</button>

    </div>
        <div class="goread">
      <span>阅读可达到10分钟</span>
             <div class="hongbao">
              <img src="../assets/img/about/金币.png" alt="" />
            </div>
            <span>+70金币</span>
    <button>去阅读</button>

    </div>
        <div class="goread">
      <span>阅读可达到10分钟</span>
             <div class="hongbao">
              <img src="../assets/img/about/金币.png" alt="" />
            </div>
            <span>+70金币</span>
    <button>去阅读</button>

    </div>
        <div class="goread">
      <span>阅读可达到10分钟</span>
             <div class="hongbao">
              <img src="../assets/img/about/金币.png" alt="" />
            </div>
            <span>+70金币</span>
    <button>去阅读</button>

    </div>
    
  </div>
</template>

<script>
export default {
  name: "Welfare",
  data() {
    return {};
  },
  methods: {
    applogin() {
      this.$router.push("/Appphonelogin");
    },
    returnabount() {
      this.$router.push("/About");
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.el-step__line {
  background-color: #fde151;
}
/deep/.el-step__title {
  font-size: 8px;
  &:nth-child(1) {
    color: #f3a61e;
  }
}
.wrap {
  background-color: #4f9684;
}
header {
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 223px;
  display: flex;
  flex-direction: column;
  .ruounter {
    display: flex;
    .purue {
      height: 20px;
      margin-top: 40px;
      width: 20px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      margin-top: 40px;
      font-size: 23px;
      //   margin: auto;
      margin-left: 37%;
    }
  }
  .loginbox {
    margin-top: 16%;
    .login {
      margin-left: 52%;
      color: #333333;
      font-size: 14px;
      font-weight: 700;
    }
  }
}
.vip {
  position: relative;
  top: -3.4rem;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  border-radius: 0.75rem;
  height: 6.95rem;
  background-color: #ffffff;
  box-shadow: 1px 1px #a89999a4;
  p {
    position: absolute;
    top: 3.75rem;
    left: 1.375rem;
    font-size: 0.75rem;
  }
  button {
    position: absolute;
    width: 5.875rem;
    font-size: 0.6625rem;
    height: 2rem;
    right: 1rem;
    background-color: #5fcbb0;
    color: #333333;
    top: 30%;
    border: none;
    border-radius: 1.0625rem;
  }
  .vip-box {
    display: flex;
    position: absolute;
    top: 1.1875rem;
    flex-direction: column;
    left: 1.375rem;
    text-align: left;
    .nowlogin {
      color: #5fcbb0;
    }
    h1 {
      font-size: 1rem;
      color: #333333;
      font-weight: 600;
    }
    span {
      width: 13rem;
      font-size: 0.5375rem;
      line-height: 1.125rem;
      //   text-align: center;
      border-radius: 0.375rem;
      margin-top: 0.49rem;
    }
  }
}
.banner {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: -40px;
  width: 90%;
  height: 100px;
  img {
    height: 100%;
    width: 100%;
  }
}

.content {
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  .greenhorn {
    margin-top: 13px;
    font-size: 19px;
  }
  .Withdrawals {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    button {
      height: 34px;
      width: 90px;
      border: none;
      background-color: #f17d4f;
      color: #ffffff;
      border-radius: 14px;
    }
    .left {
      display: flex;
      width: 70%;
      flex-direction: column;
      p {
        color: #999999;
        font-size: 12px;
        span {
          color: #ef621c;
        }
      }
      .left-one {
        //   display: flex;
        line-height: 30px;
        .redenvelope {
          display: flex;
          align-items: center;
          .one {
            font-size: 14px;
            font-weight: 300;
            color: #ef621c;
            margin-left: 3%;
          }
          span {
            font-size: 17px;
            font-weight: 600;
          }
          .hongbao {
            height: 17px;
            width: 14px;
            margin-top: -6px;
            margin-left: 6%;
            img {
              height: 100%;
              width: 100%;
            }
          }
        }
      }
    }
  }
  .hongbao {
    margin-top: 30px;
    // margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    .hbimg {
      width: 40px;
      height: 49px;
      img {
        width: 100%;
      }
    }
  }
  .Steps {
    margin-top: 17px;
  }
  .erelayday{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    h2{
      font-size: 19px;
    }
    span{
      font-size: 12px;
      color: #999999;
    }
  }
  .goread{
    display: flex;
    align-items: center;
    margin-top: 12px;
    span{
      font-size: 13px;
      &:nth-child(3){
        color: #F29E2F;
      }
    }
    button{
       width: 5.875rem;
    font-size: 1rem;
    height: 2rem;
    font-weight: 600;
    border-radius: 1.0625rem;
    border: 1px #F29E2F solid;
    background: none; 
    color: #F29E2F;
    margin-left: 17%;
    }
    .hongbao{
      margin-top: -2px;
      height: 15px;
      margin-left: 4%;
      width: 15px;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
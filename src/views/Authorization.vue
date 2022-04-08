<template>
  <div class="back">
    <el-page-header @back="goBack" content="哔哩哔哩账号登录" title="">
    </el-page-header>
  </div>
  <div class="sure">
    <div class="imgbox">
      <div class="bili">
        <div class="biliimg">
          <img src="../assets/img/bili.png" alt="" />
        </div>
        <span>哔哩哔哩</span>
      </div>

      <div class="conversion">
        <img src="../assets/img/zhuanhaun.png" alt="" />
      </div>
      <div class="bili">
        <div class="biliimg">
          <img src="../assets/img/qingshu.png" alt="" />
        </div>
        <span>青年书</span>
      </div>
    </div>
      <div class="avatar-box">
    <div class="avatar">
      <div class="touxin">
        <img src="../assets/img/touxiang.png" alt="">
      </div>
      <span>ychll-398192</span>
    </div>
    <p>该应用将访问您的公开信息，好友信息</p>
  </div>
   <button class="login">确定</button>
  </div>

</template>

<script>
export default {
  name: "Authorization",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push("/Appphonelogin");
    },
  },
};
</script>
<style lang="less" scoped>
.back {
  margin-top: 26px;
  margin-left: 5%;
  /deep/.el-icon-back {
    font-size: 30px;
  }
  /deep/.el-page-header__title {
    display: none;
  }
  /deep/.el-page-header__content {
    font-size: 18px;
    line-height: 30px;
    margin-left: -10px;
  }
}
.sure {
  height: 800px;
  width: 100%;
  background-color: #f1f2f4;
  margin-top: 20px;
  .imgbox {
    display: flex;
    padding: 20% 16%;
    align-items: center;
    .bili{
        text-align: center;
        span{
           line-height: 38px;
           font-size: 16px;
           color: #333333;
        }
    }
    .conversion {
      height: 34px;
      width: 46px;
      padding-left: 5%;
      padding-right: 5%;
      img {
        width: 100%;
      }
    }
    .biliimg {
      height: 86px;
      width: 84px;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .avatar-box{
    margin-left: 10%;
    margin-top: -59px;
    p{
      font-size: 12px;
      color: #999999;
      padding: 4% 5%;
    }
    .avatar{
        display: flex;
        align-items: center;
      .touxin{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
      span{
        padding-left: 4%;
        color: #333333;
        font-size: 17px;
      }
    }
  }
  .login {
  height: 55px;
  margin-left: 15%;
  margin-right: 20%;
  width: 71%;
  margin-top: 24px;
  background-color: #ff7da7;
  color: #fff;
  border: 1px #fff solid;
  border-radius: 7px;
}
}
</style>
<template>
  <div class="wrap-login">
    <select>
      <option value="+86">+86</option>
      <option value="+19">+19</option>
      <option value="+19">+19</option>
      <option value="+19">+19</option>
    </select>
    <input type="tel" placeholder="请输入你的电话" v-model="tephone" />
  </div>
  <div class="Verification">
    <span>验证码</span>
    <input type="text" placeholder="请输入验证码" />
    <span>|</span>
    <span>获取验证码</span>
  </div>
  <div class="UserAgreement">
    <input type="radio" v-model="checked" />
    <span class="remment"
      >首次登录会自动创建新账号，且代表同意《<span>用户协议</span>》和《<span>隐私政策</span>》</span
    >
  </div>
  <button class="login">登录</button>
  <div class="contant">
    <p class="issue">遇到问题？<span>查看帮助</span></p>
    <div class="third">
      <div class="coon">
        <hr />
        <span class="third-one">第三方登录</span>
        <hr />
      </div>
      <button class="login-one">哔哩哔哩授权登录</button>
    </div>
    <div class="qqchatbox">
      <div class="Imgbox">
        <img src="../../assets/img/QQ.png" alt="" />
      </div>
      <div class="Imgbox">
        <img src="../../assets/img/wechat.png" alt="" />
      </div>
      <div class="Imgbox">
        <img src="../../assets/img/weibo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Enroll",
  data() {
    return {
      tephone: "",
      checked: false,
    };
  },
};
</script>

<style lang="less" scoped>
.wrap-login {
  display: flex;
  margin-left: 13%;
  margin-right: 18%;
  height: 40px;
  margin-top: 40px;
  border-bottom: 2px #ebebeb solid;
  select {
    font-size: 14px;
    color: #333333;
    background-color: #fff;
    border: 1px #fff solid;
  }
  input {
    font-size: 14px;
    border: 1px #fff solid;
  }
}
.Verification {
  span {
    font-size: 14px;
    color: #999999;
    padding-bottom: 18px;
    &:nth-child(1) {
      padding-right: 5px;
      color: #333333;
    }
    &:nth-child(3) {
      padding-right: 10px;
    }
  }
  display: flex;
  margin-left: 13%;
  margin-right: 18%;
  height: 20px;
  // line-height: 25px;
  margin-top: 40px;
  border-bottom: 2px #ebebeb solid;
  align-items: center;

  input {
    padding-left: 20px;
    font-size: 14px;
    height: 20px;
    width: 115px;
    border: 1px #fff solid;
    margin-bottom: 14px;
  }
}
.UserAgreement {
  margin-left: 15%;
  margin-right: 20%;
  height: 32px;
  margin-top: 20px;
  // outline: 1px black solid;
  display: flex;
  width: 65%;
  input {
    margin-left: 0;
    // height: 100%;
  }
  .remment {
    margin-left: 10px;
    margin-right: 20px;
    font-size: 10px;
    color: #999999;
    line-height: 20px;
    span {
      color: #6ca5e6;
    }
  }
}
.login {
  height: 50px;
  margin-left: 15%;
  margin-right: 20%;
  width: 65%;
  margin-top: 24px;
  background-color: #ff7da7;
  color: #fff;
  border: 1px #fff solid;
  border-radius: 14px;
}
.contant {
  background: url(../../assets/img/beijin.png) no-repeat center;
  .issue {
    margin-left: 15%;
    margin-right: 20%;
    margin-top: 5%;
    font-size: 10px;
    color: #999999;
    span {
      color: #6ca5e6;
    }
  }
  .third {
    margin-top: 50%;
    margin-left: 15%;
    margin-right: 20%;
    .coon {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .third-one {
      font-size: 18px;
      font-weight: 400;
      // color: rgb(16, 15, 15);
    }

    .login-one {
      background: transparent; /*按钮背景透明*/
      height: 50px;
      width: 100%;
      margin-top: 8px;
      color: #ff7da7;
      border: 1px #ff7da7 solid;
      border-radius: 14px;
    }
  }
  .qqchatbox {
    margin-left: 19%;
    margin-right: 24%;
    display: flex;
    justify-content: space-between;
    margin-top: 10%;
    .Imgbox {
      height: 45px;
      width: 45px;
      img {
        // width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
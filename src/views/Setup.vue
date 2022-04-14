<template>
  <div class="wrap">
    <header>
      <div class="purue" @click="returnabount">
        <img src="../assets/img/setup.png" alt="">
      </div>
      <span>设置</span>
    </header>
  </div>
  <div class="wra2">
    <div class="switch">
      <div class="switch-box">
        <span>推荐音频免流量</span>
        <span>去激活></span>
      </div>
      <div class="switch-box">
        <span>非wifi网络播放下载</span>
        <el-switch
          v-model="wifi"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
      <div class="switch-box">
        <span>推送开关</span>
        <el-switch
          v-model="Push"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
      <div class="switch-box">
        <span>原音音质</span>
        <el-switch
          v-model="quality"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
      <div class="switch-box">
        <span>锁屏显示</span>
        <el-switch
          v-model="Lockscreen"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
      <div class="switch-box">
        <span>启动gttps播放</span>
        <el-switch
          v-model="gttps"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
    </div>
  </div>
  <div class="wrap3">
    <div class="examine">
        <div class="examine-box">
            <span>消息和隐私设置</span>
            <span>></span>
        </div>
        <div class="examine-box">
            <span>网络诊断</span>
            <span>></span>
        </div>
        <div class="examine-box">
            <span>检查更新</span>
            <span>></span>
        </div>
        <div class="examine-box">
            <span>弹幕设置</span>
            <span>></span>
        </div>
        <div class="examine-box">
            <span>清空缓存</span>
            <span class="cache">218.38MB</span>
            <span>></span>
        </div>
        <div class="examine-box">
            <span>下载路径</span>
            <span class="cache">手机存储</span>
            <span>></span>
        </div>
        <div class="examine-box">
            <span>关于青书家</span>
            <span>></span>
        </div>
        <div class="examine-box">
            <span>隐私政策</span>
            <span>></span>
        </div>
        <div class="examine-box">
            <span>个人信息收集清单</span>
            <span>></span>
        </div>
        <div class="examine-box">
            <span>第三方SDK情况表</span>
            <span>></span>
        </div>
    </div>
  </div>
  <button>退出</button>
</template>
<script>
export default {
  name: "Setup",
  data() {
    return {
      wifi: false,
      Push: true,
      quality: false,
      Lockscreen: true,
      gttps: true,
    };
  },
  methods:{
    returnabount(){
      this.$router.push("/About")
    }
  }
};
</script>

<style lang="less" scoped>
.wrap,
.wra2,
.wrap3 {
  background-color: rgba(220, 220, 220, 0.367);
}
header {
  height: 100px;
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  display: flex;
  align-items: center;
  .purue {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    img{
      width: 100%;
      height: 100%;
    }
    // padding-top  : 30px;
  }
  span {
    margin-left: 34%;
    font-size: 18px;
  }
}
.switch {
  padding-top: 10px;
  height: 400px;
  width: 94%;
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  .switch-box {
    height: 16.6%;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
}
.examine{
  height: 600px;
  padding-top: 10px;
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 10px;
    display: flex;
  flex-direction: column;
  .examine-box{
      height: 10%;
       display: flex;
    justify-content: space-between;
    .cache{
  margin-left: 43%;
    }
  }
}
button{
      height: 50px;
  margin-left: 15%;
  margin-right: 20%;
  width: 65%;
  margin-top: 24px;
  background-color: #4F9684;
  color: #ffffff;
  border-radius: 14px;
  border: none;

}
</style>
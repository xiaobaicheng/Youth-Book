<template>
  <div class="wrap">
    <header>
      <el-button @click="show3 = !show3"> </el-button>
      <div class="listen">
        <span>听书</span>
        <el-divider direction="vertical"></el-divider>
        <span>看书</span>
        <div class="purser">
          <img src="../assets/img/listen/touixang.png" alt="" />
        </div>
        <div class="purser2">
          <img src="../assets/img/listen/shouibin.png" alt="" />
        </div>
        <span>⋮</span>
      </div>
    </header>
    <div style="height: 400px">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">
            <div class="banner"><img src="../assets/img/listen/abnner.png" alt=""></div>
            <div class="daytime">
              <div class="daytimeleft">
                <h1>白日梦我 001</h1>
                <h2>白日梦我 ></h2>
                <span>谷兮兮用力抱紧了对方的腰 这个头顶传来了男人的声音</span>
              </div>
              <button>已收藏</button>
            </div>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <div class="Download">
      <div class="Skipbox">
        <div class="dowmimg"><img src="../assets/img/listen/xiazai.png" alt=""></div>
        <span>下载</span>
      </div>
      <div class="Skipbox">
        <div class="dowmimg"><img src="../assets/img/listen/tiaoguo.png" alt=""></div>
        <span>跳过片头</span>
      </div>
      <div class="Skipbox">
        <div class="dowmimg"><img src="../assets/img/listen/naozhong.png" alt=""></div>
        <span>定时</span>
      </div>
      <div class="Skipbox">
        <div class="dowmimg"><img src="../assets/img/listen/tiaosu.png" alt=""></div>
        <span>调速</span>
      </div>
      <div class="Skipbox">
        <div class="dowmimg"><img src="../assets/img/listen/zhangjie.png" alt=""></div>
        <span>章节</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListenBooks",
  data() {
    return {
      show3: true,
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.transition-box {
  width: 100%;
  height: 400px;
  border-radius: 4px;
  padding: 40px 20px;
  color: #333333;
  box-sizing: border-box;
  margin-top: -17px;
  .daytime{
    display: flex;
    margin-top: 30px;
    height:140px;
    justify-content: space-between;
    .daytimeleft{
     display: flex;
     flex-direction: column;
     h1{
       font-size: 18px;
     }
     h2{
       font-size: 12px;
       margin-top: 20px;
     }
     span{
       margin-top: 20px;
       width: 140px;
       height: 30.5px;
       font-size: 11px;
       color: #7D7D7D;
     }
    }
    button{
      width: 75px;
      height: 25px;
      border-radius: 12px;
      background-color: #78D1BB;
      border: none;

    }
  }
  .banner{
    height: 200px;
    width: 193px;
    margin: auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.wrap {
  margin-left: 3%;
  margin-right: 3%;
}
header {
  display: flex;
  /deep/.el-button {
    width: 30px;
    height: 10px;
    border: none;
    background-color: none;
    background: url(../assets/img/listen/xiala.png) no-repeat center;
  }
  .listen {
    width: 76%;
    display: flex;
    margin-left: 20%;
    align-items: center;
    justify-content: space-around;
    .purser2 {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
      }
      .purser {
        height: 27px;
        width: 27px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    
  }
} 
.Download{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  .Skipbox{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 20%;
    span{
      margin-top: 15px;
    }
    .dowmimg{
      height: 22px;
      width: 22px;
      margin: auto;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
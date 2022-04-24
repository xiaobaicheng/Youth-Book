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
            <div class="banner">
              <img src="../assets/img/listen/abnner.png" alt="" />
            </div>
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
        <div class="dowmimg">
          <img src="../assets/img/listen/xiazai.png" alt="" />
        </div>
        <span>下载</span>
      </div>
      <div class="Skipbox">
        <div class="dowmimg">
          <img src="../assets/img/listen/tiaoguo.png" alt="" />
        </div>
        <span>跳过片头</span>
      </div>
      <div class="Skipbox">
        <div class="dowmimg">
          <img src="../assets/img/listen/naozhong.png" alt="" />
        </div>
        <span>定时</span>
      </div>
      <div class="Skipbox">
        <div class="dowmimg">
          <img src="../assets/img/listen/tiaosu.png" alt="" />
        </div>
        <span>调速</span>
      </div>
      <div class="Skipbox">
        <div class="dowmimg">
          <img src="../assets/img/listen/zhangjie.png" alt="" />
        </div>
        <span>章节</span>
      </div>
    </div>
    <div class="block">
      <el-slider v-model="value1" step="0.01" max="10" label="asa"></el-slider>
      <input type="text" v-model="value1" />
    </div>
    <div class="timeout">
      <div class="timeimgone">
        <img src="../assets/img/listen/15.png" alt="" />
      </div>
      <div class="timeimg">
        <img src="../assets/img/book/shangyihsou.png" alt="" />
      </div>
      <div class="timeimg" @click="timeout">
        <img src="../assets/img/book/zhanting.png" alt="" />
      </div>
      <div class="timeimg">
        <img src="../assets/img/book/xiayishou.png" alt="" />
      </div>
      <div class="timeimgone">
        <img src="../assets/img/listen/15.png" alt="" />
      </div>
    </div>
    <div class="resume">
      <div class="resumebox" @click="Whether">
        简历
        <div class="oneLine" v-show="isShow"></div>
      </div>
      <div class="resumebox" @click="Whether2">
        评论2121
        <div class="Line" v-show="!isShow"></div>
      </div>
    </div>
    <div class="content">
      <div v-show="isShow"><Resume></Resume></div>
      <div v-show="!isShow"><Comments></Comments></div>
    </div>
  </div>
  <hr />
</template>

<script>
import Resume from "../components/Applissten/Resume.vue";
import Comments from "../components/Applissten/Comments.vue";
export default {
  components: { Resume, Comments },
  name: "ListenBooks",
  data() {
    return {
      show3: true,
      value1: "",
      deltime:212,
      isShow: true,
    };
  },
  
  watch: {
    value1(newName, oldName) {
     if (oldName == 0) {
        this.newName +0.1
     }
      console.log(newName, oldName);
    },
  },
  methods: {
    timeout(){
      console.log(this.value1);
      setInterval(()=>{
        
      },1000)
    },
    Whether() {
      this.isShow = true;
    },
    Whether2() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.resume {
  display: flex;
  justify-content: space-around;
  margin-left: 14%;
  margin-top: 20px;
  margin-right: 14%;
  .resumebox {
    .Line {
      width: 70px;
      margin-top: 10px;
      border-bottom: 3px #daf3ed solid;
    }
    .oneLine {
      width: 30px;
      margin-top: 10px;
      border-bottom: 3px #daf3ed solid;
    }
  }
}
.timeout {
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  align-items: center;
  .timeimgone {
    height: 19px;
    display: flex;
    flex-direction: column;
    width: 19px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .timeimg {
    height: 23px;
    width: 17px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
/deep/.el-slider__button {
  width: 7px;
  height: 7px;
  background-color: #e0f4ef;
  border-radius: 8.5px;
  border: none;
}
/deep/.el-slider__bar {
  height: 2px;
  background-color: #78d1bb;
}
/deep/.el-slider__runway {
  height: 2px;
  background-color: #eaeaea;
}
.block {
  margin-left: 4%;
  margin-right: 28%;
  input {
    width: 76px;
    position: relative;
    left: 106%;
    top: -26px;
    background-color: #e0f4ef;
    border-radius: 8.5px;
    border: none;
    height: 17px;
  }
}
.transition-box {
  width: 100%;
  height: 400px;
  border-radius: 4px;
  padding: 40px 20px;
  color: #333333;
  box-sizing: border-box;
  margin-top: -17px;
  .daytime {
    display: flex;
    margin-top: 30px;
    height: 140px;
    justify-content: space-between;
    .daytimeleft {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 18px;
      }
      h2 {
        font-size: 12px;
        margin-top: 20px;
      }
      span {
        margin-top: 20px;
        width: 140px;
        height: 30.5px;
        font-size: 11px;
        color: #7d7d7d;
      }
    }
    button {
      width: 75px;
      height: 25px;
      border-radius: 12px;
      background-color: #90d9c7;
      border: none;
    }
  }
  .banner {
    height: 200px;
    width: 193px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.wrap {
  margin-top: 20px;
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
    background: url(../assets/img/listen/xiala1.png) no-repeat center;
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
.Download {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  .Skipbox {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 20%;
    span {
      margin-top: 15px;
    }
    .dowmimg {
      height: 22px;
      width: 22px;
      margin: auto;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
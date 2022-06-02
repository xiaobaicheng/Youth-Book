<template>
  <header>
    <div class="purue" @click="returnhome">
      <img src="../assets/img/setup.png" alt="" />
    </div>
    <span>广播剧</span>
  </header>
  <div class="wrap">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="推荐" name="first">
        <div class="block">
          <el-carousel height="170px">
            <el-carousel-item v-for="(item, index) in Radio" :key="index">
              <img :src="item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="time">
          <div class="timebox">
            <div class="imgbox">
              <img src="../assets/img/home/shijian.png" alt="" />
            </div>
            <span>时间表</span>
          </div>
          <div class="timebox">
            <div class="imgbox">
              <img src="../assets/img/home/suoying.png" alt="" />
            </div>
            <span>索引</span>
          </div>
        </div>
        <div class="Hot">
          <span>热门推荐</span>
          <span>></span>
        </div>
        <div class="hotremend">
          <div class="hotbox" v-for="item in bookdata" :key="item.id">
            <div class="hotimg">
              <img src="../assets/img/home/Rodio1.png" alt="" />
            </div>
            <span>{{ item.gbName }}</span>
          </div>
          <!-- <div class="hotbox">
            <div class="hotimg">
              <img src="../assets/img/home/Rodio2.png" alt="" />
            </div>
            <span>韫色过浓</span>
          </div>
          <div class="hotbox">
            <div class="hotimg">
              <img src="../assets/img/home/Rodio3.png" alt="" />
            </div>
            <span>耀火燃情</span>
          </div>
          <div class="hotbox">
            <div class="hotimg">
              <img src="../assets/img/home/Rodio4.png" alt="" />
            </div>
            <span>听说你约我搓澡</span>
          </div>
          <div class="hotbox">
            <div class="hotimg">
              <img src="../assets/img/home/Rodio5.png" alt="" />
            </div>
            <span>娘娘腔 </span>
          </div>
          <div class="hotbox">
            <div class="hotimg">
              <img src="../assets/img/home/Rodio6.png" alt="" />
            </div>
            <span>逆水横刀</span>
          </div> -->
        </div>
        <div class="Hot">
          <span>人气周榜</span>
          <span>查看榜单></span>
        </div>
        <div class="popularity">
          <div class="coverbox">
            <div class="coverimg">
              <img src="../assets/img/home/cover1.png" alt="" />
            </div>
            <span> 老子修仙回来了 </span>
          </div>
          <div class="coverbox">
            <div class="coverimg">
              <img src="../assets/img/home/cover2.png" alt="" />
            </div>
            <span> 如果月亮不抱你 </span>
          </div>
          <div class="coverbox">
            <div class="coverimg">
              <img src="../assets/img/home/cover3.png" alt="" />
            </div>
            <span> 从小蝌蚪开始无敌 </span>
          </div>
          <div class="coverbox">
            <div class="coverimg">
              <img src="../assets/img/home/cover4.png" alt="" />
            </div>
            <span> 人族禁地 </span>
          </div>
        </div>
        <h1 class="listen">大家都在听</h1>
        <div class="listenb">
          <button v-for="item in findDbdata" :key="item.id">
            {{ item.gbName }}
          </button>
          <!-- <button>遮天 </button>
          <button>我靠生崽火爆全星</button>
          <button>还债 </button>
          <button>斗罗大陆</button>
          <button>武道争锋</button> -->
        </div>
      </el-tab-pane>
      <el-tab-pane label="完结" name="second">完结 </el-tab-pane>
      <el-tab-pane label="未完结" name="third">未完结</el-tab-pane>
      <el-tab-pane label="全一期" name="fourth">全一期</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Radio",
  data() {
    return {
      bookdata: [],
      findDbdata: [],
      activeName: "first",
      Radio: [
        require("../assets/img//home/Radio1.png"),
        require("../assets/img//home/Radio2.png"),
        require("../assets/img/home/Radio2.png"),
        require("../assets/img/home/Radio3.png"),
      ],
    };
  },
  methods: {
    returnhome() {
      this.$router.push("/");
    },
    //全查
    async getdata() {
      let { data } = await this.$axios({
        method: "POST",
        url: "/root/radio/Find",
      });
      this.bookdata = data;
      // console.log(this.bookdata);
    },
    async getfindBD() {
      let { data } = await this.$axios.post("/root/radio/findb");
      // console.log(data);
      this.findDbdata = data;
    },
  },
  created() {
    this.getfindBD();
    this.getdata();
  },
};
</script>
<style lang="less" scoped>
header {
  height: 6.25rem;
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  display: flex;
  align-items: center;
  .purue {
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
    // padding-top  : 1.875rem;
  }
  span {
    margin-left: 34%;
    font-size: 1.125rem;
  }
}
/deep/.el-carousel__button {
  height: 0.625rem;
  width: 0.625rem;
  border-radius: 50%;
}
.el-carousel__item {
  // margin:0 auto;
  border-radius: 3.2px;
  img {
    width: 100%;
    height: 100%;
  }
}
/deep/.el-tabs__item {
  color: #333333;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: #333333;
    font-size: 19px;
    font-weight: 600;
  }
}
/deep/.el-tabs__active-bar {
  background-color: #5fcbb0;
  height: 0.25rem;
}
.wrap {
  margin-left: 4%;
  margin-right: 4%;
  .block {
    width: 100%;
  }
}
.time {
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  .timebox {
    width: 10.4375rem;
    height: 3.0625rem;
    border-radius: 0.5625rem;
    display: flex;
    justify-content: space-around;
    line-height: 3.0625rem;
    background-color: #eaeaea;
    span {
      margin-left: -3.125rem;
    }
    .imgbox {
      width: 1.875rem;
      height: 1.5625rem;
      margin-top: 4%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
.Hot {
  display: flex;
  justify-content: space-between;
  margin-top: 0.9375rem;
  &:nth-child(5) {
    margin-top: 1.8125rem;
  }
  span {
    font-size: 1rem;
    color: #333333;
  }
}
.hotremend {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .hotbox {
    width: 6.6875rem;
    margin-top: 1.25rem;
    height: 6.8125rem;
    display: flex;
    flex-direction: column;
    span {
      font-size: 0.75rem;
      margin-top: 0.625rem;
    }
    .hotimg {
      width: 100%;
      box-shadow: 0rem -0.3125rem 0.375rem 0rem #e4e1fb;
      height: 6.125rem;
      background-color: #eaeaea;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
.popularity {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.875rem;
  margin-top: 1rem;
  .coverbox {
    width: 4.4375rem;
    height: 6.875rem;
    span {
      font-size: 0.75rem;
      margin-top: 0.625rem;
    }
    .coverimg {
      height: 5.625rem;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
.listen {
  font-size: 1rem;
}
.listenb {
  display: flex;
  flex-wrap: wrap;
  button {
    margin-left: 0.625rem;
    margin-top: 0.625rem;
    background-color: #ebebeb;
    border: none;
    border-radius: 0.25rem;
  }
}
</style>
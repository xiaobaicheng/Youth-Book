<template>
  <div class="block">
    <el-carousel height="170px">
      <el-carousel-item v-for="(item, index) in imgc" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="ranking">
    <div class="rankbox">
      <div class="rabimg">
        <img src="../../assets/img/book/paihangbang.png" alt="" />
      </div>
      <span>排行榜</span>
    </div>
    <div class="rankbox">
      <div class="rabimg wqw" id="wqw">
        <img src="../../assets/img/book/shuqian.png" alt="" />
      </div>
      <span>新书</span>
    </div>
    <div class="rankbox">
      <div class="rabimg" id="wqww">
        <img src="../../assets/img/book/wanjie.png" alt="" />
      </div>
      <span>完结</span>
    </div>
    <div class="rankbox">
      <div class="rabimg" id="wqwwq">
        <img src="../../assets/img/book/fenlei.png" alt="" />
      </div>
      <span>分类</span>
    </div>
  </div>
  <div class="chiefeditor">
    <span>主编推荐</span>
    <span class="two"> <span class="two">★品质</span>★人气</span>
  </div>
  <div class="Palm">
    <div class="Palmimg">
      <img src="../../assets/img/book/zhangshan.png" alt="" />
    </div>
    <div class="Palmrght">
      <p>掌上骊珠</p>
      <span
        >青春竞技x甜萌初恋跳水队冷板凳少女 继夺冠后再爆冷门！——追击爱情，扑...
      </span>
      <span>完结*16万字*1406人在读</span>
    </div>
  </div>
  <div class="huibox"></div>
  <div class="Recommendedlist">
    <span>排行榜</span>
    <span class="ten">3月10日完整榜单</span>
  </div>
  <div class="heat">
    <div class="heatbox">推荐榜</div>
    <div class="heatbox">大热榜</div>
    <div class="heatbox">完结榜</div>
    <div class="heatbox">好评榜</div>
  </div>
  <div class="bookbox" >
    <div class="bookleft" v-for="item in bookbox" :key="item.serial">
      <div class="bookimg">
        <img :src="item.img" alt="">
      </div>
      <span class="one">{{item.serial}}</span>
      <div class="bookread">
        <span>{{item.name}}</span>
        <p>{{item.message}}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      bookbox:[
    {
          img:require("../../assets/img/book/boximg0ne.png"),
          name:"邪王追妻",
          message:"宫闹宅斗",
          serial:1
        },   {
          img:require("../../assets/img/book/boximgtwo.png"),
          name:"杏林春满",
          message:"女强-奸臣",
          serial:2
        },   {
          img:require("../../assets/img/book/boximgthree.png"),
          name:"王爷速速接驾",
          message:"年代重生",
          serial:3
        },   {
          img:require("../../assets/img/book/boximgfour.png"),
          name:"富贵荣华",
          message:"甜宠-马甲",
          serial:4
        },   {
          img:require("../../assets/img/book/boximgfive.png"),
          name:"侯门锦商",
          message:"玄幻仙侠",
          serial:5
        },   {
          img:require("../../assets/img/book/boximg5.png"),
          name:"我见探花多娇媚",
          message:"甜宠-将军",
          serial:6
        },   {
          img:require("../../assets/img/book/boximg7.png"),
          name:"令人心动的席先生",
          message:"现实-HE",
          serial:7
        },   {
          img:require("../../assets/img/book/boximg8.png"),
          name:"四岁小奶团首辅全家宠",
          message:"古言-HE",
          serial:8
        },

      ],
      imgc: [
        require("../../assets/img/bookbanner.png"),
        require("../../assets/img/bookbanner2.png"),
        require("../../assets/img/home/banner2.png"),
        require("../../assets/img/home/saonain.png"),
      ],
    };
  },
};
</script>

<style lang="less" scoped>
/deep/.el-carousel__button {
  height: 10px;
  width: 10px;
  border-radius: 50%;
}
.block {
  margin-top: 20px;
  width: 100%;
}
.el-carousel__item {
  // margin:0 auto;
  border-radius: 0.2rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.ranking {
  display: flex;
  margin-top: 24px;
  justify-content: space-around;
  .rankbox {
    display: flex;
    flex-direction: column;
    text-align: center;
    span {
      margin-top: 10px;
      font-size: 18px;
      color: #333333;
    }
    #wqww {
      background-color: #8ab1ff;
    }
    #wqw {
      background-color: #40eb8f;
    }
    #wqwwq {
      background-color: #ffbb50;
    }
    .rabimg {
      height: 52px;
      width: 52px;
      border-radius: 50%;
      background-color: #ff8f92;

      img {
        margin-top: 20%;
        height: 60%;
        width: 50%;
      }
    }
  }
}
.chiefeditor {
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  span {
    font-size: 22px;
  }
  .two {
    font-size: 14px;
    color: #c8bdaf;
  }
}
.Palm {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  .Palmrght {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    span {
      padding-top: 27px;
      font-size: 12px;
      color: #7d7d7d;
    }
  }
  .Palmimg {
    height: 120px;
    width: 200px;
    background-color: salmon;
    border-radius: 6px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.Recommendedlist {  
  margin-top: 20px;
  border: 1px #ffffff2e solid;
  display: flex;
  justify-content: space-between;
  color: #333333;
  .ten {
    font-size: 12px;
    color: #666666;
  }
  span {
    font-size: 18px;
  }
}
.huibox {
  width: 120%;
  margin-left: -10%;
  height: 20px;
  background-color: #f6f6f6;
}
.heat {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  .heatbox {
    height: 35px;
    width: 83.3px;
    background-color: #ffa4a6;
    line-height: 35px;
    text-align: center;
    border-radius: 4px;
    &:nth-child(1) {
      background-color: #ffa4a6;
    }
  }
}
.bookbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  column-count: 2;
  .bookleft {
    width: 47%;
    display: flex;
    margin-top: 10px;
    .bookimg {
      height: 68px;
      width: 54px;
      background-color: #40eb8f;
      border-radius: 4px;
      img{
        height: 100%;
        width: 100%;
      }
      
    }
    .bookread {
      // margin-left: 10px;
      text-align: left;
      span {
        color: #333333;
        font-size: 12px;
        width: 10px;
        height: 30px;
        font-weight: 500;
      }
      p {
        color: #999999;
        font-size: 10px;
        padding-top: 10px;
      }
    }
    .one {
      margin-left: 5px;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      margin-right: 2px;
      background-color: #ffc22d;
      align-items: center;
      text-align: center;
    }
  }
}
</style>
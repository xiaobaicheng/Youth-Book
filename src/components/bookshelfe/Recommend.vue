<template>
  <div class="wrap">
    <div class="block">
      <el-carousel height="170px">
        <el-carousel-item v-for="(item, index) in imgc" :key="index">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="ranking">
      <div class="rankbox" @click="Character">
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
  </div>
  <div class="huibox"></div>
  <div class="wrap">
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
    <div class="bookbox">
      <div class="bookleft" v-for="item in bookbox" :key="item.serial">
        <div class="bookimg">
          <img :src="item.img" alt="" />
        </div>
        <span class="one">{{ item.serial }}</span>
        <div class="bookread">
          <span>{{ item.name }}</span>
          <p>{{ item.message }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="huibox"></div>
  <div class="wrap">
    <div class="Bookworms">
      <h1>书友圈·拯救书荒</h1>
      <span>更多></span>
    </div>
    <div class="commentss">
      <div class="header">
        <div class="avatar">
          <img src="../../assets/img/book/avtar1.png" alt="" />
        </div>
        <span>青书推荐官</span>
        <button>LV.11</button>
      </div>
      <div class="span">
        平淡而温暖的故事。有小小狗血却没有刻意
        的一波三折，每个人都有自己的底色，...
      </div>
      <p>《有机可乘》</p>
    </div>
    <div class="commentss">
      <div class="header">
        <div class="avatar">
          <img src="../../assets/img/book/avtar2.png" alt="" />
        </div>
        <span>青书推荐官</span>
        <button>LV.11</button>
      </div>
      <div class="span">
        特别好看，家人们一定要看。读书起来真的很
        棒，而且女主也不是那种任人拿捏的小白...
      </div>
      <p>《惊凰医妃》</p>
    </div>
    <div class="commentss">
      <div class="header">
        <div class="avatar">
          <img src="../../assets/img/book/avtar3.png" alt="" />
        </div>
        <span>青书推荐官</span>
        <button>LV.5</button>
      </div>
      <div class="span">
        好看！风趣幽默，通俗易懂，经常看到笑的
        停不下来！甜剧，不虐，也没有什么特别...
      </div>
      <p>《侯府嫡子打脸日记》</p>
    </div>
    <div class="avtartbox">
      <div class="avtarimgbox">
        <div class="avtar">
          <img src="../../assets/img/book/avtar1.png" alt="" />
        </div>
        <div class="avtar">
          <img src="../../assets/img/book/avtar2.png" alt="" />
        </div>
        <div class="avtar">
          <img src="../../assets/img/book/avtar3.png" alt="" />
        </div>
      </div>
      <span>查看更多></span>
    </div>
  </div>
  <div class="huibox"></div>
  <div class="wrap">
    <div class="fine">
      <span class="mogin1">本月热门</span>
      <span class="mogin">更多></span>
    </div>
    <div class="hot">
      <div class="leftimg">
        <img src="../../assets/img/book/xuezhong.png" alt="" />
      </div>
      <div class="description">
        <p>雪中悍刀行</p>
        <span
          >江湖是一张珠帘。大人物小人物，是珠
          子，大故事，是串线。情意二字...</span
        >

        <span class="play-one">武侠幻想·完结·47.8万人在读</span>
      </div>
    </div>
    <div class="hot">
      <div class="leftimg">
        <img src="../../assets/img/book/wanxiang.png" alt="" />
      </div>
      <div class="description">
        <p>万相之王</p>
        <span
          >继《斗破苍穹》《武动乾坤》《大主宰》
          《元尊》之后，天蚕土豆又一部玄幻力...</span
        >

        <span class="play-one">东方玄幻·完结·25.77万人在读</span>
      </div>
    </div>
    <div class="hot">
      <div class="leftimg">
        <img src="../../assets/img/book/yujiao.png" alt="" />
      </div>
      <div class="description">
        <p>驭鲛记</p>
        <span
          >迪丽热巴，任嘉伦主演影视剧《与君初相
          识》原著小说！纪云禾，驭妖谷第一驭...</span
        >

        <span class="play-one">玄幻仙侠·完结·16.7万人在读</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      bookbox: [
        {
          img: require("../../assets/img/book/boximg0ne.png"),
          name: "邪王追妻",
          message: "宫闹宅斗",
          serial: 1,
        },
        {
          img: require("../../assets/img/book/boximgtwo.png"),
          name: "杏林春满",
          message: "女强-奸臣",
          serial: 2,
        },
        {
          img: require("../../assets/img/book/boximgthree.png"),
          name: "王爷速速接驾",
          message: "年代重生",
          serial: 3,
        },
        {
          img: require("../../assets/img/book/boximgfour.png"),
          name: "富贵荣华",
          message: "甜宠-马甲",
          serial: 4,
        },
        {
          img: require("../../assets/img/book/boximgfive.png"),
          name: "侯门锦商",
          message: "玄幻仙侠",
          serial: 5,
        },
        {
          img: require("../../assets/img/book/boximg5.png"),
          name: "我见探花多娇媚",
          message: "甜宠-将军",
          serial: 6,
        },
        {
          img: require("../../assets/img/book/boximg7.png"),
          name: "令人心动的席先生",
          message: "现实-HE",
          serial: 7,
        },
        {
          img: require("../../assets/img/book/boximg8.png"),
          name: "四岁小奶团首辅全家",
          message: "古言-HE",
          serial: 8,
        },
      ],
      imgc: [
        require("../../assets/img/bookbanner.png"),
        require("../../assets/img/bookbanner.png"),
        require("../../assets/img/home/banner2.png"),
        require("../../assets/img/home/saonain.png"),
      ],
    };
  },
  methods: {
    Character() {
      this.$router.push("/Character");
    },
   async getdata() {
      let { data } = await this.$axios({
        method:"POST",
        url:"/root/book",
      });
      console.log(data);
    },
  },
  created(){
    this.getdata()
  }
};
</script>

<style lang="less" scoped>
.fine {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  .mogin1 {
    font-size: 18px;
  }
  .mogin {
    font-size: 12px;
    color: #a9a9a9;
  }
}
.hot {
  display: flex;
  margin-top: 1.25rem;
  .leftimg {
    width: 95px;
    height: 112px;
    img {
      height: 100%;
    }
  }
  .description {
    padding-left: 1rem;
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    p {
      font-size: 15px;
      font-weight: 500;
      color: #333333;
    }
    span {
      font-size: 12px;
      line-height: 15px;
      margin-top: 14px;
      width: 90%;
      color: #666666;
    }

    .play-one {
      color: #666666;
      margin-top: 9px;
    }
  }
}
.avtartbox {
  display: flex;
  margin-top: 10px;
  align-items: center;
  span {
    text-align: center;
    font-size: 12px;
    color: #666666;
  }
  .avtarimgbox {
    display: flex;
    margin-left: 30%;
    .avtar {
      height: 22px;
      &:nth-child(2) {
        margin-left: -10%;
      }
      &:nth-child(3) {
        margin-left: -10%;
      }
      width: 22px;
      border-radius: 50%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
.wrap {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
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
      background-color: #09532e;
    }
    #wqwwq {
      background-color: #9e9991;
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
  height: 17px;
  background-color: #f6f6f6;
}
.heat {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  .heatbox {
    height: 35px;
    width: 83.3px;
    background-color: #ffe4e4;
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
    width: 50%;
    display: flex;
    margin-top: 10px;
    .bookimg {
      height: 68px;
      width: 54px;
      background-color: #40eb8f;
      border-radius: 4px;
      img {
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
      // background-color: #9c9585;
      align-items: center;
      text-align: center;
    }
  }
}
.Bookworms {
  display: flex;
  justify-content: space-between;
  margin-top: 17px;

  h1 {
    font-size: 19px;
  }
  span {
    font-size: 12px;
    color: #a9a9a9;
  }
}
.commentss {
  height: 120px;
  width: 100%;
  margin-top: 14px;
  background-color: #f4fbfa;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  line-height: 17px;
  .span {
    margin-left: 7%;
    color: #333333;
    font-weight: 500;
    width: 69%;
    font-size: 12px;
    margin-top: 7px;
  }
  p {
    margin-top: 7px;

    margin-left: 6%;
    color: #666666;
    font-size: 11px;
  }
  .header {
    margin-left: 3%;
    display: flex;
    align-items: center;
    margin-top: 8px;
    span {
      font-size: 14px;
      color: #656565;
      margin-left: 5%;
    }
    button {
      margin-left: 2%;

      width: 35px;
      height: 14px;
      background-color: #bdbdc7;
      border: none;
      font-size: 4px;
      color: #ffffff;
      border-radius: 10px;
    }
    .avatar {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
<template>
  <header>
    <span class="big" @click="returnfound">&lt;</span>
    <span>专栏广场</span>
    <span class="big">···</span>
  </header>
  <div class="Latest">
    <span>最新</span>
    <span class="sas">精选</span>
  </div>
  <div class="block">
    <el-carousel height="100px">
      <el-carousel-item v-for="(item, index) in imgc" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="hot">
    <div class="leftimg">
      <img src="../assets/img/book/xuezhong.png" alt="" />
    </div>
    <div class="description">
      <p>8、中国科幻，属于刘慈欣的一个时代 （含六部）</p>
      <span
        >对文学圈来说，科幻文学“大咖”刘慈欣有
        点神秘。一个闻所未闻的小城电…</span
      >

      <span class="play-one">九枭零逝水*0赞*0评论</span>
    </div>
  </div>
  <div class="hot">
    <div class="leftimg">
      <img src="../assets/img/book/xuezhong.png" alt="" />
    </div>
    <div class="description">
      <p>盘点中国科幻小说发展的（二）儿童 文学与科普时代</p>
      <span
        >中国科幻小说的发展就像过山车，清末民
        国，一批开眼看世界的先驱怀着崇…</span
      >

      <span class="play-one">灯火燕山*0赞*1评论</span>
    </div>
  </div>
  <div class="hot">
    <div class="leftimg">
      <img src="../assets/img/found/我们生活在南京.png" alt="" />
    </div>
    <div class="description">
      <p>【洛氏录】第8期；当科幻与人文相 撞</p>
      <span
        >就在四天前，95后资深科幻作家“天符说
        瑞”的南京终是落下了帐幕。而作…</span
      >

      <span class="play-one">凄苦的洛神*4赞*2评论</span>
    </div>
  </div>
  <div class="recommd">
    <div class="header">
      <h1>推荐专栏主</h1>
      <span>更多></span>
    </div>
    <div class="column">
      <div class="column-one">
        <div class="avtar">
          <img src="../assets/img/危羽.png" alt="" />
        </div>
        <p>艾儿天空</p>
        <span>961篇专栏</span>
        <button>+关注</button>
      </div>
      <div class="column-one">
        <div class="avtar">
          <img src="../assets/img/危羽.png" alt="" />
        </div>
        <p>艾儿天空</p>
        <span>961篇专栏</span>
        <button>+关注</button>
      </div>
      <div class="column-one">
        <div class="avtar">
          <img src="../assets/img/危羽.png" alt="" />
        </div>
        <p>艾儿天空</p>
        <span>961篇专栏</span>
        <button>+关注</button>
      </div>
    </div>
    <h1 class="nine">9分神作</h1>
    <div class="Introduction">
      <div class="novel"><div class="novelimg">
          <img src="../assets/img/found/火星简史.png" alt="">
      </div>
      <span>火星简使</span></div>
      <div class="novel"><div class="novelimg">
          <img src="../assets/img/found/火星简史.png" alt="">
      </div>
      <span>火星简使</span></div>
      <div class="novel"><div class="novelimg">
          <img src="../assets/img/found/火星简史.png" alt="">
      </div>
      <span>火星简使</span></div>
      <div class="novel"><div class="novelimg">
          <img src="../assets/img/found/火星简史.png" alt="">
      </div>
      <span>火星简使</span></div>
      <div class="novel"><div class="novelimg">
          <img src="../assets/img/found/火星简史.png" alt="">
      </div>
      <span>火星简使</span></div>
    </div>
  </div>
  <hr>
</template>

<script>
export default {
  name: "TopicSquare",
  data() {
    return {
      imgc: [
        require("../assets/img/home/banner.png"),
        require("../assets/img/home/banner1.png"),
        require("../assets/img/home/banner2.png"),
        require("../assets/img/home/saonain.png"),
      ],
    };
  },
  methods:{
      returnfound(){
      this.$router.push("/found");
          
      }
  }
};
</script>
<style lang="less" scoped>
hr{
    background-color: #98DCCB;
}
.hot {
  display: flex;
  margin-left: 4%;
  margin-right: 4%;
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
      font-size: 12px;
      padding-right: 30px;
      font-weight: 600;
      color: #333333;
    }
    span {
      font-size: 11px;
      font-weight: 500;
      line-height: 15px;
      margin-top: 14px;
      width: 90%;
      color: #333333;
    }

    .play-one {
      color: #666666;
      margin-top: 9px;
    }
  }
}
header {
  margin-top: 10px;
  font-size: 20px;
  align-content: center;
  line-height: 50px;
  margin-left: 3%;
  margin-right: 3%;
  display: flex;
  justify-content: space-between;
  .big {
    font-size: 30px;
  }
}
.Latest {
  display: flex;
  justify-content: space-around;
  span {
    line-height: 40px;
    height: 40px;
    // outline: 1px black solid;
  }
  .sas {
    border-bottom: 3px #85e0c8 solid;
  }
}
.block {
  width: 92%;
  margin: auto;
}
/deep/.el-carousel__button {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
}
/deep/.el-carousel__item {
  img {
    height: 100%;
    width: 100%;
  }
}
.recommd {
  background-color: #f8f8f8;
  .nine {
    margin-top: 18px;
    margin-left: 4%;
    font-size: 15px;
  }
  .column {
    margin-left: 4%;
    margin-right: 4%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .column-one {
      width: 106px;
      height: 125px;
      background-color: #ffffff;
      margin-top: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      button {
        width: 45px;
        height: 20px;
        border: 1px #fc2d3d solid;
        background: none;
        color: #fc2d3d;
        border-radius: 10px;
        font-size: 10px;
        margin-top: 10px;
      }
      p {
        font-size: 12px;
        margin-top: 10px;
      }
      span {
        font-size: 10px;
        color: #999999;
        margin-top: 10px;
      }

      .avtar {
        height: 36px;
        width: 36px;
        border-radius: 50%;
        margin-top: 10px;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
  .Introduction {
        margin-top: 17px;

    margin-left: 4%;
    margin-right: 4%;
    display: flex;
    justify-content: space-between;
    .novel{
        height: 100px;
        width: 57px;
        display: flex;
        flex-direction: column;
        span{
            font-size: 12px ;
            margin-top: 10px;
        }
        .novelimg{
            height: 72px;
            width: 100%;
            img{
                height: 100%;
                width: 100%;
            }
        }
    }
  }
  .header {
    margin-left: 4%;
    margin-right: 4%;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    h1 {
      font-size: 16px;
    }
    span {
      font-size: 10px;
      color: #999999;
    }
  }
}
</style>
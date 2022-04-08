<template>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="(item, index) in imgc" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="list">
    <div class="list-one" v-for="(item, index) in shop" :key="index">
      <div class="imgBox">
        <img :src="item.url" alt="" />
      </div>
      <p>{{ item.titlte }}</p>
    </div>
  </div>
  <div class="blac-o">
    <div class="block">
      <el-carousel height="90px">
        <el-carousel-item v-for="(item, index) in imgtwo" :key="index">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  <div class="div">
    <div class="box">
      <div class="box1" v-for="(item, index) in hdimg" :key="index">
        <img :src="item" alt="" />
        <div class="zhibo">直播中</div>
      </div>
    </div>
  </div>
  <div class="contant">
    <p>猜你喜欢</p>
    <div class="img-box">
      <div class="contant-box" v-for="(item, index) in figures" :key="index">
        <div class="figures"><img :src="item.url" alt="" /></div>
        <span>{{ item.titlte }}</span>
      </div>
      <button>
        <span>换一批</span>
        <img src="../../assets/img/home/刷新.png" alt="" />
      </button>
    </div>
    <div class="blac-o">
      <div class="block-two">
        <el-carousel height="90px">
          <el-carousel-item v-for="(item, index) in immgtwo" :key="index">
            <img :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="fine">
      <span class="mogin1">精品周更</span>
      <span class="mogin">更多></span>
    </div>
    <div class="fine-img">
      <div class="fineimg-one">
        <div class="imgbox">
          <div class="jinri">今日更新</div>
          <img src="../../assets/img/home/ska.png" alt="" />
        </div>
        <p>小行星 第二季</p>
        <span>青书FM，耳朵拾糖工作室联....</span>
      </div>
      <div class="fineimg-one">
        <div class="imgbox">
          <div class="jinri">今日更新</div>
          <img src="../../assets/img/home/banner2.png" alt="" />
        </div>
        <p>花语心愿 第一季</p>
        <span>青书FM，扶暖文化，联合出品</span>
      </div>
    </div>
    <div class="fine">
      <span class="mogin1">本月热门</span>
      <span class="mogin">更多></span>
    </div>
    <div class="hot">
      <div class="leftimg">
        <img src="../../assets/img/home/santi.png" alt="">
      </div>
      <div class="description">
        <p>三体*多人有声剧*第51届日本星云赏获...</p>
        <span>【给岁月以文明，而不是给文明以岁月】《三体》多人有声剧，重磅来袭！</span>
        <div class="play">
          <span class="play-one">889万人播放</span>
          <span class="play-two">已完结</span>
        </div> 
      </div>
    </div>
        <div class="hot">
      <div class="leftimg">
        <img src="../../assets/img/home/sasa.png" alt="">
      </div>
      <div class="description">
        <p>全职高手广播剧第一季 上</p>
        <span>散人君莫笑在荣耀第十区为所欲为！公众会：君莫笑又来了！大家快跑啊！</span>
        <div class="play">
          <span class="play-one">1998万人播放</span>
          <span class="play-two">已完结</span>
        </div> 
      </div>
    </div>    <div class="hot">
      <div class="leftimg">
        <img src="../../assets/img/home/canci.png" alt="">
      </div>
      <div class="description">
        <p>残次品 第四季</p>
        <span>“他们仍然是这漫无边际的荒原之上，一点星星之火。”瞬心文化出品，改编priest...</span>
        <div class="play">
          <span class="play-one">3924.7万人播放</span>
          <span class="play-two">已完结</span>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      imgc: [
        require("../../assets/img/home/banner.png"),
        require("../../assets/img/home/banner1.png"),
        require("../../assets/img/home/banner2.png"),
        require("../../assets/img/home/saonain.png"),
      ],
      imgtwo: [
        require("../../assets/img/home/one.png"),
        require("../../assets/img/home/图层 4.png"),
      ],
      shop: [
        { url: require("../../assets/img/home/启动音.png"), titlte: "启动音" },
        { url: require("../../assets/img/home/精选.png"), titlte: "精选" },
        { url: require("../../assets/img/home/商城.png"), titlte: "商城" },
        { url: require("../../assets/img/home/娱乐.png"), titlte: "放松" },
      ],
      hdimg: [
        require("../../assets/img/home/huadong.png"),
        require("../../assets/img/home/huadong1.png"),
        require("../../assets/img/home/huadong2.png"),
        require("../../assets/img/home/huadong.png"),
      ],
      figures: [
        {
          url: require("../../assets/img/home/fileger.png"),
          titlte: "恋爱循环-花泽香 菜",
        },
        {
          url: require("../../assets/img/home/ewewe.png"),
          titlte: "未闻花名-secret base...",
        },
        {
          url: require("../../assets/img/home/sanhe.png"),
          titlte: "3D热血古风双声 道《踏山河》...",
        },
        {
          url: require("../../assets/img/home/wqwq11.png"),
          titlte: "【春日限定】与 春日相伴 和...",
        },
        {
          url: require("../../assets/img/home/yu.png"),
          titlte: "【自然雨声】缓 解压力 睡眠专用",
        },
        {
          url: require("../../assets/img/home/girl.png"),
          titlte: "李陵和他的国家 宝藏--雨水篇",
        },
      ],
      immgtwo: [
        require("../../assets/img/home/图层 27.png"),
        require("../../assets/img/home/图层 4.png"),
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.blac-o {
  margin-top: 20px;
}
.block {
  width: 90%;
  margin: auto;
}
.block-two {
  margin: auto;
}
.el-carousel__item {
  // margin:0 auto;
  border-radius: 16px;
  img {
    width: 100%;
    height: 100%;
  }
}
.el-carousel__button {
  color: red;
}
.el-carousel__item h3 {
  // color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.list {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .list-one {
    width: 25%;
    height: 100%;
    align-items: center;
    text-align: center;
    .imgBox {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-left: 24%;
      margin-top: 14%;
      img {
        width: 100%;
      }
    }
    p {
      margin-top: 16px;
      color: #333333;
    }
  }
}

.div {
  overflow: hidden;
  height: 118px;
  margin-left: 2%;
  margin-top: 18px;
  .box::-webkit-scrollbar {
    display: none;
  }
  .box {
    // background: #eee;
    padding: 10px 0;
    white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
    overflow-y: auto; /*可滑动*/
    .box1 {
      width: 28%;
      margin-left: 3%;
      height: 100px;
      background: #fff;
      display: inline-block; /*行内块元素*/
      .zhibo {
        position: relative;
        left: 68px;
        width: 40px;
        height: 15px;
        top: -103px;
        background-color: #e54d42;
        border-radius: 12px;
        color: #dadada;
        text-align: center;
        font-size: 1px;
      }
      img {
        width: 100%;
      }
    }
  }
}
.contant {
  margin-left: 5%;
  height: 100%;
  margin-right: 5%;
  margin-top: 11%;
  p {
    font-size: 18px;
    color: #333333;
    font-weight: 500;
    margin-bottom: 15px;
  }
  .img-box {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    button {
      margin: auto;
      width: 155px;
      height: 42px;
      display: flex;
      border-radius: 16px;
      background: transparent; /*按钮背景透明*/
      border: 1px #bcbcbc solid;
      font-size: 15px;
      align-items: center;
      span {
        margin-left: 24%;
      }
      img {
        height: 25px;
        padding-left: 7px;
      }
    }
    .contant-box {
      margin-bottom: 20px;
      height: 150px;
      width: 113px;
      span {
        // padding-top: 12px;
        font-size: 14px;
        color: #333333;
      }
      .figures {
        height: 110px;
        width: 100%;
        border-radius: 13px;
        margin-bottom: 12px;
        img {
          width: 100%;
        }
      }
    }
  }
  .fine {
    display: flex;
    margin-top: 28px;
    position: relative;
    width: 100%;

    .mogin1 {
      // position: absolute;
      font-size: 20px;
      font-weight: 500;
      color: #333333;
    }
    .mogin {
      // margin-right: 10px;
      position: absolute;
      right: 0%;
      color: #a9a9a9;
      font-size: 13px;
    }
  }
  .fine-img {
    display: flex;
    margin-top: 18px;
    .fineimg-one {
      width: 48%;
      height: 140px;
      // padding-right: 15px;
      margin-right: 2%;
      padding-left: 0px;
      p {
        padding-top: 10px;
        font-size: 15px;
        color: #333333;
        font-weight: 500;
      }
      span {
        font-size: 11px;
        color: #666666;
        padding-top: 8px;
      }
      .imgbox {
        display: inline-block;
        margin-top: -22px;
        width: 100%;
        // height: 130px;
        .jinri {
          position: relative;
          left: 0px;
          top: 34px;
          width: 56px;
          height: 0;
          float: left;
          // margin-right: 20px;
          border: 12px solid #d93427;
          border-right-color: transparent;
          font-size: 7px;
          color: #fff;
          line-height: 3px;
        }
      }
      img {
        // height: 100%s;
        width: 100%;
      }
    }
  }
  .hot{
    display: flex;
    margin-top: 20px;
    width: 100%;
    .leftimg{
      width: 79%;
      height: 160px;
      img{
        height: 100%;
      }
    }
    .description{
      padding-left: 16px;
      display: flex;
      flex-direction: column;

      p{
        font-size: 12px;
        font-weight: 500;
        color: #333333;
      }
      span{
        font-size: 11px;
        color: #666666;
        text-indent:1em;
        
      }
      .play{
        display: flex;
        padding-bottom: 42%;
        position: relative;
        .play-one{
          position: absolute;
          bottom:8px;
        color: #666666;
          left: 2px;
        }
        .play-two{
          position: absolute;
          bottom: 8px;
        color: #666666;
          right: 0px;
        }
      }
    }
  }
}
</style>
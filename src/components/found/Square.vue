<template>
  <div>
    <header>
      <div class="column">
        <div class="imgbox" @click="Column">
          <img src="../../assets/img/found/found1.png" alt="" />
        </div>
        <span>专栏</span>
      </div>
      <div class="column">
        <div class="imgbox">
          <img src="../../assets/img/found/found2.png" alt="" />
        </div>
        <span>书单</span>
      </div>
      <div class="column">
        <div class="imgbox">
          <img src="../../assets/img/found/found3.png" alt="" />
        </div>
        <span>圈子</span>
      </div>
      <div class="column">
        <div class="imgbox">
          <img src="../../assets/img/found/found4.png" alt="" />
        </div>
        <span>新书投资</span>
      </div>
      <div class="column">
        <div class="imgbox">
          <img src="../../assets/img/found/found5.png" alt="" />
        </div>
        <span>趣配音</span>
      </div>
      <div class="column">
        <div class="imgbox">
          <img src="../../assets/img/found/found6.png" alt="" />
        </div>
        <span>周边购</span>
      </div>
      <div class="column">
        <div class="imgbox">
          <img src="../../assets/img/found/found7.png" alt="" />
        </div>
        <span>热门角色</span>
      </div>
      <div class="column">
        <div class="imgbox">
          <img src="../../assets/img/found/found8.png" alt="" />
        </div>
        <span>话题广场</span>
      </div>
      <div class="antaion">
        <button>动画</button>
        <span>会说话的小明上线啦...></span>
      </div>
    </header>
  </div>
  <div class="series">
    <div class="series-one">
      <p>神系列</p>
      <div class="qwqwq">精彩章节小说配音</div>
    </div>
    <div class="series-one">
      <p>活动中心</p>
      <div class="qwqwq" id="two">栏娘征稿第四期来啦</div>
    </div>
    <div class="series-one">
      <p>游戏中心</p>
      <div class="qwqwq" id="paly">好玩有趣</div>
    </div>
  </div>
  <div class="recommend">
    <button>推荐</button>
    <button>推荐</button>
    <button>推荐</button>
    <button>推荐</button>
    <button>推荐</button>
    <div class="recommend-box">
      <div class="recommendimg">
        <img src="../../assets/img/found/liebiao.png" alt="" />
      </div>
      <span>列表</span>
    </div>
  </div>
  <div class="dub">
    <div class="dub-left">
      <div class="dub-box">
        <div class="imgbox">
          <img src="../../assets/img/found/baijin.png" alt="" />
        </div>
        <div class="zhangjie">
          <span>阅文精品IP：偷偷藏不住</span>
          <div class="smellimg">
            <div class="idsds">
              <img src="../../assets/img/found/5e79589e112c2407.png" alt="" />
            </div>

            <span>精彩章节小说配音</span>
            <div>☆93w</div>
          </div>
        </div>
      </div>
      <div class="dub-box">
        <div class="imgbox">
          <img src="../../assets/img/found/xusheng.png" alt="" />
        </div>
        <div class="zhangjie">
          <span>阅文精品IP：偷偷藏不住</span>
          <div class="smellimg">
            <div class="idsds">
              <img src="../../assets/img/found/5e79589e112c2407.png" alt="" />
            </div>

            <span>精彩章节小说配音</span>
            <div>☆93w</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dub-left">
      <div class="dub-box">
        <div class="imgbox">
          <img src="../../assets/img/found/taozhi.png" alt="" />
        </div>
        <div class="zhangjie">
          <span>阅文精品IP：偷偷藏不住</span>
          <div class="smellimg">
            <div class="idsds">
              <img src="../../assets/img/found/5e79589e112c2407.png" alt="" />
            </div>

            <span>精彩章节小说配音</span>
          </div>
        </div>
      </div>
      <div class="dub-box">
        <div class="imgbox">
          <img src="../../assets/img/found/like.png" alt="" />
        </div>
        <div class="zhangjie">
          <span>阅文精品IP：偷偷藏不住</span>
          <div class="smellimg">
            <div class="idsds">
              <img src="../../assets/img/found/5e79589e112c2407.png" alt="" />
            </div>

            <span>精彩章节小说配音</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Square",
  data(){
    return{}
  },
  methods:{
    Column(){
      this.$router.push("/ColumnSquare")
    }
  }
};
</script>

<style lang="less" scoped>
header {
  margin-top: -10px;
  height: 260px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #f3f8fd;
  border-radius: 14px;
  .column {
    width: 25%;
    padding-top: 23px;
    height: 19%;
    align-items: center;
    text-align: center;
    .imgbox {
      height: 37px;
      margin: auto;
      width: 37px;
      border-radius: 50%;
      img {
        // width: 100%;
        height: 100%;
      }
    }
    span {
      line-height: 35px;
    }
  }
}
.antaion {
  display: flex;
  position: relative;
  margin-top: 14%;
  margin-left: -43%;

  button {
    background-color: azure;
    border-radius: 16px;
    border: none;
    height: 20px;
    background-color: #ffe4e7;
    color: #f11e40;
  }
  span {
    margin-left: 14px;
    color: rgb(22, 21, 21);
    font-size: 13px;
    margin-top: 3px;
  }
}
.series {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  .series-one {
    width: 31%;
    height: 70px;
    text-align: left;
    border-radius: 13px;
    background-color: #e5fffd;
    &:nth-child(2) {
      background-color: #fceed2;
    }
    &:nth-child(3) {
      background-color: #d8e5fe;
    }
    line-height: 16px;
    p {
      margin-top: 10%;
      font-size: 14px;

      margin-left: 14%;
    }
    #paly {
      color: #6a97fd;
    }
    #two {
      color: #fea42b;
    }
    .qwqwq {
      margin-top: 5px;
      margin-left: 14%;
      font-size: 1px;
      color: #00cac1;
      padding-right: -10px;
    }
  }
}
.recommend {
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  button {
    border-radius: 10px;
    border: none;
    height: 29px;
    background-color: #ffe6e6;
    color: #999999;
    width: 15%;
    &:hover {
      color: #f11e40;
    }
  }
  .recommend-box {
    display: flex;
    align-items: center;
    .recommendimg {
      height: 14px;
      width: 14px;
      border-radius: 50%;
      img {
        height: 100%;
      }
    }
  }
}
.dub {
  margin-top: 20px;
  display: flex;
  .dub-left {
    .dub-box {
      width: 97%;
      border-radius: 18px;
      // overflow: hidden;
      margin-bottom: 20px;
      margin-bottom: 10px;
      .zhangjie {
        position: relative;
        // height: 80px;
        margin-top: -10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f0f6fc;
        .smellimg {
          display: flex;
          // align-items: center;
          width: 100%;
          margin-bottom: 10px;
          margin-top: 10px;
          span {
            font-size: 1px;
            margin-left: 10px;
            margin-top: 1px;
            color: #999999;
          }
          div {
            font-size: 10px;
            // margin-left: 2px;
            color: #999999;
          }
          .idsds {
            height: 14px;
            width: 14px;
            img {
              border-radius: 50%;
            }
            border-radius: 50%;
          }
        }
        span {
          margin-top: 10px;
          font-size: 15px;
        }
      }
      .imgbox {
        width: 100%;
        // position: relative;
        top: -30px;
        // height: -160px;
        img {
          width: 100%;
          // height: 100%;
        border-radius: 14px;

        }
      }
    }
  }

  /deep/.dub-boxone {
    height: 200px;

    .zhangjie {
      height: -100px;
    }
    .imgbox {
      height: -200px;
    }
  }
}
</style>
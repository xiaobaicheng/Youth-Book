<template>
  <header>
    <div class="column">
      <div class="imgbox"></div>
      <span>专栏</span>
    </div>
    <div class="column">
      <div class="imgbox"></div>
      <span>书单</span>
    </div>
    <div class="column">
      <div class="imgbox"></div>
      <span>圈子</span>
    </div>
    <div class="column">
      <div class="imgbox"></div>
      <span>新书投资</span>
    </div>
    <div class="column">
      <div class="imgbox"></div>
      <span>趣配音</span>
    </div>
    <div class="column">
      <div class="imgbox"></div>
      <span>周边购</span>
    </div>
    <div class="column">
      <div class="imgbox"></div>
      <span>热门角色</span>
    </div>
    <div class="column">
      <div class="imgbox"></div>
      <span>话题广场</span>
    </div>
  </header>
  <div class="antaion">
    <button>动画</button>
    <span>会说话的小明上线了</span>
  </div>
  <div class="series">
    <div class="series-one">
      <p>神系列</p>
      <span>精彩章节小说配音 </span>
    </div>
    <div class="series-one">
      <p>活动中心</p>
      <span>精彩章节小说配音 </span>
    </div>
    <div class="series-one">
      <p>游戏中心</p>
      <span>精彩章节小说配音 </span>
    </div>
  </div>
  <div class="recommend">
    <button>推荐</button>
    <button>推荐</button>
    <button>推荐</button>
    <button>推荐</button>
    <button>推荐</button>
    <div class="recommend-box">
      <div class="recommendimg"></div>
      <span>列表</span>
    </div>
  </div>
      
</template>

<script>
export default {
  name: "Square",
};
</script>

<style lang="less" scoped>
header {
  margin-top: -10px;
  height: 220px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .column {
    width: 25%;
    height: 50%;
    align-items: center;
    text-align: center;
    .imgbox {
      height: 60px;
      margin: auto;
      width: 60px;
      border-radius: 50%;
      background-color: beige;
    }
    span {
      line-height: 35px;
    }
  }
}
.antaion {
  display: flex;
  position: relative;
  text-align: center;
  button {
    background-color: azure;
    border-radius: 16px;
    border: none;
  }
  span {
    position: absolute;
    left: 14%;
    color: rgb(238, 238, 238);
  }
}
.series {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  .series-one {
    width: 31%;
    height: 70px;
    border-radius: 13px;
    background-color: rgb(238, 238, 238);
    text-align: left;
    line-height: 20px;
    p {
      margin-top: 13%;
      margin-left: 14%;
    }
    span {
      margin-left: 14%;
      font-size: 11px;
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
    background-color: cadetblue;
    width: 15%;
  }
  .recommend-box {
    display: flex;
    align-items: center;
    .recommendimg {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: cadetblue;
    }
  }
}
</style>
<template>
  <div class="pure_top">
   
    <div class="wrap">
      <div class="wrap-left">
        <div>
          <button class="day">上周榜冠军</button>
          <span class="fialty">第十六周</span>
        </div>
        <div><span class="hegt">高纯</span></div>
        <div>我眼中住着神魔*男主</div>
      </div>
      <div class="wrap-right">
        <img src="../assets/img/home/bangdan.png" alt="" />
      </div>
    </div>
  </div>
   <header>
      <span class="sas" @click="retunlisten"> &lt; </span>
      <span>说明</span>
    </header>
  <div class="start">
    <h1>*角色星耀榜*</h1>
    <h2>本周03月07日——03月13日*每半小时刷新</h2>
  </div>
  <div class="content">
    <div class="StarShine">
      <div class="Starleft">
        <div class="imgbox">
          <img src="../assets/img/home/chenqing.png" alt="" />
        </div>
        <div class="right">
          <p>陈庆</p>
          <div class="yede">出自<span>夜的命名术></span></div>
          <div class="puresbox">
            <span>粉丝</span>
            <div class="pures">
                <img src="../assets/img/home/5e79589e112c2407.png" alt="">
            </div>
            <div class="pures">
                <img src="../assets/img/home/5e79589e112c2407.png" alt="">
            </div>
            <div class="pures">
                <img src="../assets/img/home/5e79589e112c2407.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="Starright">
          <p>19987</p>
          <span>星耀值</span>
      </div>
    </div>
    <div class="StarShine">
      <div class="Starleft">
        <div class="imgbox">
          <img src="../assets/img/home/liuchang.png" alt="" />
        </div>
        <div class="right">
          <p>陈庆</p>
          <div class="yede">出自<span>夜的命名术></span></div>
          <div class="puresbox">
            <span>粉丝</span>
            <div class="pures">
                <img src="../assets/img/home/5e79589e112c2407.png" alt="">
            </div>
            <div class="pures">
                <img src="../assets/img/home/5e79589e112c2407.png" alt="">
            </div>
            <div class="pures">
                <img src="../assets/img/home/5e79589e112c2407.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="Starright">
          <p>19987</p>
          <span>星耀值</span>
      </div>
    </div>
    <div class="StarShine">
      <div class="Starleft">
        <div class="imgbox">
          <img src="../assets/img/home/shunqingyun.png" alt="" />
        </div>
        <div class="right">
          <p>陈庆</p>
          <div class="yede">出自<span>夜的命名术></span></div>
          <div class="puresbox">
            <span>粉丝</span>
            <div class="pures">
                <img src="../assets/img/home/5e79589e112c2407.png" alt="">
            </div>
            <div class="pures">
                <img src="../assets/img/home/5e79589e112c2407.png" alt="">
            </div>
            <div class="pures">
                <img src="../assets/img/home/5e79589e112c2407.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="Starright">
          <p>19987</p>
          <span>星耀值</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Character",
  data(){
    return{

    }
  },
  methods:{
    retunlisten(){
      this.$router.push("/Bookshelf")
    }
  }
};
</script>

<style lang="less" scoped>
.pure_top {
  width: 100%;
  height: 205px;
  position: relative;
  z-index: -1;
  overflow: hidden;
}
.pure_top::after {
  content: "";
  width: 110%;
  height: 205px;
  position: absolute;
  left: -5%;
  top: 0;
  z-index: -1;
  border-radius: 0 0 50% 50%;
  background: #000000;
}
.wrap {
  display: flex;
  justify-content: space-around;
  color: #ffffff;
  margin-top: 80px;
  .wrap-right {
    height: 52px;
    width: 52px;
    border-radius: 50%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .wrap-left {
    line-height: 25px;
    .fialty {
      margin-left: 3%;
    }
    .hegt {
      border-bottom: 1px #ffffff solid;
    }
    .day {
      width: 75px;
      color: #ffffff;
      font-size: 12px;
      height: 20px;
      border-radius: 4px;
      background-color: #feba0f;
      border: none;
    }
  }
}
header {
  display: flex;
  
  margin-left: 4%;
  margin-right: 4%;
  justify-content: space-between;
  line-height: 20px;
  margin-top: -50%;
  .sas {
    font-size: 30px;
  }
  span {
    color: #ffffff;
    font-size: 15px;
  }
}
.start {
  margin-top: 190px;

  text-align: center;
  line-height: 30px;

  h1 {
    font-size: 16px;
  }
  h2 {
    font-size: 11px;
  }
}
.content {
  margin-left: 4%;
  margin-right: 4%;
  .StarShine {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
    height: 105px;
    background-color: #f1f1f1;
    .Starright {
        display: flex;
        margin-top: 10%;
        flex-direction: column;
        p{
            font-size: 12px;
            color: #ED2936;
            font-weight: 600;
        }
        span{
            margin-top: 8px;
            font-size: 9px;
            color: #999999;
        }
    }
    .Starleft {
      display: flex;
      margin-left: -10%;
      align-items: center;
      .right {
        margin-left: 6%;
        font-size: 9px;
        line-height: 19px;
        color: #999999;
        .puresbox {
          display: flex;
          width: 150%;
          .pures {
            height: 18px;
            width: 18px;
            border-radius: 50%;
            margin-left: 4%;
            img{
                height: 100%;
                width: 100%;
                border-radius: 50%;
            }
          }
        }
        p {
          font-size: 14px;
          color: #333333;
        }
        .yede {
          width: 120%;
          span {
            color: #000000;
            font-weight: 500;
          }
        }
      }
      .imgbox {
        height: 68px;
        width: 68px;
        border-radius: 50%;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
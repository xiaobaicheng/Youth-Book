<template>
<div class="wrap">
  <div class="concern">
    <p>热门关注</p>
    <hr />
    <div class="conceron-box">
      <div class="imgbox"></div>
      <div class="name">
        <div class="namebox">
          <span>会说话的猪肘子</span> <span class="ambassador">五年大使</span>
        </div>

        <p>2020网路文学作家指数TOP50</p>
      </div>
      <button>+关注</button>
    </div>
    <div class="cover">
      <div class="coverimg"></div>
      <div class="description">
        <p>夜的使命</p>
        <span>都市*连载*239万</span>
      </div>
    </div>
  </div>
  <div class="concern">
    <p>热门关注</p>
    <hr />
    <div class="conceron-box">
      <div class="imgbox"></div>
      <div class="name">
        <div class="namebox">
          <span>会说话的猪肘子</span> <span class="ambassador">五年大使</span>
        </div>

        <p>2020网路文学作家指数TOP50</p>
      </div>
      <button>+关注</button>
    </div>
    <div class="cover">
      <div class="coverimg"></div>
      <div class="description">
        <p>夜的使命</p>
        <span>都市*连载*239万</span>
      </div>
    </div>
  </div><div class="concern">
    <p>热门关注</p>
    <hr />
    <div class="conceron-box">
      <div class="imgbox"></div>
      <div class="name">
        <div class="namebox">
          <span>会说话的猪肘子</span> <span class="ambassador">五年大使</span>
        </div>

        <p>2020网路文学作家指数TOP50</p>
      </div>
      <button>+关注</button>
    </div>
    <div class="cover">
      <div class="coverimg"></div>
      <div class="description">
        <p>夜的使命</p>
        <span>都市*连载*239万</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Concern",
};
</script>

<style lang="less" scoped>
.wrap{
  margin-top: -30px;
}
.concern {
  margin-top: 20px;
  p {
    font-size: 20px;
  }
  hr {
    margin-top: 14px;
  }
  .conceron-box {
  display: flex;
  align-items: center;
  button {
    margin-left: 20%;
    border-radius: 16px;
    border: none;
    font-size: 5px;
    background-color: #c6c6c6;
  }
  .imgbox {
    height: 46px;
    width: 46px;
    border-radius: 50%;
    background-color: bisque;
  }
  .name {
    margin-left: 4%;
    line-height: 25px;
    .namebox {
      display: flex;
      align-items: center;
    }
    p {
      color: #9d2a2a;
      font-size: 10px;
    }
    span {
      font-size: 14px;
    }
    .ambassador {
      line-height: 14px;
      height: 15px;
      font-size: 2px;
      margin-left: 2%;
      width: 30%;
      background-color: #c6c6c6;
      border-radius: 5px;
    }
  }
}
.cover{
  margin-top: 15px;
  width: 100%;
  height: 100px;
  border-radius: 15px;
  background-color: #EBEBEB;
  display: flex;
  align-items: center;
  .coverimg{
    width: 60px;
    margin-left: 5%;
    height: 80px;
    border-radius: 5px;
    background-color: #c6c6c6;
  }
  .description{
    margin-left: 5%;
    line-height: 25px;
    p{
      font-size: 17px;
    }
    span{
      font-size: 11px;
    }
  }
}
}

</style>
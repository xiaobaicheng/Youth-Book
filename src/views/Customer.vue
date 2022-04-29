<template>
  <header>
    <span class="big" @click="returnAbount">&lt;</span>
    <span class="customeer">客服娘娘</span>
    <span class="big">···</span>
  </header>
  <div class="wrap">
    <div class="conten">
      <div class="admin">
        <h1>你好，请问有什么可以帮助您的</h1>
        <ul>
          <li>1.小鱼干是什么</li>
          <li>2.如何获取小鱼干</li>
          <li>3.如何换绑手机号码</li>
          <li>4.闹钟为什么不响</li>
          <li>5.猫粮有什么作用</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Customer",
  data() {
    return {
        
    };
  },
  methods: {
    returnAbount() {
      this.$router.push("/About");
    },
  },
};
</script>

<style lang="less" scoped>
header {
  //   margin-top: 13px;
  font-size: 17px;
  height: 65px;
  border-bottom: 1px #fafafa solid;
  .customeer {
    font-weight: 600;
  }
  margin-left: 3%;
  margin-right: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .big {
    font-size: 30px;
  }
}
.wrap {
  background-color: #fafafa;
  .conten {
    padding-top: 26px;
  }
  .admin {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    h1 {
      margin-top: 14px;
      font-size: 12px;
      font-weight: 600;
    }
    line-height: 25px;
    padding-left: 20px;
    width: 204.5px;
    height: 177px;
    margin-left: 4%;
    border: 1px #85e0c8 solid;
    ul {
      li {
        color: #9ce6d3;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
}
</style>
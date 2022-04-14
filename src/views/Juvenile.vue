<template>
  <header>
    <div class="purue" @click="returnabount">
      <img src="../assets/img/setup.png" alt="" />
    </div>
  </header>
  <div class="san">
    <img src="../assets/img/about/san.png" alt="" />
  </div>
  <div class="juven">
      <h1>青少年模式未开启</h1>
      <ul>
          <li type="square">在此模式下用户只能手厅适合青少年收听 的内容</li>
          <li>无法进行不合适青少年的操作，如充值等。</li>
          <li>开启青少年模式，需先设置独立密码，如忘 记密码可通过申述重置密码。</li>
      </ul>
  </div>
  <button>开启青少年模式</button>
</template>

<script>
export default {
  name: "Juvenile",
  data(){
      return{

      }
  },
  methods:{
      returnabount(){
      this.$router.push("/About")

      }
  }
};
</script>

<style lang="less" scoped>
.san {
  margin-left: 30%;
  margin-right: 30%;
  width: 40%;
  padding-top: 60px;
  img {
    width: 100%;
  }
  margin: auto;
}
header {
  margin-left: 7%;
  margin-top: 40px;
}
.purue {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}
.juven{
    margin-top: 70px;
    // line-height: 37px;
    margin-left: 17%;
    margin-right: 17%;
    width: 66%;
    h1{
        text-align: center;
        font-size: 22px;
    }
    ul{
        margin-top: 25px;
        li{
            padding-top: 10px;
            list-style-type:disc;
            font-size: 13px;
            line-height: 26px;
            color: #333333;
        }
    }
}
button{
        font-size: 22px;

    margin-top: 100px;
    border-radius: 10px;
    height: 60px;
    width: 300px;
    margin-left: 14%;
    background-color: #333333;
    color: #ffffff;
}
</style>
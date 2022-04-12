<template>
<header>
  <div class="logo">
    <img src="../assets/img/home/time.png" alt="">
  </div>
  <input type="text" placeholder="搜索框">
 <div class="button">
   <img src="../assets/img/home/男生女生.png" alt="">
 </div>
</header>

  <el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="直播" name="first">直播</el-tab-pane>
    <el-tab-pane label="推荐" name="second"><Recommend></Recommend>
      </el-tab-pane>
    <el-tab-pane label="广播剧" name="third">广播剧</el-tab-pane>
    <el-tab-pane label="声音恋人" name="fourth">声音恋人</el-tab-pane>
    <el-tab-pane label="相声评书" name="five">相声评书</el-tab-pane>
  </el-tabs>
 
</template>

<script>
import Recommend from "../components/apphome/Recommend.vue"
export default {
  name: 'Home',
  components: {
   Recommend
  },
  data(){
    return{
      activeName: 'second'
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.el-carousel__button{
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
header{
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  .logo{
    margin-left: 3%;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    img{
      height: 100%;
    }
  }
  input{
    height: 28px;
    width: 64%;
    margin-left: 4%;
    border-radius: 15px;
    background-color: #F5F5F5;
    border: 1px #F5F5F5 solid;
    text-align: center;
  }
  .button{
    height: 28px;
    width: 28px;
    margin-left: 5%;
     img{
       width: 100%;
     }
  }
}
 .is-active{
   color: red;
 }

 /deep/.el-tabs__item{
   color: #333333;
   font-size: 16px;
   font-weight: 600;

   &:hover{
   color: #333333;
   font-size: 19px;
   font-weight: 600;
  //  border-bottom: 2px #5FCBB0 solid;
   }
 }
 /deep/.el-tabs__item.is-active{
   color: #333333;
   
 }
</style>

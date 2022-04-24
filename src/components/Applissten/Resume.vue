<template>
  <div class="daytime">
    <div class="timeimg">
      <img src="../../assets/img/listen/daytime.png" alt="" />
    </div>
    <div class="timename">
      <span>白日梦我 第一季</span>
      <p>1210.4万次播放 广播剧 连载中</p>
    </div>
    <div class="Chasingdrama">追剧</div>
  </div>
  <div class="tag">
    <el-tag>主题曲</el-tag>
    <el-tag type="success">第一集</el-tag>
    <el-tag type="info">第二集</el-tag>
    <el-tag type="warning">花絮</el-tag>
  </div>
 
  <h1>本集参演(19)</h1>
  <div class="Participation">
    <div class="Participationbox" v-for="(item,index) in ParticipationData" :key="index">
      <div class="avtarimg">
          <img :src="item.img" alt="">
      </div>
      <p>{{item.name}}</p>
      <span>{{item.Play}}</span>
      <hr />
      <span>{{item.message}}</span>
    </div>
 
  </div>
</template>

<script>
export default {
  name: "Resume",
  data(){
      return{
          ParticipationData:[
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
              {img:require("../../assets/img/listen/avtar1.png"),name:"姜广涛",Play:"饰 沈倦",message:"星之声"},
          ]
      }
  }
};
</script>
<style lang="less" scoped>
.Participation {
  //   display: flex;
  margin-top: 20px;
  justify-content: space-around;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  display: -webkit-box;
  //   outline: 1px black solid;
  white-space: nowrap;
  .Participationbox {
    margin-left: 10px;
    width: 70px;
    height: 104px;
    margin-top: 3px;
    margin-bottom: 10px;
    display: inline-block; /*行内块元素*/
    -webkit-box-shadow: #666 0px 0px 4px;
    -moz-box-shadow: #666 0px 0px 4px;
    box-shadow: #666 0px 0px 4px;
    text-align: center;
    line-height: 12px;
    hr{
        margin-left: 10%;
        margin-right: 10%;
    }
    p{
        font-size: 9px;
        color: #333333;
    }
   
    span{
        font-size: 8px;
        color: #999999;
    }
    .avtarimg {
        img{
            height: 100%;
            width: 100%;
        }
      height: 32px;
      margin: auto;
      margin-top: 10px;
      width: 32px;
      border-radius: 50%;
      background-color: #666;
    }
  }
}
h1 {
  font-size: 18px;
  color: #333333;
  margin-top: 20px;
}
.tag {
  display: flex;
  justify-content: space-between;
}
/deep/.el-tag {
  height: 45px;
  width: 81px;
  background-color: #ffffff;
  color: #999999;
  text-align: center;
  line-height: 45px;
}
/deep/.el-tag.el-tag--success {
  border: 1px #78d1bb solid;
  color: #78d1bb;
}
.daytime {
  margin-top: 17px;
  width: 100%;
  display: flex;
  align-items: center;
  .Chasingdrama {
    margin-left: 6%;
    height: 23px;
    width: 40px;
    background-color: #78d1bb;
    color: white;
    text-align: center;
    line-height: 20px;
    font-size: 10px;
  }
  .timename {
    margin-left: 7%;
    width: 70%;
    line-height: 25px;
    span {
      font-size: 10px;
    }
    p {
      color: #999999;
      font-size: 10px;
    }
  }
  .timeimg {
    height: 40px;
    width: 40px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
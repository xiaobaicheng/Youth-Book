<template>
  <el-carousel indicator-position="outside" height="1000px">
    <el-carousel-item v-for="item in 4" :key="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Touchtwo from "../components/touch/Touchtwo.vue"
import Touchone from "../components/touch/Touchone.vue"
export default {
  name: "Vouth",
  components:{Touchtwo,Touchone},
  data() {
    return {};
  },
  methods: {

}
}
</script>

<style lang="less" scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
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
    .imgbox{
        height: 60px;
        margin: auto;
        width: 60px;
        border-radius: 50%;
        background-color: beige;
    }
    span{
        line-height: 35px;
    }
  }
}
</style>
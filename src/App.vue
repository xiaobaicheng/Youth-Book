<template>
  <div class="content">
    <router-view />
  </div>
  <div id="deck"><Appnaw></Appnaw></div>
</template>
<script>
import Appnaw from "./components/Appnaw/Appnaw.vue";
export default {
  name: "App",
  components: {
    Appnaw,
  },
};
</script>

<style lang="less" scoped>
@import "assets/css/reset.css";
.content {
  margin-bottom: 30px;
}
#deck {
  // position: fixed;
  bottom: 0;
  width: 100%;
}
</style>>


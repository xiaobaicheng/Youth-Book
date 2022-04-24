<template>
  <div class="content">
    <div v-if="$route.meta.keepAlive">
      <router-view />
      <div class="taber">
        <Appnaw />
      </div>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
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
.taber {
  margin-top: 100px;
}
</style>>


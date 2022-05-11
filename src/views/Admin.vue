<template>
  <h1>管理页面</h1>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="书单表" name="first">
      <Book/>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
import Book from "../components/admin/Book.vue"
export default {
name:"Admin",
components:{Book},
data(){
    return {
         activeName: 'first'
    }
}
}
</script>

<style>

</style>
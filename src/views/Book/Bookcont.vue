<template>
  <div id="bookcont">
    <div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1"
          ><router-link to="/">首页</router-link></el-menu-item
        >
        <el-menu-item index="2"
          ><router-link to="/bookstack">书架</router-link></el-menu-item
        >
        <el-menu-item index="3"
          ><router-link to="/my">个人中心</router-link></el-menu-item
        >
      </el-menu>
    </div>
    <div class="title">
      <h1>{{ $route.params.title }}</h1>
      <span>作者 ： {{ $route.params.writer }}</span>
      <h2>第{{ $route.params.id }}章 {{ $route.params.works }}</h2>
    </div>
    <div class="cont">
      {{ this.cont }}
    </div>
    <div class="btn">
      <el-button type="primary"  >上一章</el-button>
      <el-button type="primary" >下一章</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bookcont",
  data() {
    return {
      cont: "",
    };
  },
  created() {
    this.axios.get("/mock/data").then((res) => {
      this.cont = res.data[0].bookcont;
    });
  },
};
</script>
<style>
@import url("./bookcont.css");
</style>

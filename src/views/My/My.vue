<template>
  <div id="my">
    <h2>个人中心</h2>
    <div class="person">
      <h3 class="username">用户： {{ $store.state.loginName }}</h3>
      <div class="booklis">
        <ul>
          <li>
            <i
              class="el-icon-caret-right"
              style="color:#555;font-size:16px"
            ></i>
            <router-link to="/bookstack">我的书架</router-link>
          </li>
          <li>
            <i
              class="el-icon-caret-right"
              style="color:#555;font-size:16px"
            ></i>
            <router-link :to="{name:'Nowrite',parmas:{id:'我的书币'}}">我的书币</router-link>
          </li>
          <li>
            <i
              class="el-icon-caret-right"
              style="color:#555;font-size:16px"
            ></i>
            <router-link :to="{name:'Nowrite',params:{id:'我的书币'}}">充值中心</router-link>
          </li>
          <li>
            <i
              class="el-icon-caret-right"
              style="color:#555;font-size:16px"
            ></i>
            <router-link :to="{name:'Nowrite',params:{id:'个人设置'}}">个人设置</router-link>
          </li>
          <li>
            <i
              class="el-icon-caret-right"
              style="color:#555;font-size:16px"
            ></i>
            <router-link :to="{name:'Nowrite',params:{id:'安全中心'}}">安全中心</router-link>
          </li>
        </ul>
      </div>
      <div class="out">
        <el-button type="danger" round @click="out">退出</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "My",
  data() {
    return {};
  },
  methods: {
    out() {
      console.log(this.$store.state.loginName, 11);
      this.$store.state.loginName = "";
      this.$router.push("/");
    },
  },
};
</script>
<style>
@import url("./my.css");
</style>

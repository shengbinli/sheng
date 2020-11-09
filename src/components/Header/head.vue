<template>
  <div class="head">
    <div class="top">
      <div class="left">
        <router-link
          tag="a"
          :to="{ name: 'Show', params: { id: '起点中文网' } }"
        >
          起点中文网</router-link
        >
        <router-link
          tag="a"
          :to="{ name: 'Show', params: { id: '起点女生网' } }"
        >
          | 起点女生网</router-link
        >
        <router-link
          tag="a"
          :to="{ name: 'Show', params: { id: '创世中文网' } }"
        >
          | 创世中文网</router-link
        >
        <router-link tag="a" :to="{ name: 'Show', params: { id: '起点书院' } }">
          | 起点书院</router-link
        >
        <span> | 繁体版</span>
      </div>
      <div>
        <router-link
          :to="{ name: 'Logup', params: { id: '注册' } }"
          v-show="$store.state.loginName == '' ? true : false"
          >注册 |</router-link
        >

        <router-link
          :to="{ name: 'Login', params: { id: '登录' } }"
          v-show="$store.state.loginName == '' ? true : false"
          >登录
        </router-link>
        <router-link
          :to="{ name: 'My', params: { id: '个人中心' } }"
          v-show="$store.state.loginName != '' ? true : false"
        >
          <i class="el-icon-user" style="color:red;font-size:20px"></i>
          {{ $store.state.loginName }}
        </router-link>
      </div>
    </div>
    <div class="ad" v-show="i">
      <img src="@/assets/images/adver.jpg" style="height:80px; width:800px;" />
      <i class="el-icon-circle-close" @click="close"></i>
    </div>
    <div class="seach">
      <div class="log">
        <img
          src="../../assets/images/2.png"
          style="width:200px;margin-top:-10px"
        />
      </div>
      <el-input
        class="input-with-select"
        style="width:300px;border:solid 1px red"
        :placeholder="text"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          style="font-size:20px;font-weight:800; color:red;"
        ></el-button>
      </el-input>
    </div>
    <div class="nav">
      <div class="fenlei">
        <div>作品分类</div>
        <ul>
          <li v-for="(val, index) in fenlei" :key="index">
            <router-link :to="{ name: 'Cont', params: { id: val } }">{{
              val
            }}</router-link>
          </li>
        </ul>
      </div>
      <div id="navmiddle">
        <router-link :to="{ name: 'Cont', params: { id: '全部作品' } }"
          >全部作品</router-link
        >
        <router-link :to="{ name: 'Cont', params: { id: '排行' } }"
          >排行</router-link
        >
        <router-link :to="{ name: 'Cont', params: { id: '完本' } }"
          >完本</router-link
        >
        <router-link :to="{ name: 'Cont', params: { id: '免费' } }"
          >免费</router-link
        >
        <router-link :to="{ name: 'Cont', params: { id: '限时' } }"
          >限时</router-link
        >
        <router-link :to="{ name: 'Cont', params: { id: '作家专区' } }"
          >作家专区</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Head",
  data() {
    return {
      text: "全职艺术家",
      fenlei: [
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
        "武侠",
      ],
      i: true,
    };
  },
  methods: {
    close() {
      this.i = !this.i;
    },
  },
};
</script>
<style scoped lang="scss">
@import url("./head.scss");
</style>

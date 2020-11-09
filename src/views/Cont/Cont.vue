<template>
  <div id="cont">
    <!-- {{ $route.params.id }} -->
    <div class="contop">
      <div class="contleft">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">起点中文网</template>
            <el-menu-item index="1-1">创世中文网</el-menu-item>
            <el-menu-item index="1-2">女生网</el-menu-item>
            <el-menu-item index="1-3">云起书院</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">玄幻</el-menu-item>
          <el-menu-item index="3">都市</el-menu-item>
          <el-menu-item index="4">爱情</el-menu-item>
          <el-menu-item index="5">历史</el-menu-item>
          <el-menu-item index="6">游戏</el-menu-item>
          <el-menu-item index="6">科技</el-menu-item>
          <el-menu-item index="6">星际</el-menu-item>
          <el-menu-item index="6">原始</el-menu-item>
          <el-submenu index="7">
            <template slot="title">更多</template>
            <el-menu-item index="7-1">全部作品</el-menu-item>
            <el-menu-item index="7-2">玄幻</el-menu-item>
            <el-menu-item index="7-3">武侠</el-menu-item>
            <el-menu-item index="7-4">军事</el-menu-item>
            <el-menu-item index="7-5">轻小说</el-menu-item>
          </el-submenu>
          <el-menu-item
            index="6"
            v-show="$store.state.loginName == '' ? true : false"
            ><router-link :to="{ name: 'Logup', params: { id: '注册' } }"
              >注册 | </router-link
            ><router-link :to="{ name: 'Login', params: { id: '登录' } }"
              >登录
            </router-link></el-menu-item
          >

          <el-menu-item index="7-5" v-show="$store.state.loginName != '' ? true : false">
            <span            
              style="font-size:18px;font-weight:700"
              ><i class="el-icon-user" style="color:red"></i>
              {{ $store.state.loginName }}
            </span></el-menu-item
          >
        </el-menu>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="contseach">
      <div class="img">
        <img src="../../assets/images/qi.png" width="70px" />
        <span> {{ $route.params.id }}</span>
      </div>
      <div>
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
    </div>

    <!-- 本周推荐 -->
    <div class="top">
      <a href="">现代魔法</a>
      <a href="">现代魔法</a>
      <a href="">现代魔法</a>
      <a href="">现代魔法</a>
      <a href="">现代魔法</a>
      <a href="">现代魔法</a>
      <a href="">现代魔法</a>
      <a href="">现代魔法</a>
    </div>
    <div class="recomment">
      <div class="weekre">
        <h4>本周强推</h4>
        <ul>
          <li v-for="(val, i) in weeklis" :key="i">
            <router-link :to="{name:'Book',params:{works:val.works,writer:val.writer}}" class="works">{{ val.works }}</router-link>
            <router-link :to="{name:'Book',params:{works:val.works,writer:val.writer}}" class="writer">{{ val.writer }}</router-link>
          </li>
        </ul>
      </div>
      <div class="book">
        <div class="bookimg">
          <div v-for="i in 4" :key="i">
            
            <p>
              <router-link
                :to="{ name: 'Book', params: { id: '我真的不是幕后黑手' } }"
                >
                <img src="../../assets/images/book.jpg" width="110px" />
                我真的不是幕后黑手</router-link
              >
            </p>
          </div>
        </div>
        <div class="booknew">
          <span>精选书籍</span>
          <router-link :to="{ name: 'Book', params: { works: '这有一本书' } }"
            >这有一本书</router-link
          >
        </div>
      </div>
      <div class="news">
        <span>辑力推荐</span>
        <ul>
          <li v-for="(val, i) in weeklis" :key="i">
            <a href="http://acts.qidian.com/2017/5817213/">[资讯] {{ val.works }}</a>
          </li>
        </ul>
      </div>
    </div>

    <Foot />
  </div>
</template>
<script>
import Foot from "@/components/Foot.vue";
export default {
  name: "Cont",
  components: {
    Foot,
  },
  data() {
    return {
      text: "全职艺术家",
      weeklis: [],
      
    };
  },
  methods: {},
  created() {
    this.axios.get("/mock/data").then((res) => {
      this.weeklis = res.data;
    });
  },
};
</script>
<style>
@import url("./cont.css");
</style>

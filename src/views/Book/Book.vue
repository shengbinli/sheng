<template>
  <div id="book">
    <div class="nav">
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
    <div class="booktop">
      <div>
        <img :src="this.bookimg" alt="" />
      </div>
      <div class="bookmes">
        <ul>
          <li>书籍 ：{{ works }}</li>
          <li>作者 ：{{ writer }}</li>
          <li>更新 ：{{ time }}</li>
          <li>
            <el-button type="success" v-if="bo ? true : false" @click="bookin"
              >加入书架</el-button
            >
            <el-button type="warning" v-else @click="bookout"
              >移出书架</el-button
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="bookmiddle">
      <h3>目录</h3>
      <p>
        <span v-for="(val, i) in lis" :key="i">
          <router-link
            :to="{
              name: 'Bookcont',
              params: {
                title: $route.params.works,
                id: i + 1,
                works: val.works,
                writer: val.writer,
              },
            }"
          >
            第{{ i + 1 }}章 {{ val.works }}
          </router-link>
        </span>
      </p>
    </div>
    <Foot />
  </div>
</template>
<script>
import Foot from "@/components/Foot.vue";
import cookie from "../Logup/cookie.js";
export default {
  name: "Book",
  components: {
    Foot,
  },
  data() {
    return {
      works: "",
      writer: "轩辕小二",
      time: "2010-10-10 12:12:12",
      bo: true,
      lis: [],   //目录
      bookimg: "",
    };
  },
  created() {
    
    if(this.$route.params.works){
        cookie.setCookie("works", this.$route.params.works, 3);
        cookie.setCookie("writer", this. $route.params.writer, 3);
    }
    this.works = cookie.getCookie("works");
    this.writer = cookie.getCookie("writer");
    
    this.axios.get("/mock/data").then((res) => {
      this.lis = res.data;
      this.bookimg = res.data[0].bookimg;
      this.time = res.data[0].time;
    });
  },
  methods: {
    bookin() {
      if (this.$route.params.works) {
        this.bo = !this.bo;
        this.$store.state.stack.push(this.$route.params.works);
      } else {
        return;
      }
    },
    bookout() {
      this.bo = !this.bo;
      this.$store.state.stack.splice(this.$route.params.works, 1);
    },
  },
};
</script>
<style>
@import url(./book.css);
</style>

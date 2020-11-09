<template>
  <div id="page">
        <div v-for="i in 10" :key="i" id="pageload">
            <div v-for="(val,i) in pagelis" :key="i">
                <img :src="val.bookimg" width="100px"/>
                <p>作品 ： {{val.works}}</p>
                <p>作者 ： {{val.writer}}</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Pageload",
  data(){
      return{
      pagelis:[]

      }
  },
  methods: {
    lazyLoading() {
      // 滚动到底部，再加载的处理事件
      // 获取 可视区高度`、`滚动高度`、`页面高度`
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight) {
        // 滚动到底部，逻辑代码
        //事件处理
        console.log("滚动到底部，触发"); //此处可以添加数据请求
        // 这这里可以写一些业务逻辑，请求数据等
        this.axios.get("/mock/data").then((res) => {
          this.pagelis = res.data;
        });
      }
    },
  },
  // 这里呢首先在methods里面写好一个方法，最后通过`window.addEventListener`去调用
  created() {
    window.addEventListener("scroll", this.lazyLoading); // 滚动到底部，再加载的处理事件
  },
  //页面离开后销毁，防止切换路由后上一个页面监听scroll滚动事件会在新页面报错问题
  destroyed() {
    window.removeEventListener("scroll", this.lazyLoading);
    //页面离开后销毁，防止切换路由后上一个页面监听scroll滚动事件会在新页面报错问题
  },
};
</script>

<style lang="scss" scoped>
#page{
    padding: 20px 50px;
}
#pageload{
    display: inline-block;
}
#pageload div{
   padding: 20px 30px
    
}
</style>

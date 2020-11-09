<template>
  <div class="main">
    <div class="block">
      <el-carousel trigger="click" height="280px" type="card">
        <el-carousel-item v-for="item in luimg" :key="item">
          <img :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="rightnews">
      <ul>
        <li v-for="(val,i) in news" :key="i">
            <a href="https://activity.qidian.com/noah/910102/index">{{val}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      luimg: [
        require("../../assets/images/3.jpg"),
        require("../../assets/images/4.jpg"),
        require("../../assets/images/5.jpg"),
        require("../../assets/images/6.jpg"),
      ],
      news:[
          "【资讯】引导文学网高质量发展",
          "【资讯】引导文学网高质量发展",
          "【资讯】引导文学网高质量发展",
          "【资讯】引导文学网高质量发展",
          "【资讯】引导文学网高质量发展",
          "【资讯】引导文学网高质量发展",
          "【资讯】引导文学网高质量发展",
          "【资讯】引导文学网高质量发展",
          "【资讯】引导文学网高质量发展",
          "【资讯】引导文学网高质量发展",
      ]
    };
  },
};
</script>

<style lang='scss'>
    @import url('./canrouse.css');
</style>

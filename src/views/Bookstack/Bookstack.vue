<template>
  <div id="bookstack">
    <h1>我的书架</h1>
    <div class="bookitem">
      <div v-for="(val, i) in stack" :key="i">
        <!-- <img :src=this.bookimg alt=""> -->
        <img src="../../assets/images/book.jpg" />
        <p>
          <router-link :to="{name:'Book', params: { 'title': $route.params.works,
          id: i + 1, 'works': val.works, 'writer': val.writer}}">
            {{val}}
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bookstack",
  data() {
    return {
      stack: [],
      bookimg: "",
    };
  },
  created() {
    this.stack = this.$store.state.stack;
    this.axios.get("/mock/data").then((res) => {
      this.bookimg = res.data[0].bookimg;
      console.log(this.stack, this.bookimg);
    });
  },
};
</script>
<style>
@import url("./bookstack.css");
</style>

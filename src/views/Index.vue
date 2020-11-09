<template>
  <div>
      <header><Head></Head></header>
      <main>
          <Main/>
          <Pageloading/>
      </main>
      <footer>
          <Foot/>
          
      </footer>
  </div>
</template>
<script>
import Head from '@/components/Header/head'
import Foot from '@/components/Foot.vue'
import Main from '@/components/Main/Main.vue'
import Pageloading from '@/components/Pageloading.vue'
export default {
  name: "Index",
  components: {
      Head,
      Main,
      Pageloading,
      Foot
  },
};
</script>
<style  scoped lang="scss">
</style>
<template>
  <div>
    <!-- 轮播图开始 -->
    <Banner />
    <!-- 轮播图结束 -->

    <!-- 砍价版块开始 -->
    <Bargaining />
    <!-- 砍价版块结束 -->

  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Bargaining from "@/components/Bargaining.vue"
export default {
  components: {
    Banner,
    Bargaining
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
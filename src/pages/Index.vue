<template>
  <div>
    <!-- 轮播图版块开始 -->
    <Banner />
    <!-- 轮播图版块结束 -->

    <!-- 砍价版块开始 -->
    <Bargaining />
    <!-- 砍价版块结束 -->

    <!-- 精选版块开始 -->
    <Featured />
    <!-- 精选版块结束 -->

    <!-- 人气推荐版块开始 -->
    <recommend />
    <!-- 人气推荐版块结束 -->
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Bargaining from "@/components/Bargaining.vue";
import Featured from "@/components/Featured.vue";
import recommend from "@/components/recommend.vue";
export default {
  components: {
    Banner,
    Bargaining,
    Featured,
    recommend
  }
};
</script>
<style lang="less">
</style>
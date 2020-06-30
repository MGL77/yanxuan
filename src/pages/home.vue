<template>
  <div>
    <router-view />
    <!-- 底部导航版块开始 -->
    <TabBar />
    <!-- 底部导航版块结束 -->
  </div>
</template>
<script>
import TabBar from "@/components/TabBar.vue";
export default {
  components: {
    TabBar
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
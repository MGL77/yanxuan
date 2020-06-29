<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in home" :key="index">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      home: []
    };
  },
  async created() {
    const { data } = await this.axios.get(
      "https://api.it120.cc/small4/banner/list"
    );
    this.home = data.data;
    console.log(this.home);
  }
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  /* color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed; */
  width: 100%;
}
img {
  width: 100%;
}
</style>
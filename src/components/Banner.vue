<template>
  <div class="banner">
    <!-- 轮播图开始 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in home" :key="index">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图结束 -->

    <ul class="nav">
      <li>
        <img src="../assets/cd1.7808faf.png" alt />
        <p>签到</p>
      </li>
      <li>
        <img src="../assets/下载.png" alt />
        <p>礼券</p>
      </li>
      <li>
        <img src="../assets/下载 (1).png" alt />
        <p>砍价</p>
      </li>
      <li>
        <img src="../assets/下载 (2).png" alt />
        <p>专栏</p>
      </li>
    </ul>
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
<style lang="less">
.banner {
  position: relative;
  .nav {
  width: 100%;
  height: 1.4rem;
  background-color:#fff;
  position: absolute;
  left: 0;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  text-align: center;
  border-radius: 20% 20% 0 0;
  border-bottom: 0.2rem solid #f5f5f5;
  li {
    width: 25%;
    img {
      width: 0.4rem;
      display: block;
      margin: 0 auto;
    }
    p {
      font-size: 0.16rem;
      margin-top: 0.17rem;
    }
  }
}
}
.my-swipe .van-swipe-item {
  width: 100%;
}
.my-swipe img {
  width: 100%;
}
</style>
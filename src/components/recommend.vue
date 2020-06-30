<template>
  <div class="boss">
    <div class="heads">
      <b>人气推荐</b>
      <van-icon name="arrow" />
    </div>

    <!-- loading开始 -->
    <div class="loading" v-if="loading">
      <van-loading type="spinner" color="#1989fa" />
    </div>
    <!-- loading结束 -->

    <ul v-else>
      <recommendChild v-for="(item,index) in recommend" :key="index" :child="item"></recommendChild>
    </ul>
  </div>
</template>
<script>
import recommendChild from "@/components/recommendChild.vue";
export default {
  components: {
    recommendChild
  },
  data() {
    return {
      recommend: [],
      loading: true
    };
  },
  async created() {
    const { data } = await this.axios.get(
      "https://api.it120.cc/small4/shop/goods/list"
    );
    this.recommend = data.data;
    console.log(this.recommend);
    this.loading = false;
  }
};
</script>
<style lang="less">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
}
.boss {
  width: 100%;
  border-bottom: 0.14rem solid #f5f5f5;
  .heads {
    height: 0.65rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 0.14rem solid #f5f5f5;
    b {
      margin-right: 0.1rem;
      font-size: 0.2rem;
    }
  }
  ul {
    width: 4.8rem;
    display: flex;
    padding: 0.24rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      img {
        width: 2.33rem;
        height: 3rem;
        display: block;
      }
      p:nth-of-type(1) {
        font-size: 0.2rem;
        color: #000000;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p:nth-of-type(2) {
        font-size: 0.14rem;
        color: #b2b2b2;
        width: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 0.1rem;
      }
      p:nth-of-type(3) {
        font-size: 0.16rem;
        color: #d00000;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>
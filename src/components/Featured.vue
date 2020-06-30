<template>
  <div>
    <div class="title">
      <b>精选专题</b>
      <van-icon name="arrow" />
    </div>

    <!-- scroll 开始 -->
    <div class="scroll">
      <ul>
        <FeaturedChild v-for="(item,index) in scroll" :key="index" :child="item"></FeaturedChild>
      </ul>
    </div>
    <!-- scroll 结束 -->
  </div>
</template>
<script>
import FeaturedChild from "@/components/FeaturedChild.vue"
export default {
  components:{
    FeaturedChild
  },
  data() {
    return {
      scroll: []
    };
  },
  async created() {
    const { data } = await this.axios.get(
      "https://api.it120.cc/small4/cms/news/list"
    );
    this.scroll = data.data;
    console.log(this.scroll);
  }
};
</script>
<style lang="less">
.scroll {
  width: 100%;
  height: 3.78rem;
  overflow: auto;
  ul {
    width: 22.7rem;
    display: flex;
    li {
      width: 4.42rem;
      height: 2.84rem;
      margin-left: 0.12rem;
      img {
        width: 4.42rem;
        height: 2.84rem;
        display: block;
        border-radius: 0.06rem;
      }
      p:nth-of-type(1) {
        font-size: 0.18rem;
        color: #2c2c2c;
        margin-top: 0.12rem;
        width: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p:nth-of-type(2) {
        font-size: 0.14rem;
        color: #a8a8a8;
        margin-top: 0.2rem;
        width: 3.24rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.title {
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
</style>
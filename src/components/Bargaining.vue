<template>
  <div class="Bargaining">
    <div class="header">
      <b>全民砍价</b>
      <van-icon name="arrow" />
    </div>
    <ul>
      <BargainingChild v-for="(item,index) in Bargaining" :key="index" :child="item"></BargainingChild>
    </ul>
  </div>
</template>
<script>
import BargainingChild from "@/components/BargainingChild.vue"
export default {
  components:{
    BargainingChild
  },
  data() {
    return {
      Bargaining: []
    };
  },
  async created() {
    const { data } = await this.axios.get(
      "https://api.it120.cc/small4/shop/goods/kanjia/list"
    );
    this.Bargaining = data.data.goodsMap;
    console.log(this.Bargaining);
  }
};
</script>
<style lang="less">
.header {
  height: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  b {
    margin-right: 0.1rem;
    font-size: 0.2rem;
  }
}
.Bargaining {
  ul {
    li {
      .list {
        border-top: 0.01rem solid #e9e9e9;
        padding: 0.1rem;
        display: flex;

        img {
          width: 1.58rem;
          height: 1.58rem;
          border-radius: 0.06rem;
          display: block;
        }
        .list_child {
          margin-left: 0.14rem;
          p:nth-of-type(1) {
            font-size: 0.2rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          p:nth-of-type(2) {
            font-size: 0.15rem;
            color: #b2b2b2;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin-top: 0.1rem;
          }
          ol {
            display: flex;
            align-items: center;
            li:nth-of-type(1) {
              margin-left: 0;
            }
            li {
              text-align: center;
              margin-left: 0.5rem;
              margin-top: 0.46rem;
              p:nth-of-type(1) {
                color: #b2b2b2;
                font-size: 0.18rem;
              }
              p:nth-of-type(2) {
                color: #b2b2b2;
                font-size: 0.18rem;
                margin-top: 0.06rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
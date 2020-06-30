<template>
  <div>
    <li>
      <div class="list">
        <img :src="child.pic" alt />
        <div class="list_child">
          <p>{{ child.name }}</p>
          <p>{{ child.characteristic }}</p>
          <ol>
            <li>
              <p style="color:#D00000;font-weight:bold">￥{{ child.minPrice }}</p>
              <p style="color:black;font-weight:bold">低价</p>
            </li>
            <li>
              <p>￥{{ child.originalPrice }}</p>
              <p>原价</p>
            </li>
            <li>
              <p>{{ child.stores }}</p>
              <p>限量</p>
            </li>
          </ol>
        </div>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  props: ["child"]
};
</script>
<style lang="less">
</style>
<template>
  <div>
    <li>
      <img :src="child.pic" alt />
      <p>{{ child.name }}</p>
      <p>{{ child.characteristic }}</p>
      <p>￥{{ child.minPrice }}</p>
    </li>
  </div>
</template>
<script>
export default {
    props:["child"]
};
</script>
<style lang="less">
</style>
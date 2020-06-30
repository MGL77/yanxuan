<template>
  <div>
    <li>
      <img :src="child.pic" alt />
      <p>{{ child.title }}</p>
      <p>{{ child.descript }}</p>
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
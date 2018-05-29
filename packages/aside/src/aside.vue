<template>
  <aside class="cs-aside">
    <slot></slot>
  </aside>
</template>
<script>
  export default {
    name: 'CsAside',
  };
</script>
<style rel="stylesheet/less" lang="less">
  @import "../../common.less";
  .cs-aside{
    width: 200px;
    flex: 0 0 auto;
    background: @background;
  }
</style>

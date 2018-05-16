<template>
  <header class="cs-header">
    <slot></slot>
  </header>
</template>
<script>
  export default {
    name: 'CsHeader',
  };
</script>
<style rel="stylesheet/less" lang="less">
  @import "../../common.less";
  .cs-header{
    height: 64px;
    flex: 0 0 auto;
    background: @background;
  }
</style>

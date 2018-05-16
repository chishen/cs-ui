<template>
  <footer class="cs-footer">
    <slot></slot>
  </footer>
</template>
<script>
  export default {
    name: 'CsFooter',
  };
</script>
<style rel="stylesheet/less" lang="less">
  @import "../../common.less";
  .cs-footer{
    height: 60px;
    flex: 0 0 auto;
    background: @background;
  }
</style>

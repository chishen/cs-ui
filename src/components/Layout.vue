<template>
  <div style="background: #fff;height: 100%;">
    <div class="type"><h1>Layout 布局</h1><p>协助进行页面级整体布局。</p></div>
    <cs-example
      :title="example_1.title"
      :des="example_1.des"
      :code="example_1.code"
    >
      <cs-container class="demo-layout">
        <cs-header><div>Header</div></cs-header>
        <cs-main><div>Main</div></cs-main>
      </cs-container>
    </cs-example>
    <cs-example
      :title="example_2.title"
      :des="example_2.des"
      :code="example_2.code"
    >
      <cs-container class="demo-layout">
        <cs-header><div>Header</div></cs-header>
        <cs-main><div>Main</div></cs-main>
        <cs-footer><div>Footer</div></cs-footer>
      </cs-container>
    </cs-example>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      example_1: {
        title: '布局示例1',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-container>
    <cs-header><div>Header</div></cs-header>
    <cs-main><div>Main</div></cs-main>
  </cs-container>

  <style>
    .cs-header{
      background: #7dbcea;
      text-align: center;
      color: #fff;
      line-height: 64px;
    }
    .cs-main{
      background: #108ee9;
      text-align: center;
      color: #fff;
      height: 240px;
    }
  </style>`
  )}
              </code></pre>`
      },
      example_2: {
        title: '布局示例2',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-container class="demo-layout">
    <cs-header><div>Header</div></cs-header>
    <cs-main><div>Main</div></cs-main>
    <cs-footer><div>Footer</div></cs-footer>
  </cs-container>

  <style>
    .cs-header{
      background: #7dbcea;
      text-align: center;
      color: #fff;
      line-height: 64px;
    }
    .cs-main{
      background: #108ee9;
      text-align: center;
      color: #fff;
      height: 240px;
    }
    .cs-footer{
      background: #7dbcea;
      text-align: center;
      color: #fff;
      line-height: 60px;
    }
  </style>`
  )}
              </code></pre>`
      }
    }
  }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
  @import '../css/common.less';
  .demo-layout{
    .cs-header{
      background: #7dbcea;
      text-align: center;
      color: #fff;
      line-height: 64px;
    }
    .cs-main{
      background: #108ee9;
      text-align: center;
      color: #fff;
      height: 240px;
    }
    .cs-footer{
      background: #7dbcea;
      text-align: center;
      color: #fff;
      line-height: 60px;
    }
  }
</style>

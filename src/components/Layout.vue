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
    <cs-example
      :title="example_3.title"
      :des="example_3.des"
      :code="example_3.code"
    >
      <cs-container class="demo-layout">
        <cs-aside><div>Aside</div></cs-aside>
        <cs-main><div>Main</div></cs-main>
      </cs-container>
    </cs-example>
    <cs-example
      :title="example_4.title"
      :des="example_4.des"
      :code="example_4.code"
    >
      <cs-container class="demo-layout">
        <cs-header><div>Header</div></cs-header>
        <cs-container>
          <cs-aside><div>Aside</div></cs-aside>
          <cs-main><div>Main</div></cs-main>
        </cs-container>
      </cs-container>
    </cs-example>
    <cs-example
      :title="example_5.title"
      :des="example_5.des"
      :code="example_5.code"
    >
      <cs-container class="demo-layout">
        <cs-header><div>Header</div></cs-header>
        <cs-container>
          <cs-aside style="line-height: 300px;"><div>Aside</div></cs-aside>
          <cs-container>
            <cs-main><div>Main</div></cs-main>
            <cs-footer><div>Footer</div></cs-footer>
          </cs-container>
        </cs-container>
      </cs-container>
    </cs-example>
    <cs-example
      :title="example_6.title"
      :des="example_6.des"
      :code="example_6.code"
    >
      <cs-container class="demo-layout">
        <cs-aside style="line-height: 304px;"><div>Aside</div></cs-aside>
        <cs-container>
          <cs-header><div>Header</div></cs-header>
          <cs-main><div>Main</div></cs-main>
        </cs-container>
      </cs-container>
    </cs-example>
    <cs-example
      :title="example_7.title"
      :des="example_7.des"
      :code="example_7.code"
    >
      <cs-container class="demo-layout">
        <cs-aside style="line-height: 364px;"><div>Aside</div></cs-aside>
        <cs-container>
          <cs-header><div>Header</div></cs-header>
          <cs-main><div>Main</div></cs-main>
          <cs-footer><div>Footer</div></cs-footer>
        </cs-container>
      </cs-container>
    </cs-example>
    <div class="type" style="padding-bottom: 24px;padding-top: 80px;"><h1>API</h1></div>
    <cs-api title="Container 属性" :dataSource="dataSource.container"></cs-api>
    <cs-api title="Header 属性" :dataSource="dataSource.header"></cs-api>
    <cs-api title="Aside 属性" :dataSource="dataSource.aside"></cs-api>
    <cs-api title="Footer 属性" :dataSource="dataSource.footer"></cs-api>
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
      padding: 0;
      height: 240px;
      line-height: 240px;
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
    `<cs-container>
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
      padding: 0;
      height: 240px;
      line-height: 240px;
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
      },
      example_3: {
        title: '布局示例3',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-container>
    <cs-aside><div>Aside</div></cs-aside>
    <cs-main><div>Main</div></cs-main>
  </cs-container>

  <style>
    .cs-aside{
      background: #3ba0e9;
      text-align: center;
      color: #fff;
      line-height: 240px;
    }
    .cs-main{
      background: #108ee9;
      text-align: center;
      color: #fff;
      padding: 0;
      height: 240px;
      line-height: 240px;
    }
  </style>`
  )}
              </code></pre>`
      },
      example_4: {
        title: '布局示例4',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-container>
    <cs-header><div>Header</div></cs-header>
    <cs-container>
      <cs-aside><div>Aside</div></cs-aside>
      <cs-main><div>Main</div></cs-main>
    </cs-container>
  </cs-container>

  <style>
    .cs-header{
      background: #7dbcea;
      text-align: center;
      color: #fff;
      line-height: 64px;
    }
    .cs-aside{
      background: #3ba0e9;
      text-align: center;
      color: #fff;
      line-height: 240px;
    }
    .cs-main{
      background: #108ee9;
      text-align: center;
      color: #fff;
      padding: 0;
      height: 240px;
      line-height: 240px;
    }
  </style>`
  )}
              </code></pre>`
      },
      example_5: {
        title: '布局示例5',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-container>
    <cs-header><div>Header</div></cs-header>
    <cs-container>
      <cs-aside><div>Aside</div></cs-aside>
      <cs-container>
        <cs-main><div>Main</div></cs-main>
        <cs-footer><div>Footer</div></cs-footer>
      </cs-container>
    </cs-container>
  </cs-container>

  <style>
    .cs-header{
      background: #7dbcea;
      text-align: center;
      color: #fff;
      line-height: 64px;
    }
    .cs-aside{
      background: #3ba0e9;
      text-align: center;
      color: #fff;
      line-height: 300px;
    }
    .cs-main{
      background: #108ee9;
      text-align: center;
      color: #fff;
      padding: 0;
      height: 240px;
      line-height: 240px;
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
      },
      example_6: {
        title: '布局示例6',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-container>
    <cs-aside><div>Aside</div></cs-aside>
    <cs-container>
      <cs-header><div>Header</div></cs-header>
      <cs-main><div>Main</div></cs-main>
    </cs-container>
  </cs-container>

  <style>
    .cs-aside{
      background: #3ba0e9;
      text-align: center;
      color: #fff;
      line-height: 304px;
    }
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
      padding: 0;
      height: 240px;
      line-height: 240px;
    }
  </style>`
  )}
              </code></pre>`
      },
      example_7: {
        title: '布局示例7',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-container>
    <cs-aside><div>Aside</div></cs-aside>
    <cs-container>
      <cs-header><div>Header</div></cs-header>
      <cs-main><div>Main</div></cs-main>
      <cs-footer><div>Footer</div></cs-footer>
    </cs-container>
  </cs-container>

  <style>
    .cs-aside{
      background: #3ba0e9;
      text-align: center;
      color: #fff;
      line-height: 364px;
    }
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
      padding: 0;
      height: 240px;
      line-height: 240px;
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
      },
      dataSource: {
        container: [{
          param: 'direction',
          info: '子元素的排列方向',
          type: 'string',
          options: 'column/row',
          defaults: '子元素中有 cs-header 或 cs-footer 时为 column，否则为 row'
        }],
        header: [{
          param: 'height',
          info: '顶栏高度',
          type: 'string',
          options: '—',
          defaults: '64px'
        }],
        aside: [{
          param: 'width',
          info: '侧边栏宽度',
          type: 'string',
          options: '—',
          defaults: '200px'
        }],
        footer: [{
          param: 'height',
          info: '底栏高度',
          type: 'string',
          options: '—',
          defaults: '60px'
        }]
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
    .cs-aside{
      background: #3ba0e9;
      text-align: center;
      color: #fff;
      line-height: 240px;
    }
    .cs-main{
      background: #108ee9;
      text-align: center;
      color: #fff;
      padding: 0;
      height: 240px;
      line-height: 240px;
    }
    .cs-footer{
      background: #7dbcea;
      text-align: center;
      color: #fff;
      line-height: 60px;
    }
  }
</style>

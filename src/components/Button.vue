<template>
  <div style="background: #fff;height: 100%;">
    <div class="type"><h1>Button 按钮</h1><p>按钮用于开始一个即时操作。</p></div>
    <cs-example
      :title="example_1.title"
      :des="example_1.des"
      :code="example_1.code"
    >
      <cs-button type="primary" style="display: inline-block;">Primary</cs-button>
      <cs-button style="display: inline-block;">Default</cs-button>
      <cs-button type="dashed" style="display: inline-block;">Dashed</cs-button>
      <cs-button type="danger" style="display: inline-block;">Danger</cs-button>
      <div style="background: #bec8c8;
      width: 400px;height: 48px;
      margin-top: 16px;
      padding-left: 16px;
      padding-top: 8px;">
        <cs-button :ghost="true" type="primary" style="display: inline-block;">Primary</cs-button>
        <cs-button :ghost="true" style="display: inline-block;">Default</cs-button>
        <cs-button :ghost="true" type="dashed" style="display: inline-block;">Dashed</cs-button>
        <cs-button :ghost="true" type="danger" style="display: inline-block;">Danger</cs-button>
      </div>
    </cs-example>
    <cs-example
      :title="example_2.title"
      :des="example_2.des"
      :code="example_2.code"
    >
      <cs-button type="primary" icon="search" :circle="true" style="display: inline-block;"></cs-button>
      <cs-button icon="search" :circle="true" style="display: inline-block;"></cs-button>
      <cs-button type="dashed" icon="search" :circle="true" style="display: inline-block;"></cs-button>
      <cs-button type="primary" icon="search"  style="display: inline-block;"></cs-button>
      <cs-button icon="search" style="display: inline-block;"></cs-button>
      <cs-button type="dashed" icon="search" style="display: inline-block;"></cs-button>
    </cs-example>
    <cs-example
      :title="example_3.title"
      :des="example_3.des"
      :code="example_3.code"
    >
      <cs-button type="primary" icon="search" style="display: inline-block;">Search</cs-button>
      <cs-button icon="search" style="display: inline-block;">Search</cs-button>
      <cs-button type="dashed" icon="search" style="display: inline-block;">Search</cs-button>
      <cs-button type="primary" :loading="true" style="display: inline-block;">Loading</cs-button>
      <cs-button :loading="true" style="display: inline-block;">Loading</cs-button>
      <cs-button type="dashed" :loading="true" style="display: inline-block;">Loading</cs-button>
    </cs-example>
    <cs-example
      :title="example_4.title"
      :des="example_4.des"
      :code="example_4.code"
    >
      <cs-button :disabled="true" type="primary" style="display: inline-block;">Primary</cs-button>
      <cs-button :disabled="true" style="display: inline-block;">Default</cs-button>
      <cs-button :disabled="true" type="dashed" style="display: inline-block;">Dashed</cs-button>
      <div style="background: #bec8c8;
      width: 400px;height: 48px;
      margin-top: 16px;
      padding-left: 16px;
      padding-top: 8px;">
        <cs-button :disabled="true" :ghost="true" type="primary" style="display: inline-block;">Primary</cs-button>
        <cs-button :disabled="true" :ghost="true" style="display: inline-block;">Default</cs-button>
        <cs-button :disabled="true" :ghost="true" type="dashed" style="display: inline-block;">Dashed</cs-button>
      </div>
    </cs-example>
    <cs-example
      :title="example_5.title"
      :des="example_5.des"
      :code="example_5.code"
    >
      <cs-button size="large" type="primary" style="display: inline-block;">Primary</cs-button>
      <cs-button size="large" style="display: inline-block;">Default</cs-button>
      <cs-button size="large" type="dashed" style="display: inline-block;">Dashed</cs-button>
      <cs-button size="large" type="danger" style="display: inline-block;">Danger</cs-button>
      <div style="background: #bec8c8;
      width: 400px;height: 48px;
      margin-top: 16px;
      padding-left: 16px;
      padding-top: 8px;">
        <cs-button size="small" :ghost="true" type="primary" style="display: inline-block;">Primary</cs-button>
        <cs-button size="small" :ghost="true" style="display: inline-block;">Default</cs-button>
        <cs-button size="small" :ghost="true" type="dashed" style="display: inline-block;">Dashed</cs-button>
        <cs-button size="small" :ghost="true" type="danger" style="display: inline-block;">Danger</cs-button>
      </div>
      <div style="margin-top: 16px;">
        <cs-button size="large" type="primary" icon="search" :circle="true" style="display: inline-block;"></cs-button>
        <cs-button size="large" icon="search" :circle="true" style="display: inline-block;"></cs-button>
        <cs-button size="large" type="dashed" icon="search" :circle="true" style="display: inline-block;"></cs-button>
      </div>
      <div style="margin-top: 16px;">
        <cs-button size="small" type="primary" icon="search" :circle="true" style="display: inline-block;"></cs-button>
        <cs-button size="small" icon="search" :circle="true" style="display: inline-block;"></cs-button>
        <cs-button size="small" type="dashed" icon="search" :circle="true" style="display: inline-block;"></cs-button>
      </div>
    </cs-example>
    <cs-example
      :title="example_6.title"
      :des="example_6.des"
      :code="example_6.code"
    >
      <cs-button-group>
        <cs-button>Left</cs-button>
        <cs-button>Middle</cs-button>
        <cs-button>Right</cs-button>
      </cs-button-group>
    </cs-example>
    <div class="type" style="padding-bottom: 24px;padding-top: 80px;"><h1>API</h1></div>
    <!--<cs-api title="Footer 属性" :dataSource="dataSource.footer"></cs-api>-->
  </div>
</template>
<script>
export default {
  name: 'Button',
  data () {
    return {
      example_1: {
        title: '基础用法',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-button type="primary">Primary</cs-button>
  <cs-button>Default</cs-button>
  <cs-button type="dashed">Dashed</cs-button>
  <cs-button type="danger">Danger</cs-button>
  <cs-button :ghost="true" type="primary">Primary</cs-button>
  <cs-button :ghost="true">Default</cs-button>
  <cs-button :ghost="true" type="dashed">Dashed</cs-button>
  <cs-button :ghost="true" type="danger">Danger</cs-button>`
  )}
              </code></pre>`
      },
      example_2: {
        title: '图标按钮',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-button type="primary" icon="search" :circle="true"></cs-button>
  <cs-button icon="search" :circle="true"></cs-button>
  <cs-button type="dashed" icon="search" :circle="true"></cs-button>
  <cs-button type="primary" icon="search"></cs-button>
  <cs-button icon="search"></cs-button>
  <cs-button type="dashed" icon="search"></cs-button>`
  )}
              </code></pre>`
      },
      example_3: {
        title: '图标文字按钮',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-button type="primary" icon="search">Search</cs-button>
  <cs-button icon="search">Search</cs-button>
  <cs-button type="dashed" icon="search">Search</cs-button>
  <cs-button type="primary" :loading="true">Loading</cs-button>
  <cs-button :loading="true">Loading</cs-button>
  <cs-button type="dashed" :loading="true">Loading</cs-button>`
  )}
              </code></pre>`
      },
      example_4: {
        title: '禁用状态',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
          `<cs-button type="primary" icon="search">Search</cs-button>
  <cs-button icon="search">Search</cs-button>
  <cs-button type="dashed" icon="search">Search</cs-button>
  <cs-button type="primary" :loading="true">Loading</cs-button>
  <cs-button :loading="true">Loading</cs-button>
  <cs-button type="dashed" :loading="true">Loading</cs-button>`
        )}
              </code></pre>`
      },
      example_5: {
        title: '不同尺寸',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
          `<cs-button type="primary" icon="search">Search</cs-button>
  <cs-button icon="search">Search</cs-button>
  <cs-button type="dashed" icon="search">Search</cs-button>
  <cs-button type="primary" :loading="true">Loading</cs-button>
  <cs-button :loading="true">Loading</cs-button>
  <cs-button type="dashed" :loading="true">Loading</cs-button>`
        )}
              </code></pre>`
      },
      example_6: {
        title: '按钮组',
        des: '',
        code: `<pre><code>
  ${this.escapeHTML(
          `<cs-button type="primary" icon="search">Search</cs-button>
  <cs-button icon="search">Search</cs-button>
  <cs-button type="dashed" icon="search">Search</cs-button>
  <cs-button type="primary" :loading="true">Loading</cs-button>
  <cs-button :loading="true">Loading</cs-button>
  <cs-button type="dashed" :loading="true">Loading</cs-button>`
        )}
              </code></pre>`
      }
    }
  },
  methods: {
    handleClick ($event) {
      console.log($event)
    }
  }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
@import '../css/common.less';
</style>

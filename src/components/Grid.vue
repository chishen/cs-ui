<template>
  <div style="background: #fff;height: 100%;">
    <div class="type"><h1>Grid 栅格</h1><p>24 栅格系统。</p></div>
    <cs-example
      :title="example_1.title"
      :des="example_1.des"
      :code="example_1.code"
    >
      <cs-row class="demo-grid">
      <cs-col :span="12"><div>col-12</div></cs-col>
      <cs-col :span="12"><div>col-12</div></cs-col>
      </cs-row>
      <cs-row class="demo-grid">
      <cs-col :span="8"><div>col-8</div></cs-col>
      <cs-col :span="8"><div>col-8</div></cs-col>
      <cs-col :span="8"><div>col-8</div></cs-col>
      </cs-row>
      <cs-row class="demo-grid" style="margin-bottom: 0;">
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6"><div>col-6</div></cs-col>
      </cs-row>
    </cs-example>
    <cs-example
      :title="example_2.title"
      :des="example_2.des"
      :code="example_2.code"
    >
      <cs-row :gutter="16" class="demo-grid" style="margin-bottom: 0;">
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6"><div>col-6</div></cs-col>
      </cs-row>
    </cs-example>
    <cs-example
      :title="example_3.title"
      :des="example_3.des"
      :code="example_3.code"
    >
      <cs-row :gutter="16" class="demo-grid">
        <cs-col :span="16"><div>col-16</div></cs-col>
        <cs-col :span="8"><div>col-8</div></cs-col>
      </cs-row>
      <cs-row :gutter="16" class="demo-grid">
        <cs-col :span="8"><div>col-8</div></cs-col>
        <cs-col :span="8"><div>col-8</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
      </cs-row>
      <cs-row :gutter="16" class="demo-grid" style="margin-bottom: 0;">
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="16"><div>col-16</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
      </cs-row>
    </cs-example>
    <cs-example
      :title="example_4.title"
      :des="example_4.des"
      :code="example_4.code"
    >
      <cs-row class="demo-grid">
        <cs-col :span="8"><div>col-8</div></cs-col>
        <cs-col :span="8" :offset="8"><div>col-8</div></cs-col>
      </cs-row>
      <cs-row class="demo-grid">
        <cs-col :span="6" :offset="6"><div>col-6</div></cs-col>
        <cs-col :span="6" :offset="6"><div>col-6</div></cs-col>
      </cs-row>
      <cs-row class="demo-grid" style="margin-bottom: 0;">
        <cs-col :span="12" :offset="6"><div>col-12</div></cs-col>
      </cs-row>
    </cs-example>
    <cs-example
      :title="example_5.title"
      :des="example_5.des"
      :code="example_5.code"
    >
      <cs-row class="demo-grid" justify="flex-start">
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
      </cs-row>
      <cs-row class="demo-grid" justify="flex-end">
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
      </cs-row>
      <cs-row class="demo-grid" justify="center">
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
      </cs-row>
      <cs-row class="demo-grid" justify="space-between">
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
      </cs-row>
      <cs-row class="demo-grid" justify="space-around" style="margin-bottom: 0;">
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
        <cs-col :span="4"><div>col-4</div></cs-col>
      </cs-row>
    </cs-example>
    <cs-example
      :title="example_6.title"
      :des="example_6.des"
      :code="example_6.code"
    >
      <cs-row class="demo-grid" align="flex-start">
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
      </cs-row>
      <cs-row class="demo-grid" align="flex-end">
        <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
        <cs-col :span="6"><div>col-6</div></cs-col>
      </cs-row>
      <cs-row class="demo-grid" align="center" style="margin-bottom: 0;">
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
        <cs-col :span="6"><div>col-6</div></cs-col>
        <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
      </cs-row>
    </cs-example>
    <div class="type" style="padding-bottom: 24px;padding-top: 80px;"><h1>API</h1></div>
    <cs-api title="Row 属性" :dataSource="dataSource.row"></cs-api>
    <cs-api title="Col 属性" :dataSource="dataSource.col"></cs-api>
  </div>
</template>
<script>
export default {
  name: 'Grid',
  data () {
    return {
      example_1: {
        title: '基础栅格',
        des: `<p>从堆叠到水平排列。</p>
              <p>使用单一的一组 <code>Row</code> 和 <code>Col</code> 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 <code>Row</code> 内。</p>`,
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-row>
    <cs-col :span="12"><div>col-12</div></cs-col>
    <cs-col :span="12"><div>col-12</div></cs-col>
  </cs-row>
  <cs-row>
    <cs-col :span="8"><div>col-8</div></cs-col>
    <cs-col :span="8"><div>col-8</div></cs-col>
    <cs-col :span="8"><div>col-8</div></cs-col>
  </cs-row>
  <cs-row>
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6"><div>col-6</div></cs-col>
  </cs-row>`
  )}
              </code></pre>`
      },
      example_2: {
        title: '区块间隔',
        des: `<p>栅格常常需要和间隔进行配合，你可以使用 <code>Row</code> 的 <code>gutter</code> 属性，我们推荐使用 <code>(16+8n)px</code> 作为栅格间隔。(n 是自然数)</p>`,
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-row :gutter="16">
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6"><div>col-6</div></cs-col>
  </cs-row>`
  )}
              </code></pre>`
      },
      example_3: {
        title: '混合布局',
        des: `<p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>`,
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-row :gutter="16">
    <cs-col :span="16"><div>col-16</div></cs-col>
    <cs-col :span="8"><div>col-8</div></cs-col>
  </cs-row>
  <cs-row :gutter="16">
    <cs-col :span="8"><div>col-8</div></cs-col>
    <cs-col :span="8"><div>col-8</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
  </cs-row>
  <cs-row :gutter="16">
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="16"><div>col-16</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
  </cs-row>`
  )}
              </code></pre>`
      },
      example_4: {
        title: '左右偏移',
        des: `<p>使用 <code>offset</code> 可以将列向右侧偏。例如，<code>:offset="4"</code> 将元素向右侧偏移了 4 个列（column）的宽度。</p>`,
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-row>
    <cs-col :span="8"><div>col-8</div></cs-col>
    <cs-col :span="8" :offset="8"><div>col-8</div></cs-col>
  </cs-row>
  <cs-row>
    <cs-col :span="6" :offset="6"><div>col-6</div></cs-col>
    <cs-col :span="6" :offset="6"><div>col-6</div></cs-col>
  </cs-row>
  <cs-row>
    <cs-col :span="12" :offset="6"><div>col-12</div></cs-col>
  </cs-row>`
  )}
              </code></pre>`
      },
      example_5: {
        title: 'Flex水平',
        des: `<p>使用 <code>type</code> 定义 <code>flex</code> 布局，其子元素根据不同的值 <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code>，分别定义其在父节点里面的排版方式。`,
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-row justify="flex-start">
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
  </cs-row>
  <cs-row justify="flex-end">
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
  </cs-row>
  <cs-row justify="center">
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
  </cs-row>
  <cs-row justify="space-between">
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
  </cs-row>
  <cs-row justify="space-around">
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
    <cs-col :span="4"><div>col-4</div></cs-col>
  </cs-row>`
  )}
              </code></pre>`
      },
      example_6: {
        title: 'Flex垂直',
        des: `<p>Flex 子元素垂直对齐。`,
        code: `<pre><code>
  ${this.escapeHTML(
    `<cs-row align="flex-start">
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
  </cs-row>
  <cs-row align="flex-end">
    <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
    <cs-col :span="6"><div>col-6</div></cs-col>
  </cs-row>
  <cs-row align="center">
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
    <cs-col :span="6"><div>col-6</div></cs-col>
    <cs-col :span="6" class="height_80"><div>col-6</div></cs-col>
  </cs-row>

  <style>
    .height_80{
      height: 80px;
      line-height: 80px;
    }
    .height_80 div{
      height: 100%;
    }
  </style>`
  )}
              </code></pre>`
      },
      show_code: false,
      dataSource: {
        row: [{
          param: 'align',
          info: 'flex 布局下的垂直排列方式',
          type: 'string',
          options: 'flex-start/flex-end/center',
          defaults: 'flex-start'
        }, {
          param: 'gutter',
          info: '栅格间隔',
          type: 'number',
          options: '—',
          defaults: '0'
        }, {
          param: 'justify',
          info: 'flex 布局下的水平排列方式',
          type: 'string',
          options: 'flex-start/flex-end/center/space-between/space-around',
          defaults: 'flex-start'
        }, {
          param: 'display',
          info: '布局模式，可选 flex，现代浏览器下有效',
          type: 'string',
          options: '—',
          defaults: 'flex'
        }, {
          param: 'tag',
          info: '自定义元素标签',
          type: 'string',
          options: '—',
          defaults: 'div'
        }],
        col: [{
          param: 'span',
          info: '栅格占位格数',
          type: 'number',
          options: '—',
          defaults: '24'
        }, {
          param: 'offset',
          info: '栅格左侧的间隔格数，间隔内不可以有栅格',
          type: 'number',
          options: '—',
          defaults: '0'
        }, {
          param: 'tag',
          info: '自定义元素标签',
          type: 'string',
          options: '—',
          defaults: 'div'
        }]
      }

    }
  },
  created () {

  },
  methods: {
    showCode: function ($event) {
      this.show_code = !this.show_code
    }
  }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
  @import '../css/common.less';
  .demo-grid{
    margin-bottom: 16px;
  .cs-col{
    height: 40px;
    text-align: center;
    color:  #fff;
    line-height: 40px;
    font-size: 14px;
  &:nth-child(odd){
    div{
      background: rgba(0,160,233,.7);
    }
   }
  &:nth-child(even){
    div{
      background: rgb(0,160,233);
    }
   }
  &.height_80{
    height: 80px;
    line-height: 80px;
  div{
    height: 100%;
  }
  }
  }
  }
</style>

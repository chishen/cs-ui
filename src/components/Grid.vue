<template>
  <div style="background: #fff;height: 100%;">
    <div class="type"><h1>Grid 栅格</h1><p>24 栅格系统。</p></div>
    <cs-example
      title="基础栅格"
      des="<p>从堆叠到水平排列。</p><p>使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。</p>"
      :code="code"
    >
      <cs-row class="demo_row">
      <cs-col :span="12">col-12</cs-col>
      <cs-col :span="12">col-12</cs-col>
      </cs-row>
      <cs-row class="demo_row">
      <cs-col :span="8">col-8</cs-col>
      <cs-col :span="8">col-8</cs-col>
      <cs-col :span="8">col-8</cs-col>
      </cs-row>
      <cs-row class="demo_row">
        <cs-col :span="6">col-6</cs-col>
        <cs-col :span="6">col-6</cs-col>
        <cs-col :span="6">col-6</cs-col>
        <cs-col :span="6">col-6</cs-col>
      </cs-row>
    </cs-example>
    <cs-example
      title="区块间隔"
      des="<p>栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)</p>"
      :code="code"
    >
      <cs-row :gutter="16" class="demo_row">
        <cs-col :span="6">col-6</cs-col>
        <cs-col :span="6">col-6</cs-col>
        <cs-col :span="6">col-6</cs-col>
        <cs-col :span="6">col-6</cs-col>
      </cs-row>
    </cs-example>
    <div class="type" style="padding-bottom: 24px;"><h1>API</h1></div>
    <cs-api title="Row" :dataSource="dataSource.row"></cs-api>
    <cs-api title="Col" :dataSource="dataSource.col"></cs-api>
  </div>
</template>
<script>
export default {
  name: 'Grid',
  data () {
    return {
      code: `<pre><code>
        var express = require('express');
        var app = express();
        app.get('/', function (req, res) {
            res.send('http://yunkus.com');
        });
        var server = app.listen(3000, function () {
            var host = server.address().address;
            var port = server.address().port;
            console.log('云库网', host, port);
        });
        </code></pre>`,
      show_code: false,
      dataSource: {
        row: [{
          param: 'align',
          info: 'flex 布局下的垂直排列方式',
          type: 'string',
          options: 'flex-start/flex-end/center/space-between/space-around/stretch',
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
<style lang="less" rel="stylesheet/less">
  @import '../css/common.less';
  h1{
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 20px;
    margin-top: 8px;
  }
  .demo_row{
    margin-bottom: 16px;
  .cs-col{
    height: 40px;
    text-align: center;
    color:  #fff;
    line-height: 40px;
    font-size: 14px;
  &:nth-child(odd){
     background: rgba(0,160,233,.7);
   }
  &:nth-child(even){
     background: rgb(0,160,233);
   }
  }
  }
</style>

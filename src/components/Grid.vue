<template>
  <div style="background: #fff;height: 100%;">
    <div class="type"><h1>Grid 栅格</h1><p>24 栅格系统。</p></div>
    <h2>基础栅格</h2>
    <p>从堆叠到水平排列。</p>
    <p>使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。</p>
    <cs-row>
      <cs-col class="cs_col" :span="24">
        <cs-row class="demo_row">
          <cs-col :span="12">col-12</cs-col>
          <cs-col :span="12">col-12</cs-col>
        </cs-row>
        <cs-row class="demo_row">
          <cs-col :span="8">col-8</cs-col>
          <cs-col :span="8">col-8</cs-col>
          <cs-col :span="8">col-8</cs-col>
        </cs-row>
        <div class="showCode" @click="showCode" v-text="show_code?'隐藏代码':'显示代码'"></div>
        <div v-highlight>
          <div :class="{'code_active': show_code}" v-html="html"></div>
        </div>
      </cs-col>
    </cs-row>
    <div class="type" style="padding-bottom: 24px;"><h1>API</h1></div>
    <!--<cs-api title="Row"></cs-api>-->
    <!--<h2>Row</h2>-->
    <!--<cs-row class="table_row">-->
      <!--<cs-col :span="24">-->
        <!--<table>-->
          <!--<thead>-->
            <!--<tr>-->
              <!--<th>参数</th>-->
              <!--<th>说明</th>-->
              <!--<th>类型</th>-->
              <!--<th>可选值</th>-->
              <!--<th>默认值</th>-->
            <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
            <!--<tr>-->
              <!--<td>align</td>-->
              <!--<td>flex 布局下的垂直排列方式</td>-->
              <!--<td>string</td>-->
              <!--<td>flex-start/flex-end/center/space-between/space-around/stretch</td>-->
              <!--<td>flex-start</td>-->
            <!--</tr>-->
            <!--<tr>-->
              <!--<td>gutter</td>-->
              <!--<td>栅格间隔</td>-->
              <!--<td>number</td>-->
              <!--<td>—</td>-->
              <!--<td>0</td>-->
            <!--</tr>-->
            <!--<tr>-->
              <!--<td>justify</td>-->
              <!--<td>flex 布局下的水平排列方式</td>-->
              <!--<td>string</td>-->
              <!--<td>flex-start/flex-end/center/space-between/space-around</td>-->
              <!--<td>flex-start</td>-->
            <!--</tr>-->
            <!--<tr>-->
              <!--<td>display</td>-->
              <!--<td>布局模式，可选 flex，现代浏览器下有效</td>-->
              <!--<td>string</td>-->
              <!--<td>—</td>-->
              <!--<td>flex</td>-->
            <!--</tr>-->
          <!--</tbody>-->
        <!--</table>-->
      <!--</cs-col>-->
    <!--</cs-row>-->
  </div>
</template>
<script>
  export default {
    name: 'Grid',
    data () {
      return {
        html: "",
        show_code: false
      }
    },
    created () {
        this.html =
          `<pre><code>
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
          </code></pre>`
    },
    methods: {
      showCode: function ($event) {
        this.show_code = !this.show_code;
        console.log(this.show_code)
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
  h2{
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 8px;
    margin-top: 8px;
  }
  p{
    font-size: 14px;
    color: #314659;
  }
  .type{
    padding-bottom: 80px;
  }
  .cs_col{
    border: 1px solid #eee;
    border-radius: 4px;
    transition: .4s;
    margin-top: 8px;
    margin-bottom: 40px;
    padding: 20px;
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
  .table_row{
    table{
      /*table-layout:fixed;*/
      width: 100%;
      margin-bottom: 40px;
      tr{
        th{
          border: 1px solid #ebedf0;
          padding: 16px 24px;
          text-align: left;
          color: #5c6b77;
          background: rgba(0,0,0,.02);
          font-weight: normal;
          font-size: 14px;
        }
        td{
          border: 1px solid #ebedf0;
          padding: 16px 24px;
          text-align: left;
          color: #314659;
          font-weight: normal;
          font-size: 14px;
        }
      }
    }
  }
</style>

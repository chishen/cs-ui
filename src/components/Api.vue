<template>
  <h2 v-text="title"></h2>
  <cs-row class="table_row">
    <cs-col :span="24">
      <table>
        <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="x in dataSource">
            <td v-text="x.param"></td>
            <td v-text="x.info"></td>
            <td v-text="x.type"></td>
            <td v-text="x.options"></td>
            <td v-text="x.defaults"></td>
          </tr>
        </tbody>
      </table>
    </cs-col>
  </cs-row>
</template>
<script>
  export default {
    name: 'CsApi',
    props: {
      dataSource: {
        type: Array,
        default: [{
          param: '—',
          info: '—',
          type: '—',
          options: '—',
          defaults: '—'
        }]
      },
      title: {
        type: String,
        required: true
      }
    },
    data () {
      return {

      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
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

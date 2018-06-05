<template>
  <div class="cs-example">
    <h2 v-text="title"></h2>
    <div v-html="des" class="cs-des"></div>
    <cs-row>
      <cs-col class="cs_col" :span="24">
        <slot></slot>
        <div class="showCode"><span @click="showCode" v-text="show_code?'隐藏代码':'显示代码'"></span></div>
        <div v-highlight>
          <div :class="{'code_active': show_code}" v-html="code"></div>
        </div>
      </cs-col>
    </cs-row>
  </div>
</template>
<script>
export default {
  name: 'Example',
  props: {
    title: { // 标题
      type: String,
      required: true
    },
    des: String, // 描述
    code: { // 代码块
      type: String,
      required: true
    }
  },
  data () {
    return {
      show_code: false
    }
  },
  methods: {
    showCode: function () {
      this.show_code = !this.show_code
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  .cs-example{
  h2{
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 8px;
    margin-top: 8px;
  }
  .cs-des{
  code{
    margin: 0 1px;
    background: #f2f4f5;
    padding: .2em .4em;
    border-radius: 3px;
    font-size: .9em;
    border: 1px solid #eee;
    font-family: Consolas,Menlo,Courier,monospace;
  }
  }
  .cs_col{
    border: 1px solid #eee;
    border-radius: 4px;
    transition: .4s;
    margin-top: 8px;
    margin-bottom: 40px;
    padding: 20px;
  }
  .showCode{
    color: #314659;
    text-align: right;
    font-size: 14px;
    padding-top: 16px;
  span:hover{
    color: #1890ff;
    cursor: pointer;
  }
  }
  .code_active{
  .hljs{
    height: auto;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 8px;
  }
  }
  }
</style>

<template>
  <div class="container">
    <div class="background">
      <header>
        <ul>
          <li><router-link :to="{path: '/', query: {index: '123'}}">起步</router-link></li>
          <li><router-link to="/components/button">组件</router-link></li>
        </ul>
      </header>
      <div class="vm title">cs-ui</div>
      <div class="vm button"><router-link to="/components/button">快速开始</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
  @import '../css/common.less';
  .container{
    .wh();
  }
  .background{
    .wh();
    position: relative;
    background: linear-gradient(-45deg, #409ff7, #d0206f);
    header{
      height: 64px;
      background: transparent;
      text-align: right;
      padding-left: 24px;
      padding-right: 24px;
      ul{
        li{
          width: 80px;
          height: 100%;
          line-height: 64px;
          text-align: center;
          display: inline-block;
          a{
            text-decoration: none;
            color: #fff;
            font-size: 16px;
            padding-bottom: 8px;
            transition: all 0.4s;
            &:hover{
               color: #000;
               border-bottom: 2px solid #000;
            }
          }
        }
      }
    }
    .title{
      font-size: 72px;
    }
    .button{
      top: calc(50% + 80px);
      a{
        display: block;
        .wh(200px, 40px);
        background: #409ff7;
        line-height: 40px;
        text-align: center;
        border-radius: 4px;
        text-decoration: none;
        color: #fff;
      }
    }
  }
</style>

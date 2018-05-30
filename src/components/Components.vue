<template>
  <cs-container>
    <cs-header class="cs_header">
      <div class="header_div">
        <ul>
          <li><router-link :class="{'active': $route.path === '/'}" to="/">首页</router-link></li>
          <li><router-link :class="{'active': $route.path.includes('/components')}" to="/components/grid">组件</router-link></li>
        </ul>
      </div>
    </cs-header>
    <cs-container class="cs_container">
      <cs-aside class="cs_aside">
        <ul>
          <li
            v-for="item in items"
            :class="{'active': $route.path === item.url}"
          >
            <router-link
              :to="item.url"
              v-text="item.englishName + ' ' + item.chineseName"

            ></router-link>
          </li>
        </ul>
      </cs-aside>
      <cs-main style="background: #fff;">
        <router-view/>
      </cs-main>
    </cs-container>
    <!--<cs-footer></cs-footer>-->
  </cs-container>
</template>
<script>
  export default {
    name: 'Components',
    data () {
      return {
        items: [{
          url: '/components/grid',
          englishName: 'Grid',
          chineseName: '栅格'
        },{
          url: '/components/layout',
          englishName: 'Layout',
          chineseName: '布局'
        },{
          url: '/components/button',
          englishName: 'Button',
          chineseName: '按钮'
        },{
          url: '/components/icon',
          englishName: 'Icon',
          chineseName: '图标'
        }]
      }
    },
    mounted: function () {
      console.log(this.$route.query)
    }
  }
</script>
<style lang="less" scoped rel="stylesheet/less">
  @import '../css/common.less';
  .cs_header{
    background: #fff;
    transition: all .4s;
    border-bottom: 1px solid #eee;
    .header_div{
      .wh(1200px, 100%);
      .mlmr;
      ul{
        text-align: right;
        height: 100%;
        li{
          display: inline-block;
          .wh(72px, 100%);
          text-align: center;
          line-height: 53px;
          a{
            color: #314659;
            text-decoration: none;
            padding-bottom: 8px;
            &.active{
               color: #1890ff;
               border-bottom: 2px solid #1890ff;
             }
          }
        }
      }
    }
  }
  .cs_container{
    width: 1200px;
    .mlmr;
    .cs_aside{
      width: 240px;
      background: #fff;
      border-right: 1px solid #eee;
      transition: all .4s;
      ul{
        li{
          display: block;
          height: 40px;
          line-height: 40px;
          margin-top: 4px;
          margin-bottom: 8px;
          padding-left: 40px;
          padding-right: 16px;
          font-size: 14px;
          &.active{
             background-color: #e6f7ff;
             border-right: 3px solid #1890ff;
             a{
               color: #1890ff;
             }
           }
          a{
            display: block;
            text-decoration: none;
            color: #333;
            &:hover{
               color: #1890ff;
             }
          }
        }
      }
    }
  }

</style>

<template>
    <cs-container>
      <cs-header></cs-header>
      <cs-container>
        <cs-aside></cs-aside>
        <cs-main style="background: #ededed;">
          <div style="background: #fff;height: 100%;">
            <cs-row :gutter="20" style="height: 100%">
              <cs-col :span="14">
                <div style="background: red;">
                  <cs-button>sdaf</cs-button>
                  <cs-input></cs-input>
                </div>
              </cs-col>
              <cs-col :span="10">
                <div style="background: blue;height: 100px;">
                  <cs-icon class="circle" type="question-circle"></cs-icon>
                </div>
              </cs-col>
            </cs-row>
          </div>

        </cs-main>
      </cs-container>
      <cs-footer></cs-footer>
    </cs-container>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped rel="stylesheet/sass" type="text/sass">-->

<!--</style>-->

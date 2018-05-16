<template>
    <cs-container style="background: #ddd">
      <cs-header></cs-header>
      <cs-container>
        <cs-aside></cs-aside>
        <cs-main>
          <div style="background: #fff;height: 100%">
            <cs-button>sdaf</cs-button>
            <cs-input></cs-input>
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

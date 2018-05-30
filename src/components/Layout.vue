<template>
  <div style="background: #fff;height: 100%;">
    <cs-row :gutter="20" style="height: 100%">
      <cs-col :span="14">
        <div style="background: red;">
          <cs-button>layout</cs-button>
          <cs-input></cs-input>
        </div>
      </cs-col>
    </cs-row>
  </div>
</template>
<script>
  export default {
    name: 'Layout',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

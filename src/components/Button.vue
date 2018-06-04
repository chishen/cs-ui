<template>
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
          <router-link to='/components/button'>ddd</router-link>
        </div>
      </cs-col>
    </cs-row>
  </div>
</template>
<script>
export default {
  name: 'Button',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

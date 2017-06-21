<template>
  <div id="app">
    <vHead></vHead>
    <router-view></router-view>
  </div>
</template>

<script>
import vHead from './components/head.vue'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    vHead
  }
}
</script>

<style lang="css">
a {
    color: #222;
    text-decoration: none;
    outline: 0;
}
</style>

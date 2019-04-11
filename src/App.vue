
<template>
  <div id="app">
    <loading v-if='LOADING'/>
    <router-view></router-view>
  </div>
</template>

<script>
import loading from '@/components/Loading'
import {mapState} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    loading
  },
  computed: {
    ...mapState([
      'LOADING'
    ])
  }
}
</script>

<style>
  html,body{
    width:100%;
    height:100%;
  }
  div,body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
  a{color:#2d374b;text-decoration:none}
  a:hover{color:#cd0200;text-decoration:underline}
  em{font-style:normal}
  li{list-style:none}
  img{border:0;vertical-align:middle}
  table{border-collapse:collapse;border-spacing:0}
  p{word-wrap:break-word}
  #app{
    min-height: 100%;
    overflow:hidden;
  }
</style>

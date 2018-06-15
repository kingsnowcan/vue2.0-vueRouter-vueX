<template>
<div>
  <h1>{{hi}}</h1>
</div>
</template>
<style type="text/css">
  div,h1,p{text-align: center;}
</style>
<script>
export default {
  //name: 'apple',
  data () {
    return {
      hi: '我是红苹果'
    }
  },
  methods:{
    getParam(){
      console.log(this.$route.params)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


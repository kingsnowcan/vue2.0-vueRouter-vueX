<template>
<div>
  <h1>{{hi}}</h1>
   <button @click = "addOne">香蕉加</button>
  <button @click = "minusOne">香蕉减</button>
</div>
</template>
<style type="text/css">
  div,h1{text-align: center;}
</style>
<script>
export default {
  //name: 'banana',
  data () {
    return {
      hi: '我是香蕉',
      price:15

    }
  },
 methods:{
  addOne(){
    this.$store.commit('increment',this.price)
  },
  minusOne(){
    this.$store.commit('decrement',this.price)
  },
 }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


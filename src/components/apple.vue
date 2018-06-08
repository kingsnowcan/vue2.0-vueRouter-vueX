<template>
<div>
  <h1>{{hi}}</h1>
  <button @click = "addOne">苹果加</button>
  <button @click = "minusOne">苹果减</button>
  <!-- <P>{{$route.params.color}}</P>
  <button @click="getParam">get param</button> -->
  <!-- <router-link :to="{path:'redapple'}">to redapple</router-link> -->
 <!--  <router-view></router-view> -->
</div>
</template>
<style type="text/css">
  div,h1,p{text-align: center;}
</style>
<script>
export default { 
  data () {
    return {
      hi: '我是一个苹果',
      price:5
    }
  },
  methods:{
    addOne(){
      //this.$store.commit('increment',this.price)
      this.$store.dispatch('increase',this.price)
    },
     minusOne(){
      this.$store.commit('decrement',this.price)
    },
    /*getParam(){
      console.log(this.$route.params)
    }*/
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


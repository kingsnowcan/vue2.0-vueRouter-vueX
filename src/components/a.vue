<template>
<div>
  {{hi}}
  {{numberToDo}}
  {{mytext}}
  <button @click = "emitMyEvent">子组件传值父组件</button>
  <slot name="header">header 子集</slot>
   <slot name="footer">footer 子集</slot>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
   'number-to-do':[Number,String],
   'mytext':String
  },//数组['',''],对象:{name:type}
  data () {
    return {
      hi: 'Welcome to Your Vue.js a'
    }
  },
  methods:{
    emitMyEvent(){
      this.$emit('my-event',this.hi)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

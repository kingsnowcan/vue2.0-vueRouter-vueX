<template>
	<div>
	<img src="./assets/logo.png"/>
<router-view></router-view>
	<!-- <router-view name="viewA"></router-view>
	    <router-view name="viewB"></router-view> -->
	<router-link :to="{path:'apple'}" tag="li">to apple</router-link>
	<!-- <router-link :to="{name:'applePage'}> to banana</router-link> -->
	<!--<router-link :to="'banana'"> to banana</router-link>-->
<!--	<router-link :to="'apple/red'"> to apple red</router-link>-->
    <router-link :to="{path:'banana'}"> to banana</router-link>
    <router-link :to="{path:'apple/red'}"> to apple red</router-link>
</div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.anmimate-p{
	position: absolute;
	top: 30%;
	left:45%;
}
html{
	height: 100%
}
body{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}
</style>
<script type="text/javascript">
	import Vue from 'vue'
	//import VueRouter from 'vue-router'
	//Vue.use(VueRouter)
	export default{


		data(){
			return{
			show:true,
			}
		},
		methods:{
         beforeEnter:function(el){
           $(el).css({
           	left:'-500px',
           	opacity:0
           })
         },
         enter:function(el,done){
         	$(el).animate({
         		left:'45%',
         		opacity:1
         	},
             {
               duration:1500,
               complete:done
             });
          },
         leave:function(el,done){
         	$(el).animate({
         		left:'500px',
         		opacity:0
         	},
             {
               duration:1500,
               complete:done
             })
         }
		}
	}
</script>

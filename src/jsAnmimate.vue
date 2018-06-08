<template>
	<div>
		<button v-on:click="show=!show">toggle</button>
		<!-- <p v-color="'green'">hello world</p> -->
		<input type="text" name="" v-focus>
	<!-- <div class="atra">
	<transition
	  v-on:before-enter="beforeEnter"
	  v-on:enter="enter"
	  v-on:leave="leave"
	  v-bind:css="false"
	>
	<p class="anmimate-p" v-show="show">我出来了</p>
	  
	</transition>
	</div> -->
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
	export default{
		directives:{
			focus:{
				inserted(el,binding){
					el.focus()
				}		             
			},//自定义指令
		},
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
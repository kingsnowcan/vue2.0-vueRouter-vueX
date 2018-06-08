
<template>
  <div id="app" v-bind:title="hello">
  	<p>{{status ? 'success':'fail'}}</p>
  	 <!--{{num+1}}-->
  	<p v-html="hello"></p>
  	<p v-text="hello"></p>
  	<!--<componentA v-for="(value,key) in objectList":key="key"></componentA>--><!--组件for循环-->
  	<ul>
  	<!--<li v-for = "(item,index) in list" :class="{odd:index%2}"> 	{{item.name}}-{{item.price}}-{{index}}</li>数组渲染
  	<li v-for="(value,key) in objectList">{{key+value}}</li>对象渲染-->
   <li v-for = "item in list" >{{item.name +'-'+item.price }}</li>
   </ul>
   <a v-bind:href="link" :title="hello" v-bind:class="font_red">to baidu</a>  <!--' ： 'v-bind缩写-->

    <transition name="fade" mode="out-in"><!--css3动画过渡,out-in先出后进-->
    	<!-- <div :is="currentView"></div> -->
    	 <p v-if="ispartA" key="1">显示A</p>
        <p v-else="ispartA" key="2">no data</p><!-- 标签名一样要用'key'进行区分 -->
    	<!--<p v-show="ispartA">我显示了</p>-->
    </transition>
    <button  @click="toggleCom">切换组件</button>
    <input v-model.number="myValue" type="text"><!--'number'可以识别数字类型，lazy'懒加载用户输入之后动态改变数据，‘trim’去掉头部空格-->
     <p>{{myValueWithNUm}}</p><!--'typeof'判断文本类型-->
     <p>{{getMyValWithNum()}}</p>
     <input v-model="myBox" type="checkbox" value="apple">apple
     <input v-model="myBox" type="checkbox" value="pear">pear
     <input v-model="myBox" type="checkbox" value="banana">banana
     <input v-model="myBox" type="checkbox" value="watermelon">watermelon
     <p>{{myBox}}</p>
      <select v-model='selectList'>
     	<option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
     </select>
     <p>{{selectList}}</p>
     <!--<vSelect @onSelect="" :list="selectOption"></vSelect>--><!--select组件化-->
    <button @click="addItem">addItem</button><!--' @ 'v-on缩写-->
    <button v-on:click.stop="toggle">toggle</button>
    <!--<input @keydown.enter="onKeydown">--> <!--' . '是指令修改器-->
     <component-a  :mytext='myValue'>
     	<p slot="header">头部位置</p>
     	<p slot="footer">底部位置</p>
     </component-a>
    <component-a @my-event = "onComMyEvent" number-to-do='hhjjh'></component-a><!--父组件获取子组件值-->
     <p :is="comToRender"></p><!--is="组件变量"可以渲染不同组件-->
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
.fade-enter-active,.fade-leave-active{
	transition:opacity .5s ease-out;
}
.fade-enter,.fade-leave-active{
	opacity:0;
}
</style>
<script>
import Vue from 'vue'
import componentA from './components/a'
import comB from './components/b'
export default {
	components:{
		componentA,comB
	},
  data (){
  	return {
  		currentView:'component-a',
  	    myVal:'',
  	    comToRender:'componentA',
  		myBox:[],
  		userName:'',
  		selectList:'',
  		selectOption:[
              {
              	value:1,
              	text:'河南'
              },
              {
              	value:2,
              	text:'广东'
              },
  		],
  		hello:'<span>箭头函数</span>',
  		link:'http://www.baidu.com',
  		num:1,
  		ispartA:true,
  		myValue:'',
  		//font_red:'font_red',
  		font_red:{
  			'red':true,
  			'blue':false
  		},
  		status:true,
  		list:[
  		   {
  			name:'apple',
  			price:26
  		   },
  		   {
  			name:'banana',
  			price:16
  		   },
  		   {
  			name:'orange',
  			price:18
  		   },
  		],
  		objectList:{
  			name:'pear',
  			price:28,
  			color:'yellow',
  			weight:18
  		},
  	}

  },
  watch:{
  	myVal:function(val,oldVal){
        console.log(val,oldVal)
  	},
  	list:function(){
  		this.tellUser()
  	},
  },//属性监听
  computed:{
  	myValueWithNUm(){
       //return this.myValue +'end'
        return this.myValue.replace(/\d/g,'')//数字替换为空格
  	}//计算属性
  },
  methods:{
  	//时时改变数据
  	getMyValWithNum(){
       return this.myValue.replace(/\d/g,'')
  	},
  		addItem(){
  			Vue.set(this.list,1,{
  				name:'pinnaapple',
  				price:280
  			})//设置列表某一项的值必须引入Vue
  			//this.list.push({
  				//name:'pinnaapple',
  				//price:280
  			//})点击按钮添加列表
  		},
  		tellUser(){
          alert('list change')
  		},//用户操作监听
  		toggle(){
            this.ispartA = !this.ispartA
  		},
  		toggleCom(){
          if(this.currentView==='component-a'){
          	this.currentView='com-b'
          }else{
          	this.currentView='component-a'
          }
  		},
  		onKeydown(){
  			console.log('键盘输入');
  		},
  		onComMyEvent(partfromA){
  			console.log('onComMyEvent'+partfromA)//子组件传值给父组件
  		}
  	}
}
</script>




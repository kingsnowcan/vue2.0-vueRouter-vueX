
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false*/

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
import Vue from 'vue'
var myHeaderChild = {
	template:'<p>this is my child</p>'
}
var myHeader = {
template:'<p><my-header-child></my-header-child></p>',
//template:'<p v-html="project" v-on:click=""><component :is=""></component>hello</p><keep-alive><router-view>缓存</router-view></keep-alive>',
 components:{
  	'my-header-child':myHeaderChild
  },
    data: function(){
          return {
          	f:1,
          	m:2
          }
    }
}


var root = new Vue({
	el:'#app',
  data:{
    word:'this is my first word'
  },
  components:{
  	'my-header':myHeader
  }
})
//实例方法，属性
//root.$data
//root.$on('emit',function(){})
*/
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
Vue.use(VueRouter)//使用路由
Vue.use(VueResource)//使用ajax调用后台数据
let router = new VueRouter({
    mode:'history',
    routes:[
       {
           path:'/',
           component:IndexPage
       }
    ]
})
new Vue({
  el:'#app',
  router,
  template:'<Layout/>',
  components:{Layout}
  /*render:h => h(App)*/
 /* render:function(h){
     return h(App)
  },
*/
//directives: {
      /*color:{
        bind(el,binding){

        },
        inserted(el,binding){
           el.style.color = binding.value
        }
      }*///color:function(el,binding){
             // el.style.color = binding.value
      //},//自定义指令
    //}
    })


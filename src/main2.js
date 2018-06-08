
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
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Apple from './components/apple'
import Banana from './components/banana'
import RedApple from './components/redapple'
Vue.use(VueRouter)//使用路由
Vue.use(Vuex)//状态管理模式
let store = new Vuex.Store({
    state:{
       totalPrice:0
    },
    getters:{
     getTotal(state){
         return state.totalPrice
     }
    },
    mutations:{
        increment(state,price){
            state.totalPrice += price
        },
         decrement(state,price){
            state.totalPrice -= price
        },
    },//计算方法
    actions:{
     /* increase(context,id){
        api(id,function(price){
          context.commit('increment',price)
            })
        },*///api接口获取数据
      
      increase(context,price){
         context.commit('increment',price)
      }
    }
})
let router = new VueRouter({
  mode:'history',
  routes:[
    {
        path:'/',
       redirect:'/apple'//重定向
    },
  {
     //path:'/apple/:color/detail/:type',路由参数
     path:'/apple',
    /* component:{
      viewA:Apple,
      viewB:RedApple
     },*/
     component:Apple,
     //name:'applePage',//命名路由
     children:[
         {
               path:'red',
               component:RedApple
         }
     ]
  },
  {
     path:'/banana',
     component:Banana
  },
  ]
})
router.push({path:'apple'})//编程导航
//const let es6定义变量
new Vue({
  el:'#app',
  router,
  store,
  template:'<App/>',
  components:{App}
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


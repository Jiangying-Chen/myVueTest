import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import AllDomes from './pages/AllDomes.vue'
import ShoppingCart from "./pages/ShoppingCart"
import FireGame from './pages/FireGame'
import UsersDome from "./pages/UsersDome"
import MyBlog from './pages/MyBlog'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import tuozhuai from './pages/tuozhuai'
import test from './pages/test'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//自定义指令--全局
// Vue.directive('rainbow',{
//     bind(el,binding,vnode){
//       el.style.color="#"+ Math.random().toString(16).slice(2,8);
//     }
// })
Vue.directive('theme',{
    bind(el,binding,vnode){
        if(binding.value=='wide'){
           el.style.maxWidth='1260px';
        }else if(binding.value=='narrow'){
          el.style.maxWidth='560px';
        }
        if(binding.arg=='column'){
          el.style.background='#6677cc';
          el.style.padding='20px';
        }
        
    }
})

//自定义过滤器---全局
// Vue.filter('to-uppercase',function(value){
//    return value.toUpperCase();
// })
Vue.filter('snipeet',function(value){
  return value.slice(0,120)+'...';
})


//配置路由
const router=new VueRouter({
  routes:[
    {path:'/',component:AllDomes},
    {path:'/ShoppingCart',component:ShoppingCart},
    {path:'/FireGame',component:FireGame},
    {path:'/UsersDome',component:UsersDome},
    {path:'/MyBlog',component:MyBlog},
    {path:'/AddBlog',component:AddBlog},
    {path:'/blog/:id',component:SingleBlog},
    {path:'/tuozhuai',component:tuozhuai},
    {path:'/test',component:test},
  ],
  mode:"history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

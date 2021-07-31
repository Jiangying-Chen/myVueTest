<template>
  <div v-theme:column="'narrow'" class="myblog">
      <router-link to='/AddBlog'>写博客</router-link>
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索标题"> 
      
      <div v-for="(blog,index) in filteredBlogs" :key="index" class="singleBlog">
          <router-link v-bind:to="'/blog/'+ blog.id">
              <h2 v-rainbow> {{blog.title | to-uppercase}}</h2>
          </router-link>
              <article> {{blog.body | snipeet}}</article> 
         
      </div>
     
  </div>
</template>

<script>
export default {
name:'myblog',
    data(){
        return{
            search:'',
            blogs:[],
        }
    },
    created(){
    // this.$http.get("http://jsonplaceholder.typicode.com/posts")
    this.$http.get("./../static/posts.json")  //请求本地json
        .then(function(data){
            console.log(data);
            this.blogs= data.body.slice(0,10);
        })
    },
   computed:{
       filteredBlogs:function(){
           return this.blogs.filter((blog)=>{
               return blog.title.match(this.search);
           })
       }
   },
   filters:{
       //自定义过滤器---局部
    //    "to-uppercase":function(value){
    //        return value.toUpperCase();
    //    }
    //第二种写法
    toUppercase(value){
           return value.toUpperCase();
       }
   },
   directives:{  
       'rainbow':{ //自定义--局部指令
            bind(el,binding,vnode){
                el.style.color="#"+ Math.random().toString(16).slice(2,8);
            }
       }
   }

}
</script>

<style scoped>
.myblog{
    max-width: 800px;
    margin: 0 auto;
}
input{
    max-width: 800px;
}
.singleBlog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
a{
    color: #444;
    text-decoration: none;
}
input[type='text']{
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

</style>
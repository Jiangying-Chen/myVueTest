<template>
  <div class="myblog">
      <form v-if="!submmited">
         <h2>写博客</h2>
          <label >主题： </label>
          <input type="text" v-model="blog.title" required id="title">
          <label >内容:</label>
          <textarea  v-model="blog.content"></textarea>
          <div id="checkboxes">
              <input type="checkbox" value="Vue.js" v-model="blog.categories">
               <label >Vue.js</label>
              <input type="checkbox" value="Node.js" v-model="blog.categories">
              <label >Node.js</label>
              <input type="checkbox" value="React.js" v-model="blog.categories">
              <label >React.js</label>
              <input type="checkbox" value="Angular4" v-model="blog.categories">
              <label >Angular4</label>
          </div>
          <label>作者: </label>
          <select v-model="blog.author" >
              <option v-for="(author,index) in authors" :key="index">
                  {{author}}
              </option>
          </select>
          <p class="btn"><button @click.prevent="post">添加博客</button></p>
      </form>
     <div v-if="submmited"><h3>您的博客发布成功！</h3></div>
      <div id="preview">
          <h3>博客总览</h3>
          <p>主题：{{blog.title}}</p>
          <p>内容：</p>
          <p>{{blog.content}}</p>
          <p>分类：</p>
          <ul><li v-for="(item,i) in blog.categories" :key="i">
              {{item}}
              </li>
         </ul>
         <p>作者：{{blog.author}}</p>
         
      </div>
  </div>
</template>

<script>
export default {
name:'myblog',
data(){
    return{
        blog:{
            title:'',
            content:'',
            categories:[],
            authors:'',
        },
        authors:['SunBaby','Hemiah','Aela'],
        submmited:false
    }
},
methods:{
    post(){
        this.$http.post('http://jsonplaceholder.typicode.com/posts',{
            userId:1,
            title:this.blog.title,
            body:this.blog.content,
        }).then(function(data){
            console.log(data);
            this.submmited=true;
          
        })
    }
},
}
</script>

<style scoped>
.myblog *{
    box-sizing: border-box;
}
.myblog{
    max-width:600px;
    margin: 20px auto;
    padding: 20px;
}
label{
    margin:20px 0 10px;
    display:inline-block;
}
input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding:8px;
}
select{
    width: 40%;
}
textarea{
    height: 200px;
}
button{
    background:crimson;
    border: none;
    color: #fff;
    width: 100px;
    padding: 14px;
    border-radius: 5px;
}

#checkboxes label{
    margin-right: 15px;
    margin-top:8px;
}
#preview{
    padding: 10px 20px;
    border:1px dotted #ccc;
    margin: 30px 0
}
h3{
    margin-top: 10px;
}
</style>
<template>
  <div class="SingleBlog">
    <h2>{{blog.title}}</h2>
    <article> {{blog.body}}</article> 
  </div>
</template>

<script>
export default {
    name:'SingleBlog',
    data(){
        return{
            id:this.$route.params.id,
            blog:{},
        }
    },
    created(){
    // this.$http.get("http://jsonplaceholder.typicode.com/posts")
    this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id)  //请求本地json
        .then(function(data){
            console.log(data);
            this.blog= data.body;
        })
    },
}
</script>

<style scoped>
.SingleBlog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border:1px dotted #aaa ;
}

</style>
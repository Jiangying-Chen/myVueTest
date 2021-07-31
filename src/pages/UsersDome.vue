<template>
    <div class="usersDome">
        <app-header @titleChange="gaibian($event)" :title="title"/>
        <Users :myusers="users"/>
        <app-footer @titleChange="gaibian1($event)" :title1="title1"/>
    </div>
</template>

<script>
 import Users from "../components/Users"
 import Header from "../components/Header"
 import Footer from "../components/Footer"
export default {
name:'usersDome',
data(){
    return{
        users:[
    //       {name:"Henry",position:"Web开发",show:false},
    //       {name:"Henry",position:"Web开发",show:false},
    //       {name:"Henry",position:"Web开发",show:false},
    //       {name:"Henry",position:"Web开发",show:false},
    //       {name:"Henry",position:"Web开发",show:false},
    //       {name:"Henry",position:"Web开发",show:false},
    //       {name:"Henry",position:"Web开发",show:false},
    //       {name:"Henry",position:"Web开发",show:false},
    //       {name:"Henry",position:"Web开发",show:false},
    //       {name:"Henry",position:"Web开发",show:false}
        ],
       title:"欢迎学习 Vue",
       title1:'欢迎继续学习vue',
    }
},
components:{
    Users,
    "app-header":Header,
    "app-footer":Footer,
},
methods:{
   gaibian(updatetitle){
       this.title=updatetitle;
   },
   gaibian1(updatetitle){
       this.title1=updatetitle;
   }
}, 
created(){
        this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then((data)=>{
            this.users=data.body;
        })        
    }
}
</script>

<style>

</style>
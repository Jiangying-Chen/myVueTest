<template>
  <div class="appheader" @click="changeTitle">
    {{title}}
  </div>
</template>

<script>
export default {
name:'appheader',
props:{
     title:{
       type:String,
       default:''
    }
},
methods:{
    changeTitle(){
        this.$emit("titleChange","子向父组件传值")
    }
  }
}
</script>
<style scoped>
.appheader{
   background-color:#222;
   font-size:20px;
   color: #fff;
   width:100%;
   height:60px;
   text-align: center;
   line-height: 60px;
}
</style>
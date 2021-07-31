<template>
  <div class="appfooter" @click="changeTitle">
      Copyright By sunBaby @{{title1}}
  </div>
</template>

<script>
export default {
props:{
     title1:{
       type:String,
       default:''
    }
},
methods:{
    changeTitle(){
        this.$emit("titleChange","子向父组件传值--footer")
    }
}
}
</script>

<style scoped>
.appfooter{
   background-color:#222;
   font-size:16px;
   color: #fff;
   width:100%;
   height:30px;
   text-align: center;
   line-height: 30px;
}
</style>
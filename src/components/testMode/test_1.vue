<template>
  <div class="test_1">
      <h3>组件1：轮播图</h3>
      <div v-for="(item,index) in bannerList" :key='index'>
         <img :src='item.pic_url'/>
      </div>
  </div>
</template>

<script>

export default {
    name:'test_1',
    props:{ 
      bannerList:{
        type:Array
        }
      },
    mounted(){
       console.log(this.bannerList);
    },
    methods:{
      
    }
}
</script>

<style scoped>
.test_1{
    border: 1px solid red;
    width: 100%;
    margin-bottom:20px;
}
img{
  width: 100%;
  height: 200px;
}
</style>
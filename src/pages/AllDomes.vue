<template>
<div class="domes">
    <h1>我的 All Vue Dome 汇总</h1>
    <router-link to="/ShoppingCart">
       <p>1.左侧列表导航</p> 
    </router-link>
    <router-link to="/FireGame">
        <p>2.敲打灭火小游戏</p>
    </router-link>
    <router-link to="/UsersDome">
        <p>3.users Dome展示</p> 
    </router-link>
    <router-link to="/MyBlog">
        <p>4.My Blog 我的博客</p> 
    </router-link>
    <router-link to="/tuozhuai">
        <p>5.拖拽</p> 
    </router-link>
     <router-link to="/test">
        <p>6.组件按需加载test</p> 
    </router-link>
   
</div>
</template>

<script>

export default ({
    
   
})
</script>


<style scoped>
.domes{
 color:#000;
}
h1{
    text-align: left;
    margin-left:0px;
}
.domes p{
    color: #333;
    padding: 8px 20px;
    border: 1px solid #544;
    margin:10px 40px 10px 0;
    float:left;
    cursor: pointer;
    
}
</style>
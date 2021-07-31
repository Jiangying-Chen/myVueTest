<template>
  <div class="shoppingCart">
     <h1>vue测试监听查询购物车数量及金额变化</h1>
     <input  placeholder="请输入关键词"/>
     <table border="1" colspan="0" cellspacing="0">
        <thead><tr><th>图片id</th><th>商品名称</th><th>单价</th><th>数量</th><th>总价</th><th>商品详情</th></tr></thead>
        <tbody>
            <tr v-for="(item,i) in items" :key="i">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button :disabled="item.count<=1" @click="item.count--">-</button> 
                    {{item.count}}
                    <button  @click="item.count++">+</button> 
                   
                </td>
                <td>{{item.price*item.count}}</td>
                <td>商品详情</td>
            </tr>
        </tbody>
        <tfoot><tr><td colspan="6">{{counts}}件商品总计：￥475.0</td></tr></tfoot>

     </table>
  </div>
</template>

<script>
import Item from '../components/Item.vue'
export default {
  components: { Item },
   name:'shoppingCart',
   data(){
       return{
           items:[{id:1,name:"苹果",price:10,count:10,url:""},
                  {id:2,name:"苹果汁",price:9,count:1,url:""}, 
                  {id:3,name:"车厘子",price:4.4,count:1,url:""},
                  {id:4,name:"李子",price:7,count:1,url:""},
                  {id:5,name:"香蕉",price:3,count:1,url:""},
                  {id:6,name:"橙子",price:1,count:1,url:""}],
           counts:1,
       }
   }, 
   computed:{
       totalCount(){
         return this.item.reduce(function(total,cur){return total+cur},0);
       }
   },
   mounted(){
      console.log(this.counts);
   },
}
</script>

<style scoped>
.shoppingCart{
    width: 80%;
    margin:0 auto;
}
input{
     width: 90%;
     margin: 10px 0;
     height: 30px;
     padding:0 20px
}
table{
    width: 100%;
}
table tr td{
    text-align: center;
    height: 30px;
    line-height: 30px;
}


</style>

</style>
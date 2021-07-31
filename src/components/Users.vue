<template>
   <div class="users">
      <ul>
         <li v-for="(user,i) in myusers" :key="i" @click="user.show=!user.show">
            <h2>{{user.name}}</h2>
            <h3> {{user.email}}</h3>
         </li> 
      </ul>
   </div>
</template>

<script>
export default {
 name:"users",
 props:{
    myusers:{
       type:Array,
       required:true
    },
   
 }
 
}
</script>

<style scoped>
.users{
   width: 100%;
   max-width: 1200px;
   margin: 40px auto;
   padding: 0 20px;
   box-sizing: border-box;
}
ul{
   display: flex;
   flex-wrap:wrap;
   list-style: none;
   padding: 0;
}
ul li{
   flex-grow: 1;
   text-decoration: none;
   flex-basis: 150px;
   text-align: center;
   padding:20px;
   border: 1px solid #222;
   margin:10px;
   cursor: pointer;

}

</style>
<template>
  <div class="item" :class="{active:isActive}">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
      isActive:{
          type:Boolean,
          default:false,
      },
   
  },
};
</script>

<style scoped>
.item{
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: 0.2s;
}
.item:hover{
    background: #c82626;
   
}
.active{
    background: #e7e7e7;
}


</style>
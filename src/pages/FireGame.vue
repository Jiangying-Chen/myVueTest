<template>
  <div class="test">
       <div class="bag" :class="{gray:enable}"></div>
      <div class="heath">
          <div :style="{width:heath+'%'}">{{heath+'%'}}</div>
      </div>
      <div class="controls">
           <button @click="addfire"  v-show="!enable">addfire</button>
           <button @click="restart" >restart</button>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
           heath:100,
           enable:false
        }
    },
    methods:{
        addfire(){
            this.heath-=10;
             if(this.heath<=0){
               this.enable=true
            }
        },
        restart(){
          this.heath=100;
          this.enable=false;
        }
    },
}
</script>

<style scoped>
.test{
    width:560px;
    height: 700px;
    border: 1px solid rgb(199, 193, 193);
    margin: 0 auto;
}
.bag{
     height: 550px;
     background: url("../assets/1.jpg")  no-repeat;
}
.gray{
     height: 550px;
     background: url("../assets/2.jpg")  no-repeat;
}
.test .heath{
    width: 400px;
    margin: 0 auto;
    border:2px solid orangered;
    border-radius:20px;
}
.heath div{
    height: 25px;
    background: orangered;
    border-radius:20px;
    text-align:center;
    color: #fff;;
   
}
.controls {
    width: 271px;
    margin: 25px auto;
}
.controls button{
    font-size: 24px;
    margin:0 20px;
    background: rgb(250, 151, 94);
    border: 1px solid  rgb(250, 151, 94);
    cursor: pointer;
    padding:2px 10px;
    border-radius: 13px;
    color:#fff;
}
button:nth-child(2){
     background: rgb(97, 94, 250);
    border: 1px solid rgb(97, 94, 250);
}

</style>
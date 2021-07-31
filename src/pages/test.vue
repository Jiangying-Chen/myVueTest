<template>
  <div class='test'>
     <p>组件按需加载...</p>
        <div v-for="(item,index) in pageData" :key='index'>
            <test_1 v-if='item.type==1' :bannerList='bannerList'/>
            <test_2 v-if='item.type==2'/>
            <test_3 v-if='item.type==3'/>
            <test_4 v-if='item.type==4'/>
        </div>
  </div>
</template>

<script>
import Axios from 'axios';
import test_1 from '../components/testMode/test_1';
import test_2 from '../components/testMode/test_2';
import test_3 from '../components/testMode/test_3';
import test_4 from '../components/testMode/test_4';

export default {
  name:'test',
  data(){
      return {
          pageData:[],
          bannerList:[],
          notices:[],
          functionMOde:[],
          listMode:[],
      }
  },
  filters:{
      modeFilter(val){
         return `<test_${val} />`
      }
  },
  components:{
      test_1,test_2,test_3,test_4
  },
  mounted(){
      this.getData();
  },
  methods:{
      getData(){
         var url='http://47.105.36.32:8094/firpage?domainid=41';
         Axios.get(url).then((res)=>{
                    this.pageData = res.data.data;
                    console.log( this.pageData);
                     this.pageData.forEach((item)=>{
                        if(item.open_type=1){
                            if(item.type==1){
                               this.bannerList=item.banners;
                            }else if(item.type==2){
                               this.notices=item.notices
                            }else if(item.type==3){
                               this.functionMOde=item.functions
                            }else if(item.type==4){
                               this.listMode=item.minispots
                            }else {
                                console.log('没有该模块');
                            }
                        }
                })
         }).catch((error)=>{
               console.log(error);
         })
     
      }
   
  }

}
</script>

<style scoped>

</style>
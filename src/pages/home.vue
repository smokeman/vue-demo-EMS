<template>
<div id="home">
    <div class="homeBa">
     <mt-search v-model="value"></mt-search>
      <section id="homeCon">
        <mt-swipe :auto="4000">
            <mt-swipe-item class="slide1">1</mt-swipe-item>
            <mt-swipe-item class="slide2">2</mt-swipe-item>
            <mt-swipe-item class="slide3">3</mt-swipe-item>
        </mt-swipe>
     </section> 

    
        
   </div> 
</div>
</template>

<script>
   export default {
       name:'home',
       data (){
           return {
              value:''
           }
       }
   }
</script>
<style scoped>
    #home {
        height: 100%;
    }
    .homeBa{
        position:absolute;
        background:#eeeeee;
        height: 100%;  
        width: 100%;        
    }
    .mint-search{
        height:2.6rem;
    }
 
     .mint-swipe {
        height: 100px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .mint-swipe-item {
        line-height: 100px;
      }

      .slide1 {
        background-color: #0089dc;
        color: #fff;
      }

      .slide2 {
        background-color: #ffd705;
        color: #000;
      }

      .slide3 {
        background-color: #ff2d4b;
        color: #fff;
      }
  
 


</style>
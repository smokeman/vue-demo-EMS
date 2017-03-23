<template>
 <div id='start'>
     <div class="startBa">
     <div class="startMan">
      <img  src="../assets/image/startMan.png" />   
    </div>  
    <div class="startBun">
        <router-link to="/home">
          <p class="buttom">开始启动</p>
        </router-link>
    </div>  
    <router-view></router-view>
   </div>
 </div>
</template>
<script>
  export default{
     name:'start',
    
     methods: {
        handleClick(){
         
         }
      }
  }
</script>
<style scoped>
#start {
    height: 100%;
}

.startBa{
    position:absolute;
    background:#068df3;
    height: 100%;  
    width: 100%;  
     
}
.startMan {
 display:block;
    float:none;
    width:100%;
     position:absolute;
    margin-top: 3rem;
}
.startMan img {
    width: 12.25rem;
    height: 10.75rem;
    display:block;
    margin:0 auto;
    left:0;
    right:0;
    top:0;
    bottom:0; 
}
.startBun {
    position: fixed;
    display:block;
    float:none;
    width:100%;
    bottom: 4rem;
  
}
.startBun p {
    width: 7rem;
    height: 2rem;
    background-color: #ffd020;
    border: 1px solid #ffd020;
    font-size: 1rem;
    -webkit-border-radius:1.5rem;
    border-radius:1.5rem;
    line-height: 2rem;
    text-align:center;
    color: #fff!important;
    margin:0 auto;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0; 
}
</style>
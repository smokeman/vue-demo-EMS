<template>
<div id='footer' class="foot-btn">
		<ul>
            <!--
	    	<li v-for='(data,index) in cells' 
            :class="data.show?'iconAtive':''"
                @click="choose(index)">
           
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="data.code"></use>
            </svg>
            <p>{{data.name}}</p>
	      </li> 
          -->
         <router-link v-for='(data,index) in cells'  :to="data.pash"   tag='li'>
               <svg class="icon" aria-hidden="true">
                <use :xlink:href="data.code"></use>
            </svg>
               <p>{{data.name}}</p>
           </router-link>
         

	    </ul>
	</div>

</template>
<script>
   

    export default {
  name: 'footer',
  data (){
      return {
         cells:[
            {name:'首页',code:'#icon-home1',pash:'/home'},
            {name:'排名',code:'#icon-paiming1',pash:'/ranking'},
            {name:'订单',code:'#icon-2',pash:'/order'},
            {name:'我的',code:'#icon-wode',pash:'/userdata'}
        ],
    

      }
  },
 
beforeCreate(){

},
 
  methods:{
     
  }      
    }
</script>

<style scoped>
/*底部导航*/
.foot-btn{width:100%;height:2rem;border-top: 1px solid #cdcdcd; background:#fff; position:fixed; left:0; bottom:0;}
.foot-btn ul li {
   float: left;
   width: 25%;
   text-align: center;
   color: #cdcdcd;
   padding-top: .15rem;
}
.foot-btn ul li p {
  font-size: .6rem;
  padding-top: 2px;
}
.router-link-active {
  color: #26a2ff!important;
}
</style>
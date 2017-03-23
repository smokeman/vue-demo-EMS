<template>
   <div id="order">
     <div class="orderba">
      <mt-header fixed title="我的订单">
        
      </mt-header>
      
            <section id="Allorder">
                    <mt-navbar v-model="selected">
                        <mt-tab-item ></mt-tab-item>
                        <mt-tab-item id="1">全部</mt-tab-item>
                        <mt-tab-item id="2">已收</mt-tab-item>
                        <mt-tab-item id="3">待收</mt-tab-item>
                         <mt-tab-item >
                             
                         </mt-tab-item>
                    </mt-navbar>
                <!-- tab-container -->
                  <p class="textAll">共{{order.length}}件｜已收{{isputed.length}}件｜待收{{noputed.length}}件</p>
                  <div id="tabContainer">
                    <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1" v-infinite-scroll="loadMore"
                     infinite-scroll-disabled="loading"
                      infinite-scroll-distance="10">
                       <mt-cell v-for="data in order" :title="'订单号：'+data.orderNo" :label="'邮件号：'+data.kuaidiNo"  is-link>
                           <span style="color:#26a2ff;" class="" v-show="data.isPut">EMS已收</span>
                           <span style="color:#01fe05;" v-show="!data.isPut">等待上门取件</span>
                       </mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2" >
                          <mt-cell v-for="data in isputed" :title="'订单号：'+data.orderNo" :label="'邮件号：'+data.kuaidiNo"  is-link>
                           <span style="color:#26a2ff;" class="" v-show="data.isPut">EMS已收</span>
                           <span style="color:#01fe05;" v-show="!data.isPut">等待上门取件</span>
                         </mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                          <mt-cell v-for="data in noputed" :title="'订单号：'+data.orderNo" :label="'邮件号：'+data.kuaidiNo"  is-link>
                           <span style="color:#26a2ff;" class="" v-show="data.isPut">EMS已收</span>
                           <span style="color:#01fe05;" v-show="!data.isPut">等待上门取件</span>
                          </mt-cell>
                    </mt-tab-container-item>
                    </mt-tab-container>
                </div>
                    <p v-show="loading" class="page-infinite-loading">
                        <mt-spinner type="fading-circle"></mt-spinner>
                        加载中...
                    </p>
            </section>
       </div>
   </div>
</template>

<script>
   export default {
    name: 'order',
    data(){
        return {
            selected:'1',
            order:[
                {orderNo:'12345678',kuaidiNo:'已收',isPut:true},
                {orderNo:'23456',kuaidiNo:'已收',isPut:true},
                {orderNo:'23211',kuaidiNo:'未收',isPut:false},
                {orderNo:'1234',kuaidiNo:'未收',isPut:false},
                {orderNo:'34rds',kuaidiNo:'已收',isPut:true},
                {orderNo:'12345678',kuaidiNo:'已收',isPut:true},
                {orderNo:'23456',kuaidiNo:'已收',isPut:true},
                {orderNo:'23211',kuaidiNo:'未收',isPut:false},
                {orderNo:'1234',kuaidiNo:'未收',isPut:false},
                {orderNo:'34rds',kuaidiNo:'已收',isPut:true}
            ],
            isputed:"",
            noputed:'',
             loading: false,
            allLoaded: false,
            wrapperHeight: 0
        }
    },
    mounted(){
    const list= this.order;     
	 const finished =(list)=>{
       return list.filter(function(item){
			return item.isPut;
		})
           }    
    const nofinished =(list)=>{
       return list.filter(function(item){
			return !item.isPut;
		})
           }     
          this.isputed=finished(list);
          this.noputed=nofinished(list);
          
		},
         methods: {
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                this.loading = false;
                }, 2500);
            }
            },
   
       

   }
</script>

<style scoped>
    #order {
      height: 100%;
    }
    .orderba{
        position:absolute;
        background:#eeeeee;
        height: 100%;  
        width: 100%;        
    }
   #Allorder {
       margin-top: 40px;
       margin-bottom: 2rem;
   }
   .textAll {
       color: #898989;
       line-height: 1.5rem;
       font-size: .4rem;
       padding-left: 10px;
       margin-top: 3px;
   }
   .page-infinite-loading {
        display: inline-block;
        position: relative;
       font-size: .5rem;
       left:50%;
       margin-left:-11.5px;
   }
   .page-infinite-loading .mint-spinner-fading-circle {
       margin:0 auto;
   }
  
 
</style>
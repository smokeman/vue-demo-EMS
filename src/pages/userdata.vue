<template>
  <div id="userdata">
      <div class="dataBa" v-for="datainfo in userdataInfo ">
      <mt-header fixed title="个人信息">
        
      </mt-header>
 
        <section id="home-head">
            <div class="headImg">
                <img src="../assets/image/headImg.png"/>
            </div>
            <p class="userName">{{datainfo.Nickname}}</p>
            <img class="iconCode" src="../assets/image/iconCode.png" />
        </section>
       
        <div id="head-info">
            <div class="head-info-left">
                <p>{{datainfo.Ranking}}</p>
                <span>我的排名</span>
            </div>
            <div class="head-info-right">
                <p>{{datainfo.addup}}</p>
                <span>累计快递</span>
            </div>
        </div>
      <section id="userInfo" >
        <mt-cell title="昵称" value="">{{datainfo.Nickname}}</mt-cell>
        <mt-cell title="姓名" value="">{{datainfo.name}}</mt-cell>
        <mt-cell title="性别" value="">{{datainfo.sex}}</mt-cell>
        <mt-cell title="手机号" value="">{{datainfo.telNo}}</mt-cell>
        <mt-cell title="地区" value="">{{datainfo.region}}</mt-cell>
        <mt-cell title="所属公司" value="">{{datainfo.company}}</mt-cell>
         <router-link to="/MouserData">
        <mt-button size="normal" type="primary">修改个人资料</mt-button>
  </router-link>
      </section>
   </div>
  </div>
</template>
<script>


  export default {
    name: 'userdata',
    data() {
      return {
        selected:"1",
         value:'男', 
         pickerValue:"" ,
         userdataInfo:[]
          }
       },
        methods: {
       fetUserData(){
         var _this= this;
            this.$http.get('src/data/user.data').then(function(res){       
               _this.userdataInfo=res.data;
            }).catch(function(err){
              console.log(err);
            })
       }
      
    },
   mounted(){
      this.fetUserData();  
         
    }
       
     
  }
</script>
<style scoped>
  #userdata {
      height: 100%;
    }
    .dataBa{
        position:absolute;
        background:#eeeeee;
        height: 100%;  
        width: 100%;        
    }
    #userInfo {
     margin: 40px 0;
    }
    .mint-button--primary {
      width: 80%;
      margin: 1rem 10%;
    }
    #home-head {
      height: 5.45rem;
      background-color: #26a2ff;
      display: -webkit-box;
      -webkit-box-align:center;
      margin-top: 39px;
  }
  .headImg {
      width: 3.5rem;
      height: 3.5rem;
      margin-left: .9rem;
    
  }
  .headImg img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      border: .125rem solid #068df3;
  }
  .userName {
      color: #fff;
      margin-left: .5rem;
      font-size: .8rem;
  }
  .iconCode {
      width: 1rem;
      height: 1rem;
      margin-left: .8rem;
  }
  #head-info {
      height: 2.05rem;
      background-color: #068df3;
      display:-webkit-box;
      text-align: center;
      color: #fff;
      font-size: .7rem;
      -webkit-box-align:center;
  }
  .head-info-left,.head-info-right {
      -webkit-box-flex:1;
  }
  .head-info-left {
      border-right: 1px solid #fff;
  }

</style>
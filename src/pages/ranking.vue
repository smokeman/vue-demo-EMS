<template>
    <div id="ranking">
       <div class="rankBg">
        <header id="header">
                <img src="../assets/image/headlineimg.png"/>
         </header>
            <div id="rankcon">
                <table class="amtable">
                    <thead>
                        <tr>
                            <th class="am-text-left">名次</th>
                            <th class="am-text-left">姓名</th>
                            <th class="am-text-right">总件数</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td class="am-text-left"><span class="amiconbtn">1</span></td>
                            <td class="am-text-left">杨立</td>
                            <td class="am-text-right">200</td>
                        </tr>
                    
                    </tbody>
                </table>
                <div id="sambutton">
                    <div>点击查看即可查看您的排名</div>
                    <button type="button" class="am-btn">查看</button>
                </div>
            </div>
            
        </div> 
    </div>
</template>

<style scoped>
#ranking {
      height: 100%;
    }
    .rankBg{
        position:absolute;
       
        height: 100%;  
        width: 100%;        
    }
  #header img {
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
   }
  #rankcon {
    background-color: #ef6944;
    margin: 0 1.5rem;
    color: #fcde00;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    padding: 2.5rem 2rem 0 2rem;
    position: relative;
    z-index: 2;
    margin-top: 5px;
}
#rankcon:before {
    background-color: #fcde00;
    content: "排行榜";
    color: #ef6a44;
    position: absolute;
    top: -5px;
    width: 80%;
    left: 10%;
    text-align: center;
    border-radius: 0 0 4px 4px;
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    line-height: 2rem;
    z-index: 3;
}
#rankcon:after {
    background-color: #d43937;
    position: absolute;
    width: 84%;
    height: 5px;
    top: -5px;
    left: 8%;
    border-radius: 8px 8px 0 0;
    content: "..";
    -webkit-border-radius: 8px 8px 0 0;
    -moz-border-radius: 8px 8px 0 0;
    text-align: center;
} 
.amtable {
    width: 100%;
    line-height: 2rem;
}

table {
    max-width: 100%;
    background-color: transparent;
    empty-cells: show;
    
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
.amtable thead {
    color: #fff;
    border-bottom: 1px solid #fcde00;
    font-size: .9rem;
}
.am-text-left {
    text-align: left !important;
}
.am-text-right {
    text-align: right !important;
}
.amtable tbody tr {
    border-bottom: 1px solid #ee613e;
     font-size: .8rem;
}
.amiconbtn {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    font-size: .7rem;
    line-height: 1rem;
    border-radius: 50%;
    background-color: #fcde00;
    color: #ef6944 !important;
    text-align: center;
}
#sambutton {
    text-align: center;
    padding: 1rem 0;
}
#sambutton div {
    color: #fff;
    font-size: 0.4rem;
    padding-bottom: 0.5rem;
}
#sambutton button {
    background-color: #fcdf00;
    color: #931510;
    border: 2px solid #931510;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    padding: .4rem 1rem;
    font-size: 0.6rem;
}
</style>
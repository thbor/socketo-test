<template>
  <div class="bg">
    <div class="box">
      <div class="left">
        <div class="left-nav"></div>
        <div class="left-content">
          <el-input placeholder="搜索" v-model="inputSearch" suffix-icon=""></el-input><i class="el-icon-search icon-search"></i>
          <div class="person">
            <div v-for="item in persons" :key="item.id" class="mt-1 ">
              <img :src="item.img" class="img-icon">
              <div class="inline-block img-right">
                <div class="right-top">{{item.name}}</div>
                <div class="right-bottom">{{item.historyMsg}}</div>
              </div>
              <!-- #969696 -->
              
            </div>
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      inputSearch:"",
      persons:[
        {id:"p1",img:require('../assets/images/1.jpg'),name:'張三',historyMsg:'你好！'},
        {id:"p2",img:require('../assets/images/2.jpg'),name:'李四',historyMsg:'你好！'},
        {id:"p3",img:require('../assets/images/3.jpg'),name:'王五',historyMsg:'你好！'},
        {id:"p4",img:require('../assets/images/4.jpg'),name:'趙六',historyMsg:'你好！'},
        {id:"p5",img:require('../assets/images/5.jpg'),name:'王麻子',historyMsg:'你好！'},
        {id:"p6",img:require('../assets/images/6.jpg'),name:'錢七',historyMsg:'你好！'},
        {id:"p7",img:require('../assets/images/7.jpg'),name:'小二',historyMsg:'你好！'},
      ]
    }
  }
}
</script>
<style scoped>
  .bg{
    height: 100vh;
    background:linear-gradient(180deg,#8aa799,#c5a37e);
  }
  .box{
    border: 1px solid white;
    position: relative;
    left: 17.5%;
    width: 65%;
    height: 90vh;
    top: 5vh;
    
  }
  .left{
    width: 40%;
    border: 1px solid red;
    height: 100%;
    display: flex;
    /* align-content: center; */
    flex-flow:row nowrap 
  }
  .left-nav{
    width: 20%;
    border: 1px solid black;
    background-color: #383232;
    height: 100%;

  }
  .left-content{
    background-color:#eeedeb;
    height: 100%;
    width: 80%;
    border: 1px solid blue;
    position: relative;
    
    /* width: 20% */
  }
  .inline-block{
    display: inline-block;
  }
  .left-content>>>.el-input__inner{
    border-radius: 5px;
    height: 25px;
    width: 90%;
    position: relative;
    margin: 15px 0 15px 5%;
    display: inline-block;
    background-color:#e3e3e3  
  }
  .icon-search{
    float: right;
    position: relative;
    margin-right: 7.5%;
    height: 25px;
    line-height: 25px;
    margin-top:-37.5px 
  }
  .person{
    border: 1px solid red;
    height: calc(90% - 56px);
    width: 90%;
    position: relative;
    left: 5%;
    overflow: auto;
  }
 
  .mt-1{
    margin-top: 10px
  }
  .mt-1:first-child{
    margin-top: 0px
  }
  .img-icon{
    width:60px;
    height:60px;
    border: 1px solid blue;
  }
  .img-right{
    left: 10px;
    position: relative;
    color: #696967
  }
  .right-top{

  }
  .right-bottom{
    margin-top: 15px;
    bottom:5px;
    position: relative; 
    font-size:10px;
  }
  ::-webkit-scrollbar
{
    width:8px;
    height:16px;
    background-color:#F5F5F5;
}
::-webkit-scrollbar-track
{
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
    border-radius:10px;
    background-color:#F5F5F5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius:10px;
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
    background-color:#c9c9c9;
}
</style>
<template>
  <div class="bg">
		<div class="top">
			<div class="trapezoid">
				<div class="white transf180 bigtitle center">
					智能仓储看板
				</div>
			</div>
			<div class="blue right">{{current}}</div>
		</div>

		<div class="top-middle">
			<div class="top-middle-left">
				仓库总览
				<div class="frame">
					<div class="top-content">
					<div class="top-content-inner">
					<el-row>
						<el-col :span="4" style="background:#20427a;text-align:left;position:relative;z-index:1;" >
							<div class="inline" ref="focusModel">
								<div class="inner-container">
									<div v-for="item in wareModels" :key="item.name" :class="item.focus?'modelFocus':''" class="inline" style="width:100%;margin-left:20%">{{item.name}}</div>
								</div>
							</div>
						</el-col>
						<el-col :span="2">
							<div class="t2" :style="triangleWidth"></div>
							<!-- <div class="t2" :style="triangleWidth">1</div> -->
							<!-- <div class="t2"></div>
							<div class="t3"></div> -->
						</el-col>
						<el-col :span="18">
							<el-col :span="6">
								<div class="inline center" style="line-height:6vh">
									<div class="inline" style="color:#9CC1FF">今日入庫</div>
									<div class="white" style="font-size:40px">{{todayIn}}</div>
								</div>
							</el-col>
							<el-col :span="6">
								<div class="inline center" style="line-height:6vh">
									<div class="inline" style="color:#9CC1FF">今日出庫</div>
									<div class="white" style="font-size:40px">{{todayOut}}</div>
								</div>
							</el-col>
							<el-col :span="6">
								<div class="inline center" style="line-height:6vh">
									<div class="inline" style="color:#9CC1FF">庫存信息</div>
									<div class="white" style="font-size:40px">{{stoke}}</div>
								</div>
							</el-col>
						</el-col>
					</el-row>
						<div class="modelinfo inline">
						</div>
					</div>
				</div>
				</div>

			</div>
			<div class="top-middle-right">
				AGV状态
					<div class="right">
					<div class="inline mr2">
						<div class="work inline"></div>
						<div class="inline divText">工作</div>
					</div>
					<div class="inline mr2"><div class="rest inline"></div><div class="inline divText">閒置</div></div>
					<div class="inline"><div class="offline inline"></div><div class="inline divText">離線</div></div>
				</div>
				
			<div class="frame">
				<div class="top-content">
				<div class="top-content-inner">
					<!--仓库总览裡面的信息-->
					<div v-for="(item,index) in agvs" :key="'agv'+index" :class="item.status===1?'work1':(item.status===2?'work2':'work3')">{{item.name}}</div>
				</div>
			</div>
			</div>

			</div>
		</div>

		<div class="ls">
			滾動流水
			<div class="frame">
				<div class="ls-outer">
				<div class="ls-inner" >
					<div style="width:49%;display:inline-block;" class="tableDiv" >
						<el-scrollbar>
						<el-table ref="table1" border :data="tableData1" :height="height1" style="width:100%;background:#0e2d60" :header-cell-style="getHeadClass" :row-style="{background:'#10274e',color:'#9CC2FF'}" size="mini">
							<el-table-column v-for="title in tableTitles1" :key="title.key" :label="title.label" :prop="title.key" :width="title.width" align="center"></el-table-column>
						</el-table>
						</el-scrollbar>
					</div>
				
					<div style="width:49%;display:inline-block;float:right" class="tableDiv" >
						<el-scrollbar>
						<el-table ref="table2" border :data="tableData1" :height="height1" style="width:100%;background:#0e2d60" :header-cell-style="getHeadClass" :row-style="{background:'#10274e',color:'#9CC2FF'}" size="mini">
							<el-table-column v-for="title in tableTitles1" :key="title.key" :label="title.label" :prop="title.key" :width="title.width" align="center"></el-table-column>
						</el-table>
						</el-scrollbar>
					</div>
				</div>
			</div>
			</div>

		</div>

			<div class="wareinfo">
			仓位信息
			<div class="right">
				<div class="inline mr2">
					<div class="inline ware1" style="width:32px;height:20px;position:relative;top:-3px"></div>
					<div class="inline divText2">無貨</div>
				</div>
				<div class="inline mr2">
					<div class="inline ware2" style="width:32px;height:20px;position:relative;top:-3px"></div>
					<div class="inline divText2">有貨</div>
				</div>
				<div class="inline">
					<div class="inline ware3" style="width:32px;height:20px;position:relative;top:-3px"></div>
					<div class="inline divText2">未知</div>
				</div>
			</div>
			<div class="frame">
			<div class="ware-outer">
				<div class="ware-inner">
					<div v-for="(item,index) in allWareInfos" :key="'ware'+index" class="ware0" >
						<div :class="item.status===1?'ware1':(item.status===2?'ware2':'ware3')">{{item.name}}</div>
					</div>
				</div>
			</div>
			</div>

		</div>
  </div>
</template>

<script>
import { parseDate1 } from "../plugins/utils";
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
			current:"",
			models:[{name:"X1214"},{name:"X1215"},{name:"X664"},{name:"X1121"},{name:"X1122"},{name:"X1123"}],
			models2:[{name:"X1214"},{name:"X1215"},{name:"X664"},],
			todayIn:32819,
			todayOut:64834,
			stoke:195483,
			triangleWidth:'',
			wareModels:[
				{name:"X1214",todayIn:42819,todayOut:14134,stoke:225483},
				{name:"X1215",todayIn:52345,todayOut:31834,stoke:335483},
				{name:"X1216",todayIn:62512,todayOut:75834,stoke:775483},
				{name:"X1217",todayIn:72129,todayOut:61834,stoke:525483},
				{name:"X1218",todayIn:82819,todayOut:84834,stoke:115483},
				{name:"X1219",todayIn:9819,todayOut:14234,stoke:495483},
				{name:"X1220",todayIn:20819,todayOut:19834,stoke:495483},
			],
			agvs:[
			{name:"AGV1",status:1},
			{name:"AGV2",status:2},
			{name:"AGV3",status:1},
			{name:"AGV4",status:2},
			{name:"AGV5",status:3},
			{name:"AGV6",status:1},
			],
			allWareInfos:[
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:2},
				{name:'C01',status:2},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:3},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:3},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:2},
				{name:'C01',status:2},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:3},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:3},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:2},
				{name:'C01',status:2},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:3},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:3},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:2},
				{name:'C01',status:2},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:3},
				{name:'C01',status:1},
				{name:'C01',status:1},
				{name:'C01',status:3},
				{name:'C01',status:1},
				{name:'C01',status:1},
			],
			tableData1:[
				{No:1,type:'入庫',number:659,apply:"黃清",workNo:"C3005884",model:"X1214",partno:"124864557105",time:"2020-09-21 10:00:00"},
				{No:2,type:'入庫',number:659,apply:"黃清",workNo:"C3005884",model:"X1214",partno:"124864557105",time:"2020-09-21 10:00:00"},
				{No:3,type:'入庫',number:659,apply:"黃清",workNo:"C3005884",model:"X1214",partno:"124864557105",time:"2020-09-21 10:00:00"},
				{No:4,type:'入庫',number:659,apply:"黃清",workNo:"C3005884",model:"X1214",partno:"124864557105",time:"2020-09-21 10:00:00"},
				{No:5,type:'入庫',number:659,apply:"黃清",workNo:"C3005884",model:"X1214",partno:"124864557105",time:"2020-09-21 10:00:00"},
				{No:6,type:'入庫',number:659,apply:"黃清",workNo:"C3005884",model:"X1214",partno:"124864557105",time:"2020-09-21 10:00:00"},
				{No:7,type:'入庫',number:659,apply:"黃清",workNo:"C3005884",model:"X1214",partno:"124864557105",time:"2020-09-21 10:00:00"},
				{No:8,type:'入庫',number:659,apply:"黃清",workNo:"C3005884",model:"X1214",partno:"124864557105",time:"2020-09-21 10:00:00"}
			],
			tableData2:[],
			tableTitles1:[
				{key:"No",label:"序號",width:60},
				{key:"type",label:"入庫類型",width:80},
				{key:"number",label:"數量",width:80},
				{key:"apply",label:"申請人",width:60},
				{key:"workNo",label:"工號",width:80},
				{key:"model",label:"機種",width:60},
				{key:"partno",label:"料號",width:110},
				{key:"time",label:"時間"}
			],
			tableTitles2:[],
			height1:'calc(25vh - 17px)'
    }
  },
  mounted(){
		window.onresize = () => {
				return (() => {
					this.getWidth()
				})()
		}
		this.getWidth()
    this.init()
  },
  watch:{
    // sockets(){
    // }
  },
  methods:{
		getWidth(){
			const that = this
			window.screenWidth = document.body.clientWidth
			window.screenHeight = document.body.clientHeight
			that.screenWidth = window.screenWidth
			that.screenHeight = window.screenWidth
			// let x = (window.screenHeight)/window.screenWidth
			let h16 = window.screenHeight*16/100/2
			// border: 55px solid transparent;
			// border-right: 55px solid #20427a;
			this.triangleWidth = "border:"+h16+"px solid transparent;border-right:"+h16+"px solid #20427a";
		},
		getHeadClass(){
			return 'background:#3462AF;color:#9CC1FF;border-color: #3462af; '
		},
		scollTop(tableref){
			let divData = this.$refs[tableref]&&this.$refs[tableref].bodyWrapper
			if(divData){
				divData.scrollTop+=36
				if (divData.clientHeight + divData.scrollTop == divData.scrollHeight) {
					// 重置table距离顶部距离
					divData.scrollTop = 0
				}
			}
		},
		scollTop2(tableref){
			let divData = this.$refs[tableref]&&this.$refs[tableref]
			if(divData){
				divData.scrollTop+=36
				if (divData.clientHeight + divData.scrollTop == divData.scrollHeight) {
					// 重置table距离顶部距离
					divData.scrollTop = 0
				}
			}
		},
		focusModel(models){
			let findfocusIndex = models.findIndex(item=>item.focus===true)
			if(findfocusIndex===-1){
				models[0].focus = true
				this.todayIn = models[0].todayIn
				this.todayOut = models[0].todayOut
				this.stoke = models[0].stoke
			}else{
				models[findfocusIndex].focus = false
				if(findfocusIndex+1<models.length){
					models[findfocusIndex+1].focus = true;
					this.todayIn = models[findfocusIndex+1].todayIn
					this.todayOut = models[findfocusIndex+1].todayOut
					this.stoke = models[findfocusIndex+1].stoke
				}else{
					models[0].focus = true
					this.todayIn = models[0].todayIn
					this.todayOut = models[0].todayOut
					this.stoke = models[0].stoke
				}
			}
		},
		// focusModel(models){
		// 	// console.log("測試",models)
		// 	let findfocusIndex = models.findIndex(item=>item.focus===true)
		// 	// console.log("findfocusIndex")
		// 	if(findfocusIndex===-1){
		// 		//沒有找到右focus位true的
		// 		models[0].focus = true
		// 	}
		// 	else{
		// 		//找到那個焦點位false
		// 		models[findfocusIndex].focus = false
		// 		// 下一個或第一個位true
		// 		if(findfocusIndex+1<models.length){
		// 			models[findfocusIndex+1].focus = true;
		// 			// console.log("index",findfocusIndex)
		// 		}else{
		// 			models[0].focus = true
		// 		}
		// 	}
		// },
    init(){
			setInterval(()=>{
				this.current = parseDate1(new Date())
			},1000)
			
			this.models = this.models2.filter((item,index)=>index<3)
			setInterval(()=>{
				this.scollTop('table1')
				this.scollTop('table2')
				this.scollTop2('focusModel')
				this.focusModel(this.wareModels)
				// this.focusModel(this.models2)
			},1000)
		},
  },
  sockets:{
    // currentTime(data){
		// 	this.current = parseDate1(data.data)
		// },
		getTime(){},
		addZero(num){
			return (num<10?'0'+num:num)
		}
 
  }
}
</script>
<style scoped>
	.work1{
		width: 100px;
		height: 30px;
		line-height: 30px;
		background: #0C2145;
		border: 1px solid #005FFF;
		display:inline-block;
		text-align:center;
		margin:10px;
	}
	.work2{
		width: 100px;
		height: 30px;
		line-height: 30px;
		background: #073310;
		border: 1px solid #1EB43D;
		display:inline-block;
		text-align:center;
		margin:10px;
	}
	.work3{
		width: 100px;
		height: 30px;
		line-height: 30px;
		background: #302104;
		border: 1px solid #E1990B;
		display:inline-block;
		text-align:center;
		margin:10px;
		
	}
	.ware0{
		border:2px solid #22457F;
		display:inline-block
	}
	.ware1{
		height: 30px;
		line-height: 30px;
		color:#FFFFFF;
		background: #22457F;
		width:100px;
		display:inline-block;
		margin:3px;
		text-align:center;
	}
	.ware2{
		height: 30px;
		line-height: 30px;
		color:#1EB43D;
		background: #073310;
		width:100px;
		display:inline-block;
		margin:3px;
		text-align:center;
	}
	.ware3{
		height: 30px;
		line-height: 30px;
		color:#E1990B;
		background: #302104;
		width:100px;
		display:inline-block;
		margin:3px;
		text-align:center;
		
	}
	.border{
		position:absolute;
		padding:3px;
		border-style: solid;
		border-color: #015cf1;
	}
	.white{
		color:white
	}
	.right{
		float:right
	}
	.blue{
		color:#6589ca;
		z-index:1;
		position:absolute;
		right:0px;
		top:0px
	}
	.top{
		height:40px;
		line-height:40px;
		background:#0b3883;
	}
	.trapezoid {
		border-bottom: 80px solid #0b3883;
		border-left: 150px solid transparent;
		border-right: 150px solid transparent;
		height: 0;
		width: 37vw;
		transform:rotate(180deg);
		display:inline-block;
		position:relative;
		left:20%;
 }
 .transf180 {
		transform:rotate(180deg);
 }
 .bigtitle{
		height: 60px;
		line-height:30px;
		font-size: 44px;
		font-family: MF MingHei (Noncommercial);
		font-weight: 400;
 }
 .center{
		text-align:center
 }
 .top-middle{
		margin-top:45px;
		padding:0px 20px
 }
 .top-middle-left{
		color:white;
		display:inline-block;
		width:calc(50% - 10px);
 }
 .top-middle-right{
		margin-left:20px;
		color:white;
		display:inline-block;
		width:calc(50% - 10px);
 }
 .ls{
		color:white;
		margin-top:10px;
		padding:0px 20px
 }
 .ls-inner{
		background:#10274e;
		margin:8px 0px;
		height:calc(100% - 16px)
 }
 .ls-outer{
		border-top:1px solid #3462AF;
		border-bottom:1px solid #3462AF;
		height:25vh;
		min-height:180px;
 }
 .wareinfo{
		padding:0px 20px;
		color:white;
		margin-top:10px;
 }
 .ware-outer{
		border-top:1px solid #3462AF;
		border-bottom:1px solid #3462AF;
		height:calc(49vh - 190px);
		min-height:250px
 }
 .ware-inner{
		background:#0E2D60;
		margin:8px 0px;
		height:calc(100% - 16px);
 }
 .top-content{
		border-top:1px solid #3462AF;
		border-bottom:1px solid #3462AF;
		height:16vh;
		min-height:120px;
 }
 .top-content-inner{
		background:#0E2D60;
		margin:8px 0px;
		height:calc(100% - 16px);
		border:1px solid #3462AF;
		overflow:hidden
 }
 .inline{
		display:inline-block
 }
 .mr2{
		margin-right:20px
 }	
 /* .t2{
		width: 100px;
		height: 100px;
		background: #20427a;
		left: -69px;
		position: relative;
		transform:rotate(45deg);
 } */
   /* .t2{
		width: 0px;
		height: 0px;
		border: 50px solid transparent;
		border-right: 50px solid #0e2d60;
		position: relative;
		left: -47px;
		z-index: 1;
		transform:rotate(137deg);
		top: -50px
 } */
  .t2{
		width: 0px;
		height: 0px;
		border: 55px solid transparent;
		border-right: 55px solid #20427a;
		position: relative;
		transform:rotate(180deg);
 }
 .t3{
		width: 0px;
		height: 0px;
		border: 60px solid transparent;
		border-right: 60px solid #0e2d60;
		position: relative;
		left: -60px;
		z-index: 1;
		transform:rotate(-133deg);
		top: -8px;
 }
.work{
	width: 30px;
	height: 18px;
	background: #0C2145;
	border: 1px solid #005FFF;
	margin-right:5px;
	}
.divText{
	position:relative;
	top:-5px;
	font-size: 14px;
}
.divText2{
	position:relative;
	top:-10px;
	font-size: 14px;
}
.rest{
	width: 30px;
	height: 18px;
	background: #073310;
	border: 1px solid #1EB43D;
	margin-right:5px;
}
.offline{
	width: 30px;
	height: 18px;
	background: #302104;
	border: 1px solid #E1990B;
	margin-right:5px;
}
.modelDiv{
	background: #22457f;
	width:120px;
	height:100%;
}
.modelDiv2{
	background: red;
	width:120px;
	height:100%;
}
.modelinfo{
	position: relative;
	top: -15%;
	left: -165px;
	color: #5173AD;
	font-size: 18px;
	width: 0px
}
.modelFocus{
	color: white;
	font-size: 30px
}
.triangle-bottomleft {
	width: 100px;
	height: 100%;
	background: #22457f;
	transform:rotate(45deg);
	position: relative;
	left: -70px
}

.el-table--border, .el-table--group{
  border-color: #3462af; 
}
.el-table--border::after, .el-table--group::after, .el-table::before{
  background-color: #3462af;
}
/deep/ .el-table td, .el-table th.is-leaf{
	border-bottom: 1px solid #3462af ;
}
/deep/ .el-table--enable-row-hover .el-table__body tr:hover>td{
	background-color:#3462AF 
}
/deep/.el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
	border-right:1px solid #3462af
}



.tableDiv ::-webkit-scrollbar {
  /* 设置竖向滚动条的宽度 */
  width: 0px;
  /* 设置横向滚动条的高度 */
  height:20px;
}
.frame {
	/* display: inline-block;
	padding: 7px;
	background: linear-gradient(#00ffd4, #00ffd4) left top, linear-gradient(#00ffd4, #00ffd4) left top, linear-gradient(#00ffd4, #00ffd4) right top, linear-gradient(#00ffd4, #00ffd4) right top, linear-gradient(#00ffd4, #00ffd4) left bottom, linear-gradient(#00ffd4, #00ffd4) left bottom, linear-gradient(#00ffd4, #00ffd4) right bottom, linear-gradient(#00ffd4, #00ffd4) right bottom;
	background-repeat: no-repeat;
	background-size: 2px 20px, 20px 2px; */
	padding: 3px;
  background: linear-gradient(#015cf1, #015cf1) left top,
    linear-gradient(#015cf1, #015cf1) left top,
    linear-gradient(#015cf1, #015cf1) right top,
    linear-gradient(#015cf1, #015cf1) right top,
    linear-gradient(#015cf1, #015cf1) left bottom,
    linear-gradient(#015cf1, #015cf1) left bottom,
    linear-gradient(#015cf1, #015cf1) right bottom,
    linear-gradient(#015cf1, #015cf1) right bottom;
  background-repeat: no-repeat;
  background-size: 4px 12px, 12px 4px;
	border-radius: 3px
}
.inner-container {
  animation: myMove 7.2s linear infinite;
  animation-fill-mode: forwards;
}
  /*文字无缝滚动*/
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-60px);
  }
}





</style>

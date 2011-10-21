/**
*	关卡类
*
*/

Game.module('Stage', function(Game){

	var 

	//帷幕
	MaxCurtain = 24,
	i = 0,
	alpha,
	//帷幕状态
	show_curtain = false,
	
	

	//关卡
	Stage = function(stage){
		//当前关卡
		this.stage_action = stage,
		
		//切换关卡
		this.stage_go = this.stage_action,
		
		//关卡绑定函数
		this.satge_func = 0;

		//关卡动作
		this.stageLogic = {};

		this.scence = new Game.pool['Scene']();
		this.map = new Game.pool['Map']();
		this.timer = new Game.pool['Timer']();
	};

	Stage.prototype = {
		//开始新关卡
		start : function(stage){
			this.stage_action = stage;
			switch(stage){
				//开始动画
				case "begin_0":
					this.scence.start(stage);
					this.stageLogic = ['scence'];
					this.satge_func = function(){
						this.goStage('begin_1');
					}
					break;
				case "begin_1":
					this.scence.start(stage);
					this.stageLogic = ['scence'];
					this.satge_func = function(){
						this.goStage('begin_2');
					}
					break;
				case "begin_2":
					this.scence.start(stage);
					this.stageLogic = ['scence'];
					this.satge_func = function(){
						if(Command.state['13'])
							this.goStage(1);
					}
					break;
				//结束动画
				case "end":
					this.scence.start(stage);
					this.stageLogic = ['scence'];
					this.satge_func = function(){
						this.goStage('begin_0');
					}
					break;
				//关卡
				default:
					this.scence.start(stage);
					this.map.start(stage);
					this.timer.start(stage);
					this.stageLogic = ['scence','map','timer'];
					break;
			}
			this.frameCount = 0;
		},
		//选择关卡
		goStage : function(stage){
			this.stage_go = stage;
			this.show_curtain = true;
		},
		
		step : function (){

			for(var i=0,len=this.stageLogic.length;i<len;i++){
				this[this.stageLogic[i]].step();
			}
			
			!this.show_curtain&&this.satge_func&&this.satge_func();

			//帷幕
			if(this.show_curtain) this.drawCurtain();

			this.frameCount++;
		},
		//绘制帷幕
		drawCurtain : function(){
			if(this.stage_go == this.stage_action){
				alpha = (i/MaxCurtain).toFixed(2);
				i--;
			}else{
				alpha = (i/MaxCurtain).toFixed(2);
				i++;
			}
			Game.ctx.fillStyle = "rgba(0,0,0,"+alpha+")";
			Game.ctx.fillRect(0, 0, Game.canvas.width, Game.canvas.width);
			if(i == MaxCurtain)
				this.start(this.stage_go);//切换关卡
			else if(i == 0)
				this.show_curtain = false;//关闭帷幕
		}
	}

	return Stage;

});
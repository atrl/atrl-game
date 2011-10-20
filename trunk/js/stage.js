/**
*	关卡类
*
*/

Game.module('Stage', function(Game){

	var 

	//帷幕
	MaxCurtain = 24;
	
	//当前关卡
	stage,

	//关卡动作
	stageLogic = {},

	drawCurtain = function(frameCount){
		var alpha = (1-frameCount/MaxCurtain).toFixed(2);
		Game.ctx.fillStyle = "rgba(0,0,0,"+alpha+")";
		Game.ctx.fillRect(0, 0, Game.canvas.width, Game.canvas.width);
	},

	//关卡
	Stage = function(stage){
		this.scence = new Game.pool['Scence']();
		this.map = new Game.pool['Map']();
		this.timer = new Game.pool['Timer']();
	};

	Stage.prototype = {
		start : function(stage){
			switch(stage){
				//开始动画
				case "begin":
					this.scence.start();
					stageLogic = ['scence'];
					break;
				//结束动画
				case "end":
					this.scence.start();
					stageLogic = ['scence'];
					break;
				//关卡1
				case 1:
					this.scence.start();
					this.map.start();
					this.timer.start();
					stageLogic = ['scence','map','timer'];
					break;
			}
			this.frameCount = 0;

			
		},
		
		step : function (){

			for(var i=0,len=stageLogic.length;i<len;i++){
				this[stageLogic[i]].step();
			}

			//帷幕
			if(this.frameCount<MaxCurtain) drawCurtain(this.frameCount);

			this.frameCount++;
		},
		
		goStage:function(stage){
		
		}
	}

	return Stage;

});
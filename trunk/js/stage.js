/**
*	关卡类
*
*/

Game.module('Stage', function(Game){

	var 

	//帷幕
	MaxCurtain = 24;

	drawCurtain = function(frameCount){
		var alpha = (1-frameCount/MaxCurtain).toFixed(2);
		Game.ctx.fillStyle = "rgba(0,0,0,"+alpha+")";
		Game.ctx.fillRect(0, 0, Game.canvas.width, Game.canvas.width);
	},

	//关卡
	Stage = function(stage){
		this.stage = stage;
		this.img = 'bg';
		this.map = new Game.pool['Map']();
		this.timer = new Game.pool['Timer']();
		this.frameCount = 0;
	};

	Stage.prototype = {
		start : function(){
			this.map.start();
			this.timer.start();
		},
		
		step : function (){
			//场景
			Game.draw(this.img, 0, 0 );
			
			//时间管理
			this.timer.step();

			//地图进步
			this.map.step();

			//帷幕
			if(this.frameCount<MaxCurtain) drawCurtain(this.frameCount);

			this.frameCount++;
		}
	}

	return Stage;

});
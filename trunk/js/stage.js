/**
*	关卡类
*
*/

Game.module('Stage', function(Game){

	var 

	SpritePool = [],

	Stage = function(stage){
		this.stage = stage;
		this.img = 'bg';
		this.map = new Game.pool['Map']();
	};

	Stage.prototype = {
		start : function(){
			this.map.start();
		},
		
		step : function (){
			//场景
			Game.draw(Game.imgCache[this.img],0,0);

			//地图进步
			this.map.step();
		}
	}

	return Stage;

});
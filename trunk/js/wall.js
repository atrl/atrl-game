﻿/**
*	障碍类
*/
Game.module('Wall', function(Game){

	var Wall = function(x,y,id,config){
		Game.pool['Sprite'].call(this, x, y, id, config);

		this.img = Config.keeper.img;
		this.frame = Config.wall.frames[this.action][config.style];
	}
		
	Wall.prototype = new Game.pool['Sprite']();
	Wall.prototype.constructor = Wall;

	Wall.prototype.step = function(){
		this.draw();
	}
	return Wall;

});
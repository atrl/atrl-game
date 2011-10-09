﻿/**
*	障碍类
*/
Game.module('Wall',function(Game){

	var Wall = function(x,y,id,config){
		Sprite.call(this, x, y, id, config);

		this.img = Config.keeper.img;
		this.frame = Config.wall.frames.default[config.type];
	}
		
	Wall.prototype = new Sprite();
	Wall.prototype.constructor = Wall;

	Wall.prototype.step = function(){
		Game.draw(
			this.img, 
			this.frame.x, this.frame.y, 
			this.frame.w, this.frame.h, 
			this.x*Config.gridW + this.frame.cx, this.y*Config.gridH + this.frame.cy, 
			this.frame.w, this.frame.h
		);
	}
	return Wall;

});
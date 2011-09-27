﻿﻿/**
*	障碍类
*/
Game.module('Wall',function(Game){

	var Wall = function(x,y,sprite){
		this.img = Config.keeper.img;
		this.x = x;
		this.y = y;
		this.frame = Config.wall.frames.default[sprite];
	}
		
	Wall.prototype = new Sprite();
	Wall.prototype.constructor = Wall;

	Wall.prototype.step = function(){
		Game.draw(
			Game.imgCache[this.img], 
			this.frame.x, this.frame.y, 
			this.frame.w, this.frame.h, 
			this.x*Config.gridW + this.frame.cx, this.y*Config.gridH + this.frame.cy, 
			this.frame.w, this.frame.h
		);
	}
	return Wall;

});
﻿/**
*	障碍类
*/
Game.module('Keeper',function(Game){


	var Keeper = function(x,y){
		this.img = Config.keeper.img;
		this.frames = Config.keeper.frames;
		this.action = 'default';
		this.frameCount = 0;
		this.x = x;
		this.y = y;
	}
		
	Keeper.prototype = new Sprite();
	Keeper.prototype.constructor = Keeper;

	Keeper.prototype.step = function(){
		this.frameCount = ++this.frameCount == this.frames[this.action].length ? 0 : this.frameCount;
		var frame = this.frames[this.action][this.frameCount];
		Game.draw(Game.imgCache[this.img], frame.x, frame.y, frame.w, frame.h,this.x*Config.gridW+Config.paddingX,this.y*Config.gridH+Config.paddingY,frame.w, frame.h);
	}

	return Keeper;

});
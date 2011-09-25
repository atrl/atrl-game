﻿/**
*	障碍类
*/
var Wall = (function(Sprite){


	var Wall = function(sprite,x,y){
		this.img = Config.keeper.img;
		this.x = x;
		this.y = y;
		this.frame = Config.wall.frames[sprite];
	}
		
	Wall.prototype = new Sprite();
	Wall.prototype.constructor = Wall;

	Wall.prototype.step = function(){
		Game.draw(Game.imgCache[this.img], this.frame.x, this.frame.y, this.frame.w, this.frame.h,(this.x+1)*Config.gridW+Config.paddingX-this.frame.w,(this.y+1)*Config.gridH+Config.paddingY-this.frame.h,this.frame.w, this.frame.h);
	}

	return Wall;

})(Sprite)

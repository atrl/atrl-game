﻿/**
*	障碍类
*/
var Wall = (function(Sprite){


	var Wall = function(){
		this.keyState = Command.state;
	
	}
		
	Wall.prototype = new Sprite();
	Wall.prototype.constructor = Wall;

	Wall.prototype.step = function(){
	
	
	}

	return Wall;

})(Sprite)

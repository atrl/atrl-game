﻿/**
*	障碍类
*/
var Keeper = (function(Sprite){


	var Keeper = function(){
		this.keyState = Command.state;
	
	}
		
	Keeper.prototype = new Sprite();
	Keeper.prototype.constructor = Keeper;

	Keeper.prototype.step = function(){
	
	
	}

	return Keeper;

})(Sprite)

﻿/**
*	玩家类
*/
var Bonus = (function(Sprite){


	var Bonus = function(){
		this.keyState = Command.state;
	
	}
		
	Bonus.prototype = new Sprite();
	Bonus.prototype.constructor = Bonus;

	Bonus.prototype.step = function(){
	
	
	}

	return Bonus;

})(Sprite)

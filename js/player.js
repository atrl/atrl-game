﻿/**
*	玩家类
*/
var Player = (function(Sprite){


	var Player = function(){
		this.keyState = Command.state;
	
	}
		
	Player.prototype = new Sprite();
	Player.prototype.constructor = Player;

	Player.prototype.step = function(){
	
	
	}

	return Player;

})(Sprite)

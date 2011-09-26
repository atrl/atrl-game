﻿/**
*	玩家类
*/
Game.module('Player',function(Game){


	var Player = function(){
		this.keyState = Command.state;
		this.toward = 0; // 0:上 1:右 2:下 3:左
	}
	
	Player.prototype = new Sprite();
	Player.prototype.constructor = Player;

	Player.prototype.step = function(){
	
	
	}

	return Player;

});

﻿/**
*	奖励类
*/
Game.module('Bonus', function(Game){


	var Bonus = function(){
		this.keyState = Command.state;
	
	}
		
	Bonus.prototype = new Sprite();
	Bonus.prototype.constructor = Bonus;

	Bonus.prototype.step = function(){
	
	
	}

	return Bonus;

});

﻿/**
*	奖励类
*/
Game.module('Bonus', function(Game){


	var Bonus = function(x, y){
		//随机奖励类型
		this.type = Math.floor(Math.random()*Config.bonus.type.length);
		this.x = x;
		this.y = y;
	}

	Bonus.prototype = new Sprite();
	Bonus.prototype.constructor = Bonus;

	Bonus.prototype.step = function(){
	
	
	}

	return Bonus;

});

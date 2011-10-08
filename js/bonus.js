﻿/**
*	奖励类
*/
Game.module('Bonus', function(Game){


	var Bonus = function(x, y, id){
		Sprite.call(this, x, y, id);
		//随机奖励类型
		this.type = Math.floor(Math.random()*Config.bonus.type.length);
	}

	Bonus.prototype = new Sprite();
	Bonus.prototype.constructor = Bonus;

	Bonus.prototype.step = function(){
	
	
	}

	return Bonus;

});

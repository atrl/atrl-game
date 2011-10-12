﻿/**
*	奖励类
*/
Game.module('Bonus', function(Game){

	var Bonus = function(x, y, id, config){
		Game.pool['Sprite'].call(this, x, y, id, config);
		this.img = Config.player.img;
		this.frames = Config.bonus.frames;

	}

	Bonus.prototype = new Game.pool['Sprite']();
	Bonus.prototype.constructor = Bonus;

	Bonus.prototype.step = function(){
	
	
	}
	return Bonus;

});

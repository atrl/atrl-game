﻿/**
*	奖励类
*/
Game.module('Bonus', function(Game){

	var Bonus = function(x, y, id, config){
		Game.pool['Sprite'].call(this, x, y, id, config);

	}

	Bonus.prototype = new Game.pool['Sprite']();
	Bonus.prototype.constructor = Bonus;

	Bonus.prototype.step = function(){
	
	
	}
	return Bonus;

});

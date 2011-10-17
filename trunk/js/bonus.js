﻿/**
*	奖励类
*/
Game.module('Bonus', function(Game){

	var 
		Bonus_style = ['power', 'speed', 'bullets'],
	Bonus = function(x, y, id, config){
		Game.pool['Sprite'].call(this, x, y, id, config);
		this.img = Config.keeper.img;
		this.frames = Config.bonus.frames;
		this.action = Bonus_style[config.style];
		this.actions = ['die'];
	}

	Bonus.prototype = new Game.pool['Sprite']();
	Bonus.prototype.constructor = Bonus;

	Bonus.prototype.step = function(){
		if(this.action == 'die'){
			this.life = 0;
			return;
		}

		this.frame = this.frames[this.action][this.frameCount%this.frames[this.action].length];

		this.draw();
		this.frameCount++;
	
	}
	return Bonus;

});

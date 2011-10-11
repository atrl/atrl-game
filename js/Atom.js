﻿/**
*	障碍类
*/
Game.module('Atom', function(Game){

	var 
	//炸弹伤害帧数
	dieFrame = 7,

	Atom = function(x,y,id,config){
		Game.pool['Sprite'].call(this, x, y, id, config);
		this.img = Config.keeper.img;
	}
		
	Atom.prototype = new Game.pool['Sprite']();
	Atom.prototype.constructor = Atom;

	Atom.prototype.step = function(){
		Game.stage.map.doAction(this.x, this.y, 'die');

		//this.draw();

		this.frameCount++;
		if(this.frameCount == dieFrame){
			this.life = 0;
		}
	}
	return Atom;

});
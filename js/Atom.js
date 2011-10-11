﻿/**
*	伤害原子类
*/
Game.module('Atom', function(Game){

	var 
	//炸弹伤害帧数
	dieFrame = 7,

	Atom = function(x,y,id,config){
		Game.pool['Sprite'].call(this, x, y, id, config);
		this.img = Config.keeper.img;
		this.frames = Config.atom.frames;
	}
		
	Atom.prototype = new Game.pool['Sprite']();
	Atom.prototype.constructor = Atom;

	Atom.prototype.step = function(){
		if(this.frameCount == this.frames[this.action].length){
			this.life = 0;
			return;
		}

		Game.stage.map.doAction(this.x, this.y, 'die');

		this.frame = this.frames[this.action][this.frameCount];
		//this.draw();

		this.frameCount++;
	}
	return Atom;

});
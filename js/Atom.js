﻿/**
*	伤害原子类
*/
Game.module('Atom', function(Game){

	var 

	Atom = function(x,y,id,config){
		Game.pool['Sprite'].call(this, x, y, id, config);
		this.img = Config.keeper.img;
		this.frames = Config.atom.frames;

		this.toward = config.toward;
		this.power = config.power;
	}
		
	Atom.prototype = new Game.pool['Sprite']();
	Atom.prototype.constructor = Atom;

	Atom.prototype.step = function(){
		if(this.frameCount == this.frames[this.action].length){
			this.life = 0;
			return;
		}

		if(this.power){
			var x,y,power = --this.power;
			if(this.toward){
				x = this.x;
				y = (this.toward>1?1:-1)+this.y;
			}else{
				x = (this.toward>1?1:-1)+this.x;
				y = this.y;
			}

			if(!Game.stage.map.cross(x,y)){
				Game.stage.map.doAction(this.x, y,'die');
			}else{
				Game.stage.map.create(6, x, y,{toward:this.toward,power:power});
			}
			this.power = 0;
		}

		Game.stage.map.doAction(this.x, this.y, 'die');
		
		this.frame = this.frames[this.action][this.frameCount];
		//this.draw();

		this.frameCount++;
	}
	return Atom;

});
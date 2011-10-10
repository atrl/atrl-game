﻿/**
*	障碍类
*/
Game.module('Atom', function(Game){

	var Atom = function(x,y,id,config){
		Sprite.call(this, x, y, id, config);

		
	}
		
	Atom.prototype = new Sprite();
	Atom.prototype.constructor = Atom;

	Atom.prototype.step = function(){
		Game.stage.map.action(this.x, this.y, 'die');

		Game.draw(
			this.img, 
			this.frame.x, this.frame.y, 
			this.frame.w, this.frame.h, 
			this.x*Config.gridW + this.frame.cx, this.y*Config.gridH + this.frame.cy, 
			this.frame.w, this.frame.h
		);

		this.frameCount++;
	}
	return Atom;

});
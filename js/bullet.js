﻿/**
*	炸弹类
*
*
*/

Game.module('Bullet', function(Game){

	var Bullet = function(x, y, id){
		Sprite.call(this, x, y, id);

		
	}
	Bullet.prototype = new Sprite();
	Bullet.prototype.constructor = Bullet;
	
	Bullet.prototype.step = function(){
		
	},
	Bullet.prototype.boom = function(){
		
	}

});

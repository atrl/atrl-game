﻿/**
*	炸弹类
*
*
*/

var Bullet = (function(Sprite){

	var Bullet = function(config){
		this.create_time = config.create_time;
		this.sleep_time = config.sleep_time;
		this.power = config.power;
		
	}
	Bullet.prototype = new Sprite();
	Bullet.prototype.constructor = Bullet;
	
	Bullet.prototype.step = function(){
		if(+new Date() > this.create_time + this.sleep_time){
			this.boom();
		}
	},
	Bullet.prototype.boom = function(){
	
	}

})(Sprite)

﻿/**
*	炸弹类
*
*
*/

Game.module('Bullet', function(Game){

	var 
	// 炸弹缓存
	bulletCache = {},

	Bullet = function(x, y, id, config){
		Sprite.call(this, x, y, id, config);
		bulletCache[id] = config.player;
		this.power = config.power;
		
		this.img = 'keeper';
		this.frames = Config.bullet.frames;

	}

	Bullet.count = function(player){
		var count = 0;
		for (var i in bulletCache){
			if(bulletCache[i] == player)
				count++;
		}
		return count;
	}
	Bullet.prototype = new Sprite();
	Bullet.prototype.constructor = Bullet;
	
	Bullet.prototype.step = function(){
		
		//帧循环判断
		if(this.frameCount >= this.frames[this.action].length){
			if(this.action == 'die'){
				this.life = 0;
				return;
			}else{
				this.frameCount = 0;
			}
		}
		
		//当前帧
		this.frame = this.frames[this.action][this.frameCount];

		Game.draw(
			this.img, 
			this.frame.x, this.frame.y, 
			this.frame.w, this.frame.h, 
			this.x*Config.gridW + this.frame.cx, this.y*Config.gridH + this.frame.cy, 
			this.frame.w, this.frame.h
		);
		this.frameCount++;
	},
	Bullet.prototype.boom = function(){
		
	}

	return Bullet;
});

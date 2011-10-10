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

	//统计玩家所有炸弹数
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
		
		if(this.action == 'die'){
			var x,y;
			this.life = 0;
			

			//
			for(x=this.x-1;x>this.x-this.power;x--){
					if(!Game.stage.map.action(x,y,'die'))
						break;
					Game.stage.map.create(6, x, this.y, {style:this.x-this.power-x});
			}

			for(y=this.y-1;y>this.y-this.power;y--){
				
			}

			for(x=this.x-1;x>this.x-this.power;x--){
					if(!Game.stage.map.action(x,y,'die'))
						break;
					Game.stage.map.create(6, x, y, {style:this.x-this.power-x});
			}

			for(x=this.x-1;x>this.x-this.power;x--){
					if(!Game.stage.map.action(x,y,'die'))
						break;
					Game.stage.map.create(6, x, y, {style:this.x-this.power-x});
			}
		}else if(this.action == 'default'){
			//当前帧
			this.frame = this.frames[this.action][this.frameCount%this.frames[this.action].length];

			Game.draw(
				this.img, 
				this.frame.x, this.frame.y, 
				this.frame.w, this.frame.h, 
				this.x*Config.gridW + this.frame.cx, this.y*Config.gridH + this.frame.cy, 
				this.frame.w, this.frame.h
			);

			this.frameCount++;
		}
	},

	return Bullet;
});

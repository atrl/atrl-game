﻿/**
*	炸弹类
*
*
*/

Game.module('Bullet', function(Game){

	var 
	// 炸弹缓存
	bulletCache = {},

	//炸弹爆炸帧数
	dieFrame = 48,

	Bullet = function(x, y, id, config){
		Game.pool['Sprite'].call(this, x, y, id, config);
		bulletCache[id] = config.player;
		this.power = config.power;
		
		this.img = 'keeper';
		this.frames = Config.bullet.frames;

		this.actions = {'die':1};
	}

	Bullet.prototype = new Game.pool['Sprite']();
	Bullet.prototype.constructor = Bullet;
	
	Bullet.prototype.step = function(){
		if(this.action == 'die'){
			if(bulletCache[this.id])delete bulletCache[this.id];
			var x,y,power = --this.power;
			
			//左
			x= this.x-1;
			if(!Game.stage.map.cross(this.x-1, this.y)){
				Game.stage.map.doAction(x, this.y,'die');
			}else{
				Game.stage.map.create(6, x, this.y,{toward:0,power:power});
			}

			//上
			y=this.y-1;
			if(!Game.stage.map.cross(this.x,y)){
				Game.stage.map.doAction(this.x, y,'die');
			}else{
				Game.stage.map.create(6, this.x, y,{toward:1,power:power});
			}

			//右
			x=this.x+1;
			if(!Game.stage.map.cross(x, this.y)){
				Game.stage.map.doAction(x, this.y,'die');
			}else{
				Game.stage.map.create(6, x, this.y,{toward:2,power:power});
			}

			//下
			y=this.y+1;
			if(!Game.stage.map.cross(this.x,y)){
				Game.stage.map.doAction(this.x, y,'die');
			}else{
				Game.stage.map.create(6, this.x, y,{toward:3,power:power});
			}

			//中
			Game.stage.map.create(6, this.x, this.y);

			this.life = 0;
		}else if(this.action == 'default'){
			//当前帧
			this.frame = this.frames[this.action][this.frameCount%this.frames[this.action].length];

			this.draw();
			this.frameCount++;
			if(this.frameCount >= dieFrame){
				this.action = 'die';
			}
		}
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

	return Bullet;
});

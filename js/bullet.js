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
	dieFrame = 72,

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
			var x,y;
			

			//左
			for(x=this.x-1;x>=this.x-this.power;x--){
				if(!Game.stage.map.cross(x, this.y)){
					Game.stage.map.doAction(x, this.y,'die');
					break;
				}else{
					Game.stage.map.create(6, x, this.y);
				}
			}
			//上
			for(y=this.y-1;y>=this.y-this.power;y--){
				if(!Game.stage.map.cross(this.x,y)){
					Game.stage.map.doAction(this.x, y,'die');
					break;
				}else{
					Game.stage.map.create(6, this.x, y);
				}
			}
			//右
			for(x=this.x+1;x<=this.x+this.power;x++){
				if(!Game.stage.map.cross(x, this.y)){
					Game.stage.map.doAction(x, this.y,'die');
					break;
				}else{
					Game.stage.map.create(6, x, this.y);
				}
			}
			//下
			for(y=this.y+1;y<=this.y+this.power;y++){
				if(!Game.stage.map.cross(this.x,y)){
					Game.stage.map.doAction(this.x, y,'die');
					break;
				}else{
					Game.stage.map.create(6, this.x, y);
				}
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
				delete bulletCache[this.id];
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

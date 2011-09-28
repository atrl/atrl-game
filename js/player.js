﻿/**
*	玩家类
*/
Game.module('Player',function(Game){


	var Player = function(x,y){
		//预设
		this.img = Config.player.img;
		this.frames = Config.player.frames;
		this.keycode = Config.player.keycode.slice();
		this.power = Config.player.power;
		this.speed = Config.player.speed;
		this.bullets = Config.player.bullets;

		this.keyState = Command.state;
		this.toward = 3; // 0:左 1:上 2:右 3:下
		this.action = 'default';
		this.frameCount = 0;
		this.x = x;
		this.y = y;
	}
	
	Player.prototype = new Sprite();
	Player.prototype.constructor = Player;

	Player.prototype.step = function(){

		//精灵方向
		this.getToward();

		//精灵是否运动
		if(Command.state[this.keycode[this.toward]] && !Command.state[this.keycode[(this.toward+2)%4]]){
			this.action = this.toward;
			this.doRun();
		}else{
			this.action = 'default';
		}

		//创建炸弹
		this.doBullet();

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
		this.frame = this.action == 'default' ? this.frames[this.action][this.toward] : this.frames[this.action][this.frameCount];
		
		Game.draw(
			Game.imgCache[this.img], 
			this.frame.x, this.frame.y, 
			this.frame.w, this.frame.h, 
			this.x*Config.gridW + this.frame.cx, this.y*Config.gridH + this.frame.cy, 
			this.frame.w, this.frame.h
		);

		this.frameCount++;
	}
	Player.prototype.getToward = function(){
		//最后次按键事件时间
		var state = 0;
		for(var i=0,len=this.keycode.length;i<len;i++){
			if(Command.state[this.keycode[i]] > state){
				state = Command.state[this.keycode[i]];
				this.toward = i;
			}
		}
	}

	Player.prototype.doRun = function(){
		var xy = this.toward%2? 'y' : 'x',
			speed = (this.toward>2?1:-1)*Config.speed+Config.speed*Config.speed*this.speed;

		//检测可行
		var pos;

		var pos1 = Math.ceil(this[xy]),
			pos2 = Math.floor(this[xy]);
		
		if(xy == 'y'){
			if(Game.stage.map[pos1][this.x].split('_')[0] != 0 && Game.stage.map[pos1][this.x].split('_')[0] != 4){
				this.y = Math.ceil(this.y)>this.y+speed?this.y+speed:Math.ceil(this.y);
				this.x = Math.ceil(this.x)>this.x+speed?this.x+speed:Math.ceil(this.x);
			}else if(Game.stage.map[pos2][this.x].split('_')[0] != 0 && Game.stage.map[pos2][this.x].split('_')[0] != 4){
				this.x = Math.floor(this.x)>this.x+speed?this.x+speed:Math.floor(this.x);
			}
		}else{
			if(Game.stage.map[this.y][pos1].split('_')[0] != 0 && Game.stage.map[this.y][pos1].split('_')[0] != 4){
				this.y = Math.ceil(this.y)>this.y+speed?this.y+speed:Math.ceil(this.y);
				this.x = Math.ceil(this.x)>this.x+speed?this.x+speed:Math.ceil(this.x);
			}else if(Game.stage.map[this.y][pos2].split('_')[0] != 0 && Game.stage.map[this.y][pos2].split('_')[0] != 4){
				this.y = Math.floor(this.y)>this.y+speed?this.y+speed:Math.floor(this.y);
			}
		}
	}

	Player.prototype.doBullet = function(){
		var x = Math.round(this.x),
			y = Math.round(this.y);
		if(Command.state[Config.player.A] && Game.stage.map[y][x] == 0){
			Game.stage.create(5, x, y, {power:this.power});
		}
	}

	return Player;

});

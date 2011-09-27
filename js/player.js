﻿/**
*	玩家类
*/
Game.module('Player',function(Game){


	var Player = function(x,y){
		this.img = Config.player.img;
		this.keyState = Command.state;
		this.toward = 3; // 0:左 1:上 2:右 3:下
		this.action = 'default';
		this.frameCount = 0;
		this.frames = Config.player.frames;
		this.x = x;
		this.y = y;
		this.keycode = Config.player.keycode.slice();
		this.power = Config.player.power;
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
		var xy = this.toward%2? 'y' : 'x';
		this.toward>1? this[xy]+=0.1 : this[xy]-=0.1;
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

﻿﻿/**
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
		var speed = (this.toward>1?1:-1)*(Config.speed+Config.speed*Config.speed*this.speed);

		//检测可行
		var x0 = this.toward%2?this.x:this.x+speed,
			y0 = this.toward%2?this.y+speed:this.y,

			x1 = Math.min(Math.max(0,Math.ceil(x0)),Game.stage.map[0].length-1),
			y1 = Math.min(Math.max(0,Math.ceil(y0)),Game.stage.map[0].length-1),
			x2 = Math.min(Math.max(0,Math.floor(x0)),Game.stage.map[0].length-1),
			y2 = Math.min(Math.max(0,Math.floor(y0)),Game.stage.map[0].length-1);
		

		//太蠢了 暂时先这样
		if(this.toward == 0){
			if(!Game.stage.map[y1][x2]&&!Game.stage.map[y2][x2]){
				this.x = Math.max(x2,this.x+speed);
			}else if(!Game.stage.map[y1][x2]&&Game.stage.map[y2][x2]){
				this.y = Math.min(y1,this.y-speed);
			}else if(Game.stage.map[y1][x2]&&!Game.stage.map[y2][x2]){
				this.y = Math.max(y2,this.y+speed);
			}
		}else if (this.toward == 1){
			if(!Game.stage.map[y2][x1]&&!Game.stage.map[y2][x2]){
				this.y = Math.max(y2,this.y+speed);
			}else if(!Game.stage.map[y2][x1]&&Game.stage.map[y2][x2]){
				this.x = Math.min(x1,this.x-speed);
			}else if(Game.stage.map[y2][x1]&&!Game.stage.map[y2][x2]){
				this.x = Math.max(x2,this.x+speed);
			}
		}else if (this.toward == 2){
			if(!Game.stage.map[y1][x1]&&!Game.stage.map[y2][x1]){
				this.x = Math.min(x1,this.x+speed);
			}else if(!Game.stage.map[y2][x1]&&Game.stage.map[y1][x1]){
				this.y = Math.max(y2,this.y-speed)
			}else if(Game.stage.map[y2][x1]&&!Game.stage.map[y1][x1]){
				this.y = Math.min(y1,this.y+speed);
			}
		}else if (this.toward == 3){
			if(!Game.stage.map[y1][x1]&&!Game.stage.map[y1][x2]){
				this.y = Math.min(y1,this.y+speed);
			}else if(!Game.stage.map[y1][x2]&&Game.stage.map[y1][x1]){
				this.x = Math.max(x2,this.x-speed);
			}else if(Game.stage.map[y1][x2]&&!Game.stage.map[y1][x1]){
				this.x = Math.min(x1,this.x+speed);
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

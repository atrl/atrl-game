﻿/**
*	玩家类
*/
Game.module('Player',function(Game){


	var Player = function(x, y, id, config){
		//预设
		Game.pool['Sprite'].call(this, x, y, id, config);
		this.style = config.style;
		this.img = Config['player'+this.style].img;
		this.frames = Config['player'+this.style].frames;
		this.keycode = Config['player'+this.style].keycode.slice();
		this.power = Config['player'+this.style].power;
		this.speed = Config['player'+this.style].speed;
		this.bullets = Config['player'+this.style].bullets;

		this.keyState = Command.state;
		this.toward = 3; // 0:左 1:上 2:右 3:下

		this.actions = {'die':1};
	}
	
	Player.prototype = new Game.pool['Sprite']();
	Player.prototype.constructor = Player;

	Player.prototype.step = function(){
		if(this.action == 'die'){
			if(this.frameCount >= this.frames[this.action].length){
				this.life = 0;
				Game.over();
				return;
			}
		}else{

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

		}
		
		//当前帧
		this.frame = this.action == 'default' ? this.frames[this.action][this.toward] : this.frames[this.action][this.frameCount%this.frames[this.action].length];
		
		this.draw();
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

			x1 = Math.min(Math.max(0,Math.ceil(x0)),Game.stage.map.x),
			y1 = Math.min(Math.max(0,Math.ceil(y0)),Game.stage.map.y),
			x2 = Math.min(Math.max(0,Math.floor(x0)),Game.stage.map.x),
			y2 = Math.min(Math.max(0,Math.floor(y0)),Game.stage.map.y);
		

		//太蠢了 暂时先这样
		if(this.toward == 0){
			if(Game.stage.map.cross(x2,y1)&&Game.stage.map.cross(x2,y2)){
				this.x = Math.max(x2,this.x+speed);
			}else if(Game.stage.map.cross(x2,y1)&&!Game.stage.map.cross(x2,y2)){
				this.y = Math.min(y1,this.y-speed);
			}else if(!Game.stage.map.cross(x2,y1)&&Game.stage.map.cross(x2,y2)){
				this.y = Math.max(y2,this.y+speed);
			}
		}else if (this.toward == 1){
			if(Game.stage.map.cross(x1,y2)&&Game.stage.map.cross(x2,y2)){
				this.y = Math.max(y2,this.y+speed);
			}else if(Game.stage.map.cross(x1,y2)&&!Game.stage.map.cross(x2,y2)){
				this.x = Math.min(x1,this.x-speed);
			}else if(!Game.stage.map.cross(x1,y2)&&Game.stage.map.cross(x2,y2)){
				this.x = Math.max(x2,this.x+speed);
			}
		}else if (this.toward == 2){
			if(Game.stage.map.cross(x1,y1)&&Game.stage.map.cross(x1,y2)){
				this.x = Math.min(x1,this.x+speed);
			}else if(Game.stage.map.cross(x1,y2)&&!Game.stage.map.cross(x1,y1)){
				this.y = Math.max(y2,this.y-speed)
			}else if(!Game.stage.map.cross(x1,y2)&&Game.stage.map.cross(x1,y1)){
				this.y = Math.min(y1,this.y+speed);
			}
		}else if (this.toward == 3){
			if(Game.stage.map.cross(x1,y1)&&Game.stage.map.cross(x2,y1)){
				this.y = Math.min(y1,this.y+speed);
			}else if(Game.stage.map.cross(x2,y1)&&!Game.stage.map.cross(x1,y1)){
				this.x = Math.max(x2,this.x-speed);
			}else if(!Game.stage.map.cross(x2,y1)&&Game.stage.map.cross(x1,y1)){
				this.x = Math.min(x1,this.x+speed);
			}
		}
		var style = Game.stage.map.collision(this.x,this.y);
		if(style)this[style]++;
	}

	Player.prototype.doBullet = function(){
		var x = Math.round(this.x),
			y = Math.round(this.y);

		if(this.keyState[Config['player'+this.style].A] && Game.stage.map.cross(x,y) && Game.pool['Bullet'].count(this.id)<this.bullets){
			//释放动作
			this.keyState[Config['player'+this.style].A] = 0;
			//创建炸弹
			Game.stage.map.create(5, x, y, {power:this.power,player:this.id});
		}
	}

	return Player;

});

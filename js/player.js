﻿/**
*	玩家类
*/
Game.module('Player',function(Game){


	var Player = function(x,y){
		this.keyState = Command.state;
		this.toward = 2; // 0:上 1:右 2:下 3:左
		this.action = 'default';
		this.frameCount = 0;
		this.frames = Config.player.frames;
		this.x = x*Config.GridX;
		this.y = y*Config.GridY;
		this.keycode = Config.player.keycode.slice();
	}
	
	Player.prototype = new Sprite();
	Player.prototype.constructor = Player;

	Player.prototype.step = function(){
		this.getToward();
		
		if(this.frameCount < this.frames[this.action].length-1){
			this.frameCount++;
		}else if(this.frameCount = this.frames[this.action].length-1){
			this.action == 'die' ? this.life = 0 : this.frameCount = 0;
		}

		this.frame = this.frames[this.action][this.frameCount];
		Game.draw(Game.imgCache[this.img], this.frame.x, this.frame.y, this.frame.w, this.frame.h,(this.x+1)*Config.gridW+Config.paddingX-this.frame.w,(this.y+1)*Config.gridH+Config.paddingY-this.frame.h,this.frame.w, this.frame.h);
	}
	Player.prototype.getToward = function(){
		var state = 0;
		for(var i=0,len=this.keycode.length;i<len;i++){
			state = Command.state[this.keycode] > state ? this.keycode : state;
		}
		this.toward = state ? state : this.toward;
	}

	return Player;

});

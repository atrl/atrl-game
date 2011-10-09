/**
*	障碍类
*/
Game.module('Keeper',function(Game){


	var Keeper = function(x, y, id, config){
		Sprite.call(this, x, y, id, config);

		this.img = Config.keeper.img;
		this.frames = Config.keeper.frames;
		this.action = 'default';
		this.frameCount = 0;
	}
		
	Keeper.prototype = new Sprite();
	Keeper.prototype.constructor = Keeper;

	Keeper.prototype.step = function(){

		if(this.action == 'die' && this.frameCount >= this.frames[this.action].length){
				this.life = 0;
				//产生奖励
				this.checkBonus();
				return;
		}else{
			this.frameCount = 0;
		}

		this.frame = this.frames[this.action][this.frameCount];

		Game.draw(
			this.img, 
			this.frame.x, this.frame.y, 
			this.frame.w, this.frame.h, 
			this.x*Config.gridW + this.frame.cx, this.y*Config.gridH + this.frame.cy, 
			this.frame.w, this.frame.h
		);

		this.frameCount++;
	}
	
	Keeper.prototype.checkBonus = function(){
		if(Math.random()<0.3){
			Game.stage.map.create(4, this.x, this.y);
		}
	}

	return Keeper;

});